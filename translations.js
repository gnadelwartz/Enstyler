// translations for International Enstyler Version
// Version: 4.01.171
// Date: 2018-01-17
// (c) Gnadelwartz kay@rrr.de
// Note: use HTML notation for special characters, i.e. ü -> &uuml;
// Note: to reference an existing string in the same array use <EN-LANG:identifer>

// translation for site specific stuff, ie section names or text to look for actual page
var enSiteConfig= { Mydealz: { lang: 'de', discussion: '/diskussion/', page: 'Seite ' },
                  Preisjaeger: { lang: 'de', discussion: '/diskussion/', page: 'Seite '},
                           Nl: { lang: 'en', discussion: '/discussies/', page: 'Pagina '},
                   Hotukdeals: { lang: 'en', discussion: '/discussion/', page: 'Page '},
                   Userstyles: { lang: 'de' },
                    languages: [ 'auto','de','en','nl','fr','es','it','ro' ],
                    blackcold: [ 'off', '-5', '-10', '-20', '-30', '-60', '-120', '-200', '-1000'], // colder
                    votescale: [ 'off', '100', '200', '300', '500', '700', '1000'], // Degree
                        width: [ 'off', '360', '420', '500', '600', '720', '860', '1024', '1200', '1450', '1680', '1900', '2500', '9999'], // Mobile width
                  }

// translation for additional deal actions
var enDealLang = { de: { post: 'Sag was dazu', remove: 'Von Liste entfernen', edit: 'Bearbeiten', mail: 'e-Mail',
                         exp: 'Als abgelaufen melden' },
                   en: { post: 'Post a comment', remove: 'Remove from list', edit: 'Edit', mail: 'eMail',
                         exp: 'Report as expired' },
                   nl: { post: 'Geef een commentaar', remove: 'Van de lijst schrappen', edit: 'Bewerken', mail: 'e-Mail',
                         exp: 'Rapporteer als verlopen' },
                 }
  
// translation for deal time display  // Gestern xx:xx Uhr / vor Yh Ym (heute xx:xx Uhr) 
var enTimeLang = { de: { yesterday: 'Gestern', today: 'heute', oclock: 'Uhr' }, 
                     en: { oclock: 'o&acute;clock' }, //field name = english label
                     nl: { yesterday: 'Gisteren', today: 'vandaag', oclock: 'Uur' }
                     }
  
// translation for additional menu entrys
var enMenuLang = { de: { discussion: 'Alle Diskussionen', // only mydealz
                             enstyler: 'Enstyler Homepage', enhref: 'https://dealz.rrr.de',
                             settings: 'Enstyler Einstellungen' },
                     en: { discussion: 'All discussions', // only mydealz
                             enstyler: 'Enstyler Homepage', enhref: 'https://dealz.rrr.de/english.html',
                             settings: 'Enstyler Settings' },
                     nl: { discussion: 'All discussions', // only mydealz
                             enstyler: 'Enstyler Homepage', enhref: 'https://dealz.rrr.de/english.html',
                             settings: 'Enstyler Instellingen' },
                   }


// translation of config dialogs
var enConfigLang = {
   de: { 
       headline: 'Enstyler - Einstellungen',
      configcss: 'CSS Optionen',
     userscript: 'Update Enstyler',
            max: 'Breite der Dealanzeige',
         config: 'Konfiguration',
       navfixed: 'feste Haupnavigation',
    dealvotebar: 'Deal Thermometer &degC', 
        compact: 'Listenansicht kompakter',
          price: 'Preis im Deal Button',
          touch: 'Touch Support aktivieren',
          width: 'Skaliere Smartphone auf',
          redir: 'Mobile redirect', 
     dealaction: 'zus&auml;tzliche Deal Aktionen', 
         picker: 'Zeige Page Picker', 
       dealtime: 'Zeige echte Deal Zeit', 
        mintime: 'wenn &auml;lter als x Stunden',
        fixhtml: 'fix Deal Text HTML',
       noscript: 'Pepper Scripte abschalten',
      blacklist: 'Aktiviere Black- / Whitelist', 
      blackcold: 'Blacklist wenn k&auml;lter als &deg', 
          black: 'Blacklist - Dealz, Kategorie, @Benutzer, Kommentare',
          white: 'Whitelist', 
        unblack: 'Entferne von Blacklist:',
           lang: 'Enstyler Sprache w&auml;hlen',
       syncconf: 'Synchronisation',
       autosync: 'Autosync letzter Deal',
       cssdealz: 'CSS in Mail Link einf&uuml;gen',
        synckey: 'SyncID (6+ Zeichen / \'off\')',
           sync: 'Lade Konfig:',
           save: 'Speichern',
          close: 'Schlie&szlig;en',
       // Enstler CSS Config
        savecss: 'Deine ausgewählten CSS Optionen',
       howtocss: 'Zum Beibehalten der CSS Optionen "<EN-LANG:save>" klicken ',
        options: 'Optionen speichern',
      },
  
   en: {
       headline: 'Enstyler - Settings',
      configcss: 'CSS Options',
     userscript: 'Update Enstyler',
            max: 'Display witdh for dealz',
         config: 'Configuration',
       navfixed: 'Display FIXED MainNav',
    dealvotebar: 'Deal thermometer &degC', 
          price: 'Price in Deal Button',
        compact: 'List view more compact',
          touch: 'Enable Touch Support', 
          width: 'Scale Smartphone to px',
          redir: 'Mobile redirect', 
     dealaction: 'additional Deal actions', 
         picker: 'Enable Page Picker', 
       dealtime: 'Show real Deal Time', 
        fixhtml: 'Fix Deal Text HTML',
       noscript: 'Disable Pepper scripts',
      blacklist: 'Enable Black- / Whitelist', 
      blackcold: 'Blacklist if colder then &deg', 
          black: 'Blacklist - dealz, categories, @users, comments',
          white: 'Whitelist', 
        unblack: 'Remove from blacklist:',
           lang: 'Select Enstyler Language',
       syncconf: 'Sync Settings',
       autosync: 'Autosync last deal',
       cssdealz: 'Inject CSS in shared Link',
        synckey: 'SyncID (6+ char. or \'off\')',
           sync: 'Load config:',
           save: 'Save',
          close: 'Close',
       // Enstler CSS Config
        savecss: 'Your selected CSS options',
       howtocss: 'To store your CSS options klick "<EN-LANG:save>" ',
        options: 'Save options',
       },
  
   nl: {
       headline: 'Enstyler - Instellingen',
      configcss: 'CSS opties',
     userscript: 'Update Enstyler',
            max: 'Breedte de Deal display',
         config: 'Configuratie',
       navfixed: 'Display FIXED MainNav', 
    dealvotebar: 'Deal temperatuur &degC',
        compact: 'Lijstweergave compacter',
          price: 'Prijs in Deal Button',
          touch: 'Activeer Touch Support', 
          width: 'Schaal Smartphone naar px',
          redir: 'Mobile redirect', 
     dealaction: 'Bijgevoegde Deal acties', 
         picker: 'Toon Page Picker aan', 
       dealtime: 'Toon echte Deal tijd aan', 
        mintime: 'zodra ouder dan x uren',
        fixhtml: 'Fix deal tekst HTML',
       noscript: 'Schakel Pepper Scripts uit',
      blacklist: 'Activeer Black- / Whitelist',
      blackcold: 'Blacklist zodra ouder dan', 
          black: 'Blacklist - dealz, categorie, @gebruiker, commentaren', 
          white: 'Whitelist', 
        unblack: 'Verwijderen van blacklist:',
           lang: 'Selecteer Enstyler taal',
       syncconf: 'Sync instellingen',
       autosync: 'Autosync laatste Deal',
       cssdealz: 'Spuit CSS in gedeelde link',
        synckey: 'SyncID (6+ laders / \'off\')',
           sync: 'Laad instellingen:',
           save: 'Opslaan',
          close: 'Sluiten',
       // Enstler CSS Config
        savecss: 'Uw selecteerde CSS opties',
       howtocss: 'CSS opties handhaven door "<EN-LANG:save>" te klikken',
        options: 'Opties opslaan',
     }
   }

var enMessageLang = { // Note: HTML notation for special characters not working with hints
   de: {
      configcss: 'Ändern und speichern des Designs',
     userscript: 'Enstyler Script neu laden',
            max: 'Maximale Breite der Dealz Anzeige, Standard ist 1200px',
       navfixed: 'Menüleiste bleibt am oberen Rand sichtbar',
    dealvotebar: 'Skalierung der Temperaturanzeige für Dealz',
        compact: 'Es können mehr Dealz pro Seite angezeigt werden, kann zu Anzeigefehlern führen',
          price: 'Zeige Preis nur im Deal Button an',
          touch: 'Vergrößert Symbole damit man sie besser berühren kann',
          width: 'Skaliere Smartphone Anzeige auf auf ausgewählte Breite in Pixel',
          redir: 'Links zu Amazon Mobil öffen die normale Amazon Webseite', 
     dealaction: 'Erlaubt es z.B. direkt zu Kommentieren oder Mails zu verschicken', 
         picker: 'Fügt eine Seitenauswahl in der Menüleiste hinzu', 
       dealtime: 'Zeige die tatsächliche Zeit zusätzlich zu "vor xh xm"', 
        fixhtml: 'Entfernt durch Kopieren entstandene Fehler aus Dealbeschreibung ',
       noscript: 'Es werden keine MyDaelz Scripte geladen. Schneller, aber einige Funtionen fehlen!',
      blacklist: 'Verberge Dealz die bestimmte Begriffe enthalten', 
      blackcold: 'Verberge Dealz die kälter als die angebene Temperatur sind', 
          black: 'Trenne Begriff durch "," setze "@" vor Benutzernamen, "." ist beliebiges Zeichen, z.B. G.steklo, Bangood, @Admin',
          white: 'Weitere Platzhalter: "\\b" Wortanfang/ende, "\\d" Ziffer, "\\s" Leerzeichen', 
        unblack: 'Anzahl ausgeblendeter Dealz, klicke um diese wieder anzuzeigen',
           lang: 'Enstyler Anzeigesprache, aktiviert auch Google Übersetzung!',
       autosync: 'Synchronisiert zuletzt angesehenen Deal zwischen Geräten',
       cssdealz: 'Leitet geteilte Links über Dealz.rrr.de um und fügt Dein gespeichertes Design ein',
        synckey: 'mindestens 6-stellige Verschlüsselungs-PIN zum Schutz Deiner Daten',
           sync: 'Lade Deine zuletzt gespeicherten Einstellungen von Dealz.rrr.de',
     // Dialog buttons
           save: 'Speichert Deine Einstellung und lädt die Seite neu',
          close: 'Verlässst die Konfiguartion ohne zu speichern',
          reset: 'Enstyler Einstellungen zurücksetzen',
     // error messages
      cssfailed: 'Laden der <EN-LANG:configcss> wurde vom Browser verweigert\n\nBitte pruefen sie das userstyles.org erreichbar und in der Liste der zugelassen Websites ist.',
    regexfailed: 'Fehler in Blacklist: Falsche Verwendung von "." oder ","\n\nBitte bitte pruefen sie die unnoetige/mehrfache Verwendung von "." und ","' 
      },
  en: { 
     // tooltips for config
    configcss: 'Change and save the theme',
     userscript: 'Reload Enstyler Script',
            max: 'Maximum width of Dealz area, standard is 1200px',
       navfixed: 'Menu remains visible at the top',
    dealvotebar: 'Scaling of the temperature display for Dealz',
        compact: 'Show more Dealz but can lead to display errors',
          price: 'Show price in Deal Button only',
          touch: 'Increase icons so they can be touched easyer',
          width: 'Scale smartphone display to selected width in pixels',
          redit: 'Links to Amazon Mobile open as regular website',
     dealaction: 'More actions, e.g. to comment directly or send mail.',
         picker: 'Add page selector to menu bar',
       dealtime: 'Show the deal time additonally to "xh xm"',
        fixhtml: 'Removes crap from deal description caused by copying',
       noscript: 'No MyDaelz scripts are loaded. Faster, but some funtions are missing! ',
      blacklist: 'Hide Dealz containing given terms',
      blackcold: 'Hide Dealz which temperature is higher than the one specified ',
          black: 'Separate the terms by "," put "@" before users, "." is any character, eg P.rn, Bangood, @Admin',
          white: 'Other placeholders: "\\b" start/end of word, "\\d" digit, "\\s" space',
        unblack: 'Number of exposed Dealz, click to re-display',
           lang: 'Enstyler display language, also activates Google translation!',
       autosync: 'Synchronize last viewed deal between devices',
       cssdealz: 'Redirects shared links to Dealz.rrr.de and injects your saved design',
        synckey: 'Enster at least 6-digit PIN to protect your data',
           sync: 'Load vour most recent settings from Dealz.rrr.de ',
     // Dialog buttons
           save: 'Save your settings and reload the page',
          close: 'Exits the configuration without saving',
          reset: 'Reset Enstler settings to default',
    // error messages
      cssfailed: 'loading <EN-LANG:configcss> was denied by your browser\n\nplease check if userstyles.org is avail and on the browsers whitelist.',
    regexfailed: 'Error in blacklist: wrong usage of "." or ","\n\ncheck for unneeded/double usage of "." and "," characters'
      },
   }
//
