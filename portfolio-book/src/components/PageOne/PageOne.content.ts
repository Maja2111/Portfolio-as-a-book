//Wir importieren t für die Übersetzungsfunktion und Dictionary aus Intlayer
import {t, type Dictionary} from 'intlayer';

/**
 * hier kommt der Inhalt der erste Seite rein 
 */

const pageOneContent: Dictionary = {
    // eindeutiger Schlüssel für die Seite
    key: 'pageOne',
    content: {
        // Titel der Seite
        title: t({
            de: 'Willkommen auf meiner Portfolio-Seite',
            en: 'Welcome to my portfolio page',
        }),
        //subtitle = Berufsbezeichnung
        subtitle: t({
            de: 'Web- und Softwareentwicklerin, MERN-Stack',
            en: 'Web- and Software Developer',
         }),
        // Beschreibung der Seite
        description: t({
            de: 'Willkommen in meinem interaktiven Portfolio! Hier verbinde ich sauberen Code mit kreativem Design in Form eines digitalen Buches.',
            en: 'Welcome to my interactive portfolio! Here I combine clean code with creative design in the form of a digital book.'}), 
}};

export default pageOneContent;