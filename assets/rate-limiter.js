// ============================================================
// RATE LIMITER - İLHANART DIGITAL NOTARY v2.0
// ============================================================
// Amaç: Bot saldırılarını önlemek için IP bazlı rate limiting
// Kullanım: Her dosya yüklemeden önce checkRateLimit() çağrılır
// Güncelleme: 2026-01-18 - Supabase entegrasyonu ve çoklu dil desteği
// ============================================================

/**
 * Kullanıcı IP adresini al (ipify.org API'si ile)
 * @returns {Promise<string>} Kullanıcının IP adresi
 */
async function getUserIp() {
  try {
    const response = await fetch('https://api.ipify.org?format=json', {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.ip) {
      throw new Error('IP adresi alınamadı');
    }
    
    console.log('👤 Kullanıcı IP:', data.ip);
    return data.ip;
    
  } catch (err) {
    console.warn('⚠️ IP alınamadı, fallback kullanılıyor:', err.message);
    // Fallback: Tarayıcı parmak izi oluştur
    const fallbackId = `browser_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    console.log('🆔 Fallback ID:', fallbackId);
    return fallbackId;
  }
}

/**
 * Rate limit kontrolü yap (Supabase RPC)
 * @param {string} userIp - Kullanıcının IP adresi veya fallback ID
 * @returns {Promise<boolean>} true = İzin ver, false = Engelle
 */
async function checkRateLimit(userIp) {
  try {
    // 1. Supabase client kontrolü
    if (typeof sb === 'undefined') {
      console.error('❌ Supabase client (sb) tanımlı değil!');
      console.warn('⚠️ Rate limiting devre dışı - güvenlik riski!');
      return true; // Fail-open: Sistem hatası durumunda izin ver
    }

    console.log('🔍 Rate limit kontrolü başlatılıyor...');
    console.log('📊 IP:', userIp, '| Action: file_upload | Max: 20/hour');

    // 2. Supabase RPC çağrısı
    const { data, error } = await sb.rpc('check_rate_limit', {
      p_ip: userIp,
      p_action: 'file_upload',
      p_max_attempts: 20,        // Saatte maksimum 20 yükleme
      p_time_window: '1 hour'    // 1 saatlik zaman penceresi
    });

    // 3. Hata kontrolü
    if (error) {
      console.error('⚠️ Rate limit RPC hatası:', error);
      console.error('📄 Hata detayları:', {
        message: error.message,
        code: error.code,
        details: error.details
      });
      return true; // Fail-open: RPC hatası durumunda izin ver
    }

    // 4. Sonuç değerlendirmesi
    if (data === false || data === null) {
      console.warn('🚫 Rate limit AŞILDI!');
      console.warn('⏱️ Kullanıcı 24 saat engellenmiştir');
      return false; // Engelle
    }

    console.log('✅ Rate limit kontrolü GEÇTI');
    return true; // İzin ver

  } catch (err) {
    console.error('❌ Rate limit beklenmeyen hata:', err);
    console.error('📄 Stack trace:', err.stack);
    return true; // Fail-open: Beklenmeyen hata durumunda izin ver
  }
}

/**
 * Rate limit alert mesajını göster (çoklu dil desteği)
 * @param {string} [customLang] - Opsiyonel: Dil kodu (tr, en, zh, es)
 */
function showRateLimitAlert(customLang) {
  // Dil tespiti
  const lang = customLang || document.documentElement.lang || 'tr';
  const langCode = lang.substring(0, 2).toLowerCase();
  
  // Çoklu dil mesajları
  const messages = {
    tr: '⚠️ Çok fazla yükleme yaptınız!\n\n' +
        'Güvenlik nedeniyle şu anda engellendi.\n' +
        '24 saat sonra tekrar deneyebilirsiniz.\n\n' +
        'Sorularınız için: support@ilhanart.org',
        
    en: '⚠️ Too many uploads!\n\n' +
        'You have been temporarily blocked for security reasons.\n' +
        'Please try again in 24 hours.\n\n' +
        'Questions? Contact: support@ilhanart.org',
        
    zh: '⚠️ 上传次数过多！\n\n' +
        '出于安全原因，您已被暂时封锁。\n' +
        '请在24小时后重试。\n\n' +
        '有问题？联系：support@ilhanart.org',
        
    es: '⚠️ ¡Demasiadas subidas!\n\n' +
        'Ha sido bloqueado temporalmente por razones de seguridad.\n' +
        'Por favor, intente nuevamente en 24 horas.\n\n' +
        '¿Preguntas? Contacto: support@ilhanart.org'
  };
  
  // Mesajı göster
  const message = messages[langCode] || messages.tr;
  alert(message);
  
  // Console'a da yaz
  console.warn('🚫 Rate limit alert gösterildi:', langCode);
}

/**
 * Rate limit durumunu kontrol et (debugging için)
 * @param {string} userIp - Kontrol edilecek IP
 * @returns {Promise<Object>} Rate limit durumu
 */
async function getRateLimitStatus(userIp) {
  try {
    if (typeof sb === 'undefined') {
      return { error: 'Supabase client tanımlı değil' };
    }

    const { data, error } = await sb
      .from('rate_limits')
      .select('*')
      .eq('ip_address', userIp)
      .eq('action', 'file_upload')
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = kayıt bulunamadı
      console.error('Rate limit durumu alınamadı:', error);
      return { error: error.message };
    }

    if (!data) {
      return { 
        status: 'new_user',
        message: 'Henüz yükleme yapılmamış'
      };
    }

    return {
      status: data.blocked_until && new Date(data.blocked_until) > new Date() ? 'blocked' : 'active',
      attempt_count: data.attempt_count,
      first_attempt: data.first_attempt,
      last_attempt: data.last_attempt,
      blocked_until: data.blocked_until
    };

  } catch (err) {
    console.error('Rate limit status hatası:', err);
    return { error: err.message };
  }
}

// ============================================================
// MODULE EXPORT (ES6 modül desteği varsa)
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getUserIp,
    checkRateLimit,
    showRateLimitAlert,
    getRateLimitStatus
  };
}

// ============================================================
// INITIALIZATION LOG
// ============================================================
console.log('✅ Rate Limiter v2.0 loaded');
console.log('📊 Config: 20 uploads/hour, 24h block on violation');
console.log('🌍 Languages: TR, EN, ZH, ES');
