"use client";

import React, { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import { PROJECTS, MILESTONES, SECTORS, ProjectData } from "@/data/content";

export default function HomePage() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ayseyalcindemir9750@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Sabit Arka Plan Canvas */}
      <ScrollCanvas />

      {/* SABİT HEADER (HER ZAMAN GÖRÜNÜR, İSİM ÖN PLANDA) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#171717]/85 backdrop-blur-md border-b border-[var(--line)] py-3 px-4 sm:px-[clamp(20px,6vw,88px)] flex justify-between items-center transition-all duration-300">
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-decoration-none"
        >
          <span className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-[var(--ink)] group-hover:text-white transition-colors">
            Ayşe Yalçın
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[var(--muted)] border border-[var(--line)] px-2.5 py-0.5 rounded-full font-mono bg-black/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {lang === "tr" ? "Veri Analisti & CX" : "Data Analyst & CX"}
          </span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[var(--muted)]">
            <a
              href="#projeler"
              className="hover:text-[var(--ink)] transition-colors"
            >
              {lang === "tr" ? "Projeler" : "Projects"}
            </a>
            <a
              href="#hakkimda"
              className="hover:text-[var(--ink)] transition-colors"
            >
              {lang === "tr" ? "Hakkımda" : "About"}
            </a>
            <a
              href="#sektorler"
              className="hover:text-[var(--ink)] transition-colors"
            >
              {lang === "tr" ? "Sektörler" : "Sectors"}
            </a>
            <a
              href="#iletisim"
              className="hover:text-[var(--ink)] transition-colors"
            >
              {lang === "tr" ? "İletişim" : "Contact"}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="px-2.5 py-1.5 rounded border border-[var(--line)] text-xs font-mono text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-all cursor-pointer bg-black/20"
              title="Dili değiştir / Switch language"
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>

            <button
              type="button"
              onClick={copyEmail}
              className="hidden sm:inline-flex btn btn-ghost !min-h-[36px] !py-0 !px-3.5 !text-xs"
            >
              {copiedEmail
                ? lang === "tr"
                  ? "Kopyalandı!"
                  : "Copied!"
                : lang === "tr"
                ? "İletişim"
                : "Contact"}
            </button>
          </div>
        </div>
      </header>

      {/* ANA İÇERİK */}
      <main className="relative z-10 w-full overflow-x-hidden">
        {/* HERO BÖLÜMÜ */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col justify-center px-4 sm:px-[clamp(20px,6vw,88px)] pt-32 sm:pt-36 pb-12 overflow-hidden"
        >
          {/* Hero Metinleri */}
          <div className="mt-auto max-w-4xl">
            <h1 className="font-display font-extrabold text-[clamp(2.1rem,6.5vw,5.6rem)] leading-[1.04] tracking-[-0.035em] mb-6 max-w-[17ch]">
              <span className="block text-[var(--muted)]">
                {lang === "tr"
                  ? "Müşteriyi 14 yıldır dinliyorum."
                  : "I've listened to customers for 14 years."}
              </span>
              <span className="block text-[var(--ink)]">
                {lang === "tr"
                  ? "Şimdi verisinden de okuyorum."
                  : "Now I read them in the data."}
              </span>
            </h1>

            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-[var(--muted)] max-w-[52ch] mb-8 font-body">
              {lang === "tr"
                ? "Telekomdan e-ticarete, finanstan enerjiye sekiz sektörde müşteri deneyimini yönettim. Şimdi SQL, Python ve Power BI ile bu deneyimi veriye, veriyi de karara dönüştürüyorum."
                : "From telecom to e-commerce, finance to energy, I've managed customer experience across eight industries. Now I turn that experience into data, and data into decisions with SQL, Python, and Power BI."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="#projeler" className="btn btn-primary justify-center">
                {lang === "tr" ? "Projeleri gör" : "View projects"}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-ghost justify-center"
              >
                {copiedEmail
                  ? lang === "tr"
                    ? "E-posta kopyalandı!"
                    : "Email copied!"
                  : lang === "tr"
                  ? "İletişime geç"
                  : "Get in touch"}
              </button>
            </div>
          </div>

          {/* Alt Bilgi Şeridi */}
          <ul className="facts">
            <li>
              <strong>{lang === "tr" ? "14 yıl" : "14 years"}</strong>
              <span>
                {lang === "tr"
                  ? "müşteri deneyimi"
                  : "customer experience"}
              </span>
            </li>
            <li>
              <strong>{lang === "tr" ? "8 sektör" : "8 sectors"}</strong>
              <span>
                {lang === "tr"
                  ? "telekom, e-ticaret, finans, enerji ve diğerleri"
                  : "telecom, e-commerce, finance, energy & others"}
              </span>
            </li>
            <li>
              <strong>Python, SQL, Power BI, Tableau</strong>
              <span>
                {lang === "tr" ? "günlük araçlarım" : "core tools"}
              </span>
            </li>
          </ul>
        </section>

        {/* PROJELER BÖLÜMÜ (PREMIUM EDİTORYAL VİTRİN) */}
        <section
          id="projeler"
          className="px-[clamp(20px,6vw,88px)] py-28 border-t border-[var(--line)]"
        >
          {/* Split Sahne Başlığı ve Bar Grafik Sahnesi */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 items-center min-h-[48vh] mb-12">
            <div>
              <div className="inline-block text-xs font-mono text-[var(--muted)] border border-[var(--line)] px-2.5 py-1 rounded mb-4">
                {lang === "tr" ? "Vaka Analizleri" : "Case Studies"}
              </div>
              <h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.03em] mb-4 text-[var(--ink)]">
                {lang === "tr"
                  ? "Dağınık veriden okunur bir tabloya."
                  : "From scattered points to clear decisions."}
              </h2>
              <p className="text-[var(--muted)] text-base md:text-[1.1rem] leading-[1.6] max-w-[44ch]">
                {lang === "tr"
                  ? "Dört analitik çalışma, aynı somut kurguyla anlatılıyor: problem, veri, yöntem, bulgu ve aksiyona dönen etki."
                  : "Four analytical case studies structured around problem, data, methodology, findings, and measurable business impact."}
              </p>
            </div>

            {/* Canvas Hedef Sahnesi (Bar Grafik & Trend Çizgisi) */}
            <div className="stage" id="stage" aria-hidden="true" />
          </div>

          {/* Premium Proje Kartları Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative bg-[#1c1c1c] border border-[var(--line)] rounded-xl p-7 hover:border-white/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xl overflow-hidden"
              >
                {/* Üst Bilgi Rozetleri */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[var(--muted)] border border-[var(--line)] px-2 py-0.5 rounded bg-black/40">
                      {project.category[lang]}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full font-mono">
                      {project.metric[lang]}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl tracking-[-0.015em] text-[var(--ink)] group-hover:text-white transition-colors mb-3">
                    {project.title[lang]}
                  </h3>

                  <p className="text-[var(--muted)] text-sm md:text-base leading-[1.6] mb-6">
                    {project.summary[lang]}
                  </p>
                </div>

                {/* Alt Araçlar ve İncele CTA */}
                <div className="pt-5 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[var(--muted)] bg-black/40 border border-[var(--line)] px-2 py-0.5 rounded font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink)] group-hover:translate-x-1 transition-transform">
                    {lang === "tr" ? "Vakayı İncele →" : "Read Case →"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HAKKIMDA BÖLÜMÜ (ÇERÇEVELİ VE NET KARİYER İSTASYONLARI) */}
        <section
          id="hakkimda"
          className="px-[clamp(20px,6vw,88px)] pt-16 pb-44 border-t border-[var(--line)]"
        >
          <div className="max-w-[62ch]">
            <div className="inline-block text-xs font-mono text-[var(--muted)] border border-[var(--line)] px-2.5 py-1 rounded mb-4">
              {lang === "tr" ? "Kariyer Yolculuğu" : "Career Trajectory"}
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.03em] mb-4 text-[var(--ink)]">
              {lang === "tr"
                ? "Sahadan analize: 14 yıl, tek yön."
                : "From frontline to analytics: 14 years forward."}
            </h2>
            <p className="text-[var(--muted)] text-base md:text-[1.1rem] leading-[1.6]">
              {lang === "tr"
                ? "Satış temsilcisiyken müşterinin ne istediğini, takım liderliğinde operasyonun nasıl işlediğini, CX uzmanlığında deneyimin nasıl ölçüldüğünü öğrendim. Şimdi bunların hepsini SQL, Python ve Power BI ile veriye dönüştürüyorum."
                : "As an agent, I learned what customers need; as a team lead, how operations scale; as a CX specialist, how loyalty is measured. Today, I translate this domain depth into rigorous data models."}
            </p>
          </div>

          {/* Canvas Hedef Sahnesi (Kariyer Eğrisi & Çerçeveli İstasyon Rozetleri) */}
          <div className="stage wide !h-[480px] md:!h-[min(54vh,440px)]" id="stage2">
            {MILESTONES.map((m) => (
              <div key={m.id} className="ms">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-[10px] md:text-xs font-mono text-emerald-400 font-extrabold bg-emerald-950/70 px-1.5 md:px-2 py-0.5 rounded border border-emerald-700/60">
                    {m.step}
                  </span>
                  <span className="font-bold text-xs sm:text-sm md:text-lg text-white tracking-tight">
                    {m.title[lang]}
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-[var(--muted)] mt-1 font-mono pl-0.5">
                  {m.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEKTÖRLER BÖLÜMÜ (ÇERÇEVELİ VE NET SEKTÖR ROZETLERİ) */}
        <section
          id="sektorler"
          className="px-4 sm:px-[clamp(20px,6vw,88px)] pt-16 pb-44 border-t border-[var(--line)]"
        >
          <div className="max-w-[62ch]">
            <div className="inline-block text-xs font-mono text-[var(--muted)] border border-[var(--line)] px-2.5 py-1 rounded mb-4">
              {lang === "tr" ? "Alan Derinliği" : "Domain Expertise"}
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.03em] mb-4 text-[var(--ink)]">
              {lang === "tr"
                ? "Sekiz sektör, aynı soru: müşteri ne yaşıyor?"
                : "Eight industries, one focus: the customer truth."}
            </h2>
            <p className="text-[var(--muted)] text-base md:text-[1.1rem] leading-[1.6]">
              {lang === "tr"
                ? "Telekomdan enerjiye farklı sektörlerde çalıştım. Sektör değişti, iş aynı kaldı: temas noktalarını ölç, nedenini bul, deneyimi iyileştir."
                : "Cross-industry tenure across telecom, finance, travel, and energy. Sectors differ, but the objective remains: measure touchpoints, isolate bottlenecks, elevate outcomes."}
            </p>
          </div>

          {/* Canvas Hedef Sahnesi (Dairesel 8 Dilimli Halka & Çerçeveli Rozetler) */}
          <div className="stage wide !h-[340px] md:!h-[min(56vh,480px)]" id="stage3">
            {SECTORS.map((s) => (
              <div key={s.id} className="sc flex items-center gap-1.5 md:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)] opacity-70 shrink-0" />
                <span className="font-bold text-xs md:text-base text-white tracking-tight truncate">
                  {s.title[lang]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* İLETİŞİM BÖLÜMÜ */}
        <section
          id="iletisim"
          className="min-h-screen flex items-center justify-center px-5 py-12 border-t border-[var(--line)]"
        >
          <div className="stage contact" id="stage4">
            <div className="ctc flex flex-col items-center text-center w-full max-w-[300px] z-20 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-[var(--line)] shadow-2xl">
              <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.7rem)] mb-2 text-[var(--ink)] tracking-tight">
                {lang === "tr" ? "Konuşalım." : "Let's talk."}
              </h2>
              <p className="text-[0.95rem] leading-[1.5] mb-6 text-[var(--muted)]">
                {lang === "tr"
                  ? "Veriyle ilgili bir fikir ya da analitik iş fırsatı için yaz."
                  : "Reach out for data roles, projects, or insights."}
              </p>

              <div className="flex flex-col w-full gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="btn btn-primary justify-center w-full"
                >
                  {lang === "tr" ? "İletişime geç" : "Contact me"}
                </button>
                <a
                  href="https://www.linkedin.com/in/ay%C5%9Fe-yal%C3%A7%C4%B1n-450908192/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost justify-center w-full"
                >
                  LinkedIn Profilim
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ALT BİLGİ (FOOTER) */}
        <footer className="px-[clamp(20px,6vw,88px)] py-8 border-t border-[var(--line)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--muted)] bg-[#141414]">
          <p>© 2026 Ayşe Yalçın. {lang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}</p>
          <div className="flex items-center gap-6">
            <span>Eskişehir, Türkiye</span>
            <a
              href="mailto:ayseyalcindemir9750@gmail.com"
              className="hover:text-[var(--ink)] transition-colors font-mono"
            >
              ayseyalcindemir9750@gmail.com
            </a>
          </div>
        </footer>
      </main>

      {/* PROJE DETAY MODALI */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#1c1c1c] border border-[var(--line-strong)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 text-[var(--ink)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-mono">
                  {activeProject.category[lang]}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl mt-1 tracking-tight">
                  {activeProject.title[lang]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="text-[var(--muted)] hover:text-white text-2xl p-1 leading-none cursor-pointer"
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>

            <div className="space-y-5 text-sm md:text-base leading-relaxed">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1 font-mono">
                  {lang === "tr" ? "Problem" : "Problem Statement"}
                </h4>
                <p className="text-[var(--ink)]">{activeProject.problem[lang]}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1 font-mono">
                  {lang === "tr" ? "Veri Kaynağı" : "Data Source"}
                </h4>
                <p className="text-[var(--muted)] text-sm">
                  {activeProject.data[lang]}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1 font-mono">
                  {lang === "tr" ? "Yöntem & Modelleme" : "Methodology"}
                </h4>
                <p className="text-[var(--ink)]">{activeProject.method[lang]}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1 font-mono">
                  {lang === "tr" ? "Temel Bulgu" : "Key Finding"}
                </h4>
                <p className="text-[var(--ink)]">{activeProject.findings[lang]}</p>
              </div>

              <div className="bg-[#141414] border border-emerald-900/50 p-4 rounded-xl">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1 font-mono">
                  {lang === "tr" ? "İş Kararı & Etki" : "Business Impact"}
                </h4>
                <p className="text-white font-medium">{activeProject.impact[lang]}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2 font-mono">
                  {lang === "tr" ? "Kullanılan Araçlar" : "Tools & Stack"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs bg-black/60 border border-[var(--line)] rounded font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[var(--line)] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="btn btn-ghost"
              >
                {lang === "tr" ? "Kapat" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* İLETİŞİM MODALI */}
      {isContactOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="bg-[#1c1c1c] border border-[var(--line-strong)] rounded-2xl max-w-md w-full p-6 text-[var(--ink)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-bold text-xl tracking-tight">
                {lang === "tr" ? "İletişime Geç" : "Get in Touch"}
              </h3>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="text-[var(--muted)] hover:text-white text-xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[var(--muted)] mb-6">
              {lang === "tr"
                ? "Projeler, analitik iş fırsatları veya veri danışmanlığı için doğrudan bana yazabilirsiniz."
                : "Feel free to reach out directly for analytical roles, projects, or consultations."}
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-black/50 border border-[var(--line)] rounded-lg flex justify-between items-center">
                <div>
                  <span className="block text-xs text-[var(--muted)]">E-posta</span>
                  <span className="text-sm font-mono selection:bg-white selection:text-black">
                    ayseyalcindemir9750@gmail.com
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-xs border border-[var(--line)] hover:border-white rounded cursor-pointer bg-white/5"
                >
                  {copiedEmail ? "Kopyalandı!" : "Kopyala"}
                </button>
              </div>

              <a
                href="mailto:ayseyalcindemir9750@gmail.com"
                className="btn btn-primary justify-center w-full"
              >
                {lang === "tr" ? "E-posta Uygulamasında Aç" : "Open in Mail App"}
              </a>

              <a
                href="https://www.linkedin.com/in/ay%C5%9Fe-yal%C3%A7%C4%B1n-450908192/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost justify-center w-full"
              >
                LinkedIn Profilim
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
