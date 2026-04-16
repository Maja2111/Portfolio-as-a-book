# Portfolio-as-a-book
Merging code and editorial design: An animated book portfolio featuring my CV.

# 📖 Interactive 3D Book Portfolio

Ein innovatives Portfolio-Projekt, das die Welt des klassischen Buchdrucks mit moderner Web-Programmierung verbindet. Dieses Projekt präsentiert meinen Lebenslauf (CV) als interaktives 3D-Buch.

## 🚀 Vision
Die Verbindung von Tradition und Code: Ein haptisches Lese-Erlebnis im Browser, das technisches Know-how in React/Vue und 3D-Animationen demonstriert.

---

## 🗺️ Projekt-Fahrplan (Roadmap)

### Phase 1: Setup & Grundstruktur (Aktuell)
- [ ] Initialisierung des Projekts (Vite + React/Vue)
- [ ] Installation der Basis-Abhängigkeiten (z.B. `i18next` für Sprachen)
- [ ] Erstellen der Seiten-Komponenten (Layout für den Lebenslauf)
- [ ] JSON-Struktur für Inhalte (Deutsch/Englisch) anlegen

### Phase 2: Inhalte & Logik
- [ ] Implementierung des **Language Switchers** (DE/EN)
- [ ] Befüllen der CV-Sektionen (Erfahrung, Skills, Projekte)
- [ ] Navigation: Einfaches Umblättern per Button/State (vorerst ohne 3D)

### Phase 3: Die 3D-Ebene (The "Wow" Factor)
- [ ] Integration von **React Three Fiber** / Three.js
- [ ] Erstellung des Buch-Modells (Seiten als 3D-Geometrien)
- [ ] **Interaktion:**
    - [ ] Klick-Logik zum Umblättern der Seiten
    - [ ] Hover-Effekt: Seiten heben sich bei Maus-Kontakt leicht an
- [ ] Optimierung der Kamera-Perspektive

### Phase 4: Finetuning & Styling
- [ ] Texturen: Papier-Optik und Typografie verfeinern
- [ ] Licht & Schatten in der 3D-Szene
- [ ] Responsive Design (Wie verhält sich das Buch auf dem Handy?)
- [ ] Deployment (z.B. via Vercel oder Netlify)

---

## 🛠 Tech Stack (Geplant)
- **Framework:** React oder Vue
- **3D-Engine:** Three.js (via React Three Fiber / TresJS)
- **Internationalisierung:** i18next (React) / vue-i18n (Vue)
- **Styling:** CSS-Modules oder Tailwind CSS

---

## 📝 Notizen für die Umsetzung
- Fokus auf Performance: 3D-Modelle so leicht wie möglich halten.
- Barrierefreiheit: Trotz 3D-Effekt sollte der Inhalt für Screenreader lesbar bleiben (evtl. versteckte HTML-Struktur mitgeben).



