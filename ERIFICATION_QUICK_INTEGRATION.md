# 🔍 File Verification System - Quick Integration

## 📋 3-Step Installation

### 1️⃣ Add HTML Section

Find `</div> <!-- previewSection end -->` line in your existing digital notary HTML.

**WHERE TO ADD:**
```html
</div> <!-- previewSection end -->

<!-- 🔥 ADD HERE (HTML section from verification-addon.html) -->

</div> <!-- dn-wrap end -->
```

**WHAT TO ADD:**
- HTML section from `verification-addon.html` file (starting from first comment block)

---

### 2️⃣ Add CSS Styles

Find the closing `</style>` tag in your existing digital notary HTML.

**WHERE TO ADD:**
```html
  .cert-local-badge { ... }

  /* 🔥 ADD HERE (CSS section from verification-addon.html) */

</style>
```

**WHAT TO ADD:**
- All CSS rules from `verification-addon.html` file

---

### 3️⃣ Add JavaScript

Find the final `})();` line in your existing digital notary HTML (script closing).

**WHERE TO ADD:**
```javascript
    });
  });
})();

// 🔥 ADD HERE (JS section from verification-addon.html)

</script>
```

**WHAT TO ADD:**
- JavaScript function from `verification-addon.html` file

---

## 🎯 Post-Integration

### Appearance:

```
┌─────────────────────────────────────────┐
│  📜 Certificate Ready                   │
│  [PNG] [JSON] [PDF]                     │
│  ┌───────────────────────────────────┐  │
│  │   Certificate Preview             │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘

─────────────────────────────────────────── (divider line)

┌─────────────────────────────────────────┐
│  🔍 FILE VERIFICATION                   │
│                                         │
│  How It Works?                          │
│  Drag a file here to verify...          │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 📂 Drag & Drop File               │  │
│  │ or click to select                │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## ✅ Test Checklist

After integration, verify:

- [ ] Page loads without errors (check console)
- [ ] Verification section is visible
- [ ] File can be dragged/dropped
- [ ] Hash calculation works (loading spinner shows)
- [ ] Supabase query executes
- [ ] "Not Found" state displays correctly
- [ ] "Found" state displays correctly
- [ ] Visibility-based info filtering works
- [ ] Scroll animation works
- [ ] Mobile responsive works

---

## 🎨 Features

### 1. Drag & Drop Area
- Yellow/orange theme (distinguishable from sealing section)
- Hover and active states
- File info display (name + size)

### 2. Loading State
- Spinning animation
- "Calculating hash and searching database..." message

### 3. Result States

**❌ Not Found:**
- Red theme
- Computed hash displayed
- "This file is not sealed" message

**✅ Found:**
- Green theme
- Certificate card
- All information:
  * Certificate ID
  * Artwork title & Artist
  * Sealing date
  * Location (based on visibility)
  * IP (always masked)
  * Device info
  * SHA-256 & SHA-512
  * Verification link

### 4. Visibility Control

**Private:**
- Not in Supabase
- Shows "Not Found"

**Masked:**
- Location: `*** / Turkey`
- IP: `46.1.***.***`
- Device: `Hidden`

**Public:**
- Location: `Istanbul, Turkey`
- IP: `46.1.***.***` (still masked)
- Device: Shown

---

## 🔧 Technical Details

### Supabase Query:
```javascript
const { data, error } = await sb
  .from('manifests')
  .select('*')
  .eq('sha512', hash)  // Search by SHA-512
  .single();           // Expect single result
```

### Hash Calculation:
```javascript
const buffer = await file.arrayBuffer();
const hashBuffer = await crypto.subtle.digest('SHA-512', buffer);
const hash = Array.from(new Uint8Array(hashBuffer))
  .map(b => b.toString(16).padStart(2, '0'))
  .join('');
```

### Scroll Animation:
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

### Problem: "sb is not defined" error
**Solution:** Supabase script not loaded or verification script runs too early. Check script order.

### Problem: File cannot be dragged
**Solution:** 
1. Check if `verifyDropZone` id exists in HTML
2. Verify CSS is loading
3. Check console for errors

### Problem: Hash calculation is very slow
**Solution:** This is normal, especially for large files (100MB+). Show loading spinner.

### Problem: Shows "Not Found" but I sealed it
**Possible Reasons:**
1. File has been modified (even one byte changes the hash)
2. Sealed in private mode? (Private doesn't go to Supabase)
3. Is Supabase connection working?
4. Is SHA-512 calculated correctly?

### Problem: Visibility information is wrong
**Solution:** 
- Print `record.visibility` value to console
- Check `visibility` column in database
- Enum values: `private`, `masked`, `public`

---

## 📱 Responsive Design

On mobile devices:
- Grid 2 columns → 1 column
- Certificate header: flex-direction column
- Font sizes reduced
- All hover effects are touch-friendly

---

## 🚀 Performance Tips

1. **Large Files:** 
   - Hash calculation can be slow for 100MB+ files
   - Loading indicator is important

2. **Supabase Rate Limit:**
   - Free tier: 500 requests/minute
   - Don't make rapid successive queries

3. **Cache:**
   - Browser may cache hash results
   - Same file dragged again gives instant result

---

## 🎯 Usage Scenarios

### Scenario 1: Artist Verification
```
Artist: "I sealed this artwork's original 2 months ago"
         ↓
User: Drags file to verification section
         ↓
System: ✅ Found! Sealed on October 15, 2024
```

### Scenario 2: Forgery Detection
```
Buyer: "Is this artwork genuine?"
       ↓
Drags file
       ↓
System: ❌ Not Found! This file was never sealed
```

### Scenario 3: Version Control
```
Designer: "Is this v2.0 or v3.0?"
           ↓
Tests both files sequentially
           ↓
System: v2.0 → ✅ Found (March 2024)
        v3.0 → ❌ Not Found (not sealed yet)
```

---

## 💡 Advanced Features (Optional)

### Bulk Verification:
```javascript
const files = Array.from(fileInput.files);
for (const file of files) {
  await handleVerifyFile(file);
}
```

### QR Code Reading:
User scans QR from certificate → Direct verification

### Export Report:
Export verification results as PDF/CSV

---

**Last Updated:** January 12, 2025  
**Version:** 1.0  
**Compatibility:** Digital Notary v4.4+  
**Dependencies:** Supabase JS SDK v2+
