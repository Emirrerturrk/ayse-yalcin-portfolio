export interface ProjectData {
  id: string;
  slug: string;
  title: { tr: string; en: string };
  metric: { tr: string; en: string };
  category: { tr: string; en: string };
  summary: { tr: string; en: string };
  problem: { tr: string; en: string };
  data: { tr: string; en: string };
  method: { tr: string; en: string };
  findings: { tr: string; en: string };
  impact: { tr: string; en: string };
  tools: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

export const PROJECTS: ProjectData[] = [
  {
    id: "p1",
    slug: "cagri-merkezi-kpi-paneli",
    title: {
      tr: "Çağrı merkezi KPI paneli",
      en: "Call Center KPI Dashboard",
    },
    metric: {
      tr: "+%14 SLA İyileşmesi",
      en: "+14% SLA Lift",
    },
    category: {
      tr: "Operasyonel Zeka & BI",
      en: "Operational Intelligence & BI",
    },
    summary: {
      tr: "AHT, FCR, CSAT ve SLA göstergelerini vardiya ve kuyruk bazında tek ekranda toplayan interaktif operasyon yönetim paneli.",
      en: "Executive dashboard consolidating AHT, FCR, CSAT, and SLA across shifts and queues in a unified operational view.",
    },
    problem: {
      tr: "Günde 15.000+ çağrı alan operasyonda, vardiya liderlerinin anlık kuyruk ve FCR düşüşlerini geç fark etmesi sonucu bekleme sürelerinin kritik seviyeyi aşması.",
      en: "In an operation receiving 15,000+ calls daily, shift supervisors noticed concurrency spikes too late, breaching SLA thresholds.",
    },
    data: {
      tr: "Anonimleştirilmiş sentetik santral (IVR/ACD) çağrı logları ve CRM bilet kayıtları (120.000+ satır).",
      en: "Anonymized synthetic ACD/IVR call logs and CRM tickets (120,000+ rows).",
    },
    method: {
      tr: "SQL Yıldız Şema modelleme, DAX ile ağırlıklı bekleme süresi ve ilk temasta çözüm formülasyonu, Power BI ısı haritaları ve vardiya filtreleri.",
      en: "Star-schema dimensional modeling in SQL, weighted wait-time DAX measures, and drill-through heatmap filters in Power BI.",
    },
    findings: {
      tr: "Vardiya devir teslim aralıklarında (12:00-14:00) çağrı pik yaparken mola dağılımının dengesiz planlandığı tespit edildi.",
      en: "Discovered that shift handover intervals (12:00-14:00) overlapped with peak incoming traffic and unbalanced break allocations.",
    },
    impact: {
      tr: "Vardiya ve mola optimizasyonu simülasyonu ile SLA karşılama oranında %14 artış, ortalama bekleme süresinde 35 saniye tasarruf öngörüldü.",
      en: "Shift and break rebalancing simulation projected a 14% SLA gain and 35-second average wait time reduction.",
    },
    tools: ["Power BI", "SQL", "DAX", "Data Modeling"],
    links: {
      github: "https://github.com/ayseyalcin/call-center-kpi-dashboard",
    },
  },
  {
    id: "p2",
    slug: "musteri-kaybi-analizi",
    title: {
      tr: "Müşteri kaybı (churn) analizi",
      en: "Customer Churn Prediction",
    },
    metric: {
      tr: "%82 ROC-AUC Doğruluğu",
      en: "82% ROC-AUC Accuracy",
    },
    category: {
      tr: "Makine Öğrenmesi & Tahminleme",
      en: "Machine Learning & Prediction",
    },
    summary: {
      tr: "Açık bir telekom veri setiyle müşteri terkini tetikleyen kök nedenleri saptayan ve riskli müşterileri proaktif listeleyen sınıflandırma modeli.",
      en: "Classification workflow identifying churn root-causes and isolating high-risk subscriber segments on open telecom data.",
    },
    problem: {
      tr: "Aylık müşteri terk oranının yükselmesi ve müşteri kazanım ekiplerinin elde tutma bütçesini doğru hedeflere yönlendirememesi.",
      en: "Rising customer attrition where retention campaigns suffered from untargeted blanket discount offers.",
    },
    data: {
      tr: "Kaggle Telco Customer Churn açık veri seti (7.043 müşteri, sözleşme, fatura ve destek geçmişi).",
      en: "Kaggle Telco Customer Churn public dataset (7,043 customers, contract, tenure, and billing metrics).",
    },
    method: {
      tr: "Python (Pandas, Scikit-Learn) ile keşifsel veri analizi, eksik veri doldurma, Random Forest ve Logistic Regression modelleri ile Feature Importance analizi.",
      en: "Exploratory data analysis in Pandas, cross-validated feature importance ranking via Random Forest & Logistic Regression.",
    },
    findings: {
      tr: "Aydan aya sözleşmeli ve ilk 6 ayında 3'ten fazla destek arayan fiber abonelerinin terk olasılığının 4.2 kat daha yüksek olduğu ortaya çıktı.",
      en: "Month-to-month fiber customers calling support >3 times during their first 6 months exhibited a 4.2x higher churn propensity.",
    },
    impact: {
      tr: "Risk skoru yüksek müşteriler için erken müdahale ve proaktif teknik destek akışı modellendi (%82 ROC-AUC).",
      en: "Engineered an early-alert retention workflow yielding an 82% ROC-AUC score.",
    },
    tools: ["Python", "SQL", "Scikit-Learn", "Pandas", "Seaborn"],
    links: {
      github: "https://github.com/ayseyalcin/telecom-churn-prediction",
    },
  },
  {
    id: "p3",
    slug: "degersiz-temas-analizi",
    title: {
      tr: "Değersiz temas analizi",
      en: "Valueless Contact Reduction",
    },
    metric: {
      tr: "Aylık 8.000+ Çağrı Tasarrufu",
      en: "8,000+ Deflected Calls/Mo",
    },
    category: {
      tr: "CX Süreç & Maliyet Optimizasyonu",
      en: "CX Journey & Cost Optimization",
    },
    summary: {
      tr: "Temas nedenlerini sınıflandırıp self-servisle çözülebilecek çağrı payını ve operasyonel tasarruf potansiyelini ortaya koyan çalışma.",
      en: "Categorizing inquiry intents to model self-service diversion potential and direct operational call deflection.",
    },
    problem: {
      tr: "Müşteri temsilcilerinin zamanının %30'unu şifre ve fatura tutarı sorma gibi dijitalden çözülmesi gereken katma değersiz temaslara harcaması.",
      en: "Call agents spending 30% of their handling time answering basic transactional inquiries resolvable in self-service.",
    },
    data: {
      tr: "Anonimleştirilmiş 50.000 çağrı işlem kodu, süreleri ve müşteri tekrar arama aralıkları.",
      en: "Anonymized 50,000 call disposition logs, durations, and repeat-contact timestamps.",
    },
    method: {
      tr: "Temas ağacı Pareto analizi, tekrarlayan çağrı korelasyon matrisi ve Tableau üzerinde kök neden haritalaması.",
      en: "Pareto disposition decomposition, repeat-call correlation matrices, and root-cause visualization in Tableau.",
    },
    findings: {
      tr: "Fatura kesimini takip eden ilk 48 saatte gelen çağrıların %42'sinin sadece fatura kalemlerini anlamaya yönelik olduğu saptandı.",
      en: "Found that 42% of calls logged within 48 hours of monthly invoice dispatch were simple line-item clarification questions.",
    },
    impact: {
      tr: "Mobil uygulama fatura dökümü UX iyileştirmesi ile çağrı merkezinde aylık 8.000+ gereksiz temasın önlenmesi simüle edildi.",
      en: "Modeled prevention of 8,000+ monthly calls by redesigning the mobile app breakdown interface.",
    },
    tools: ["Python", "SQL", "Tableau", "CX Journey"],
    links: {
      github: "https://github.com/ayseyalcin/valueless-contact-analytics",
    },
  },
  {
    id: "p4",
    slug: "anket-metin-analizi",
    title: {
      tr: "Anket metin analizi (NLP)",
      en: "Survey NLP & Sentiment",
    },
    metric: {
      tr: "< 15 Dk Otomatik Alarm",
      en: "< 15 Min Critical Alert",
    },
    category: {
      tr: "Metin Madenciliği & Duygu Analizi",
      en: "Text Mining & Sentiment",
    },
    summary: {
      tr: "NPS ve CSAT açık uçlu müşteri geri bildirimlerinden duygu ve kök şikayet temalarını otomatik çıkaran doğal dil işleme modeli.",
      en: "Natural language processing pipeline clustering customer sentiment and surfacing underlying complaints from verbatim surveys.",
    },
    problem: {
      tr: "Aylık 20.000+ serbest metin anket yorumunun elle incelenememesi sebebiyle kritik müşteri hoşnutsuzluklarının haftalar sonra fark edilmesi.",
      en: "Unstructured verbatim comments (20,000+/mo) remained largely unread, obscuring emergent service defects for weeks.",
    },
    data: {
      tr: "Herkese açık e-ticaret ve hizmet müşteri deneyimi anket veri seti (Türkçe metinler).",
      en: "Public Turkish customer satisfaction survey reviews and feedback dataset.",
    },
    method: {
      tr: "Python NLTK, Türkçe lemmatizasyon, TF-IDF ve LDA Konu Modelleme algoritmaları ile anahtar tema çıkarımı.",
      en: "Turkish tokenization, TF-IDF feature extraction, and Latent Dirichlet Allocation (LDA) for unsupervised topic clustering.",
    },
    findings: {
      tr: "Puanı 8-9 (Promoter) olan müşterilerin bile %18'inin kargo teslimat hızı konusunda gizli şikayet belirttiği keşfedildi.",
      en: "Discovered that 18% of NPS Promoter respondents (scoring 8-9) expressed latent frustration regarding courier delays.",
    },
    impact: {
      tr: "Otomatik duygu ve acil durum etiketi ile negatif yorumların 15 dakika içinde ilgili departmana iletilmesi sağlandı.",
      en: "Built a classification trigger routing critical escalations to customer advocacy managers within 15 minutes.",
    },
    tools: ["Python", "NLTK", "Power BI", "NLP"],
    links: {
      github: "https://github.com/ayseyalcin/cx-sentiment-nlp",
    },
  },
];

export const MILESTONES = [
  {
    id: 1,
    step: "01",
    title: { tr: "Satış Temsilcisi", en: "Sales Agent" },
    desc: { tr: "Müşterinin sesini sahada doğrudan dinleme", en: "Frontline customer listening" },
    period: "2010 - 2011",
  },
  {
    id: 2,
    step: "02",
    title: { tr: "Takım Lideri", en: "Team Lead" },
    desc: { tr: "Operasyon yönetimi, hedef & KPI takibi", en: "Operations & daily KPI execution" },
    period: "2011 - 2019",
  },
  {
    id: 3,
    step: "03",
    title: { tr: "CX Uzmanı", en: "CX Specialist" },
    desc: { tr: "Müşteri yolculuğu analizi ve temas iyileştirme", en: "Journey mapping & touchpoint analytics" },
    period: "2019 - 2022",
  },
  {
    id: 4,
    step: "04",
    title: { tr: "Kıdemli CX Uzmanı", en: "Senior CX Specialist" },
    desc: { tr: "Uçtan uca deneyim ve değersiz temas azaltma", en: "End-to-end journey & valueless contact" },
    period: "2022",
  },
  {
    id: 5,
    step: "05",
    title: { tr: "Analiz Yöneticisi", en: "Analysis Manager" },
    desc: { tr: "Büyük veri, stratejik içgörü & iş kararları", en: "Data intelligence, modeling & decisions" },
    period: "2022 - Günümüz",
  },
];

export const SECTORS = [
  { id: 1, title: { tr: "Telekom", en: "Telecom" } },
  { id: 2, title: { tr: "Seyahat", en: "Travel" } },
  { id: 3, title: { tr: "E-Ticaret", en: "E-Commerce" } },
  { id: 4, title: { tr: "Finans & Sigorta", en: "Finance & Insurance" } },
  { id: 5, title: { tr: "Enerji", en: "Energy" } },
  { id: 6, title: { tr: "Otomotiv", en: "Automotive" } },
  { id: 7, title: { tr: "İletişim Hizmetleri", en: "Communication Services" } },
  { id: 8, title: { tr: "Medya & Eğlence", en: "Media & Entertainment" } },
];
