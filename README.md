# Jon & Ian – Kujtesa e shkollës

Web app e thjeshtë për oraret shkollore dhe kujtuesin e marrjes së fëmijëve.

- **Jon** → klasa **I-C**
- **Ian** → klasa **V-C**

## Çfarë bën
- Para orës 14:00 tregon orarin e sotëm; pas 14:00 atë të nesërm.
- Në fundjavë, festa dhe pushime tregon ditën e parë shkollore.
- Kujton 15 minuta para daljes: **11:15** (4 orë) dhe **12:05** (5 orë).
- Orët: fillim **08:00**, 45 min mësim, 5 min pushim pas çdo ore, 15 min pas orës së 3-të.
- Dalja: **11:30** me 4 orë, **12:20** me 5 orë.

## Skedarët
| Skedar | Për çfarë shërben |
|---|---|
| `index.html` | Faqja kryesore (hapet si `index.html` në rrënjë) |
| `index-i-vetem.html` | Version alternativ, gjithçka brenda një skedari |
| `manifest.webmanifest` | Instalimi si PWA / emri dhe ikona |
| `sw.js` | Service worker për njoftime |
| `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `favicon.ico` | Ikona me emrat **Jon** dhe **Ian** |
| `kujtuesit-shkolles.ics` | Kujtimet për Apple / Google Calendar |
| `fshij-te-vjetrat.ics` | Anulon seritë e vjetra të kujtuesve |
| `.github/workflows/deploy.yml` | Deploy automatik në GitHub Pages |
| `.nojekyll` | Parandalon që GitHub Pages të injorojë skedarët |

## Publikimi në GitHub Pages
1. Krijo një repo të re, p.sh. `kujtesa-shkolles`.
2. Ngarko **të gjithë skedarët e këtij folderi** në rrënjën e repos (jo brenda një tjetër folderi).
3. Bëj commit dhe push në branch-un `main`.
4. Shko te **Settings → Pages → Build and deployment → Source** dhe zgjidh **GitHub Actions**.
   Workflow-i `deploy.yml` do e publikojë automatikisht pas çdo `git push`.
5. Adresa do jetë: `https://EMRI-YT.github.io/kujtesa-shkolles/`

## Në iPhone
1. Hap adresën `https://EMRI-YT.github.io/kujtesa-shkolles/` **në Safari**.
2. **Share → Add to Home Screen**. Ikona duhet të tregojë **Jon** / **Ian**.
3. Hap app-in nga Home Screen → **⚙️ Rregullimet** → **🔔 Aktivizo njoftimet**.

## Kalendari
Shkarko `kujtuesit-shkolles.ics` nga faqja ose hap direkt:

`https://EMRI-YT.github.io/kujtesa-shkolles/kujtuesit-shkolles.ics`

Ngjarjet janë vetëm **Jon 11:30**, **Jon 12:20** dhe **Ian 12:20**, me alarm 15 minuta para. Festat dhe pushimet janë përjashtuar deri më 18 qershor 2027.

Nëse kishe ngjarje të vjetra, kërko **„Marrja“** në Calendar dhe fshij ato me **Delete Event → All Future Events**.

## Test lokal
```bash
python -m http.server 8000
# hap http://localhost:8000
```
