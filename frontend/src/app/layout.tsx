import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  weight: ["500", "700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#171717",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Ayşe Yalçın | Veri Analisti & CX Analitiği Uzmanı",
  description:
    "14 yıllık müşteri deneyimi (CX) ve operasyon liderliği geçmişini Python, SQL, Power BI ve Tableau ile veriye ve karara dönüştüren analist.",
  keywords: [
    "Ayşe Yalçın",
    "Veri Analisti",
    "Data Analyst",
    "CX Analytics",
    "Müşteri Deneyimi Analitiği",
    "Power BI",
    "Python",
    "SQL",
    "Tableau",
  ],
  authors: [{ name: "Ayşe Yalçın" }],
  openGraph: {
    title: "Ayşe Yalçın | Veri Analisti",
    description:
      "Müşteriyi 14 yıldır dinliyorum. Şimdi verisinden de okuyorum.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${schibsted.variable} ${hanken.variable} dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="bg-[var(--bg)] text-[var(--ink)] font-sans antialiased m-0 selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
