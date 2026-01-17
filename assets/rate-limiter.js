// ============================================================
// RATE LIMITER - İLHANART DIGITAL NOTARY
// ============================================================
// Amaç: Bot saldırılarını önlemek için IP bazlı rate limiting
// Kullanım: Her dosya yüklemeden önce checkRateLimit() çağrılır
// ============================================================

/**
 * Kullanıcı IP adresini al
 * @returns {Promise<string>} Kullanıcının IP adresi
 */
async function getUserIp() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    console.log('👤 Kullanıcı IP:', data.ip);
    return data.ip;
  } catch (err) {
    console.warn('⚠️ IP alınamadı, fallback kullanılıyor:', err);
    return 'unknown';
  }
}

/**
 * Rate limit kontrolü yap
 * @param {string} userIp - Kullanıcının IP adresi
 * @returns {Promise<boolean>} true = İzin ver, false = Engelle
 */
async function checkRateLimit(userIp) {
  try {
    // Supabase client'ın tanımlı olduğunu kontrol et
    if (typeof sb === 'undefined') {
      console.error('❌ Supabase client (sb) tanımlı değil!');
      return true; // Güvenlik nedeniyle izin ver
    }

    // Rate limit fonksiyonunu çağır
    const { data, error } = await sb.rpc('check_rate_limit', {
      p_ip: userIp,
      p_action: 'file_upload',
      p_max_attempts: 20,        // Saatte 20 yükleme
      p_time_window: '1 hour'    // 1 saatlik zaman penceresi
    });

    if (error) {
      console.error('⚠️ Rate limit kontrolü hatası:', error);
      return true; // Hata durumunda izin ver (fail-open)
    }

    if (!data) {
      console.warn('🚫 Rate limit aşıldı!');
      return false;
    }

    console.log('✅ Rate limit kontrolü geçti');
    return true;

  } catch (err) {
    console.error('❌ Rate limit hatası:', err);
    return true; // Hata durumunda izin ver
  }
}

/**
 * Alert mesajlarını dile göre göster
 */
function showRateLimitAlert() {
  const lang = document.documentElement.lang || 'tr';
  
  const messages = {
    tr: '⚠️ Çok fazla yükleme yaptınız!\n\nGüvenlik nedeniyle 24 saat sonra tekrar deneyebilirsiniz.',
    en: '⚠️ Too many uploads!\n\nFor security reasons, please try again in 24 hours.',
    zh: '⚠️ 上传次数过多！\n\n出于安全原因，请在24小时后重试。',
    es: '⚠️ ¡Demasiadas subidas!\n\nPor razones de seguridad, intente nuevamente en 24 horas.'
  };
  
  const message = messages[lang] || messages.tr;
  alert(message);
}

console.log('✅ Rate Limiter module loaded');
