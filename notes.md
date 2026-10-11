# Notlar

## Döküm (Ham, Ekran Ekran)
- **Hero Bölümü:** Üst çubuk (Ayşe Yalçın / Veri analisti / dil seçici), H1 ("Müşteriyi 14 yıldır dinliyorum." / "Şimdi verisinden de okuyorum."), alt açıklama paragrafı, 2 buton ("Projeleri gör" - birincil, "CV indir" - hayalet), alt şerit (14 yıl CX / 8 sektör / Python, SQL, Power BI, Tableau). Arka planda bağlanan interaktif düğüm ağı (Hero B canvas).
- **Projeler Bölümü:** 4 vaka analizi kartı (KPI Dashboard, Churn, Değersiz Temas, Anket NLP). Problem → Veri → Yöntem → Bulgu → Aksiyon/Etki kurgusu.
- **Hakkımda & Yolculuk:** 14 yıllık CX saha liderliğinden veri analitiğine evrilen kariyer hikayesi, sıralı zaman çizgisi (Satış → Takım Lideri → CX Uzmanı → Analiz Yöneticisi).
- **Yetkinlikler & Sektörler:** Araç grupları (Python, SQL, Power BI, Tableau, DOMO) ve 8 sektör rozeti. Kesinlikle progress bar veya yüzde çubuğu yok.
- **Deneyim Bölümü:** Concentrix, Comdata Group, Win Bilgi İletişim kartları ve ölçülebilir etki maddeleri.
- **Sertifikalar & Eğitim:** Sade, kurumsal liste.
- **İletişim & CV:** E-posta bağlantısı, LinkedIn profili, CV indirme aksiyonu ve güvenli iletişim formu.

## Mimari Taslak
### Bileşenler
- `frontend/`: Next.js (App Router), React, TypeScript, CSS Variables (Hero B tokenları), `@next/font/google`.
- `backend/`: Laravel 11/12 + Filament v3 Admin Paneli (Resources: Projects, Experiences, Contacts, Settings).
- `database/`: Supabase Managed PostgreSQL + Storage (CV & Görseller).
### Veri: Ne, Nereden, Nasıl Saklanır
- Ön yüz başlangıçta `data/projects.json`, `data/experience.json` ve i18n sözlüklerinden statik ve hızlı çalışabilir; aynı zamanda Supabase API üzerinden dinamik veri çekebilir.
- Admin panel (Filament) doğrudan Supabase veritabanına bağlanır ve CRUD işlemlerini yürütür.
### Yaz ya da Hazır Al
- Canvas Ağ Algoritması: `Ayşe Yalçın - Hero B (siyah beyaz ağ).html`'deki özel algoritma React bileşenine dönüştürülür (özel yazım).
- Admin Paneli: Laravel Filament v3 (hazır kurumsal paket).
- Tasarım: Hero B siyah-beyaz monokrom tasarım sistemi.

## Açık Sorular ve Teyit Bekleyenler
- Q1: Concentrix ve Comdata rollerinin LinkedIn'de üst üste binen tarihleri için net çalışma periyodu.
- Q2: Supabase MCP entegrasyonu: Sadece bu projeye özel `.agents/mcp_config.json` olarak mı bağlansın, yoksa global mi bağlansın?
- Q3: İletişim formu doğrudan Supabase `messages` tablosuna mı düşsün, yoksa e-posta tetikleyicisi de eklensin mi?
