# 04 - Sayfa Mimarisi ve Bölüm Hiyerarşisi

Bu doküman, Ayşe Yalçın portföy sitesinin `Ayşe Yalçın _ Veri Analisti (B, scroll geçişi).html` ile kesinleşen sayfa mimarisini, bileşen hiyerarşisini ve boyut/açı kurallarını açıklar.

---

## 1. Sayfa Akışı ve Bölüm Sıralaması

Sayfa tek bir fixed canvas üzerinde 5 ana bölümden oluşur:

```
[Arka Planda: Fixed Fullscreen Canvas (#c)]
                   │
                   ▼
[1. Hero Bölümü (#hero) - Düğüm Ağı]
                   │
                   ▼
[2. Projeler Bölümü (#projeler + #stage) - Bar Grafik & Kartlar]
                   │
                   ▼
[3. Hakkımda Bölümü (#hakkimda + #stage2) - 5 Aşamalı Kariyer Eğrisi]
                   │
                   ▼
[4. Sektörler Bölümü (#sektorler + #stage3) - 8 Dilimli Dairesel Halka]
                   │
                   ▼
[5. İletişim Bölümü (#iletisim + #stage4) - Dönen Çember & Halo]
```

---

## 2. Bölüm ve Bileşen Detayları

### 1. Fixed Canvas (`ScrollCanvas.tsx`)
- Tüm ekranı kaplar (`fixed, inset: 0, width: 100vw, height: 100vh, pointer-events: none`).
- Sayfa kaydırıldıkça DOM'daki 4 sahnenin (`stage`, `stage2`, `stage3`, `stage4`) koordinatlarına göre parçacıkları taşır.

### 2. Hero Bölümü (`HeroSection.tsx`)
- `min-height: 100vh; padding: 112px clamp(20px,6vw,88px) 40px`.
- Nav: `Ayşe Yalçın` (Schibsted 800) | `Veri analisti` (Hanken 400).
- H1: *"Müşteriyi 14 yıldır dinliyorum."* (sönük gri) / *"Şimdi verisinden de okuyorum."* (açık beyaz).
- Alt metin: Sekiz sektör ve SQL, Python, Power BI dönüşümü.
- Butonlar: `Projeleri gör` (primary) / `CV indir` (ghost).
- Bilgi bandı: 14 yıl CX / 8 sektör / Python, SQL, Power BI, Tableau.

### 3. Projeler Bölümü (`ProjectsSection.tsx`)
- `padding: 96px clamp(20px,6vw,88px) 96px`.
- `.split`: Sol tarafta başlık ("Dağınık veriden okunur bir tabloya.") ve açıklama; sağ tarafta `#stage` (`height: min(52vh, 420px)`).
- Canvas `#stage` içinde 7 çubuklu bar grafik, trend eğrisi ve taban ekseni çizer.
- `.cards`: 2 sütunlu grid (`repeat(2, minmax(0, 1fr))`, mobilde tek sütun).
  1. Çağrı merkezi KPI paneli (Power BI, SQL)
  2. Müşteri kaybı analizi (Python, SQL)
  3. Değersiz temas analizi (Python, Tableau)
  4. Anket metin analizi (Python)

### 4. Hakkımda Bölümü (`AboutSection.tsx`)
- `padding: 40px clamp(20px,6vw,88px) 160px`.
- Başlık: "Sahadan analize: 14 yıl, tek yön."
- Açıklama: Satış temsilcisi → Takım lideri → CX uzmanı → Analitik dönüşüm.
- `#stage2` (`height: min(46vh, 360px); margin-top: 64px`).
- Canvas bir kariyer yolu eğrisi çizerken, üstünde 5 aşama etiketi parlar:
  - Satış temsilcisi (`.ms.up`)
  - Takım lideri (`.ms.dn`)
  - CX uzmanı (`.ms.up`)
  - Kıdemli CX uzmanı (`.ms.dn`)
  - Analiz yöneticisi (`.ms.up`)

### 5. Sektörler Bölümü (`SectorsSection.tsx`)
- `padding: 40px clamp(20px,6vw,88px) 160px`.
- Başlık: "Sekiz sektör, aynı soru: müşteri ne yaşıyor?"
- `#stage3` (`height: min(50vh, 400px)`).
- Canvas merkezde 8 dilimli dairesel sektör haritası oluşturur.
- Çevresinde trigonometrik açılarla konumlanan 8 sektör etiketi:
  - Telekom, Seyahat, E-ticaret, Finans ve sigorta, Enerji, Otomotiv, İletişim hizmetleri, Medya ve eğlence.

### 6. İletişim Bölümü (`ContactSection.tsx`)
- `min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px`.
- `#stage4` (`width: min(100%, 560px); height: min(60vh, 440px)`).
- Canvas dönen parçacık halkası ve halesi oluşturur.
- Ortadaki `.ctc` kutusu:
  - "Konuşalım."
  - "Veriyle ilgili bir fikir ya da fırsat için yaz."
  - Butonlar: `İletişime geç` (primary) / `LinkedIn` (ghost).
