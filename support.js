//=========== Support functions for enstyler ======
// Version: 3.03.021
// Date: 2016-03-02
// (c) Gnadelwartz kay@rrr.de

// translate/replace text by strings given in object trans[lang]
// assoc object: trans{ lang: { field: 'string', ... }, lang2: { field: 'string2', ... } }
function enLangLocalize(text, trans, lang) {
    // iterate over trans replace by idea from
    // http://stackoverflow.com/questions/7192436/
    text=text.replace(enLangPat,
                  function(match,key){
                    // if key exist return translation, else key
                    return (trans.hasOwnProperty(lang) && trans[lang].hasOwnProperty(key)) ? trans[lang][key] : key;
                  });
    // repeat until no more match for enLangPat
    return text.match(enLangPat) ? enLangLocalize(text, trans, lang) : text
}


    
// add CSS in to document
// new: remove moz-document rules
const enUserScript = { detect: /.*?@-moz-document .*?\{\s*/,
                       split:  /^.*?\{/,
                       next:   /}\s*@-moz-document.*/,
                       //repeat: /}\s*@-moz-document.*?{/g,
                       //end:    /}\s*$/
                        }

function addStyleString(str, part) {
    if (typeof part === 'undefined') part='';
    // check if userscript and extract part
    if (str.match(enUserScript['detect'])) {
       // if part is given extract only part else extract for actual site
       if (part=='') { part= enLocParser.hostname; }
       
       //split userstyle in parts
       var myPart = str.split(part); 
       str='';
       
       // extract parts
       for (var i=1; i< myPart.length; i++) {
           // skip parts with no CSS
           if (!myPart[i].includes('{')) continue;
           str += myPart[i].replace(enUserScript['split'],'').replace(enUserScript['next'],'');
       }
       //if (DEBUG) console.log(str);

    }

    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

// truncate String add word boundary
function truncStringWord(string, n, worddelim ){
    if (typeof worddelim === 'undefined') worddelim=' ';
    if (string.length > n) {
       string = string.substr(0,n-1);
       return string.substr(0,string.lastIndexOf(worddelim)) + '...';
    }
    return string;

};

// sleep time expects milliseconds, then execute code
// Note: works in more cases because of promise
// NOTE: code runs in parallel (asnyc)!
//     sleepAsync(500).then(function() {
//               Do something after the sleep!
//      });

// use e as time, hack for minimizer
function sleepAsync(e) {
   return new Promise((resolve) => setTimeout(resolve, e));
}

// make colors ligther or darker
// http://stackoverflow.com/questions/5560248
//color = "rbg(63,131,163)";
//lighterColor = shadeRGBColor(color, 0.5);  //  rgb(159,193,209)
//darkerColor = shadeRGBColor(color, -0.25); //  rgb(47,98,122)

function shadeRGBColor(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}


// Ensytler debounce Funtionen, modified: parameter swapped, no args passed
// can also be used as simple sleep async
// example debounce: $('input.username').click(debounce(250, function));
// example sleep async: debounce(500, function)
// https://remysharp.com/2010/07/21/throttling-function-calls
function debounce(delay, fn) {
  var timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.call(this);
    }, delay);
  };
}

/* get external file and store to GM_variable */
/* curreently we assume its a CSS or JS File, so we strip comments and @namespace @moz-document... */

const enStripComments = /\/\*.*?\*\/|   *|\t/g
const enFixCSS   = /1111.11%/g


function enCacheExternalResource(stylesheet_uri, GM_variable) {
    GM_xmlhttpRequest({
        method: "GET",
        url: stylesheet_uri,
    
        onload: function(response) {
            //we get the file!, remove linebreaks and strip simple /*comments */
            var myResponse=response.responseText.replace(/\r\n/g, ' ').replace(enStripComments, '').replace(enFixCSS, "100%");
           
            
            if (DEBUG) console.log(myResponse);
            GM_setValue(GM_variable, '');
            GM_setValue(GM_variable, myResponse);
            addStyleString(myResponse);
        }
   });
}

// workaround for zepto (no .outerHeigth())
function getOuterHeight(el) {
  // Get the DOM Node if you pass in a string
  el = (typeof el === 'string') ? document.querySelector(el) : el; 

  var styles = window.getComputedStyle(el);
  var margin = parseFloat(styles['marginTop']) +
               parseFloat(styles['marginBottom']);

  return Math.ceil(el.offsetHeight + margin);
}

/*

{
  var _xhr = window.XMLHttpRequest;
  var has_cred = false;
  if (DEBUG) console.error('enCacheExternal URI: '+stylesheet_uri)
  try {has_cred = _xhr && ('withCredentials' in (new _xhr()));} catch(e) {}
  if (!has_cred) {
    console.error('CORS not supported');
    return;
  }
  var xhr = new _xhr();
  xhr.open('GET', stylesheet_uri);
  xhr.onload = function() {
    xhr.onload = xhr.onerror = null;
    if (xhr.status < 200 || xhr.status >=300) {
      console.error('style failed to load: ' + stylesheet_uri)
    } else {
      // modified to save to GM_variable!
      var myResponse=xhr.responseText.replace(/\r\n/g, ' ').replace(enStripComments, '');
      if (DEBUG) console.log(myResponse);
      GM_setValue(GM_variable, myResponse);
      addStyleString(myResponse);
    };
    xhr.onerror = function() {
      xhr.onload = xhr.onerror = null;
      console.error('XHR CORS CSS fail:' + styleURI);
    };
  }
    xhr.send();
}
    

// =========== Support functions for LATER use not needed for production !!!

/* Perfomance test code
var t0 = performance.now();
  //Code to test here ...
var t1 = performance.now();
console.error("Call XXXX took " + (t1 - t0) + " milliseconds.")
*/

/*
// from https://gist.github.com/TheDistantSea/8021359
// returns 0 on equal, 1 on v1 newer, -1 on v2 newer 
function versionCompare(v1, v2) {
    var lexicographical = false,
        zeroExtend = true,
        v1parts = v1.split('.'),
        v2parts = v2.split('.');

    function isValidPart(x) { return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x); }
    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {return NaN; }

    if (zeroExtend) {
        while (v1parts.length < v2parts.length) v1parts.push("0");
        while (v2parts.length < v1parts.length) v2parts.push("0");
    }

    if (!lexicographical) {
        v1parts = v1parts.map(Number);
        v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length == i) { return 1; }
        if (v1parts[i] == v2parts[i]) { continue; }
        else if (v1parts[i] > v2parts[i]) { return 1; }
        else { return -1; }
    }

    if (v1parts.length != v2parts.length) { return -1; }
    return 0;
}

*/
