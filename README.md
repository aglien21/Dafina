# Kujtesa e shkollës — si ta përdorësh në iPhone

## 1. Mos e hap skedarin `.html` nga Files
Në iPhone, një skedar `index.html` i hapur nga aplikacioni **Files** nuk ekzekutohet si faqe interneti dhe njoftimet nuk punojnë. App-i duhet hapur si **faqe https**.

## 2. Rruga më e shpejtë tani
Hap këtë link në Safari:

**https://8000-iogd0aa4sih4swbifjjzi.e2b.app**

Ky link është një live preview dhe mund të mos jetë i përhershëm. Për përdorim të përditshëm, ngarko skedarin `kujtesa-shkolles.zip` në një host falas (shih më poshtë).

## 3. Host falas, pa installation (rekomandohet)
1. Shko te **https://app.netlify.com/drop**.
2. Tërhiqe /**hidh** brenda faqes skedarin `kujtesa-shkolles.zip`.
3. Pas pak sekondash merr një adresë `https://....netlify.app`.
4. Hape atë adresë në iPhone me Safari.
5. Menuja e Safari → **Add to Home Screen**.
6. Hape app-i nga Home Screen → **⚙️ Rregullimet** → **🔔 Aktivizo njoftimet** → lejo.

Njoftimet e faqes funksionojnë ndërsa app-i është hapur ose në sfond si web app.

## 4. Njoftime të sigurta edhe kur faqja është mbyllur
Në Rregullimet e app-it shtyp **📅 Shkarko .ics për kalendarin**, pastaj hap `kujtuesit-shkolles.ics` me **Apple Calendar** ose **Google Calendar**.

Emrat në app dhe në kalendar janë:
- **Jon** — klasa I-C
- **Ian** — klasa V-C

Orët e mësimit: fillojnë **08:00**, 45 minuta secila, 5 minuta pushim pas çdo ore dhe **15 minuta pas orës së 3-të**. Dalja është 5 minuta pas mësimit të fundit: **11:30** (4 orë) ose **12:20** (5 orë).

Në kalendar shfaqen vetëm emrat dhe koha e daljes:
- **Jon 11:30** — e martë, e enjte
- **Jon 12:20** — e hënë, e mërkurë, e premte
- **Ian 12:20** — çdo ditë shkollore

Njoftimi vjen 15 minuta para: në 11:15 ose 12:05. Ngjarjet janë me kohëzgjatje zero, prandaj shfaqen vetëm si **„Jon 12:20“**, pa rreshtin shtesë 12:20–12:35.

Festat publike dhe pushimet shkollore janë **përjashtuar** nga skedari `.ics` (EXDATE) dhe nga vetë app-i, kështu që nuk ka njoftime ato ditë. Periudha përfundon më **18 qershor 2027**, ditën e fundit të mësimeve.

Këto njoftime vijnë nga vetë telefoni, edhe kur Safari është mbyllur.

## Nëse kujtuesit dalin dy herë (ngjarjet e vjetra kanë mbetur)
Ngjarjet e vjetra fillojnë me fjalën **„Marrja e ...“**, ndërsa ato të reja janë vetëm **„Jon 11:30“**, **„Jon 12:20“** dhe **„Ian 12:20“**.

Mënyra më e lehtë:
1. Hap **Calendar** → shtyp ikonën e **kërkimit** → shkruaj **Marrja**.
2. Shtyp çdo ngjarje që del → **Delete Event** → zgjidh **All Future Events**.
3. Përsërite derisa të mos mbetet asnjë „Marrja e ...“.

Alternativë: hap skedarin **`fshij-te-vjetrat.ics`** nga ZIP-i. Ai përmban anulimet (METHOD:CANCEL) për gjashtë seritë e vjetra. Nëse iPhone nuk i anulon automatikisht, përdor rrugën e kërkimit më sipër.

## Nëse ikona nuk shfaqet në Home Screen
> **Arsyeja më e shpeshtë:** shortcut-i është shtuar nga parashikimi brenda aplikacionit (iframe, adresë `...--comfy-bl...`) ose nga skedari lokal, jo nga Safari me adresën `https://...`. iOS atëherë nuk mund ta marrë ikonën dhe në hapin e dytë e zëvendëson me shkronjën **J**. Shtoje gjithmonë nga Safari, duke hapur drejtpërdrejt adresën e Netlify.

Ikona e re ka shkruar **Jon** dhe **Ian** brenda saj, jo vetëm inicialet.

Varianti **`index-i-vetem.html`** e ka ikonën, manifestin dhe skedarin `.ics` **brenda vetë skedarit** (data-URI). Nëse e hap atë si faqe https, ikona nuk varet nga asnjë skedar tjetër.
1. Sigurohu që në folderin e ngarkuar në Netlify janë të pranishme: `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `favicon.ico` dhe `manifest.webmanifest`.
2. Fshije shortcut-in e vjetër: shtyp gjatë ikonës → **Remove App** → **Remove from Home Screen**.
3. Hap përsëri faqen në Safari → **Share** → **Add to Home Screen**.
4. Në iPhone përdoret gjithmonë `apple-touch-icon.png` (180×180), jo ajo e manifestit. Prandaj u shtua skedari posaçërisht.

## Përmbajtja e ZIP-it
- `index.html` — app-i
- `manifest.webmanifest` + `apple-touch-icon.png` + `icon-192.png` + `icon-512.png` + `favicon.ico` — ikona dhe instalimi si app
- `sw.js` — service worker për njoftime
- `kujtuesit-shkolles.ics` — kujtimet në kalendar
