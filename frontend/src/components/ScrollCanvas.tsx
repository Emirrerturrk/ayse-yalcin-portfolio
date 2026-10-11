"use client";

import React, { useEffect, useRef } from "react";

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let pending = false;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");

    let vw = 0;
    let vh = 0;
    let P: any[] = [];
    const mouse = { x: -999, y: -999 };
    let C3x = 0;
    let C3y = 0;
    let t0 = performance.now();

    // Sahnelerin ağırlıkları: [Hero, Projeler/Bar, Hakkımda/Kariyer, Sektörler/Halka, İletişim/Halo]
    const weights = [1, 0, 0, 0, 0];

    const SEC = [
      "#f5f5f5",
      "#8a8a8a",
      "#d4d4d4",
      "#737373",
      "#e5e5e5",
      "#a3a3a3",
      "#bdbdbd",
      "#6a6a6a",
    ];

    const GC: Record<string, string> = {
      bar: "#a3a3a3",
      line: "#f5f5f5",
      axis: "#737373",
      rib: "#a3a3a3",
      ms: "#f5f5f5",
      ring: "#f5f5f5",
      halo: "#737373",
    };

    const GA: Record<string, number> = {
      bar: 0.8,
      line: 1,
      axis: 0.6,
      rib: 0.75,
      ms: 1,
      ring: 0.95,
      halo: 0.45,
    };

    SEC.forEach((c, i) => {
      GC["sec" + i] = c;
      GA["sec" + i] = 0.9;
    });

    const MX = [0.1, 0.3, 0.5, 0.7, 0.9];
    const PI2 = Math.PI * 2;

    function rand(a: number, b: number) {
      return a + Math.random() * (b - a);
    }

    function clamp(v: number) {
      return v < 0 ? 0 : v > 1 ? 1 : v;
    }

    function ycurve(u: number) {
      const e = u * u * (3 - 2 * u);
      return 0.8 - 0.58 * e + 0.05 * Math.sin(u * 10);
    }

    function shuffle(T: any[]) {
      for (let m = T.length - 1; m > 0; m--) {
        const j = Math.floor(Math.random() * (m + 1));
        const t = T[m];
        T[m] = T[j];
        T[j] = t;
      }
    }

    function getStages() {
      return ["stage", "stage2", "stage3", "stage4"]
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
    }

    function getL1(): HTMLElement[] {
      return Array.from(document.querySelectorAll<HTMLElement>(".ms"));
    }

    function getL2(): HTMLElement[] {
      return Array.from(document.querySelectorAll<HTMLElement>(".sc"));
    }

    function build() {
      if (!cv || !ctx) return;
      const ST = getStages();
      if (ST.length < 4) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const R0 = ST.map((e) => e.getBoundingClientRect());
      const s = R0[0];
      const sw = s.width;
      const sh = s.height;

      vw = window.innerWidth;
      vh = window.innerHeight;
      cv.width = vw * dpr;
      cv.height = vh * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // SAHNE 1: Projeler Bar Grafik
      const sp = Math.max(8, sw / 42);
      const T0: any[] = [];
      const vals = [0.32, 0.46, 0.4, 0.58, 0.66, 0.62, 0.88];
      const cols = 3;
      const n = vals.length;
      const gap = (sw - n * cols * sp) / (n - 1);
      const base = sh - sp;
      const tops: [number, number][] = [];

      vals.forEach((v, idx) => {
        const x0 = idx * (cols * sp + gap);
        const rows = Math.max(2, Math.round((v * (sh - sp * 3)) / sp));
        for (let c = 0; c < cols; c++) {
          for (let k = 0; k < rows; k++) {
            T0.push([x0 + c * sp + sp / 2, base - sp * 1.5 - k * sp, "bar"]);
          }
        }
        tops.push([x0 + (cols * sp) / 2, base - sp * 1.5 - rows * sp - sp * 1.6]);
      });

      const L = Math.floor(sw / (sp * 0.7));
      for (let i = 0; i <= L; i++) {
        const f = (i / L) * (n - 1);
        const a = Math.floor(f);
        const b = Math.min(n - 1, a + 1);
        const u = f - a;
        const e = u * u * (3 - 2 * u);
        T0.push([
          tops[a][0] + (tops[b][0] - tops[a][0]) * u,
          tops[a][1] + (tops[b][1] - tops[a][1]) * e,
          "line",
        ]);
      }

      for (let x = 0; x <= sw; x += sp) {
        T0.push([x, base, "axis"]);
      }

      shuffle(T0);
      const M = T0.length;

      // SAHNE 2: Hakkımda Kariyer Eğrisi
      const w2 = R0[1].width;
      const h2 = R0[1].height;
      const sp2 = 10;
      const T1: any[] = [];
      const L1 = getL1();

      const isMobile = vw < 768;
      const msOffsetY = isMobile ? 32 : 56;

      MX.forEach((fx, idx) => {
        // Mobilde kenarlardan 20px içeride tut
        const marginX = isMobile ? 24 : 0;
        const availableW = w2 - marginX * 2;
        const cx = marginX + fx * availableW;
        const cy = ycurve(fx) * h2;
        T1.push([cx, cy, "ms"]);
        for (let a = 0; a < 7; a++) {
          T1.push([
            cx + Math.cos((a / 7) * PI2) * sp2 * 0.9,
            cy + Math.sin((a / 7) * PI2) * sp2 * 0.9,
            "ms",
          ]);
        }
        for (let a = 0; a < 14; a++) {
          T1.push([
            cx + Math.cos((a / 14) * PI2) * sp2 * 1.8,
            cy + Math.sin((a / 14) * PI2) * sp2 * 1.8,
            "ms",
          ]);
        }
        const lb = L1[idx];
        if (lb) {
          lb.style.left = `${cx}px`;
          lb.style.top = `${idx % 2 ? cy + msOffsetY : cy - msOffsetY}px`;
        }
      });

      const rc = Math.max(0, M - T1.length);
      for (let i = 0; i < rc; i++) {
        const uu = (i + Math.random()) / rc;
        T1.push([
          uu * w2,
          ycurve(uu) * h2 + (Math.random() + Math.random() - 1) * sp2 * 2.2,
          "rib",
        ]);
      }
      shuffle(T1);

      // SAHNE 3: Sektörler Halka Haritası
      const w3 = R0[2].width;
      const h3 = R0[2].height;
      const cx3 = w3 / 2;
      const cy3 = h3 / 2;

      // Mobilde taşmayı önleyen duyarlı yarıçap ve ofset
      const Rd = isMobile
        ? Math.min(w3 * 0.25, h3 * 0.26, 75)
        : Math.max(60, Math.min(h3 / 2 - 40, w3 / 2 - 210));
      const secOffset = isMobile ? Rd + 18 : Rd + 48;

      const Ri = Rd * 0.58;
      const T2: any[] = [];
      const ns = 8;
      const span = PI2 / ns;
      const cnt = Math.ceil(M / ns);

      for (let i = 0; i < M; i++) {
        const sl = i % ns;
        const ang =
          -1.5708 +
          sl * span +
          0.05 +
          ((Math.floor(i / ns) + Math.random()) / cnt) * (span - 0.1);
        const rad = Math.sqrt(
          Ri * Ri + (Rd * Rd - Ri * Ri) * Math.random()
        );
        T2.push([cx3 + Math.cos(ang) * rad, cy3 + Math.sin(ang) * rad, "sec" + sl]);
      }
      shuffle(T2);

      const L2 = getL2();
      for (let i = 0; i < 8; i++) {
        const lb2 = L2[i];
        if (!lb2) continue;
        const am = -1.5708 + (i + 0.5) * span;
        const co = Math.cos(am);
        const si = Math.sin(am);
        lb2.style.left = `${cx3 + co * secOffset}px`;
        lb2.style.top = `${cy3 + si * secOffset}px`;
        lb2.style.transform =
          co > 0.25
            ? "translate(0,-50%)"
            : co < -0.25
            ? "translate(-100%,-50%)"
            : si < 0
            ? "translate(-50%,-100%)"
            : "translate(-50%,0)";
        lb2.style.textAlign =
          co > 0.25 ? "left" : co < -0.25 ? "right" : "center";
      }

      // SAHNE 4: İletişim Çember ve Halo
      const w4 = R0[3].width;
      const h4 = R0[3].height;
      const Rr = Math.min(h4 / 2 - 24, w4 / 2 - 10, 240);
      const T3: any[] = [];
      const rn = Math.floor(M * 0.8);
      C3x = w4 / 2;
      C3y = h4 / 2;

      for (let i = 0; i < M; i++) {
        if (i < rn) {
          const an = ((i + Math.random()) / rn) * PI2;
          const rd = Rr + (Math.random() * 2 - 1) * 14;
          T3.push([0, 0, "ring", an, rd, 0.08]);
        } else {
          T3.push([
            0,
            0,
            "halo",
            rand(0, PI2),
            Rr + 26 + Math.random() * Rr * 0.3,
            -0.04,
          ]);
        }
      }
      shuffle(T3);

      const D = vw < 820 ? 60 : 110;
      const N = M + D;
      const old = P;
      const np: any[] = [];

      for (let q = 0; q < N; q++) {
        const o = old[q];
        const has = q < M;
        const bn = q % 6 === 0;
        const a0 = has ? T0[q] : null;
        const a1 = has ? T1[q] : null;
        const a2 = has ? T2[q] : null;
        const a3 = has ? T3[q] : null;

        np.push({
          x: o ? o.x : rand(0, vw),
          y: o ? o.y : rand(0, vh),
          vx: o ? o.vx : rand(-0.08, 0.08), // Yavaşlatılmış başlangıç hızı
          vy: o ? o.vy : rand(-0.08, 0.08),
          has,
          b: bn,
          r: bn ? 2.8 : rand(1.1, 1.7),
          ph: rand(0, 6.28),
          X: has ? [a0[0], a1[0], a2[0], 0] : [0, 0, 0, 0],
          Y: has ? [a0[1], a1[1], a2[1], 0] : [0, 0, 0, 0],
          G: has ? [a0[2], a1[2], a2[2], a3[2]] : ["", "", "", ""],
          a4: has ? a3[3] : 0,
          r4: has ? a3[4] : 0,
          rs: has ? a3[5] : 0,
        });
      }
      P = np;

      if (rm.matches) render();
    }

    // Sahne ağırlığı: Viewport merkezine yakınlığa göre [0, 1] arası yumuşak çan eğrisi
    function calcStageWeight(rect: DOMRect) {
      const center = rect.top + rect.height * 0.5;
      const vpCenter = vh * 0.5;
      const dist = Math.abs(center - vpCenter);
      const span = vh * 0.55; // Sahnenin etkili olduğu alan genişliği
      if (dist >= span) return 0;
      const u = 1 - dist / span;
      return u * u * (3 - 2 * u); // smoothstep
    }

    function render() {
      if (!ctx) return;
      const ST = getStages();
      if (ST.length < 4) return;
      const S = ST.map((e) => e.getBoundingClientRect());

      ctx.clearRect(0, 0, vw, vh);

      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        if (!p.has) continue;

        for (let j = 0; j < 4; j++) {
          let x = 0;
          let y = 0;
          if (j === 3) {
            x = S[3].left + C3x + Math.cos(p.a4) * p.r4;
            y = S[3].top + C3y + Math.sin(p.a4) * p.r4;
          } else {
            x = S[j].left + p.X[j];
            y = S[j].top + p.Y[j];
          }

          if (y > -10 && y < vh + 10) {
            ctx.globalAlpha = GA[p.G[j]] || 0.8;
            ctx.fillStyle = GC[p.G[j]] || "#f5f5f5";
            ctx.beginPath();
            ctx.arc(x, y, 1.8, 0, PI2);
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1;
      const L1 = getL1();
      const L2 = getL2();
      L1.concat(L2).forEach((l) => {
        l.style.opacity = "1";
      });
    }

    function frame(now: number) {
      if (!ctx) return;
      const ST = getStages();
      if (ST.length < 4) {
        rafId = requestAnimationFrame(frame);
        return;
      }

      const t = (now - t0) / 1000;
      const S = ST.map((e) => e.getBoundingClientRect());

      // Scroll pozisyonuna göre her sahnenin ağırlığını hesapla
      const scrollY = window.scrollY || window.pageYOffset;
      const heroThreshold = vh * 0.65;
      const rawHero = clamp(1 - scrollY / heroThreshold);
      const heroW = rawHero * rawHero * (3 - 2 * rawHero);

      const rawW = [
        heroW,
        calcStageWeight(S[0]),
        calcStageWeight(S[1]),
        calcStageWeight(S[2]),
        calcStageWeight(S[3]),
      ];

      // Ağırlıkları son derece yumuşak ve sakin geçişle güncelle (relax & smooth ease)
      for (let k = 0; k < 5; k++) {
        weights[k] += (rawW[k] - weights[k]) * 0.045;
      }

      // Hangi sahne şu an baskın?
      let dominantStage = 0;
      let maxW = weights[0];
      for (let k = 1; k < 5; k++) {
        if (weights[k] > maxW) {
          maxW = weights[k];
          dominantStage = k;
        }
      }

      const isHero = weights[0] > 0.05;
      const u = Math.min(1, Math.max(0, (t - 1.2) / 3.6));
      const R = 14 + 136 * (u * u * (3 - 2 * u));

      for (let i = 0; i < P.length; i++) {
        const p = P[i];

        // Hedef koordinat hesaplama (aktif sahnelerin ağırlıklı toplamı)
        let tx = p.x;
        let ty = p.y;

        if (p.has) {
          let sumW = 0;
          let accX = 0;
          let accY = 0;

          // Stage 0..3 (Projeler, Hakkımda, Sektörler, İletişim)
          for (let j = 0; j < 4; j++) {
            const wj = weights[j + 1];
            if (wj > 0.001) {
              let nx = 0;
              let ny = 0;
              if (j === 3) {
                const an = p.a4 + t * p.rs;
                nx = S[3].left + C3x + Math.cos(an) * p.r4;
                ny = S[3].top + C3y + Math.sin(an) * p.r4;
              } else {
                nx = S[j].left + p.X[j];
                ny = S[j].top + p.Y[j];
              }
              accX += nx * wj;
              accY += ny * wj;
              sumW += wj;
            }
          }

          if (sumW > 0.001) {
            tx = accX / sumW;
            ty = accY / sumW;
          }
        }

        // Parçacık fiziği (yavaş, ipeksi, dinlendirici çekim kuvveti)
        const kStrength = clamp(1 - weights[0]);
        const fl = clamp(weights[0]);

        const fx = Math.sin(p.y * 0.003 + t * 0.08 + p.ph) * 0.02;
        const fy = Math.cos(p.x * 0.003 + t * 0.07 + p.ph) * 0.02;

        p.vx += (tx - p.x) * 0.01 * kStrength + fx * fl;
        p.vy += (ty - p.y) * 0.01 * kStrength + fy * fl;

        // Fare etkileşimi (yalnızca Hero'da veya hafifçe)
        if (p.b && weights[0] > 0.4) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 180 && d > 1) {
            p.vx += (dx / d) * 0.008;
            p.vy += (dy / d) * 0.008;
          }
        }

        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;

        // Sınır koruması
        if (weights[0] > 0.3) {
          if (p.x < -10) p.x = vw + 10;
          else if (p.x > vw + 10) p.x = -10;
          if (p.y < -10) p.y = vh + 10;
          else if (p.y > vh + 10) p.y = -10;
        }
      }

      ctx.clearRect(0, 0, vw, vh);

      // Hero ağ çizgileri (sadece hero ağırlığı varken ve yavaşça)
      if (weights[0] > 0.05) {
        const nd: any[] = [];
        const fade = weights[0];
        for (let i = 0; i < P.length; i++) {
          if (P[i].b) nd.push(P[i]);
        }

        ctx.strokeStyle = "#d4d4d4";
        ctx.lineWidth = 1;

        for (let i = 0; i < nd.length; i++) {
          const p = nd[i];
          for (let j = i + 1; j < nd.length; j++) {
            const q = nd[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < R) {
              ctx.globalAlpha = (1 - d / R) * 0.28 * fade;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }

          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 170) {
            ctx.globalAlpha = (1 - d / 170) * 0.5 * fade;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Parçacıkları çiz
      const gi = dominantStage > 0 ? dominantStage - 1 : 0;
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        const heroRatio = clamp(weights[0]);
        const stageRatio = clamp(1 - heroRatio);

        const g = p.has ? p.G[gi] : "";
        const base = p.b ? 0.85 : 0.3;
        const fin = p.has ? GA[g] || base : base;
        const rr = p.b ? 2.8 * heroRatio + 1.8 * stageRatio : p.r * heroRatio + 1.8 * stageRatio;

        ctx.globalAlpha = base * heroRatio + fin * stageRatio;
        ctx.fillStyle = p.has && stageRatio > 0.1 ? GC[g] || "#d4d4d4" : "#d4d4d4";

        // Yavaş, sakin nabız halkası (t * 0.8 frekans)
        if (p.b && heroRatio > 0.3) {
          const pu = 0.5 + 0.5 * Math.sin(t * 0.8 + p.ph);
          const ga = ctx.globalAlpha;
          ctx.globalAlpha = 0.18 * (1 - pu) * heroRatio;
          ctx.strokeStyle = "#d4d4d4";
          ctx.beginPath();
          ctx.arc(p.x, p.y, rr + 2 + pu * 8, 0, PI2);
          ctx.stroke();
          ctx.globalAlpha = ga;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, rr, 0, PI2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      // Etiket opaklıkları (Hakkımda: weights[2], Sektörler: weights[3])
      const L1 = getL1();
      const L2 = getL2();
      const o1 = clamp((weights[2] - 0.2) / 0.6);
      const o2 = clamp((weights[3] - 0.2) / 0.6);

      for (let i = 0; i < L1.length; i++) {
        if (L1[i]) L1[i].style.opacity = String(o1);
      }
      for (let i = 0; i < L2.length; i++) {
        if (L2[i]) L2[i].style.opacity = String(o2);
      }

      rafId = requestAnimationFrame(frame);
    }

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onPointerLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    const sched = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        build();
      });
    };

    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", sched);

    const resizeObserver = new ResizeObserver(sched);
    resizeObserver.observe(document.body);

    if (rm.matches) {
      window.addEventListener("scroll", render, { passive: true });
    }

    build();

    if (!rm.matches) {
      t0 = performance.now();
      rafId = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", sched);
      resizeObserver.disconnect();
      if (rm.matches) {
        window.removeEventListener("scroll", render);
      }
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas id="c" ref={canvasRef} aria-hidden="true" />;
}
