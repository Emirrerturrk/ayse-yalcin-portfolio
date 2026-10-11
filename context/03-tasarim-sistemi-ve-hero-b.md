# 03 - Tasarım Sistemi ve Scroll Geçişi (Fixed Canvas Dönüşüm Mimarisi)

Bu doküman, sitede uygulanacak nihai görsel ve etkileşim sistemini tanımlar. Referans dosya: `Ayşe Yalçın _ Veri Analisti (B, scroll geçişi).html`.

---

## 1. Tasarım Felsefesi ve Katı Kurallar

- **Tasarım Çizgisi:** Minimalist, editoryal, siyah-beyaz, prestijli ve kurumsal.
- **Yapay Zeka Klişelerinden Kaçınma:**
  - Mor, camgöbeği veya pembe neon gradyanlar KESİNLİKLE YASAKTIR.
  - Süs amaçlı yuvarlak "puf" kartlar, her yerde aynı olan bulanık cam (glassmorphism) efektleri YASAKTIR.
  - Anlamsız numaralandırmalar (01, 02), başlık üstü mikro etiketler ("eyebrow"), progress bar'lar KULLANILMAYACAKTIR.
- **Tek Sabit Canvas & Bütünsel Veri Hareketi:**
  - Sayfa boyunca arka planda tek bir `<canvas id="c">` (`position: fixed; inset: 0; pointer-events: none`) yaşar.
  - Kullanıcı sayfayı kaydırdıkça parçacıklar kaybolmaz; sahadan toplanan dağınık verilerin bir grafiğe, kariyer yoluna, sektör halkasına ve iletişim odağına dönüşümünü temsil eder.

---

## 2. Renk ve Tasarım Tokenları

```css
:root {
  --bg: #171717;              /* Ana siyah zemin */
  --card: #1f1f1f;            /* Kart zemin rengi */
  --ink: #f5f5f5;             /* Ana metin ve parlak öğeler */
  --muted: #a3a3a3;           /* İkincil metin ve sönük açıklamalar */
  --line: rgba(245, 245, 245, 0.22); /* İnce ayrım çizgileri */
  --on: #171717;              /* Buton üstü koyu yazı */
}
```

---

## 3. Tipografi Sistemi

- **Başlık Fontu:** `Schibsted Grotesk` (Google Fonts: 500, 700, 800)
  - `letter-spacing: -0.035em`, keskin ve kurumsal.
- **Gövde Fontu:** `Hanken Grotesk` (Google Fonts: 400, 500, 600)
  - `line-height: 1.6`, editoryal netlik ve üst düzey okunabilirlik.

---

## 4. Bölümler, Boyutlar ve Açılar (Sahne Mimarisi)

Sayfa 5 ana aşamadan oluşur ve her aşamanın canvas hedefi için DOM'da bir `stage` alanı bulunur:

### 1. Hero Bölümü (`#hero`)
- **Boyut:** `min-height: 100vh; padding: 112px clamp(20px,6vw,88px) 40px`.
- **Canvas Durumu:** Dağınık ve dinamik **bağlanan düğüm ağı**. Fare yaklaşınca 170px içindeki düğümler fareye bağlanır; her 6. düğüm darbe halkası (pulse ring) üretir.
- **İçerik:** H1 ("Müşteriyi 14 yıldır dinliyorum." / "Şimdi verisinden de okuyorum."), alt açıklama, 2 buton, 3 maddelik bilgi bandı (14 yıl, 8 sektör, araçlar).

### 2. Projeler Bölümü (`#projeler` & `#stage`)
- **Boyutlar:**
  - Bölüm: `padding: 96px clamp(20px,6vw,88px) 96px`.
  - `.split`: `grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 40px; min-height: 70vh` (Mobilde tek sütun).
  - `.stage`: `height: min(52vh, 420px)` (Mobilde `240px`).
- **Canvas Dönüşümü:** Dağınık ağdaki noktalar toplanarak sağ sütundaki `#stage` alanında **7 sütunlu Bar Grafik (`[.32,.46,.4,.58,.66,.62,.88]`) + tepeleri bağlayan smoothstep Trend Çizgisi + Taban Ekseni** oluşturur.
- **Kartlar (`.cards`):** `grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 64px`.

### 3. Hakkımda & Kariyer Yolculuğu (`#hakkimda` & `#stage2`)
- **Boyutlar:**
  - Bölüm: `padding: 40px clamp(20px,6vw,88px) 160px`.
  - `.about`: `max-width: 62ch`.
  - `.stage.wide`: `height: min(46vh, 360px); margin-top: 64px` (Mobilde `320px`).
- **Canvas Dönüşümü:** Parçacıklar bir **Kariyer Zaman Çizgisi Eğrisi** (`ycurve(u) = .8 - .58*e + .05*sin(u*10)`) çizer.
- **5 Aşama ve Etiket Açıları (`.ms`):**
  - Noktalar: `fx = [0.1, 0.3, 0.5, 0.7, 0.9]` konumlarında kümelenir.
  - Etiketler: Sırasıyla yukarı (`.ms.up`, `transform: translate(-50%, -100%)`) ve aşağı (`.ms.dn`, `transform: translate(-50%, 0)`) zikzak yerleşir:
    1. *Satış temsilcisi*
    2. *Takım lideri*
    3. *CX uzmanı*
    4. *Kıdemli CX uzmanı*
    5. *Analiz yöneticisi*
  - Opaklıkları scroll mesafesine bağlı olarak yumuşakça parlar.

### 4. Sektörler Bölümü (`#sektorler` & `#stage3`)
- **Boyutlar:**
  - Bölüm: `padding: 40px clamp(20px,6vw,88px) 160px`.
  - `#stage3`: `height: min(50vh, 400px)` (Mobilde `360px`).
- **Canvas Dönüşümü:** Parçacıklar merkezden dışa doğru **Dairesel 8 Dilimli Sektör Halka Haritası** (`Ri = Rd * 0.58`) oluşturur.
- **8 Sektör Etiketinin Trigonometrik Açıları (`.sc`):**
  - Halka etrafında eşit açılarla (-90°'den başlayarak `2*PI / 8` adımlarla) yerleştirilir:
    - *Telekom*, *Seyahat*, *E-ticaret*, *Finans ve sigorta*, *Enerji*, *Otomotiv*, *İletişim hizmetleri*, *Medya ve eğlence*.
  - Açı kosinüs ve sinüsüne göre metin hizalama (`text-align: left | right | center`) ve kaydırma (`transform`) dinamik hesaplanır.

### 5. İletişim Bölümü (`#iletisim` & `#stage4`)
- **Boyutlar:**
  - Bölüm: `min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px`.
  - `.stage.contact`: `width: min(100%, 560px); height: min(60vh, 440px)` (Mobilde `340px`).
- **Canvas Dönüşümü:** Parçacıklar ortadaki iletişim kutusunun etrafında sürekli dönen bir **Ring & Halo (Çember ve Işık Kuşağı)** oluşturur.
- **İçerik:** `Konuşalım.`, "Veriyle ilgili bir fikir ya da fırsat için yaz.", birincil "İletişime geç" ve hayalet "LinkedIn" butonları.

---

## 5. Scroll ve Fizik Enterpolasyonu

Scroll pozisyonu her `requestAnimationFrame` döngüsünde `getBoundingClientRect` ile izlenir:
- `prog(s)`: Elemanın viewport içindeki ilerlemesini `0` ile `1` arasında smoothstep (`p*p*(3-2*p)`) olarak hesaplar.
- Her parçacık için hedef koordinatlar `tx = S[j].left + p.X[j]`, `ty = S[j].top + p.Y[j]` olarak enterpole edilir.
- Parçacıklar sönümlenen hızla (`p.vx *= 0.9; p.vy *= 0.9`) hedefe akar, bu da olağanüstü akıcı ve organik bir geçiş hissi yaratır.
- `prefers-reduced-motion: reduce` açıkken animasyon döngüsü kapatılır, scroll anında statik koordinat `render()` fonksiyonu çağrılır.
