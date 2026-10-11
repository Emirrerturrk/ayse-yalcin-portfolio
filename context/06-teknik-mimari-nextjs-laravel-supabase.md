# 06 - Teknik Mimari: Next.js, Laravel Filament ve Supabase

Bu doküman, sistemin ön yüz (Next.js), yönetim paneli (Laravel Filament), veritabanı (Supabase) ve barındırma/dağıtım (Vercel & GitHub) katmanlarının entegrasyon mimarisini tanımlar.

---

## 1. Mimari Genel Bakış

Sistem modern bir "Headless / Hybrid" yapıda kurgulanır:

```
                  ┌────────────────────────────────────────┐
                  │       Supabase (PostgreSQL + CDN)      │
                  │  - Projeler (projects)                 │
                  │  - Deneyimler (experiences)            │
                  │  - İletişim Mesajları (contacts)       │
                  │  - Storage Bucket (CV & görseller)     │
                  └───────────────┬────────────────────────┘
                                  │
                 ┌────────────────┴────────────────┐
                 ▼                                 ▼
   ┌───────────────────────────┐     ┌───────────────────────────┐
   │ Next.js Frontend (Vercel) │     │ Laravel + Filament Admin  │
   │ - App Router + TypeScript │     │ - Filament v3 Resource'lar│
   │ - Canvas Ağ Animasyonu    │     │ - Proje ekleme/düzenleme  │
   │ - i18n (TR / EN)          │     │ - Gelen mesajları okuma   │
   │ - ISR / SSR / Client Cache│     │ - Medya yükleme           │
   │ - Sıfır gecikme (Edge)    │     │ - Rol & Yetki yönetimi    │
   └─────────────┬─────────────┘     └───────────────────────────┘
                 │
                 ▼
      [GitHub Deposu & Vercel CI/CD]
```

---

## 2. Ön Yüz: Next.js (Vercel Deployment)

- **Sürüm & Altyapı:** Next.js (App Router), TypeScript, Tailwind CSS / Vanilla CSS Tokens.
- **Tipografi Entegrasyonu:** `@next/font/google` ile `Schibsted Grotesk` ve `Hanken Grotesk`.
- **Performans & Optimizasyon:**
  - Statik ve dinamik içerik dengesi (Incremental Static Regeneration - ISR veya Supabase Client).
  - Görseller: `next/image` ile WebP/AVIF dönüştürme ve lazy-loading.
  - Lighthouse hedefleri: Performance ≥ 95, Accessibility = 100, Best Practices = 100, SEO = 100.
- **Çoklu Dil (i18n):**
  - Türkçe varsayılan (`/`), İngilizce alternatif (`/en`).
  - SEO için `hreflang` etiketleri ve yerelleştirilmiş Open Graph meta verileri.

---

## 3. Veritabanı ve Medya: Supabase

- **Veritabanı Motoru:** Supabase Managed PostgreSQL.
- **Tablolar:**
  1. `projects` (slug, title, summary, problem, method, findings, impact, tools, cover_image, links, order, published)
  2. `experiences` (company, role, start_date, end_date, is_current, description, order)
  3. `skills` (category, name, icon, order)
  4. `messages` (name, email, subject, message, is_read, created_at)
  5. `site_settings` (hero_title, hero_sub, email, linkedin, cv_url)
- **Depolama (Storage Bucket):**
  - `portfolio-media`: Proje ekran görüntüleri, vaka görselleri.
  - `documents`: `ayse-yalcin-cv.pdf` özgeçmiş dosyası.
- **Güvenlik (RLS):**
  - Ön yüz (Next.js anon anahtarı ile): Yalnızca `published = true` olan kayıtları `SELECT` edebilir; `messages` tablosuna `INSERT` yapabilir.
  - Yönetim (Filament / Service Role): Tam yetki (CRUD).

---

## 4. Yönetim Paneli: Laravel 11/12 + Filament v3

- **Rol:** Ayşe Hanım'ın veya yöneticinin tek bir kod satırına dokunmadan projeleri, CV dosyasını, deneyimleri ve gelen iletişim mesajlarını yönetmesini sağlar.
- **Veritabanı Entegrasyonu:** Laravel `.env` dosyasında veritabanı sürücüsü olarak doğrudan Supabase PostgreSQL bağlantı bilgileri (`DB_CONNECTION=pgsql`, `DB_HOST=aws-0-eu-central-1.pooler.supabase.com` vb.) tanımlanır.
- **Filament Kaynakları (Resources):**
  - `ProjectResource`: Zengin metin editörü (TR/EN sekmeli), kapak görseli yükleyici, araç etiketleri seçimi.
  - `ExperienceResource`: Deneyim kartları sıralama ve düzenleme.
  - `MessageResource`: İletişim formundan düşen mesajların okunması, yanıtlandı işaretlenmesi.
  - `SiteSettingResource`: Sosyal medya linkleri ve CV güncelleme.

---

## 5. Dağıtım ve CI/CD (GitHub & Vercel)

1. **GitHub Deposu:**
   - Ön yüz ve monorepo veya ayrık repo yapısı.
   - Temiz commit geçmişi (`conventional commits`).
2. **Vercel Entegrasyonu:**
   - GitHub deposuna bağlı otomatik önizleme ve üretim dağıtımı.
   - Ortam değişkenleri (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
