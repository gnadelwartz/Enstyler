// translations for International Enstyler Version
// Version: 3.03.201
// Date: 2016-03-20
// (c) Gnadelwartz kay@rrr.de
// Note: use HTML notation for special characters, i.e. ü -> &uuml;
// Note: to reference an existing string in the same array use <EN-LANG:identifer>

// translation for site specific stuff, ie section names or text to look for actual page
const enSiteConfig= { Mydealz: { lang: 'de', discussion: '/diskussion/', page: 'Seite ' },
                  Preisjaeger: { lang: 'de', discussion: '/diskussion/', page: 'Seite '},
                           Nl: { lang: 'en', discussion: '/discussies/', page: 'Pagina '},
                   Userstyles: { lang: 'de' }
                       }


// translation for additional deal actions
const enDealLang = { de: { post: 'Sag was dazu', remove: 'Von Liste entfernen', edit: 'Bearbeiten', mail: 'Mail versenden',
                           po: 'Sag',            rem: 'Entf',                   ed: 'Bearb',        ma: 'Mail' }, // short link text for small screen
                     en: { post: 'post a comment', remove: 'remove from list', edit: 'edit', mail: 'send as mail',
                           po: 'post',             rem: 'remove',              ed: 'edit',   ma: 'mail' }, // short link text for small screen
                     nl: { post: 'post a comment', remove: 'remove from list', edit: 'edit', mail: 'send as mail',
                           po: 'post',             rem: 'remove',              ed: 'edit',   ma: 'mail' } // short link text for small screen
                     }
  
// translation for deal time display  // Gestern xx:xx Uhr / vor Yh Ym (heute xx:xx Uhr) 
const enTimeLang = { de: { yesterday: 'Gestern', today: 'heute', oclock: 'Uhr' }, 
                     en: { oclock: 'o&acute;clock' }, //field name = english label
                     nl: { yesterday: 'Gestern', today: 'heute', oclock: 'Uhr' }
                     }
  
// translation for additional menu entrys
const enMenuLang = { de: { discussion: 'Alle Diskussionen', // only mydealz
                             enstyler: 'Enstyler Homepage', enhref: 'https://www.mydealz.de/diskussion/enstyler-856062',
                             settings: 'Enstyler Einstellungen' },
                     en: { discussion: 'All discussions', // only mydealz
                             enstyler: 'Enstyler Homepage', enhref: 'https://greasyfork.org/de/scripts/24243-enstylerjs',
                             settings: 'Enstyler Settings' },
                   }


// translation of config dialogs
const enConfigLang = {
   de: { 
       headline: 'Enstyler - Einstellungen',
       features: 'Erweiterte Funktionen f&uuml;r Enstyler',
      configcss: 'CSS Optionen',
     userscript: 'Update Enstyler',
        cookies: 'No Cookies',
      injectcss: 'CSS ohne Stylish laden',
         config: 'Konfiguration',
       navfixed: 'feste Haupnavigation',
      userpopup: 'Popuop f&uuml;r Userinfo', 
          touch: 'Touch Support aktivieren', 
         amazon: 'Amazon mobile redirect', 
     dealaction: 'zus&auml;tzliche Deal Aktionen', 
         picker: 'Zeige Page Picker', 
       dealtime: 'Zeige echte Deal Zeit', 
        mintime: 'wenn &auml;lter als x Stunden',
        fixhtml: 'fix Deal Text HTML',
      blacklist: 'Aktiviere Black- / Whitelist', 
      blackcold: 'Blacklist wenn k&auml;lter als', 
          black: 'Blacklist - Dealz, Kategorie, @Benutzer, Kommentare',
       examples: 'G.steklo, Bangood, @Admin',
          white: 'Whitelist', 
        unblack: 'Entferne von Blacklist:',
           lang: 'Enstyler Sprache w&auml;hlen',
           save: 'Speichern',
          close: 'Schlie&szlig;en',
       // Enstler CSS Config
        savecss: 'Deine ausgewählten CSS Optionen',
       howtocss: 'Zum Beibehalten der CSS Optionen "<EN-LANG:save>" klicken ',
        options: 'Optionen speichern',
     optnotsave: 'Klicken zum Speichern der Optionen!',
      cssfailed: 'Laden der <EN-LANG:configcss> wurde vom Browser verweigert\n\nBitte pruefen sie das userstyles.org in der Liste der zugelassen Websites ist.',
    regexfailed: 'Fehler in Blacklist: Falsche Verwendung von "." oder ","\n\nBitte bitte pruefen sie die unnötige/mehrfache Verwendung von "." und ","'
      },
   en: {
       headline: 'Enstyler - Settings',
       features: 'additonal features for Enstyler',
      configcss: 'CSS Options',
     userscript: 'Update Enstyler',
        cookies: 'No Cookies',
      injectcss: 'Inject CSS without Stylish',
         config: 'Configuration',
       navfixed: 'Display FIXED MainNav', 
      userpopup: 'Show Popuop Userinfo', 
          touch: 'Enable Touch Support', 
         amazon: 'Amazon mobile redirect', 
     dealaction: 'additional Deal actions', 
         picker: 'Enable Page Picker', 
       dealtime: 'Show real Deal Time', 
        mintime: 'if older than Hours',
        fixhtml: 'fix Deal Text HTML',
      blacklist: 'Enable Black- / Whitelist', 
      blackcold: 'Blacklist if colder then', 
          black: 'Blacklist - dealz, categories, @users, comments',
       examples: 'p.rn, Bangood, @Admin',
          white: 'Whitelist', 
        unblack: 'Remove from blacklist:',
           lang: 'Select Enstyler Language',
           save: 'Save',
          close: 'Close',
       // Enstler CSS Config
        savecss: 'Your selected CSS options',
       howtocss: 'To store your CSS options klick "<EN-LANG:save>" ',
        options: 'Save options',
     optnotsave: 'Klick to save Options!',
      cssfailed: 'loading <EN-LANG:configcss> was denied by your browser\n\nplease check if userstyles.org is on the browsers whitelist.',
    regexfailed: 'Error in blacklist: wrong usage of "." or ","\n\ncheck for unneeded/double usage of "." and "," characters'
     }
   }
//
