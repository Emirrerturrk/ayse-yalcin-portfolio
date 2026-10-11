# Bağımlılıklar
Başka bir şey değişince sessizce bozulan şeyler. Kontrol eden: `python "C:\Users\gecic/.gemini/config/skills/proje-baslat/doktor.py" .`
`kontrol:` satırı olmayan kayıt yalnızca belgedir. Komutlar proje kökünden bash ile (Windows'ta Git Bash) çalışır; çıkış 0 sağlıklı demektir.

```
- <ne> -> <neye bağlı>
  kontrol: <bash komutu>
  bozuksa: <kırmızıda ne yapılacak>
```

## Kayıt
- context dosyaları -> PROJECT_BRIEF.md
  kontrol: test -d context && test -f context/01-proje-ozeti-ve-konumlandirma.md
  bozuksa: context/ klasöründeki modüler dokümantasyonu yeniden oluştur
- Scroll geçişi html tasarımı -> Ayşe Yalçın _ Veri Analisti (B, scroll geçişi).html
  kontrol: test -f "Ayşe Yalçın _ Veri Analisti (B, scroll geçişi).html"
  bozuksa: Scroll geçişi tasarım dosyasını kontrol et
- Next.js frontend -> frontend/src/app/page.tsx
  kontrol: test -f frontend/src/app/page.tsx && test -f frontend/src/components/ScrollCanvas.tsx
  bozuksa: frontend bileşenlerini kontrol et
