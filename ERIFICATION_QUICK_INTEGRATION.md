# 🔍 Dosya Doğrulama Sistemi - Hızlı Entegrasyon

## 📋 3 Adımda Kurulum

### 1️⃣ HTML Bölümünü Ekle

Mevcut dijital noter HTML'inde `</div> <!-- previewSection sonu -->` satırını bul.

**NEREYE EKLENECEK:**
```html
</div> <!-- previewSection sonu -->

<!-- 🔥 BURAYA EKLENECEK (verification-addon.html'deki HTML kısmı) -->

</div> <!-- dn-wrap sonu -->
```

**EKLENMESİ GEREKEN:**
- `verification-addon.html` dosyasındaki HTML bölümü (ilk yorum bloğundan başlayan kısım)

---

### 2️⃣ CSS Stillerini Ekle

Mevcut dijital noter HTML'inde `</style>` kapanış etiketini bul.

**NEREYE EKLENECEK:**
```html
  .cert-local-badge {
    ...
  }

  /* 🔥 BURAYA EKLENECEK (verification-addon.html'deki CSS kısmı) */

</style>
```

**EKLENMESİ GEREKEN:**
- `verification-addon.html` dosyasındaki tüm CSS kuralları

---

### 3️⃣ JavaScript'i Ekle

Mevcut dijital noter HTML'inde en son `})();` satırını bul (script'in kapanışı).

**NEREYE EKLENECEK:**
```javascript
    });
  });
})();

// 🔥 BURAYA EKLENECEK (verification-addon.html'deki JS kısmı)

</script>
```

**EKLENMESİ GEREKEN:**
- `verification-addon.html` dosyasındaki JavaScript fonksiyonu

---

## 🎯 Entegrasyon Sonrası

### Görünüm:

```
┌─────────────────────────────────────┐
│  📜 Sertifika Hazır                 │
│  [PNG] [JSON] [PDF]                 │
│  ┌───────────────────────────────┐  │
│  │   Sertifika Preview           │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘

─────────────────────────────────────── (ayırıcı çizgi)

┌─────────────────────────────────────┐
│  🔍 DOSYA DOĞRULAMA                 │
│                                     │
│  Nasıl Çalışır?                     │
│  Bir dosyayı buraya sürükleyin...   │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 📂 Dosyayı Sürükle & Bırak    │  │
│  │ veya tıklayıp seçin           │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## ✅ Test Checklist

Entegrasyondan sonra şunları kontrol et:

- [ ] Sayfa yükleniyor mu? (console'da hata yok)
- [ ] Doğrulama bölümü görünüyor mu?
- [ ] Dosya sürüklenebiliyor mu?
- [ ] Hash hesaplanıyor mu? (loading spinner)
- [ ] Supabase sorgusu çalışıyor mu?
- [ ] "Bulunamadı" durumu gösteriliyor mu?
- [ ] "Bulundu" durumu gösteriliyor mu?
- [ ] Visibility'ye göre bilgiler doğru mu?
- [ ] Scroll animasyonu çalışıyor mu?
- [ ] Mobilde düzgün görünüyor mu?

---

## 🎨 Özellikler

### 1. Drag & Drop Alanı
- Sarı/turuncu tema (mühürleme kısmından ayırt edilebilir)
- Hover ve active durumları
- Dosya bilgisi (isim + boyut)

### 2. Loading State
- Spinning animasyon
- "Hash hesaplanıyor ve veritabanında aranıyor..." mesajı

### 3. Sonuç Durumları

**❌ Bulunamadı:**
- Kırmızı tema
- Hesaplanan hash gösterilir
- "Bu dosya mühürlenmemiş" mesajı

**✅ Bulundu:**
- Yeşil tema
- Sertifika kartı
- Tüm bilgiler:
  * Sertifika ID
  * Eser adı & Sanatçı
  * Mühürleme tarihi
  * Konum (visibility'ye göre)
  * IP (her zaman maskeli)
  * Cihaz bilgisi
  * SHA-256 & SHA-512
  * Doğrulama linki

### 4. Visibility Kontrolü

**Private:**
- Supabase'de kayıt yok
- "Bulunamadı" gösterir

**Masked:**
- Konum: `*** / Türkiye`
- IP: `46.1.***.***`
- Cihaz: `Gizli`

**Public:**
- Konum: `İstanbul, Türkiye`
- IP: `46.1.***.***` (yine maskeli)
- Cihaz: Gösterilir

---

## 🔧 Teknik Detaylar

### Supabase Sorgusu:
```javascript
const { data, error } = await sb
  .from('manifests')
  .select('*')
  .eq('sha512', hash)  // SHA-512 ile ara
  .single();           // Tek sonuç bekle
```

### Hash Hesaplama:
```javascript
const buffer = await file.arrayBuffer();
const hashBuffer = await crypto.subtle.digest('SHA-512', buffer);
const hash = Array.from(new Uint8Array(hashBuffer))
  .map(b => b.toString(16).padStart(2, '0'))
  .join('');
```

### Scroll Animasyonu:
```javascript
setTimeout(() => {
  resultElement.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'center' 
  });
}, 100);
```

---

## 🐛 Troubleshooting

### Problem: "sb is not defined" hatası
**Çözüm:** Supabase script yüklenmemiş veya verification script'i çok erken çalışıyor. Script sırasını kontrol et.

### Problem: Dosya sürüklenemiyor
**Çözüm:** 
1. HTML'de `verifyDropZone` id'si var mı kontrol et
2. CSS yükleniyor mu kontrol et
3. Console'da hata var mı bak

### Problem: Hash hesaplama çok yavaş
**Çözüm:** Bu normal, özellikle büyük dosyalarda (100MB+). Loading spinner'ı göster.

### Problem: "Bulunamadı" diyor ama mühürledim
**Olası Sebepler:**
1. Dosya değiştirilmiş (tek byte bile değişse hash bozulur)
2. Private modda mı mühürledin? (Private Supabase'e gitmez)
3. Supabase bağlantısı çalışıyor mu?
4. SHA-512 doğru hesaplanıyor mu?

### Problem: Visibility bilgileri yanlış
**Çözüm:** 
- `record.visibility` değerini console'a yazdır
- Veritabanındaki `visibility` kolonunu kontrol et
- Enum değerleri: `private`, `masked`, `public`

---

## 📱 Responsive Tasarım

Mobil cihazlarda:
- Grid 2 kolon → 1 kolon
- Sertifika header: flex-direction column
- Font boyutları küçülür
- Tüm hover efektleri touch-friendly

---

## 🚀 Performans İpuçları

1. **Büyük Dosyalar:** 
   - 100MB+ dosyalarda hash hesaplama yavaş olabilir
   - Loading göstergesi önemli

2. **Supabase Rate Limit:**
   - Free tier: 500 request/dakika
   - Çok hızlı ardışık sorgu yapma

3. **Cache:**
   - Browser hash sonuçlarını cache'leyebilir
   - Aynı dosya tekrar sürüklenirse instant sonuç

---

## 🎯 Kullanım Senaryoları

### Senaryo 1: Sanatçı Doğrulaması
```
Sanatçı: "Bu eserin orijinalini 2 ay önce mühürledim"
         ↓
Kullanıcı: Dosyayı doğrulama bölümüne sürükler
         ↓
Sistem: ✅ Bulundu! 15 Ekim 2024 tarihinde mühürlenmiş
```

### Senaryo 2: Sahtecilik Tespiti
```
Alıcı: "Bu eser gerçek mi?"
       ↓
Dosyayı sürükler
       ↓
Sistem: ❌ Kayıt bulunamadı! Bu dosya hiç mühürlenmemiş
```

### Senaryo 3: Versiyon Kontrolü
```
Tasarımcı: "Bu v2.0 mı yoksa v3.0 mı?"
           ↓
Her iki dosyayı sırası ile test eder
           ↓
Sistem: v2.0 → ✅ Bulundu (Mart 2024)
        v3.0 → ❌ Bulunamadı (henüz mühürlenmemiş)
```

---

## 💡 Gelişmiş Özellikler (Opsiyonel)

### Toplu Doğrulama:
```javascript
const files = Array.from(fileInput.files);
for (const file of files) {
  await handleVerifyFile(file);
}
```

### QR Kod Okuma:
Kullanıcı sertifikadaki QR'ı taratır → Doğrudan doğrulama yapar

### Export Raporu:
Doğrulama sonuçlarını PDF/CSV olarak export et

---

**Son Güncelleme:** 12 Ocak 2025  
**Versiyon:** 1.0  
**Uyumluluk:** Digital Notary v4.4+  
**Bağımlılıklar:** Supabase JS SDK v2+
