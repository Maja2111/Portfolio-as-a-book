//inport von 't' und 'Dictionary' aus 'intlayer' für die Übersetzungsfunktion und die Typdefinitionen
import {t, type Dictionary} from 'intlayer';

/**
 * Das 'nextButtonContent'-Objekt fungiert als Inhalts-Datenbank für deinen Button.
 * Hier werden alle Texte definiert, die der Button anzeigt.
 */

const nextButtonContent: Dictionary = { 
    key: 'nextButton', // der Key ist der eindeutige Schlüssel, mit dem Intlayer den Inhalt im Projekt findet
    content: { // das 'content'-Objekt enthält die eigentlichen Texte, die auf dem Button angezeigt werden
        // 'label' ist der Text, der auf dem Button selbst angezeigt wird. Hier werden die deutschen und englischen Übersetzungen bereitgestellt.
        label: t({
            de: 'Nächste Seite', 
            en: 'Next Page',
        }),
        // 'ariaLabel' ist der Text, der von Screenreaders vorgelesen wird, um die Funktion des Buttons zu beschreiben. Auch hier werden die deutschen und englischen Übersetzungen bereitgestellt.
        ariaLabel: t({
            de: 'Nächste Seite anzeigen',
            en: 'Show next page',
        }),
    },
};

export default nextButtonContent;