# 🔍 PoArt Code Integrity Verification - Quick Start

## 📦 Bu Pakette Ne Var?

✅ **integrity-verification.html** - Standalone tam özellikli doğrulama sayfası  
✅ **integrity-verification-squarespace.html** - Squarespace için optimize edilmiş versiyon  
✅ **VERIFICATION_SETUP_GUIDE.md** - Detaylı kurulum ve kullanım kılavuzu  

---

## ⚡ Hızlı Başlangıç (3 Adım)

### Seçenek 1: Squarespace'e Ekle (ÖNERİLEN)

```
1. Squarespace'te yeni sayfa oluştur
2. Code Block ekle
3. "integrity-verification-squarespace.html" içeriğini yapıştır
4. Yayınla!
```

### Seçenek 2: Kendi Web Sitenize Ekle

```
1. "integrity-verification.html" dosyasını hosting'e yükle
2. Nginx/Apache yapılandır
3. https://yourdomain.com/verify adresinden eriş
```

---

## 🎯 Ne İşe Yarar?

Bu sistem, kullanıcıların PoArt Protocol kodlarını **kriptografik olarak doğrulamasını** sağlar:

### Kullanıcı Yapabilir:
- ✅ GitHub'dan indirdiği dosyanın gerçek olup olmadığını kontrol edebilir
- ✅ Kendi bilgisayarında hash hesaplayıp karşılaştırabilir
- ✅ Drag & drop ile kolay doğrulama yapabilir
- ✅ Hangi katmanın (Frontend/Backend) değiştiğini görebilir

### Sistem Gösterir:
- 🎨 **Frontend Layer:** notary_v1.0_SEALED.html (Dijital noter arayüzü)
- 🗄️ **Backend Layer:** manifests_schema_v1.0_SEALED.sql (Veritabanı şeması)
- 🔐 **SHA-512 Hash'ler:** Her iki dosya için resmi hash'ler
- 📜 **Sertifikalar:** POART-KWMPAPJJ (HTML) ve POART-FYGRIVEU (SQL)

---

## 🔐 Resmi Hash'ler

### Frontend (HTML)
```
a4b6f0ada9613f64776ae8eaf16d37bb6c1986ec937831fc21fbdea25d578056
f6e7d47233ad029f061d06c46fd782f81a3cecfa38f9db419010af7eedd5c7ba
```

### Backend (SQL)
```
4ae066f976788859552e4a89fea71c48597b64cc5e6aaa31b3ffbfd016f254ca
59145d63cac5ce098604c3374d9d195fb74aaf6f5888f44ffa4a09c93aa24da8
```

---

## 🚨 Önemli Notlar

1. **Hash Eşleşmezse** → Dosya DEĞİŞTİRİLMİŞ demektir, kullanma!
2. **Tek Doğru Kaynak** → github.com/galeri-coder/ilhanart-core
3. **Version Kontrolü** → Sadece v1.0 SEALED versiyonu doğru
4. **Manuel Test** → Deployment öncesi mutlaka test et

---

## 📚 Detaylı Bilgi

Tüm detaylar için: **VERIFICATION_SETUP_GUIDE.md** dosyasına bak

- Squarespace adım adım kurulum
- Manuel doğrulama (Terminal/PowerShell)
- Python script ile doğrulama
- Özelleştirme seçenekleri
- Troubleshooting

---

## 🎨 Görünüm

### Squarespace Versiyonu:
- Kompakt tasarım
- Dark mode
- Responsive (mobil uyumlu)
- Drag & drop dosya yükleme
- Gerçek zamanlı hash hesaplama
- ✅/❌ görsel feedback

---

## 🔗 Bağlantılar

- **GitHub:** https://github.com/galeri-coder/ilhanart-core
- **Live Demo:** https://ilhanart.org/verify (yakında)
- **Documentation:** VERIFICATION_SETUP_GUIDE.md

---

## 💡 Kullanım Örneği

```
Kullanıcı: "Bu HTML dosyası gerçek mi?"
          ↓
  Dosyayı sürükle & bırak
          ↓
Sistem SHA-512 hesaplar (tarayıcıda)
          ↓
Resmi hash ile karşılaştırır
          ↓
    ✅ Eşleşti: "Dosya orijinal ve güvenli"
    ❌ Eşleşmedi: "KULLANMA! Değiştirilmiş"
```

---

**PoArt Protocol**  
"Culture > Capital"  
Civilizational-Scale Verification (2025-3000)

---

**Sealed Date:** 12 January 2025  
**Version:** 1.0  
**Creator:** Deniz İlhan (@Galerilhan)
