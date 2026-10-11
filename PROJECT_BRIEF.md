# Ayşe Yalçın Portföy Websitesi: Proje Brief'i

Bu dosya, siteyi kodlayacak yapay zeka asistanı için tek kaynak (source of truth) olarak yazıldı. Önce tamamını oku, sonra "Çalışma Sırası" bölümündeki adımları uygula. Belirsiz bir nokta varsa varsayım yap, ama varsayımı `README.md` içinde "Varsayımlar" başlığı altında listele.

---

## 1. Proje özeti

- **Kişi:** Ayşe Yalçın, Eskişehir, Türkiye
- **Amaç:** İşe alım uzmanlarına ve yöneticilere kendini tanıtan, veri analizi yetkinliğini somut projelerle kanıtlayan kişisel portföy sitesi.
- **Hedef roller:** CX Analytics, Customer Insights Analyst, Business/Operations Analyst, BI Analyst, Veri Analisti
- **Hedef kitle:** Türkiye ve Avrupa'daki şirketlerin işe alım uzmanları, analitik ekip yöneticileri, CX/operasyon liderleri. Çoğu ziyaretçi siteye telefondan ve 10-30 saniyeliğine bakacak.
- **Birincil dönüşüm:** Ziyaretçi (1) projeleri inceler, (2) CV indirir, (3) iletişime geçer.

### Konumlandırma (en önemli kısım)

Ayşe Hanım sıradan bir junior analist değil. **14 yıllık müşteri deneyimi (CX) ve çağrı merkezi operasyonu geçmişi** üzerine veri analitiği yetkinliği kurmuş biri. Site bu hikâyeyi anlatmalı:

> Satış temsilcisi → Takım lideri → CX uzmanı → Kıdemli CX uzmanı → Analiz yöneticisi, ve bunun üzerine Python, SQL, Power BI, Tableau.

Ayrışma noktası: Operasyonu, müşteri yolculuğunu ve KPI'ları sahadan bilen bir analist. Siteyi "teknik beceri listesi" gibi değil, "müşteri verisini iş kararına çeviren analist" olarak kur.

---

## 2. Kişi bilgileri (LinkedIn profilinden)

**Başlık (LinkedIn):** Data Scientist, Data Analyst, Python, SQL, Tableau, DOMO, Power BI, Google Sheets, CX Strategy, CX & Digital Transformation, Innovation, Design Thinking, CRM Transformation, Dashboard Project Management

**Özet (çeviri/uyarlama kaynağı):** 14 yıllık çağrı merkezi sektörü deneyimi, Müşteri Deneyimi departmanında kariyer. Müşteri Deneyimi Yönetimi, CX Stratejisi, CX ve Dijital Dönüşüm, İnovasyon, Design Thinking, CX Analitiği, CRM Dönüşümü, UX/UI tasarımı alanlarında uzmanlık. Son yıllarda veri bilimine yönelip Python, SQL, Tableau, Power BI ve Google Sheets becerileri kazandı. Hedef: çağrı merkezi deneyimini veri bilimiyle birleştirmek, şirketlere veriyle desteklenen kararlar için içgörü sağlamak.

**Çalıştığı sektörler:** Telekomünikasyon, seyahat, e-ticaret, finans ve sigorta, enerji, otomotiv, iletişim, medya ve eğlence

**Dil:** Türkçe (anadil), İngilizce, Almanca (sınırlı çalışma yeterliliği)

**Deneyim:**

| Rol | Kurum | Dönem | Yer |
|---|---|---|---|
| Analysis Manager | Concentrix | Temmuz 2022'den beri | İstanbul |
| Senior Customer Experience Specialist | Comdata Group | Ocak 2022'den beri | Eskişehir |
| Customer Experience Specialist | Comdata Group | Kasım 2019'dan beri | Eskişehir |
| Team Lead | Comdata Türkiye | Kasım 2011 - Kasım 2019 | n/a |
| Sales Agent | Win Bilgi İletişim Hizm. A.Ş. | Kasım 2010 - Kasım 2011 | n/a |

> **TODO (sahibine sorulacak):** Concentrix ve Comdata rollerinin tarihleri LinkedIn'de üst üste biniyor ve "Present" görünüyor. Sitede kronolojiyi temizlemeden önce doğru tarihleri teyit et. Teyit gelene kadar tarihleri yalnızca yıl bazında ve çakışma yaratmayacak şekilde göster, ya da bu bölümü `data/experience.json` içinde `confirmed: false` bayrağıyla işaretle.

**Senior CX Specialist rolü, kaynak maddeler** (sitede sonuç odaklı 2-3 cümleye indirgenecek):
- Customer Journey geliştirme ve optimizasyonu
- Uçtan uca Customer Journey analizleri ve rakip kıyaslamalarıyla aksiyon alanları belirleme
- Müşteri temas noktalarının sürekli analizi
- Analizlerden öneri üretme, KPI'larla memnuniyet ölçümlerini yönetme
- Çapraz fonksiyonlu proje ekiplerini yönlendirme
- Deneyim odaklı süreç/ürün iyileştirmeleri ve müşteri hizmetlerinde değersiz temasların azaltılması
- Sürekli iyileştirme girişimleri, Customer Service Excellence vizyonu ve uzun vadeli strateji
- Deneyim anketleri tasarlama, sonuç analizi, aksiyon planı

**Eğitim:** Atatürk Üniversitesi (Halkla İlişkiler/İmaj Yönetimi), Cumhuriyet Üniversitesi (Gıda Teknolojisi ve İşleme)

**Sertifikalar:** Power BI, Customer Experience Program, User Experience Design, Yapay Zeka Okur Yazarlığı ve Teknolojileri Kursu

**İletişim:** LinkedIn: `https://www.linkedin.com/in/ayşeyalçın-450908192`. E-posta adresi sitede herkese açık gösterilecekse sahibinden onay al. Şimdilik `{{EMAIL}}` yer tutucusu kullan ve bir iletişim formu ya da `mailto:` bağlantısı hazırla.

---

## 3. Ton ve metin kuralları

- Dil: **Türkçe birincil, İngilizce ikincil** (TR/EN geçişi). Tüm metinler `i18n` sözlüğünde dursun.
- Ses: Sıcak, sade, somut, birinci tekil şahıs ("yönettim", "dönüştürüyorum"). Kurumsal jargon ve boş sıfatlardan ("tutkulu", "takım oyuncusu", "çözüm odaklı") kaçın.
- Mümkün olan her yerde **ölçülebilir sonuç** kullan. Elde rakam yoksa uydurma, `{{METRIK}}` yer tutucusu bırak ve TODO listesine ekle.
- CTA'lar eylemi söylesin: "Projeleri gör", "CV indir", "İletişime geç". Düğme metinlerine ok (→) ekleme.
- Cümle düzeni (sentence case). Başlıklarda tamamı büyük harf kullanma.

### Hero metni (kesinleşmiş)

- **H1:** *"Müşteriyi 14 yıldır dinliyorum."* (ilk satır, sönük renk) / *"Şimdi verisinden de okuyorum."* (ikinci satır, ana renk). Başlıkta tek bir kelimeyi vurgulama.
- **Alt metin:** "Telekomdan e-ticarete, finanstan enerjiye sekiz sektörde müşteri deneyimini yönettim. Şimdi SQL, Python ve Power BI ile bu deneyimi veriye, veriyi de karara dönüştürüyorum."
- **Düğmeler:** birincil "Projeleri gör", ikincil "CV indir".
- **Alt bilgi şeridi (3 madde):** `14 yıl / müşteri deneyimi`, `8 sektör / telekom, e-ticaret, finans, enerji ve diğerleri`, `Python, SQL, Power BI, Tableau / günlük araçlarım`.
- Üst çubuk: sol "Ayşe Yalçın", sağ "Veri analisti" (mobilde sağ metin gizlenir).

### İngilizce hero karşılığı

- H1: "I've listened to customers for 14 years." / "Now I read them in the data."
- Alt metin: "From telecom to e-commerce, finance to energy, I've managed customer experience across eight industries. Now I turn that experience into data, and data into decisions with SQL, Python and Power BI."

---

## 4. Sayfa yapısı

Tek sayfa (single page), yumuşak kaydırmalı bölüm bağlantıları. Sabit menü kısa olsun: **Projeler, Hakkımda, Deneyim, İletişim** + dil anahtarı + (isteğe bağlı) tema anahtarı.

1. **Hero:** Bölüm 3'te tanımlı. Arka plan animasyonu Bölüm 6'da.
2. **Seçili projeler** (`#projeler`): 3-4 vaka çalışması kartı, sitenin kalbi. Bölüm 5.
3. **Hakkımda** (`#hakkimda`): 3-4 cümlelik hikâye + yatay kariyer çizgisi (satış → takım lideri → CX → analitik). Burada gerçek bir sıra olduğu için numaralı/sıralı zaman çizgisi kullanılabilir.
4. **Yetkinlikler:** Araç logo yığını yerine "hangi projede kullandım" bağlantılı liste. Beceri yüzdesi/çubuğu **kullanma**. Gruplar: Analiz ve programlama (Python, SQL), Raporlama (Power BI, Tableau, DOMO, Google Sheets), CX ve strateji (Customer Journey, CX Analytics, CRM dönüşümü, Design Thinking, UX/UI), Yönetim (proje yönetimi, çapraz fonksiyonlu ekip). Sektör şeridi: telekom, seyahat, e-ticaret, finans/sigorta, enerji, otomotiv, iletişim, medya.
5. **Deneyim** (`#deneyim`): Rol bazlı kartlar, her biri 2-3 sonuç odaklı cümle. Tarih uyarısı için Bölüm 2'ye bak.
6. **Sertifikalar ve eğitim:** Kısa, sade liste.
7. **İletişim** (`#iletisim`): Tek cümlelik davet, LinkedIn bağlantısı, e-posta/mailto, "CV indir" düğmesi. Form eklenecekse sunucusuz bir çözüm kullan (ör. Formspree/Netlify Forms) ve spam koruması ekle.
8. **Alt bilgi:** Telif satırı, dil/tema anahtarı.

---

## 5. Proje (vaka çalışması) şablonu ve içerik

Her proje kartı ve detay bölümü şu sabit yapıyı izlesin: **Problem → Veri → Yöntem → Bulgu → Aksiyon/Etki → Araçlar**, ayrıca canlı bağlantı (Tableau Public / Power BI / Streamlit) ve GitHub bağlantısı.

Kart: kapak görseli (dashboard ekran görüntüsü), başlık, tek cümlelik özet, araç etiketleri, "İncele" bağlantısı. Karta gelince mini önizleme (GIF/video) açılabilir.

### Önerilen projeler (yer tutucu içeriklerle başla)

1. **Çağrı merkezi KPI dashboard'u** (Power BI veya Tableau): AHT, FCR, CSAT, SLA, kuyruk yoğunluğu, vardiya bazlı görünüm. Vitrin projesi.
2. **Müşteri kaybı (churn) analizi** (Python + SQL): Açık bir telekom veri setiyle keşifsel analiz + basit sınıflandırma modeli.
3. **Müşteri yolculuğu ve "değersiz temas" analizi:** Temas nedenlerini sınıflandırıp azaltılabilir temas payını gösteren çalışma (anonimleştirilmiş/sentetik veriyle).
4. **Anket/şikâyet metin analizi** (Python): NPS/CSAT açık yanıtlarından tema çıkarma ve duygu analizi.

> **Gizlilik kuralı (kritik):** Concentrix, Comdata veya müşterilerine ait gerçek veri, ekran görüntüsü ve metrik **kullanılmayacak**. Yalnızca açık veri setleri (ör. Kaggle), sentetik veri ya da işverenin yazılı iznini almış anonimleştirilmiş çalışmalar kullanılacak. Her vaka çalışmasında "Veri kaynağı" satırı açıkça yazılsın (örn. "Kaggle'daki herkese açık telekom müşteri veri seti").

Proje içerikleri `data/projects.json` (veya `projects.ts`) dosyasından okunsun ki Ayşe Hanım yeni proje eklerken kod değiştirmesin. Şema:

```json
{
  "slug": "cagri-merkezi-kpi-dashboard",
  "title": { "tr": "", "en": "" },
  "summary": { "tr": "", "en": "" },
  "problem": { "tr": "", "en": "" },
  "data": { "tr": "", "en": "" },
  "method": { "tr": "", "en": "" },
  "findings": { "tr": "", "en": "" },
  "impact": { "tr": "", "en": "" },
  "tools": ["Power BI", "SQL"],
  "cover": "/images/projects/kpi-cover.webp",
  "links": { "live": "", "github": "" },
  "confirmed": false
}
```

---

## 6. Tasarım sistemi

Üç yön hazırlandı. Siteyi **tek bir yön** olarak kodla, diğerlerini `theme` seçeneği olarak (CSS değişkenleri + hero arka plan modülü) değiştirilebilir bırak. Varsayılan: **Yön C**, kurumsal CX rolleri için en uygun olduğu için. Sahibi başka yön seçerse sadece tema dosyası değişsin.

### Ortak kurallar

- Okunabilirlik arka plan efektinden önce gelir. Efekt metnin arkasında düşük kontrastta kalsın.
- **Tek büyük hareket kuralı:** Hero'daki arka plan animasyonu sayfanın tek "gösterisi". Her bölüme fade/slide-up girişi ekleme, her karta hover animasyonu verme. Hareket sadece kullanıcı eylemine cevap veriyorsa (hover, açılma) kalsın.
- Kaçınılacaklar: tek kelimeyi renkle/italikle vurgulamak, büyük harfli etiketler, her başlığın üstüne küçük "eyebrow" etiketi, anlamsız numaralandırma (01/02/03), tek tip yuvarlak kart yığını, her yerde aynı gölge, süs amaçlı gradient.
- Satır uzunluğu en fazla ~65-80 karakter. Tip ölçeği tutarlı (modüler ölçek).
- `prefers-reduced-motion: reduce` ise animasyon yok, hero'da son durum statik görünsün.
- Mobil öncelikli. Dokunma hedefleri en az 48px. Klavye odağı görünür olsun. Tüm renk çiftleri WCAG AA kontrastı sağlasın.
- Mobil cihazda güvenli alanlar: `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` ve `env(safe-area-inset-*)` kullan.

### Yön A: Lacivert + teal (koyu, "dağınık veri grafiğe dönüşür")

| Token | Koyu | Açık |
|---|---|---|
| `--bg` | `#14213d` | `#f4f7fb` |
| `--ink` | `#eef2f9` | `#15233f` |
| `--muted` | `#a3b3cf` | `#55657f` |
| `--teal` | `#3fd0c9` | `#0b8f9c` |
| `--amber` | `#ffb347` | `#d9780b` |
| `--dim` | `#7389b0` | `#8d9db8` |

Yazı tipleri: **Bricolage Grotesque** (başlık, 700), **Instrument Sans** (gövde). Düğmeler yuvarlak (pill).

### Yön B: Siyah, beyaz, gri (koyu, "bağlanan düğüm ağı")

| Token | Değer |
|---|---|
| `--bg` | `#171717` |
| `--ink` | `#f5f5f5` |
| `--muted` | `#a3a3a3` |
| `--line` | `rgba(245,245,245,.22)` |
| `--node` | `#d4d4d4` |
| `--on` (düğme üstü yazı) | `#171717` |

Yazı tipleri: **Schibsted Grotesk** (başlık, 800), **Hanken Grotesk** (gövde). Düğmeler hafif köşeli (6px).

### Yön C: Beyaz, lacivert, açık yeşil (açık, "ısı haritası ızgarası", varsayılan)

| Token | Değer |
|---|---|
| `--bg` | `#fbfdfb` |
| `--navy` (ana yazı) | `#12264a` |
| `--muted` | `#4b5b78` |
| `--line` | `rgba(18,38,74,.2)` |
| `--green` (vurgu) | `#8fd9a8` |
| `--mint` (hero yıkaması) | `#e3f6ea` |

Yazı tipleri: **Fraunces** (başlık, 700 serif), **Figtree** (gövde). Düğmeler yuvarlak. **Açık yeşil düşük kontrastlıdır: asla yazıda kullanma**, yalnızca ızgara hücreleri, kenar çizgileri, odak halkası ve dolgularda kullan.

### Hero arka plan algoritmaları

Hepsi tek bir `<canvas>`, hero bölümünü kaplar (`position:absolute; inset:0`), `devicePixelRatio` (en fazla 2) ile ölçeklenir, `ResizeObserver` ile yeniden kurulur, `aria-hidden="true"`.

**A: Veri noktaları grafiğe dönüşür**
- Masaüstü ~1000, mobil ~560 nokta (hedef nokta sayısı + ambiyans noktaları: masaüstü 300, mobil 160).
- Sağ sütundaki "sahne" (`.stage`) alanında bir bar grafik (7 sütun, değerler `[.32,.46,.4,.58,.66,.62,.88]`, her sütun 3 hücre genişliğinde), sütun tepelerini yumuşak (smoothstep) eğriyle bağlayan turuncu trend çizgisi ve bir taban çizgisi oluşturulur. Hücre aralığı `max(8, stageWidth/42)`. Mobilde sahne metnin altına iner (yükseklik ~240px).
- Zaman çizelgesi: 16 sn döngü. 0-2,4 sn dağınık, 2,4-11,5 sn grafik oluşmuş, sonra tekrar dağılır. `w += (hedef - w) * 0.025` ile yumuşat.
- Fizik: yay `(tx - x) * 0.014 * w`, sönümleme `v *= 0.9`, dağınıkken sinüs/kosinüs akış alanı (`~0.05`), fare itmesi (yarıçap 100px, kuvvet ~1,1).
- Hedefe giden noktalar teal, çizgi noktaları amber, taban noktaları dim; ambiyans noktaları düşük alfa (~0.28) ile hep dağınık kalır.

**B: Bağlanan düğüm ağı**
- Masaüstü ~105, mobil ~55 düğüm; her 7. düğüm "parlak" (yarıçap 3, nabız halkası).
- Bağlantı mesafesi `R` açılışta ~14px'ten ~150px'e smoothstep ile 1,2 sn'den sonra 3,6 sn'de büyür (dağınık → bağlı). Çizgi alfası `(1 - d/R) * (parlak ? .55 : .28)`.
- Fare yaklaşınca 170px içindeki düğümler imleçle çizgiyle bağlanır ve düğümler hafifçe imlece çekilir.
- Düğümler kenarlardan sekerek yavaş sürüklenir. Canvas'a `mask-image` ile sol tarafta (metin altı) görünürlük kısılır.

**C: Isı haritası ızgarası**
- Hücre boyutu masaüstü 28px, mobil 22px. Her hücre için `v = .5 + .5 * sin(x*.33 + t*.55) * cos(y*.29 - t*.42)`.
- Hücre kare boyutu `1.6 + v² * 7`. `v > .68` ise açık yeşil (alfa .95), değilse lacivert (alfa `.14 + v*.2`).
- Açılışta dalga: ön cephe `(t - .5) * W * .55` hızıyla sağdan sola/yukarıdan aşağıya ilerler, hücreler bu cepheden geçtikçe smoothstep ile belirir (260px geçiş bandı).
- Canvas'a `mask-image: linear-gradient(90deg, transparent 15%, #000 70%)` (mobilde dikey) uygula. Hero zeminine sağ üstte `radial-gradient` ile `--mint` yıkaması ekle.

---

## 7. Teknik gereksinimler

- **Önerilen yığın:** Astro (veya Next.js statik export) + TypeScript + Tailwind CSS. Statik çıktı, GitHub Pages/Netlify/Vercel'de ücretsiz yayın. Basit tutmak istenirse düz HTML/CSS/vanilla JS de kabul edilir, ama içerik yine JSON'dan okunmalı.
- **i18n:** `tr` ve `en` sözlükleri, URL'de `/` (TR) ve `/en` (EN). `<html lang>` doğru ayarlansın, `hreflang` etiketleri eklensin.
- **Performans:** Lighthouse mobil hedefleri: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95. Görseller WebP/AVIF, `loading="lazy"`, boyutları belirtilmiş. Yazı tipleri `display=swap` ile, gerçek yedek (fallback) yığınlarıyla.
- **Canvas performansı:** Sekme görünmezken animasyon durur (rAF zaten durur), mobilde nokta sayısı düşük, `devicePixelRatio` ≤ 2.
- **SEO:** `<title>`, `meta description` (TR/EN), Open Graph + Twitter kartı (önizleme görseli), `Person` şeması (JSON-LD: name, jobTitle "Veri Analisti", sameAs LinkedIn, knowsAbout), `sitemap.xml`, `robots.txt`.
- **Erişilebilirlik:** Anlamlı başlık hiyerarşisi (tek `h1`), "içeriğe atla" bağlantısı, süs amaçlı canvas `aria-hidden`, görsellerde anlamlı `alt`, klavye ile tüm etkileşimler, görünür odak.
- **Gizlilik:** Çerez/analitik kullanılacaksa gizlilik dostu çözüm (ör. Plausible, Umami) ve kısa bir gizlilik notu. Kişisel e-posta, telefon, adres kamuya açık yazılmayacak (sahibinden onay olmadan).
- **Güvenlik/CSP:** Harici betik yalnızca gerekliyse ve sürümü sabitlenmiş şekilde. Üçüncü taraf yazı tipleri dışında dış bağımlılık yok.

### Önerilen klasör yapısı

```
/src
  /components   Hero, HeroBackground (A|B|C), ProjectCard, Timeline, SkillGroup, ContactSection, LangSwitch
  /data         projects.json, experience.json, skills.json, i18n/tr.json, i18n/en.json
  /styles       tokens.css (tema değişkenleri), global.css
  /pages        index, en/index
/public
  /images, /cv/ayse-yalcin-cv.pdf, og-image.png, favicon.svg
README.md       Varsayımlar, çalıştırma, içerik ekleme rehberi
```

---

## 8. Çalışma sırası

1. Proje iskeletini kur (yığın, `tokens.css`, i18n altyapısı, klasör yapısı).
2. Tema değişkenlerini üç yön için tanımla, varsayılanı Yön C yap.
3. **Hero'yu** bitir (metin, düğmeler, alt bilgi şeridi, `HeroBackground` modülü). Önce Yön C, sonra A ve B'yi tema olarak ekle.
4. `projects.json` şemasıyla proje kartlarını ve detay görünümünü kur (yer tutucu içerikle).
5. Hakkımda + kariyer çizgisi, yetkinlikler, deneyim, sertifikalar, iletişim bölümlerini ekle.
6. TR/EN çevirilerini tamamla, dil anahtarını bağla.
7. Erişilebilirlik, performans, SEO geçişi. Mobil (360px) ve masaüstü (1440px) kontrolü.
8. `README.md` yaz: kurulum, yayın, yeni proje ekleme, tema değiştirme, Varsayımlar ve TODO listesi.

---

## 9. Kabul kriterleri

- [ ] 360px genişlikte yatay kaydırma yok, tüm düğmeler ≥ 48px.
- [ ] Hero metni arka plan animasyonunun üstünde rahat okunuyor (AA kontrast).
- [ ] `prefers-reduced-motion` açıkken animasyon yok, hero statik ve eksiksiz görünüyor.
- [ ] Yeni proje eklemek için yalnızca `projects.json`'a kayıt eklemek yetiyor.
- [ ] TR ve EN sürümler birebir içerik eşleşmesine sahip.
- [ ] Gerçek şirket/müşteri verisi, ekran görüntüsü ya da uydurma metrik sitede yok.
- [ ] Lighthouse hedefleri (Bölüm 7) sağlanıyor.
- [ ] Tasarımda "kaçınılacaklar" listesindeki kalıplar yok.

---

## 10. Sahibine sorulacaklar (TODO listesi)

1. Concentrix ve Comdata rollerinin doğru başlangıç/bitiş tarihleri.
2. Sitede herkese açık gösterilecek e-posta (veya form tercihi).
3. Projelerde kullanılabilecek, paylaşım izni olan çalışmalar ve ölçülebilir sonuçlar (örn. "memnuniyet skoru %X arttı", "değersiz temas %Y azaldı").
4. Profesyonel fotoğraf kullanılacak mı? (Varsa Hakkımda bölümüne yerleştir.)
5. Güncel CV (PDF). Dosya adı: `ayse-yalcin-cv.pdf`.
6. Referans/öneri cümleleri kullanılabilir mi?
7. Blog veya LinkedIn yazıları bağlanacak mı?
8. Hedef rol/sektör önceliği (CX analitiği mi, genel BI mı?). Hero alt metni ve proje sıralaması buna göre ince ayar yapılabilir.
9. "8 sektör" ifadesi doğru mu? (LinkedIn listesinden sayıldı.)

---

## 11. Yapay zekaya başlangıç komutu (kopyala-yapıştır)

> Bu `PROJECT_BRIEF.md` dosyasının tamamını oku. Bölüm 8'deki çalışma sırasını takip ederek siteyi kur. Önce proje iskeletini ve Yön C'nin hero bölümünü bitir, bana çalışan bir önizleme ver, sonra devam et. Belirsiz noktalarda varsayım yap ve `README.md` içine "Varsayımlar" olarak yaz. Bölüm 6'daki "kaçınılacaklar" listesine ve Bölüm 5'teki gizlilik kuralına kesinlikle uy. Uydurma metrik veya gerçek müşteri verisi kullanma, bilmediğin yerlere `{{YER_TUTUCU}}` bırak.
