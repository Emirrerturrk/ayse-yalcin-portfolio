# 07 - Aşama ve Öncelik Yol Haritası (Roadmap)

Bu doküman, projenin adım adım hayata geçirilmesinde izlenecek fazları, öncelikleri ve kabul kriterlerini belirler.

---

## Aşama ve Öncelik Matrisi

```
[FAZ 1] Context & İskelet (Öncelik: P0 - Kritik) ───────────► TAMAMLANIYOR
   │
   ▼
[FAZ 2] Next.js & Hero B Ağ Tasarımı (Öncelik: P0 - Kritik)
   │
   ▼
[FAZ 3] Portföy Bölümleri & TR/EN i18n (Öncelik: P1 - Yüksek)
   │
   ▼
[FAZ 4] Supabase Veritabanı & Storage (Öncelik: P1 - Yüksek)
   │
   ▼
[FAZ 5] Laravel Filament Admin Paneli (Öncelik: P2 - Orta/Yüksek)
   │
   ▼
[FAZ 6] GitHub, Vercel Deploy & SEO/Lighthouse (Öncelik: P0 - Çıkış)
```

---

## Faz Detayları ve Kontrol Listeleri

### FAZ 1: Context Dokümantasyonu ve Proje İskeleti (Öncelik: P0)
- [x] `PROJECT_BRIEF.md`, `Profile.pdf` ve tasarım dosyalarının incelenmesi.
- [x] Tüm sistemin modüler Türkçe `context/` dokümanlarına bölünmesi (`01` - `07`).
- [x] `proje-baslat` standardında `AGENTS.md`, `notes.md`, `GOALS.md`, `TODO.md`, `CONSTANTS.md`, `DECISIONS.md`, `BAGIMLILIKLAR.md` kurulumu.
- [x] Supabase MCP durumunun analiz edilmesi ve kullanıcıya netleştirilmesi.

### FAZ 2: Next.js Temeli ve Hero B React Dönüşümü (Öncelik: P0)
- [ ] Next.js (App Router, TypeScript, Tailwind/Tokens) projesinin başlatılması.
- [ ] `Schibsted Grotesk` ve `Hanken Grotesk` fontlarının ve CSS tokenlarının yapılandırılması.
- [ ] `Ayşe Yalçın - Hero B (siyah beyaz ağ).html` dosyasının piksel hassasiyetiyle React/Next.js bileşenine (`HeroSection.tsx` & `CanvasNetwork.tsx`) dönüştürülmesi.
- [ ] Canvas ağ algoritmasının (smoothstep büyüme, fare çekimi, darbe halkaları, mobilde 55 / masaüstünde 105 düğüm) kusursuz çalışması.
- [ ] `prefers-reduced-motion` erişilebilirlik kontrolü.

### FAZ 3: Sayfa Bileşenleri ve İçerik İnşası (Öncelik: P1)
- [ ] Projeler Bölümü (`ProjectsSection` & `ProjectCard`): 4 vaka analizi şablonunun oluşturulması.
- [ ] Hakkımda & Kariyer Çizgisi (`AboutSection` & `CareerTimeline`): 14 yıllık CX'ten analitiğe geçiş hikâyesi.
- [ ] Yetkinlikler & Sektörler (`SkillsSection`): Gruplanmış araçlar ve 8 sektör bandı.
- [ ] Deneyim Bölümü (`ExperienceSection`): Rol kartları ve metrik yer tutucuları.
- [ ] Sertifikalar & Eğitim (`CertificatesSection`).
- [ ] İletişim Bölümü (`ContactSection`): LinkedIn, e-posta, CV indirme aksiyonları.
- [ ] TR / EN çoklu dil sözlük altyapısının bağlanması.

### FAZ 4: Supabase Veritabanı ve Medya Deposu (Öncelik: P1)
- [ ] Supabase projesinde tabloların oluşturulması (`projects`, `experiences`, `skills`, `messages`, `site_settings`).
- [ ] RLS (Row Level Security) güvenlik politikalarının tanımlanması.
- [ ] Next.js Supabase istemcisinin (`@supabase/supabase-js`) bağlanması; statik JSON ile veritabanı yedeğinin çift yönlü çalışması.

### FAZ 5: Laravel Filament Admin Paneli (Öncelik: P2)
- [ ] Laravel 11/12 projesinin ve Filament v3 paketinin kurulması.
- [ ] Supabase PostgreSQL veritabanına bağlanması.
- [ ] Proje ekleme/düzenleme, deneyim yönetimi ve mesaj görüntüleme panellerinin oluşturulması.

### FAZ 6: Dağıtım, Performans ve SEO Denetimi (Öncelik: P0)
- [ ] Git deposunun hazırlanması ve GitHub'a pushlanması.
- [ ] Vercel üzerinde projenin yayına alınması (Production Deploy).
- [ ] JSON-LD (`Person` şeması), Open Graph ve Twitter kartlarının kontrolü.
- [ ] Lighthouse testi: Mobil Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 hedeflerinin tutturulması.
