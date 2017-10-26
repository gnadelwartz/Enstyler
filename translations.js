// translations for International Enstyler Version
// Version: 3.10.161
// Date: 2016-10-26
// (c) Gnadelwartz kay@rrr.de
// Note: use HTML notation for special characters, i.e. ü -> &uuml;
// Note: to reference an existing string in the same array use <EN-LANG:identifer>

// translation for site specific stuff, ie section names or text to look for actual page
var enSiteConfig= { Mydealz: { lang: 'de', discussion: '/diskussion/', page: 'Seite ' },
                  Preisjaeger: { lang: 'de', discussion: '/diskussion/', page: 'Seite '},
                           Nl: { lang: 'en', discussion: '/discussies/', page: 'Pagina '},
                   Hotukdeals: { lang: 'en', discussion: '/discussion/', page: 'Page '},
                   Userstyles: { lang: 'de' },
                    languages: [ 'auto','de','en','nl','fr','es','be','it','ro' ],
                     timetime: [ '0', '0.5', '1', '2', '3', '6', '12', '100', '500', '1000 '],// hours
                    blackcold: [ '-5', '-10', '-20', '-30', '-60', '-120', '-200', '-1000'], // colder
                    synctimes: [ '5', '10', '20', '30', '60', '120', '1000', '10000'],      // minutes
                    votescale: [ '100', '200', '300', '500', '1000'], // Degree
                        width: [ 'off', '360', '420', '500', '600', '720', '860', '1024'], // Mobile width
                          max: [ 'off', '1280', '1400', '1600', '1900', '2500', '9999'], // Deal max width
                  }

// translation for additional deal actions
var enDealLang = { de: { post: 'Sag was dazu', remove: 'Von Liste entfernen', edit: 'Bearbeiten', mail: 'Mail versenden',
                           po: 'Sag',            rem: 'Entf',                   ed: 'Bearb',        ma: 'Mail' }, // short link text for small screen
                     en: { post: 'post a comment', remove: 'remove from list', edit: 'edit', mail: 'send as mail',
                           po: 'post',             rem: 'remove',              ed: 'edit',   ma: 'mail' }, // short link text for small screen
                     nl: { post: 'Geef een commentaar', remove: 'Van de lijst schrappen', edit: 'Bewerken', mail: 'Per e-mail sturen',
                           po: 'Geef',             rem: 'Verwijderen',              ed: 'Bewerken',   ma: 'Mail' } // short link text for small screen
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
       features: 'Design',
      configcss: 'CSS Optionen',
     userscript: 'Update Enstyler',
        cookies: 'No Cookies',
      injectcss: 'CSS automatisch laden',
            max: 'Breite der Dealanzeige',
         config: 'Konfiguration',
       navfixed: 'feste Haupnavigation',
    dealvotebar: 'Zeige Deal Temperatur', 
  dealvotescale: '100% enspricht x &deg;',
        compact: 'Listenansicht kompakter',
          touch: 'Touch Support aktivieren',
          width: 'Skaliere Smartphone auf',
         amazon: 'Mobile redirect', 
     dealaction: 'zus&auml;tzliche Deal Aktionen', 
         picker: 'Zeige Page Picker', 
       dealtime: 'Zeige echte Deal Zeit', 
        mintime: 'wenn &auml;lter als x Stunden',
        fixhtml: 'fix Deal Text HTML',
       noscript: 'Pepper Scripte abschalten',
      blacklist: 'Aktiviere Black- / Whitelist', 
      blackcold: 'Blacklist wenn k&auml;lter als &deg', 
          black: 'Blacklist - Dealz, Kategorie, @Benutzer, Kommentare',
       examples: 'G.steklo, Bangood, @Admin',
          white: 'Whitelist', 
        unblack: 'Entferne von Blacklist:',
           lang: 'Enstyler Sprache w&auml;hlen',
       syncconf: 'Synchronisation',
       autosync: 'Autosync letzter Deal',
       cssdealz: 'CSS in Mail Link einf&uuml;gen',
        synckey: 'SyncID (6+ Zeichen / \'off\')',
           sync: 'Synchronisieren',
       synctime: 'nach x Minuten',
           save: 'Speichern',
          close: 'Schlie&szlig;en',
       // Enstler CSS Config
        savecss: 'Deine ausgewählten CSS Optionen',
       howtocss: 'Zum Beibehalten der CSS Optionen "<EN-LANG:save>" klicken ',
        options: 'Optionen speichern',
     optnotsave: 'Klicken zum Speichern der Optionen!',
      },
  
   en: {
       headline: 'Enstyler - Settings',
       features: 'Design',
      configcss: 'CSS Options',
     userscript: 'Update Enstyler',
        cookies: 'No Cookies',
      injectcss: 'Load CSS automatically',
            max: 'Display witdh for dealz',
         config: 'Configuration',
       navfixed: 'Display FIXED MainNav', 
    dealvotebar: 'Show Votebar',
  dealvotescale: '100% is x &deg;',
        compact: 'List view more compact',
          touch: 'Enable Touch Support', 
          width: 'Scale Smartphone to px',
         amazon: 'Mobile redirect', 
     dealaction: 'additional Deal actions', 
         picker: 'Enable Page Picker', 
       dealtime: 'Show real Deal Time', 
        fixhtml: 'Fix Deal Text HTML',
       noscript: 'Disable Pepper scripts',
      blacklist: 'Enable Black- / Whitelist', 
      blackcold: 'Blacklist if colder then &deg', 
          black: 'Blacklist - dealz, categories, @users, comments',
       examples: 'p.rn, Bangood, @Admin',
          white: 'Whitelist', 
        unblack: 'Remove from blacklist:',
           lang: 'Select Enstyler Language',
       syncconf: 'Sync Settings',
       autosync: 'Autosync last deal',
       cssdealz: 'Inject CSS in shared Link',
        synckey: 'SyncID (6+ char. or \'off\')',
           sync: 'Synchonize',
       synctime: 'after x minutes',
           save: 'Save',
          close: 'Close',
       // Enstler CSS Config
        savecss: 'Your selected CSS options',
       howtocss: 'To store your CSS options klick "<EN-LANG:save>" ',
        options: 'Save options',
     optnotsave: 'Klick to save Options!',
       },
  
   nl: {
       headline: 'Enstyler - Instellingen',
       features: 'Design',
      configcss: 'CSS opties',
     userscript: 'Update Enstyler',
        cookies: 'No Cookies',
      injectcss: 'Laad automatisch CSS in',
            max: 'Breedte de Deal display',
         config: 'Configuratie',
       navfixed: 'Display FIXED MainNav', 
    dealvotebar: 'Toon Deal temperatuur',
  dealvotescale: '100% is x &deg;',
        compact: 'Lijstweergave compacter',
          touch: 'Activeer Touch Support', 
          width: 'Schaal Smartphone naar px',
         amazon: 'Mobile redirect', 
     dealaction: 'Bijgevoegde Deal acties', 
         picker: 'Toon Page Picker aan', 
       dealtime: 'Toon echte Deal tijd aan', 
        mintime: 'zodra ouder dan x uren',
        fixhtml: 'Fix deal tekst HTML',
       noscript: 'Schakel Pepper Scripts uit',
      blacklist: 'Activeer Black- / Whitelist',
       examples: 'p.rn, Bangood, @Admin',
      blackcold: 'Blacklist zodra ouder dan', 
          black: 'Blacklist - dealz, categorie, @gebruiker, commentaren', 
          white: 'Whitelist', 
        unblack: 'Verwijderen van blacklist:',
           lang: 'Selecteer Enstyler taal',
       syncconf: 'Sync instellingen',
       autosync: 'Autosync laatste Deal',
       cssdealz: 'Spuit CSS in gedeelde link',
        synckey: 'SyncID (6+ laders / \'off\')',
           sync: 'Synchoniseren',
       synctime: 'na x minuten',
           save: 'Opslaan',
          close: 'Sluiten',
       // Enstler CSS Config
        savecss: 'Uw selecteerde CSS opties',
       howtocss: 'CSS opties handhaven door "<EN-LANG:save>" te klikken',
        options: 'Opties opslaan',
     optnotsave: 'Klik om opties op te slaan!',
     }
   }

var enMessageLang = { // Note: HTML notation for special characters not working with hints
   de: {
      configcss: 'Ändern und speichern des Designs',
     userscript: 'Enstyler Script neu laden',
        cookies: 'Firefox Addon "Self-Destructing Cookies"',
      injectcss: 'Die Einstellungen aus CSS Optionen werden geladen, Du kannst aber auch Stylish zu nutzen',
            max: 'Maximale Breite der Dealz Anzeige, Standard ist 1200px',
       navfixed: 'Menüleiste bleibt am oberen Rand sichtbar',
    dealvotebar: 'Bringt die Temperaturanzeige für Dealz zurueck ', 
  dealvotescale: 'Skalierung der Temperaturanzeige für Dealz',
        compact: 'Es können mehr Dealz pro Seite angezeigt werden, kann zu Anzeigefehlern führen',
          touch: 'Vergrößert Symbole damit man sie besser berühren kann',
          width: 'Skaliere Smartphone Anzeige auf auf ausgewählte Breite in Pixel',
         amazon: 'Links zu Amazon Mobil öffen die normale Amazon Webseite', 
     dealaction: 'Erlaubt es z.B. direkt zu Kommentieren oder Mails zu verschicken', 
         picker: 'Fügt eine Seitenauswahl in der Menüleiste hinzu', 
       dealtime: 'Zeige die tatsächliche Zeit zusätzlich zu "vor xh xm"', 
        fixhtml: 'Entfernt durch Kopieren entstandene Fehler aus Dealbeschreibung ',
       noscript: 'Es werden keine MyDaelz Scripte geladen. Schneller, aber einige Funtionen fehlen!',
      blacklist: 'Verberge Dealz die bestimmte Begriffe enthalten', 
      blackcold: 'Verberge Dealz die kälter als die angebene Temperatur sind', 
          black: 'Trenne Begriff durch "," setze "@" vor Benutzernamen, "." ist beliebiges Zeichen',
          white: 'Trenne Begriff durch "," setze "@" vor Benutzernamen, "." ist beliebiges Zeichen', 
        unblack: 'Anzahl ausgeblendeter Dealz, klicke um diese wieder anzuzeigen',
           lang: 'Enstyler Anzeigesprache, aktiviert auch Google Übersetzung!',
       autosync: 'Synchronisiert zuletzt angesehenen Deal zwischen Geräten',
       synctime: 'Letzer Deal wird nach x Minuten inaktivität gespeichert',
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
        cookies: 'Firefox Addon "Self-Destructing Cookies"',
      injectcss: 'The settings from CSS options are loaded, but you can also use Stylish',
            max: 'Maximum width of Dealz area, standard is 1200px',
       navfixed: 'Menu remains visible at the top',
    dealvotebar: 'Return the temperature display for Dealz',
  dealvotescale: 'Scaling of the temperature display for Dealz',
        compact: 'Show more Dealz but can lead to display errors',
          touch: 'Increase icons so they can be touched easyer',
          width: 'Scale smartphone display to selected width in pixels',
         amazon: 'Links to Amazon Mobile open as regular website',
     dealaction: 'More actions, e.g. to comment directly or send mail.',
         picker: 'Add page selector to menu bar',
       dealtime: 'Show the deal time additonally to "xh xm"',
        fixhtml: 'Removes crap from deal description caused by copying',
       noscript: 'No MyDaelz scripts are loaded. Faster, but some funtions are missing! ',
      blacklist: 'Hide Dealz containing given terms',
      blackcold: 'Hide Dealz which temperature is higher than the one specified ',
          black: 'Separate the terms by "," put "@" before users, "." is any character',
          white: 'Separate the terms by "," put "@" before users, "." is any character',
        unblack: 'Number of exposed Dealz, click to re-display',
           lang: 'Enstyler display language, also activates Google translation!',
       autosync: 'Synchronize last viewed deal between devices',
       synctime: 'Last Dealz is stored after x minutes of inactive time',
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
