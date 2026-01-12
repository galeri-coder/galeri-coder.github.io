/* -----------------------------------------------------------
   🛡️ POART INTEGRITY CHECKER MODULE
   Bu fonksiyon, tarayıcıda çalışan script dosyasını okur,
   SHA-512 özetini çıkarır ve ekrandaki kutuya yazar.
   ----------------------------------------------------------- */

async function verifySystemIntegrity() {
    // BURAYI KENDİ DOSYA ADINLA DEĞİŞTİR (Örn: 'main.js', 'app.js' veya '/js/scripts.js')
    const TARGET_FILE = 'app.js'; // <-- Senin js dosyanın adı neyse onu yaz

    const displayElement = document.getElementById('hash-display');

    try {
        // 1. Kendi kaynak kodunu sunucudan indir
        const response = await fetch(TARGET_FILE);
        
        if (!response.ok) throw new Error(`Dosya okunamadı: ${TARGET_FILE}`);

        // 2. Metni değil, ham byte verisini (Buffer) al
        const buffer = await response.arrayBuffer();

        // 3. Kriptografik SHA-512 Hash işlemi
        const hashBuffer = await crypto.subtle.digest('SHA-512', buffer);

        // 4. Hexadecimal formata çevir
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        // 5. Ekrana yazdır (İlk 64 karakteri gösterelim, tamamı çok uzun)
        // Tamamını göstermek istersen .substring kısmını kaldır.
        displayElement.innerText = hashHex; 
        
        // Konsola da bas (Geliştiriciler için)
        console.log(`[PoArt Security] System Hash (SHA-512): ${hashHex}`);
        console.log(`[PoArt Security] Verify at GitHub: https://github.com/galeri-coder/ilhanart-core`);

    } catch (error) {
        console.error("Integrity Check Failed:", error);
        displayElement.innerText = "⚠️ DOĞRULAMA HATASI: Dosya okunamadı.";
        displayElement.style.color = "#ff3b3b"; // Hata durumunda kırmızı yap
    }
}

// Sayfa tamamen yüklendiğinde çalıştır
window.addEventListener('load', verifySystemIntegrity);
