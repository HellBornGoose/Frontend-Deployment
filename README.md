# 🌍 Frontend Deployment - Terminál Super Země

**POZOR, OBČANÉ SUPER ZEMĚ!** Tento repozitář obsahuje přísně tajnou (ale open-source) CSS/HTML šablonu pro prezentaci kadetů vývojářských sborů. Projekt je koncipován jako interaktivní terminál ve stylu hry *Helldivers 2* a slouží primárně jako portfolio pro prezentaci osobních misí (projektů), dovedností (stratagemů) a zásluh.

---

## 📂 Adresářová struktura (Taktická mapa)

Tento projekt využívá standardní rozložení pro rychlé nasazení (Frontend Deployment):

* **`/` (Základna)**
  * `index.html` - Hlavní vstupní bod terminálu. Obsahuje strukturu ministerstev a přehled misí.
* **`/css/`**
  * `style.css` - Zbrojnice vizuálu. Zde se nachází veškeré definice barev, animací a rozložení (flexbox/grid).
* **`/js/`**
  * `script.js` - Mozek terminálu. Řídí modální okna pro detaily projektů, audio přehrávač (The Sound of Democracy) a výpočet časových úseků.
* **`/img/`**
  * `...` - Zdrojové složky obrázků (loga ministerstev, avatary profilu s kachnou-veteránem, ikony stratagemů).
  * `/projects/` - Náhledové snímky (screenshoty) z předchozích misí.
* **`/music/`**
  * `05. A Cup of Liber-tea (Helldivers 2 Main Theme).mp3` - Oficiální hymna pro šíření řízené demokracie.

---

## 🎨 Vizuální komponenty a de-facto CSS Template

Jelikož se jedná o vizuálně bohatou šablonu, je navržena pro snadnou znovupoužitelnost pomocí sady předdefinovaných tříd a promyšlené palety.

### 🔤 Písma (Zdroje: Google Fonts)
* **Orbitron** (řezy 400, 500, 700, 900) - Použito pro hlavní nadpisy (`h2`, `h3`), loga a UI prvky. Dodává terminálu robustní, futuristický ráz.
* **Chakra Petch** (řezy 400, 600, 700) - Použito pro čitelný, avšak technicky vyhlížející text (`p`, popisky).

### 🎨 Barvy (Paleta Svobody)
* **Temné pozadí vesmíru:** `#000000` (Čistá černá), `#1C2022` (Tmavě šedá pro bloky), `#3B3B3C` (Světlejší šedá) [cite: uploaded:style.css].
* **Zářivá žlutá (Super Earth Yellow):** `#FFDF00`, `#FFE800` (Primární akcentní barva pro okraje, aktivní prvky a texty) [cite: uploaded:style.css].
* **Ministerstva (Barevné kódování):** `#109DB1` (Jednota), `#FE6D6A` (Obrana), `#F1BE5A` (Věda), `#14947F` (Expanze), `#8E76C5` (Prosperita), `#B43A8A` (Pravda) [cite: uploaded:style.css].

### 🧱 Znovupoužitelné třídy (Standardní výbava)
* `.striped-header` - Taktická hlavička sekce s výstražným šrafováním [cite: uploaded:style.css].
* `.gray_background` - Univerzální kontejner chránící obsah (nastavuje padding a barvu pozadí) [cite: uploaded:style.css].
* `.project-card` - Karta mise v gridu. Připravena na uložení metadat přes `data-` atributy (titulek, popis, datum, obrázky) [cite: uploaded:index.html].
* `.dive-btn` - Tlačítko "Ready to dive!", simulující přípravu k nasazení [cite: uploaded:index.html].
* `.stratagem_link` - Ikonky sociálních sítí (GitHub, LinkedIn) naformátované jako herní stratagemy [cite: uploaded:index.html].

---

## 🛠 Použité CSS Techniky (Zbraně hromadného stylování)

1. **Flexbox a CSS Grid:** Nasazeny pro responzivní rozložení (`.projects-grid` využívá grid-template, zatímco `.sidebar` a navigace pracují přes flexbox) [cite: uploaded:style.css].
2. **Komplexní Gradienty:** Využití `linear-gradient`, `radial-gradient` a `repeating-linear-gradient` k vytvoření varovných pruhů a pozadí [cite: uploaded:style.css].
3. **Sticky Positioning:** Boční navigace (`.sidebar` a burger menu) je fixovaná pomocí `position: sticky; top: 0;`, aby měli občané neustálý přístup k ministerstvům [cite: uploaded:style.css].
4. **CSS Animace:** Nekonečný běžící text hlášení (Marquee) funguje bez JavaScriptu pomocí `@keyframes scrolling` [cite: uploaded:style.css].
5. **Vizuální Filtry:** Techniky jako `filter: drop-shadow(...)` a `filter: grayscale(...)` u tlačítek a avatarů simulují interakci v herním menu [cite: uploaded:style.css].

---

## 🖼 Zdroje obrázků a grafiky
Většina vizuálních materiálů v adresáři `/img/` byla pečlivě vybrána nebo upravena (ve formátu SVG a PNG) k evokování atmosféry hry Helldivers 2:
* Ikony ministerstev (`unity.svg`, `defence.svg` atd.) [cite: uploaded:index.html].
* Personalizovaná grafika jako "kachna-veterán" (`duck_with_rang.svg`) a hodnosti [cite: uploaded:index.html].
* Stratagemy zastupující běžné vývojářské platformy (`git.svg`, `linkedin.svg`) [cite: uploaded:index.html].

**Pro Zemi! Pro Demokracii! A pro čistý kód! 🫡**
