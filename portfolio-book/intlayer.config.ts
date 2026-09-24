// Wir importieren die Sprach-Typen (Locales) und den Typ für die Konfiguration aus dem Intlayer-Paket
import { Locales, type IntlayerConfig } from 'intlayer';
/**
 * Das 'config'-Objekt legt die globalen Einstellungen für die Internationalisierung (i18n) fest.
 * Es sagt Intlayer, welche Sprachen deine Anwendung überhaupt unterstützt.
 */
const config: IntlayerConfig = {
  internationalization: {
    // Hier definieren wir alle verfügbaren Sprachen in einem Array
    locales: [
      Locales.GERMAN, 
      Locales.ENGLISH
    ],
    // Die Standard-Sprache, die genutzt wird, wenn der Browser keine präferierte Sprache mitteilt
    defaultLocale: Locales.GERMAN,
  },
};
// Wir exportieren die Konfiguration, damit Intlayer sie beim Build-Prozess und zur Laufzeit einlesen kann
export default config;