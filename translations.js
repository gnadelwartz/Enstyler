// translations for International Enstyler Version
// Version: 3.10.132
// Date: 2016-10-13
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
         config: 'Konfiguration',
       navfixed: 'feste Haupnavigation',
    dealvotebar: 'Zeige Deal Temperatur', 
  dealvotescale: '100% enspricht x &deg;',
        compact: 'Listenansicht kompakter',
          touch: 'Touch Support aktivieren', 
         amazon: 'Mobile redirect', 
     dealaction: 'zus&auml;tzliche Deal Aktionen', 
         picker: 'Zeige Page Picker', 
       dealtime: 'Zeige echte Deal Zeit', 
        mintime: 'wenn &auml;lter als x Stunden',
        fixhtml: 'fix Deal Text HTML',
       noscript: 'Alle Pepper Scripte abschalten',
   noscripthint: '(schneller, aber einige Funtionen fehlen!)',
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
      cssfailed: 'Laden der <EN-LANG:configcss> wurde vom Browser verweigert\n\nBitte pruefen sie das userstyles.org erreichbar und in der Liste der zugelassen Websites ist.',
    regexfailed: 'Fehler in Blacklist: Falsche Verwendung von "." oder ","\n\nBitte bitte pruefen sie die unnötige/mehrfache Verwendung von "." und ","'
      },
  
   en: {
       headline: 'Enstyler - Settings',
       features: 'Design',
      configcss: 'CSS Options',
     userscript: 'Update Enstyler',
        cookies: 'No Cookies',
      injectcss: 'Inject CSS without Stylish',
         config: 'Configuration',
       navfixed: 'Display FIXED MainNav', 
    dealvotebar: 'Show Votebar',
  dealvotescale: '100% is x &deg;',
        compact: 'List view more compact',
          touch: 'Enable Touch Support', 
         amazon: 'Mobile redirect', 
     dealaction: 'additional Deal actions', 
         picker: 'Enable Page Picker', 
       dealtime: 'Show real Deal Time', 
        mintime: 'if older than Hours',
        fixhtml: 'fix Deal Text HTML',
       noscript: 'Disable all Pepper scripts',
   noscripthint: '(faster but some functionality is missing!)',
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
      cssfailed: 'loading <EN-LANG:configcss> was denied by your browser\n\nplease check if userstyles.org is avail and on the browsers whitelist.',
    regexfailed: 'Error in blacklist: wrong usage of "." or ","\n\ncheck for unneeded/double usage of "." and "," characters'
       },
  
   nl: {
       headline: 'Enstyler - Instellingen',
       features: 'Design',
      configcss: 'CSS opties',
     userscript: 'Update Enstyler',
        cookies: 'No Cookies',
      injectcss: 'CSS zonder Stylish laden',
         config: 'Configuratie',
       navfixed: 'Display FIXED MainNav', 
    dealvotebar: 'Toon Deal temperatuur',
  dealvotescale: '100% is x &deg;',
        compact: 'Lijstweergave compacter',
          touch: 'Activeer Touch Support', 
         amazon: 'Mobile redirect', 
     dealaction: 'Bijgevoegde Deal acties', 
         picker: 'Toon Page Picker aan', 
       dealtime: 'Toon echte Deal tijd aan', 
        mintime: 'zodra ouder dan x uren',
        fixhtml: 'fix Deal Text HTML',
       noscript: 'Disable all Pepper scripts',
   noscripthint: '(faster but some functionality is missing!)',
      blacklist: 'Activeer Black- / Whitelist',
       examples: 'p.rn, Bangood, @Admin',
      blackcold: 'Blacklist zodra ouder dan', 
          black: 'Blacklist - dealz, categorie, @gebruiker, commentaren', 
          white: 'Whitelist', 
        unblack: 'Verwijderen van blacklist:',
           lang: 'Selecteer Enstyler taal',
       syncconf: 'Sync Settings',
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
      cssfailed: 'Het laden van <EN-LANG:configcss> wordt geweigerd door de webbrowser\n\nControleer alstublieft of userstyles.org beschikbaar is en op de witte lijst van browsers.',
    regexfailed: 'Fout in blacklist: verkeerd gebruik van "." of ","\n\nKontroleer aub. het onnodige/dubbele gebruik van "." en "," '
     }
   }

var enCofHintLang = {
   de: { 
      configcss: '&Auml;ndern und speichern des Designs',
     userscript: 'Enstyler Scriipt neu laden',
        cookies: 'Firefox Addon "Self-Destructing Cookies"',
      injectcss: 'Es wir kein Stylish zum Laden des CSS ben&ouml;tigt',
       navfixed: 'Men&uuml;leiste bleibt am oberen Rand sichtbar',
    dealvotebar: 'Bringt die Temperaturanzeigef&uuml;r Dealz zur&uuml;ck ', 
  dealvotescale: 'Skalierung der Temperaturanzeigef&uuml;r',
        compact: 'Mehr Dealz anzeigen, kann zu Anzeigefehlern f&uuml;hren',
          touch: 'Symbole vergrößern damit man sie besser ber&uuml;hren kann', 
         amazon: 'Links zu Amazon Mobil öffen normale Webseite', 
     dealaction: 'Erlaubt direkt zu Kommentieren oder Mails zu verschicken.', 
         picker: 'Zeige Page Picker', 
       dealtime: 'Zeige die tats&auml;iche Zeit statt "vor xh xm"', 
        fixhtml: 'Entfernt durch Kopieren entstandene Fehler aus Dealbeschreibung ',
       noscript: 'Es werden kein MyDaelz Scripte geladen. Schneller, aber einige Funtionen fehlen!',
      blacklist: 'Verberge Dealz die Dich st&ouml;ren', 
      blackcold: 'Verberge Dealz die k&auml;ter als die angebene Temperatur sind', 
          black: 'Trenne Begriff durch "," setze "@" vor Benutzernamen, "." ist beliebiges Zeichen',
          white: 'Trenne Begriff durch "," setze "@" vor Benutzernamen, "." ist beliebiges Zeichen', 
        unblack: 'Anzahl ausgeblendeter Dealz, klicke um diese wieder anzuzeigen',
           lang: 'Enstyler Anzeigesprache, aktiviert auch Google &Uuml;bersetzung!',
       autosync: 'Synchronisiert zuletzt angesehenen Deal zwischen Ger&auml;ten',
       synctime: 'Letzer Dealz wird nach x Minuten inaktivit&auml;t gespeichert',
       cssdealz: 'Leitet geteilte Links auf Dealz.rrr.de um und f&uuml;gt Dein gespeichertes Design ein',
        synckey: 'mindesttens 6stellige PIN zum Schutz Deiner Daten',
           sync: 'L&auml; Deine zuletzt gespeicherten Einstellungen verschl&uuml;sselt von Dealz.rrr.de',
      },
   }
//
