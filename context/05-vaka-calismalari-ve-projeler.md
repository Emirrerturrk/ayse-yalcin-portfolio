# 05 - Vaka Çalışmaları ve Projeler (Vitrin)

Bu doküman, Ayşe Yalçın'ın veri analitiği yetkinliğini ispatlayan 4 ana vaka çalışmasını, veri şemasını ve kritik gizlilik kurallarını tanımlar.

---

## 1. Kritik Gizlilik Kuralı (Non-Disclosure Principle)

> **KESİNLİKLE UYULACAK KURAL:**  
> Concentrix, Comdata veya geçmişteki müşterilere ait gerçek ticari veriler, kurum içi ekran görüntüleri, gizli formüller ve müşteri kimlikleri ASLA kullanılmayacaktır.  
> Tüm vaka çalışmalarında:
> 1. Herkese açık kamuya açık veri setleri (Kaggle vb.),
> 2. Tamamen sentetik/simüle edilmiş anonim veri setleri,
> 3. İzinli ve anonimleştirilmiş akademik veriler kullanılacaktır.  
> Her vakanın altında veri kaynağı açıkça beyan edilecektir.

---

## 2. Sabit Vaka Çalışması Metodolojisi

Her proje kartı ve detay sayfası şu editoryal akışı izler:
1. **Problem:** İşletmenin veya operasyonun karşılaştığı darboğaz neydi?
2. **Veri:** Hangi veri kaynakları ve metrikler incelendi? (Açık kaynak beyanı ile)
3. **Yöntem:** Veri temizleme, SQL sorguları, istatistiksel modelleme veya görselleştirme adımları.
4. **Bulgu:** Analiz sonucunda keşfedilen kök nedenler ve örüntüler.
5. **Aksiyon & Etki:** Operasyona veya iş kararına ne kazandırıldı? (Ölçülebilir çıktı)
6. **Araçlar & Bağlantılar:** Kullanılan teknolojiler (Power BI, Python, SQL vb.), Canlı Dashboard bağlantısı ve GitHub kod deposu.

---

## 3. Planlanan 4 Temel Vaka Çalışması

### Proje 1: Çağrı Merkezi Operasyonel KPI Dashboard'u (Vitrin Projesi)
- **Araçlar:** Microsoft Power BI, SQL, DAX
- **Özet:** 14 yıllık saha deneyiminin dashboard tasarımına yansıması: AHT (Ortalama Çağrı Süresi), FCR (İlk Temasta Çözüm), CSAT, SLA ve vardiya doluluk oranlarını tek ekranda toplayan interaktif operasyon paneli.
- **Odak:** Operasyon liderinin ve takım liderinin gün içi aksiyon alabileceği hiyerarşik filtreleme ve anomali tespiti.

### Proje 2: Müşteri Terk (Churn) Analizi ve Erken Uyarı Modeli
- **Araçlar:** Python (Pandas, Scikit-Learn), SQL, Seaborn
- **Özet:** Açık telekom veri seti üzerinde müşteri kaybını tetikleyen temel faktörlerin analizi ve churn riski taşıyan müşterileri tespit eden sınıflandırma modeli.
- **Odak:** Hangi tarife ve müşteri temas noktalarının churn'ü tetiklediğinin bulunması ve elde tutma (retention) stratejisi önerileri.

### Proje 3: Müşteri Yolculuğu ve "Değersiz Temas" (Valueless Contact) Azaltma
- **Araçlar:** SQL, Python, Tableau
- **Özet:** Müşterilerin tekrar eden çağrı nedenlerini ve self-servis kanallarda çözülemeyen adımları analiz ederek çağrı merkezine binen gereksiz yükü optimize etme çalışması.
- **Odak:** Dijital kanalların güçlendirilmesi ve çağrı hacminde %15-20 oranında iyileştirme sağlayan aksiyon planı simülasyonu.

### Proje 4: Müşteri Geri Bildirimleri ve Şikâyet Metin Analizi (NLP / Sentiment)
- **Araçlar:** Python (NLTK/spaCy, VADER/Transformers), Power BI
- **Özet:** NPS ve CSAT anketlerindeki serbest metin yorumlarının doğal dil işleme teknikleriyle sınıflandırılması, duygu puanı hesabı ve kök neden haritalaması.
- **Odak:** Sayısal anket puanının arkasında yatan gerçek müşteri duygu ve taleplerini otomatik kategorize etme.

---

## 4. Veri Modeli ve Şeması (`data/projects.json` & Supabase Table)

Projelerin dinamik olarak yönetilebilmesi için belirlenen şema:

```typescript
export interface ProjectItem {
  id: string;
  slug: string;
  title: { tr: string; en: string };
  summary: { tr: string; en: string };
  problem: { tr: string; en: string };
  data_source: { tr: string; en: string };
  method: { tr: string; en: string };
  findings: { tr: string; en: string };
  impact: { tr: string; en: string };
  tools: string[];
  cover_image: string;
  preview_video_or_gif?: string;
  links: {
    live_demo?: string;
    github?: string;
  };
  featured: boolean;
  order: number;
}
```
