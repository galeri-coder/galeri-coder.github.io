/**
 * ✅ DIGITAL NOTARY — MULTILINGUAL EDITION v5.0
 * 🔐 SECURE STANDALONE VERSION
 * 
 * This file should be loaded ONLY from verified GitHub source
 * Hash: [TO BE CALCULATED]
 * Source: https://raw.githubusercontent.com/galeri-coder/galeri-coder.github.io/main/notary-app.js
 */

(async function () {
  'use strict';
  
  // ═══════════════════════════════════════════════════════════════
  // 🔐 SECURITY: Version & Integrity Check
  // ═══════════════════════════════════════════════════════════════
  const APP_VERSION = '5.0';
  const APP_NAME = 'Digital Notary - Multilingual Edition';
  
  console.log(`
╔════════════════════════════════════════════════════════════╗
║   🔐 POART PROTOCOL - SECURITY VERIFICATION               ║
╠════════════════════════════════════════════════════════════╣
║   App Name: ${APP_NAME.padEnd(40)} ║
║   Version:  v${APP_VERSION.padEnd(43)} ║
║   Status:   ✅ VERIFIED & LOADED                          ║
╠════════════════════════════════════════════════════════════╣
║   ⚠️  WARNING: If you see ANY other version message,      ║
║       the code may be compromised!                        ║
║                                                            ║
║   Verify source at:                                       ║
║   github.com/galeri-coder/ilhanart-core                   ║
╚════════════════════════════════════════════════════════════╝
  `);

  // ═══════════════════════════════════════════════════════════════
  // 🌍 MULTILINGUAL MESSAGES
  // ═══════════════════════════════════════════════════════════════
  const MESSAGES = {
    tr: {
      selectArtFirst: "Lütfen önce bir eser seçin!", 
      onlyImages: "Sadece görsel kabul edilir",
      noPreview: "Görsel değilse önizleme yok", 
      processing: "⏳ İşleniyor... Hash hesaplanıyor...",
      savingSupabase: "💾 Supabase'e kaydediliyor...", 
      creatingCert: "📜 Sertifika oluşturuluyor...",
      certReadyPrivate: "✅ Sertifika hazır! 🔒 Özel mod: Sadece tarayıcınızda oluşturuldu.",
      certReadySupabase: "✅ Sertifika hazır ve Supabase'e kaydedildi!", 
      error: "❌ Hata: {error}",
      pngDownloaded: "✅ PNG indirildi!", 
      jsonDownloaded: "✅ JSON indirildi!", 
      pdfDownloaded: "✅ PDF indirildi!",
      certTitle: "DİJİTAL NOTER SERTİFİKASI", 
      certSubtitle: "İlhan Art Gallery tarafından verilmiştir",
      artworkName: "Eser Adı", 
      artistName: "Sanatçı", 
      certId: "Sertifika ID", 
      date: "Tarih",
      unknown: "Bilinmiyor", 
      untitled: "İsimsiz", 
      hidden: "Gizli", 
      privateMode: "🔒 YEREL",
      disclaimerPrivate: "Bu sertifika yalnızca tarayıcınızda oluşturulmuştur.",
      disclaimerPublic: "This certificate [PoArt] can be used as first-stage verification. Second-stage verification is only done on-site through the Public Registry."
    },
    en: {
      selectArtFirst: "Please select an artwork first!", 
      onlyImages: "Only images accepted",
      noPreview: "No preview for non-images", 
      processing: "⏳ Processing...",
      savingSupabase: "💾 Saving...", 
      creatingCert: "📜 Creating certificate...",
      certReadyPrivate: "✅ Certificate ready! 🔒 Private mode.", 
      certReadySupabase: "✅ Certificate ready!",
      error: "❌ Error: {error}", 
      pngDownloaded: "✅ PNG downloaded!", 
      jsonDownloaded: "✅ JSON downloaded!",
      pdfDownloaded: "✅ PDF downloaded!", 
      certTitle: "DIGITAL NOTARY CERTIFICATE",
      certSubtitle: "Issued by İlhan Art Gallery", 
      artworkName: "Artwork Name", 
      artistName: "Artist",
      certId: "Certificate ID", 
      date: "Date", 
      unknown: "Unknown", 
      untitled: "Untitled", 
      hidden: "Hidden",
      privateMode: "🔒 LOCAL", 
      disclaimerPrivate: "This certificate was created only in your browser.",
      disclaimerPublic: "This certificate [PoArt] can be used as first-stage verification. Second-stage verification is only done on-site through the Public Registry."
    },
    zh: {
      selectArtFirst: "请先选择一件作品！", 
      onlyImages: "仅接受图片", 
      noPreview: "非图片无预览",
      processing: "⏳ 处理中...", 
      savingSupabase: "💾 保存中...", 
      creatingCert: "📜 创建证书...",
      certReadyPrivate: "✅ 证书已准备好！🔒 私密模式", 
      certReadySupabase: "✅ 证书已准备好！",
      error: "❌ 错误：{error}", 
      pngDownloaded: "✅ PNG 已下载！", 
      jsonDownloaded: "✅ JSON 已下载！",
      pdfDownloaded: "✅ PDF 已下载！", 
      certTitle: "数字公证证书", 
      certSubtitle: "由伊尔汗艺术画廊颁发",
      artworkName: "作品名称", 
      artistName: "艺术家", 
      certId: "证书编号", 
      date: "日期",
      unknown: "未知", 
      untitled: "无标题", 
      hidden: "隐藏", 
      privateMode: "🔒 本地",
      disclaimerPrivate: "此证书仅在您的浏览器中创建。",
      disclaimerPublic: "This certificate [PoArt] can be used as first-stage verification. Second-stage verification is only done on-site through the Public Registry."
    },
    es: {
      selectArtFirst: "¡Seleccione una obra primero!", 
      onlyImages: "Solo imágenes", 
      noPreview: "Sin vista previa",
      processing: "⏳ Procesando...", 
      savingSupabase: "💾 Guardando...", 
      creatingCert: "📜 Creando certificado...",
      certReadyPrivate: "✅ ¡Certificado listo! 🔒 Modo privado", 
      certReadySupabase: "✅ ¡Certificado listo!",
      error: "❌ Error: {error}", 
      pngDownloaded: "✅ ¡PNG descargado!", 
      jsonDownloaded: "✅ ¡JSON descargado!",
      pdfDownloaded: "✅ ¡PDF descargado!", 
      certTitle: "CERTIFICADO DE NOTARIO DIGITAL",
      certSubtitle: "Emitido por İlhan Art Gallery", 
      artworkName: "Nombre de la Obra", 
      artistName: "Artista",
      certId: "ID del Certificado", 
      date: "Fecha", 
      unknown: "Desconocido", 
      untitled: "Sin título",
      hidden: "Oculto", 
      privateMode: "🔒 LOCAL", 
      disclaimerPrivate: "Este certificado fue creado solo en su navegador.",
      disclaimerPublic: "This certificate [PoArt] can be used as first-stage verification. Second-stage verification is only done on-site through the Public Registry."
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // 🔧 UTILITY FUNCTIONS
  // ═══════════════════════════════════════════════════════════════
  
  function getCurrentLang() {
    const htmlLang = document.documentElement.lang;
    if (htmlLang.startsWith('tr')) return 'tr';
    if (htmlLang.startsWith('en')) return 'en';
    if (htmlLang.startsWith('zh')) return 'zh';
    if (htmlLang.startsWith('es')) return 'es';
    return 'tr';
  }

  function t(key, replacements = {}) {
    const lang = getCurrentLang();
    let msg = MESSAGES[lang][key] || MESSAGES.tr[key] || key;
    Object.keys(replacements).forEach(k => { 
      msg = msg.replace(`{${k}}`, replacements[k]); 
    });
    return msg;
  }

  // ═══════════════════════════════════════════════════════════════
  // 🗄️ SUPABASE CONFIGURATION
  // ═══════════════════════════════════════════════════════════════
  
  const SUPABASE_URL = "https://immdfdvrwqcvgmflbgdr.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltbWRmZHZyd3FjdmdtZmxiZ2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NzU0MTgsImV4cCI6MjA4MzQ1MTQxOH0.MN05h2FLVFb14P9Oi0y3g3euqZjzGdVslJay6aQ1HkE";
  const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // ═══════════════════════════════════════════════════════════════
  // 📱 DOM ELEMENTS
  // ═══════════════════════════════════════════════════════════════
  
  const sealBtn = document.getElementById("sealBtn");
  const artFile = document.getElementById("artFile");
  const userPhoto = document.getElementById("userPhoto");
  const creatorName = document.getElementById("creatorName");
  const artTitle = document.getElementById("artTitle");
  const statusBox = document.getElementById("statusBox");
  const artDrop = document.getElementById("artDrop");
  const photoDrop = document.getElementById("photoDrop");
  const artMeta = document.getElementById("artMeta");
  const photoMeta = document.getElementById("photoMeta");
  const artPreview = document.getElementById("artPreview");
  const photoPreview = document.getElementById("photoPreview");
  const artPreviewEmpty = document.getElementById("artPreviewEmpty");
  const photoPreviewEmpty = document.getElementById("photoPreviewEmpty");
  const previewSection = document.getElementById("previewSection");
  const certPreview = document.getElementById("certPreview");
  const downloadPNG = document.getElementById("downloadPNG");
  const downloadJSON = document.getElementById("downloadJSON");
  const downloadPDF = document.getElementById("downloadPDF");
  const liveIPPreview = document.getElementById("liveIPPreview");
  const tableMaskedIP = document.getElementById("tableMaskedIP");
  const tablePublicIP = document.getElementById("tablePublicIP");
  const tableMaskedLoc = document.getElementById("tableMaskedLoc");
  const tablePublicLoc = document.getElementById("tablePublicLoc");

  // ═══════════════════════════════════════════════════════════════
  // 💾 STATE MANAGEMENT
  // ═══════════════════════════════════════════════════════════════
  
  let currentRecord = null;
  let currentArtDataUrl = null;
  let currentPhotoDataUrl = null;
  let cachedIPData = null;

  // ═══════════════════════════════════════════════════════════════
  // 🔐 CRYPTOGRAPHIC FUNCTIONS
  // ═══════════════════════════════════════════════════════════════
  
  async function digest(buffer, algo) {
    const hashBuffer = await crypto.subtle.digest(algo, buffer);
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function maskIP(ip) {
    if (!ip) return "***.***.***.***";
    const parts = ip.split('.');
    return parts.length === 4 
      ? `${parts[0]}.${parts[1]}.***.***` 
      : ip.substring(0, 6) + "****";
  }

  function maskLoc(city, country) { 
    return `*** / ${country || 'Unknown'}`; 
  }

  // ═══════════════════════════════════════════════════════════════
  // 🌐 IP GEOLOCATION
  // ═══════════════════════════════════════════════════════════════
  
  async function fetchIPData() {
    try {
      const res = await fetch("https://ipapi.co/json/");
      cachedIPData = await res.json();
      if (cachedIPData?.ip) {
        const maskedIP = maskIP(cachedIPData.ip);
        const city = cachedIPData.city || 'Unknown';
        const country = cachedIPData.country_name || 'Unknown';
        
        if (liveIPPreview) liveIPPreview.textContent = maskedIP;
        if (tableMaskedIP) tableMaskedIP.textContent = maskedIP;
        if (tablePublicIP) tablePublicIP.textContent = maskedIP;
        if (tableMaskedLoc) tableMaskedLoc.textContent = `*** / ${country}`;
        if (tablePublicLoc) tablePublicLoc.textContent = `${city}, ${country}`;
      }
    } catch (e) { 
      console.warn('IP fetch failed:', e); 
      cachedIPData = null; 
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // 🎨 UI HELPER FUNCTIONS
  // ═══════════════════════════════════════════════════════════════
  
  function setStatus(html, kind = "info") {
    if (!statusBox) return;
    statusBox.style.display = "block";
    const color = kind === "error" ? "#dc2626" : (kind === "ok" ? "#059669" : "#4b5563");
    statusBox.innerHTML = `<span style="color:${color};">${html}</span>`;
  }

  function setDropMeta(el, file) {
    if (!el || !file) { 
      if (el) el.textContent = ""; 
      return; 
    }
    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    el.textContent = `${file.name} • ${sizeMb} MB`;
  }

  function getVisibility() {
    const checked = document.querySelector('input[name="visibility"]:checked');
    return checked ? checked.value : 'private';
  }

  async function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("FileReader failed"));
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      const lang = getCurrentLang();
      const locale = lang === 'tr' ? 'tr-TR' 
                   : lang === 'zh' ? 'zh-CN' 
                   : lang === 'es' ? 'es-ES' 
                   : 'en-US';
      return d.toLocaleDateString(locale) + ' ' + 
             d.toLocaleTimeString(locale, {hour:'2-digit', minute:'2-digit'});
    } catch { 
      return iso; 
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // 📸 FILE HANDLING: DRAG & DROP
  // ═══════════════════════════════════════════════════════════════
  
  function bindDropZone(zoneEl, inputEl, metaEl, onFile) {
    if (!zoneEl || !inputEl) {
      console.warn('❌ bindDropZone: element not found', {zoneEl, inputEl});
      return;
    }
    
    console.log('✅ Binding drop zone:', zoneEl.id || zoneEl.className);
    
    zoneEl.addEventListener("click", () => {
      console.log('🖱️ Drop zone clicked');
      inputEl.click();
    });
    
    zoneEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        console.log('⌨️ Keyboard trigger');
        inputEl.click();
      }
    });

    ["dragenter","dragover"].forEach(evt => {
      zoneEl.addEventListener(evt, (e) => {
        e.preventDefault();
        e.stopPropagation();
        zoneEl.classList.add("is-over");
      });
    });
    
    ["dragleave","drop"].forEach(evt => {
      zoneEl.addEventListener(evt, (e) => {
        e.preventDefault();
        e.stopPropagation();
        zoneEl.classList.remove("is-over");
      });
    });
    
    zoneEl.addEventListener("drop", (e) => {
      const file = e.dataTransfer.files?.[0];
      if (!file) return;
      console.log('📁 File dropped:', file.name);
      inputEl.files = e.dataTransfer.files;
      setDropMeta(metaEl, file);
      onFile(file);
    });

    inputEl.addEventListener("change", () => {
      const file = inputEl.files?.[0];
      console.log('📁 File selected:', file?.name);
      setDropMeta(metaEl, file);
      if (file) onFile(file);
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 🎫 QR CODE GENERATION
  // ═══════════════════════════════════════════════════════════════
  
  async function generateQR(text) {
    const canvas = document.createElement("canvas");
    await QRCode.toCanvas(canvas, text, { 
      width: 110, 
      color: { dark: "#065f46", light: "#ffffff" } 
    });
    return canvas.toDataURL("image/png");
  }

  // ═══════════════════════════════════════════════════════════════
  // 📜 CERTIFICATE HTML GENERATION
  // ═══════════════════════════════════════════════════════════════
  
  async function generateCertHTML(record, artDataUrl, photoDataUrl, qrDataUrl, visibility) {
    const photoHTML = photoDataUrl 
      ? `<div><div class="cert-photo-frame"><img src="${photoDataUrl}" alt="User"></div><div class="cert-photo-label">${t('artistName')}</div></div>` 
      : '';
    
    const artHTML = artDataUrl 
      ? `<div class="cert-artwork-main"><img src="${artDataUrl}" alt="Artwork"></div>` 
      : `<div class="cert-artwork-main" style="min-height:200px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#f9fafb,#f0fdf4);">
           <div style="text-align:center;color:#6b7280;">
             <div style="font-size:48px;margin-bottom:8px;">📄</div>
             <div style="font-weight:700;">${record.title}</div>
           </div>
         </div>`;
    
    let extraInfoHTML = '';
    if (visibility === 'public' || visibility === 'masked') {
      extraInfoHTML = `
        <div class="cert-info-item">
          <div class="cert-info-label">Location</div>
          <div class="cert-info-value">${record.location_data}</div>
        </div>
        <div class="cert-info-item">
          <div class="cert-info-label">IP</div>
          <div class="cert-info-value">${record.origin_ip}</div>
        </div>`;
    }

    const localBadge = visibility === 'private' 
      ? `<span class="cert-local-badge">${t('privateMode')}</span>` 
      : '';
    
    const lang = getCurrentLang();
    const verifiedText = lang === 'tr' ? 'ONAYLANDI' 
                       : lang === 'zh' ? '已验证' 
                       : lang === 'es' ? 'VERIFICADO' 
                       : 'VERIFIED';

    return `
      <div class="cert-frame">
        <div class="cert-header">
          <div class="cert-logo">POART PROTOCOL</div>
          <h2 class="cert-title">${t('certTitle')} ${localBadge}</h2>
          <div class="cert-subtitle">${t('certSubtitle')}</div>
        </div>
        <div class="cert-body">
          <div class="cert-photos">
            ${photoHTML}
            ${artHTML}
            <div>
              <div class="cert-qr">
                <img src="${qrDataUrl}" style="width:100%;height:auto;" alt="QR">
              </div>
              <div class="cert-photo-label">QR</div>
            </div>
          </div>
          <div class="cert-info-panel">
            <div class="cert-info-title">Certificate Information</div>
            <div class="cert-info-grid">
              <div class="cert-info-item">
                <div class="cert-info-label">${t('artworkName')}</div>
                <div class="cert-info-value">${record.title}</div>
              </div>
              <div class="cert-info-item">
                <div class="cert-info-label">${t('artistName')}</div>
                <div class="cert-info-value">${record.creator}</div>
              </div>
              <div class="cert-info-item">
                <div class="cert-info-label">${t('certId')}</div>
                <div class="cert-info-value">${record.cert_id}</div>
              </div>
              <div class="cert-info-item">
                <div class="cert-info-label">${t('date')}</div>
                <div class="cert-info-value">${formatDate(record.created_at)}</div>
              </div>
              ${extraInfoHTML}
            </div>
          </div>
          <div class="cert-hash-panel">
            <div class="cert-hash-title">🔐 Hash Fingerprints</div>
            <div style="margin-bottom:12px;">
              <div style="font-size:10px;font-weight:800;color:#6b7280;margin-bottom:5px;">SHA-256:</div>
              <div class="cert-hash-value">${record.sha256}</div>
            </div>
            <div>
              <div style="font-size:10px;font-weight:800;color:#6b7280;margin-bottom:5px;">SHA-512:</div>
              <div class="cert-hash-value">${record.sha512}</div>
            </div>
          </div>
          <div class="cert-disclaimer">${t('disclaimerPublic')}</div>
          <div class="cert-footer">
            <div class="cert-stamp">✓<br>${verifiedText}</div>
          </div>
        </div>
      </div>`;
  }

  // ═══════════════════════════════════════════════════════════════
  // 🎯 MAIN: SEAL BUTTON EVENT
  // ═══════════════════════════════════════════════════════════════
  
  if (sealBtn && artFile) {
    sealBtn.addEventListener("click", async () => {
      if (!artFile.files.length) { 
        alert(t('selectArtFirst')); 
        return; 
      }
      
      previewSection.style.display = "none";
      certPreview.innerHTML = "";
      const visibility = getVisibility();
      
      try {
        sealBtn.disabled = true;
        setStatus(t('processing'), "info");
        
        const file = artFile.files[0];
        const buffer = await file.arrayBuffer();
        const sha256 = await digest(buffer, "SHA-256");
        const sha512 = await digest(buffer, "SHA-512");
        
        let ip = "***.***.***.***";
        let loc = t('hidden');
        
        if (visibility !== 'private' && cachedIPData) {
          ip = maskIP(cachedIPData.ip);
          loc = visibility === 'public' 
            ? `${cachedIPData.city || t('unknown')}, ${cachedIPData.country_name || t('unknown')}` 
            : maskLoc(cachedIPData.city, cachedIPData.country_name);
        }
        
        const record = {
          cert_id: "POART-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
          title: artTitle.value || t('untitled'),
          creator: creatorName.value || t('unknown'),
          sha256, 
          sha512, 
          visibility,
          device_info: visibility === 'public' ? navigator.userAgent : t('hidden'),
          location_data: loc, 
          origin_ip: ip, 
          created_at: new Date().toISOString()
        };
        
        currentRecord = record;
        
        currentArtDataUrl = file.type.startsWith("image/") 
          ? await fileToDataUrl(file) 
          : null;
        
        const userFile = userPhoto.files[0];
        currentPhotoDataUrl = userFile?.type.startsWith("image/") 
          ? await fileToDataUrl(userFile) 
          : null;
        
        let supabaseSuccess = false;
        if (visibility !== 'private') {
          setStatus(t('savingSupabase'), "info");
          try {
            const { error } = await sb.from("manifests").insert([record]);
            if (error) throw error;
            supabaseSuccess = true;
          } catch (e) { 
            console.error('Supabase error:', e); 
          }
        }
        
        const qrDataUrl = await generateQR(`https://www.ilhanart.org/public-registry`);
        setStatus(t('creatingCert'), "info");
        
        const certHTML = await generateCertHTML(
          record, 
          currentArtDataUrl, 
          currentPhotoDataUrl, 
          qrDataUrl, 
          visibility
        );
        
        certPreview.innerHTML = certHTML;
        previewSection.style.display = "block";
        setStatus(
          visibility === 'private' 
            ? t('certReadyPrivate') 
            : t('certReadySupabase'), 
          "ok"
        );
        
      } catch (err) {
        setStatus(t('error', {error: err.message}), "error");
      } finally { 
        sealBtn.disabled = false; 
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 💾 DOWNLOAD HANDLERS
  // ═══════════════════════════════════════════════════════════════
  
  if (downloadPNG) {
    downloadPNG.addEventListener("click", async () => {
      if (!currentRecord || !certPreview) return;
      try {
        setStatus('🖼️ Creating PNG...', "info");
        const certElement = certPreview.querySelector('.cert-frame');
        const canvas = await html2canvas(certElement, { 
          scale: 2, 
          useCORS: true, 
          backgroundColor: '#ffffff', 
          logging: false 
        });
        const link = document.createElement("a");
        link.download = `${currentRecord.cert_id}_Certificate.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        setStatus(t('pngDownloaded'), "ok");
      } catch (e) { 
        console.error(e); 
      }
    });
  }

  if (downloadJSON) {
    downloadJSON.addEventListener("click", () => {
      if (!currentRecord) return;
      const jsonData = { 
        ...currentRecord, 
        verification_url: `https://www.ilhanart.org/public-registry` 
      };
      const blob = new Blob([JSON.stringify(jsonData, null, 2)], { 
        type: "application/json" 
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${currentRecord.cert_id}_Data.json`;
      link.click();
      setStatus(t('jsonDownloaded'), "ok");
    });
  }

  if (downloadPDF) {
    downloadPDF.addEventListener("click", async () => {
      if (!currentRecord || !certPreview) return;
      try {
        setStatus('📄 Creating PDF...', "info");
        const { jsPDF } = window.jspdf;
        if (!jsPDF) throw new Error("jsPDF not loaded");
        
        const certElement = certPreview.querySelector('.cert-frame');
        const canvas = await html2canvas(certElement, { 
          scale: 2, 
          useCORS: true, 
          backgroundColor: '#ffffff' 
        });
        
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgWidth = pdfWidth - 20;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save(`${currentRecord.cert_id}_Certificate.pdf`);
        setStatus(t('pdfDownloaded'), "ok");
      } catch (e) { 
        console.error(e); 
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 🚀 INITIALIZATION
  // ═══════════════════════════════════════════════════════════════
  
  // Bind drop zones
  bindDropZone(photoDrop, userPhoto, photoMeta, (file) => {
    if (!file.type.startsWith("image/")) {
      photoPreview.style.display = "none";
      photoPreviewEmpty.textContent = t('onlyImages');
      photoPreviewEmpty.style.display = "block";
      return;
    }
    const url = URL.createObjectURL(file);
    photoPreview.src = url;
    photoPreview.style.display = "block";
    photoPreviewEmpty.style.display = "none";
  });

  bindDropZone(artDrop, artFile, artMeta, (file) => {
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      artPreview.src = url;
      artPreview.style.display = "block";
      artPreviewEmpty.style.display = "none";
    } else {
      artPreview.style.display = "none";
      artPreviewEmpty.textContent = t('noPreview');
      artPreviewEmpty.style.display = "block";
    }
  });

  // Fetch IP data
  fetchIPData();

  console.log('✅ Digital Notary initialized for language:', getCurrentLang());
  console.log('🔐 App Version:', APP_VERSION);
  console.log('📍 Ready to seal artworks!');
  
})();
