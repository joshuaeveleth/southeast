!function e(n,t,r){function o(i,a){if(!t[i]){if(!n[i]){var u="function"==typeof require&&require;if(!a&&u)return u(i,!0);if(s)return s(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var f=t[i]={exports:{}};n[i][0].call(f.exports,function(e){var t=n[i][1][e];return o(t?t:e)},f,f.exports,e,n,t,r)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e){!function(){"use strict";function n(e){var n={prefix:"foo"};r(e,n,function(e,n){e&&console.log(e),t(n.results),a=n.next_page_url})}function t(e){s.insertAdjacentHTML("beforeend",o({results:e}))}var r=e("jsonp"),o=e("./results.jade"),s=document.querySelector(".register-list"),i=document.getElementById("load-more-fr-docs");i.addEventListener("click",function(){n(a)});var a,u="https://www.federalregister.gov/api/v1/articles.json?per_page=20&order=newest&conditions%5Bagencies%5D%5B%5D=fish-and-wildlife-service&conditions%5Bdocket_id%5D=fws-r4";n(u)}()},{"./results.jade":9,jsonp:7}],2:[function(){},{}],3:[function(e,n){!function(t){"use strict";var r={},o="en",s={en:{MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["a.m.","p.m."],formats:{YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.MMMM[e.getMonth()]},MMM:function(e){return this.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.A[e.getHours()>11|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.dddd[e.getDay()]},ddd:function(e){return this.ddd[e.getDay()]},dd:function(e){return this.dd[e.getDay()]},Z:function(e){var n=e.utc?0:e.getTimezoneOffset()/.6;return(n>0?"-":"+")+("000"+Math.abs(n-n%100*.4)).slice(-4)},post:function(e){return e}},parsers:{h:function(e,n){return(12===e?0:e)+12*n},pre:function(e){return e}}}},i=function(){return"object"==typeof n&&"object"==typeof n.exports},a=function(e,n){for(var t=0,r=e.length;r>t&&0!==n(e[t],t);t++);},u=function(e,n){var t,r,i,u=0,c=n.match(/YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|./g),f={Y:0,M:1,D:1,A:0,H:0,h:0,m:0,s:0,S:0};return e=s[o].parsers.pre(e),a(c,function(n){t=n.charAt(0),r=n.length,i=e.slice(u),/^(MM|DD|HH|hh|mm|ss|SS?S?)$/.test(n)?f[t]=0|i.slice(0,r):/^(YYYY|YY|M|D|H|h|m|s)$/.test(n)?(i=(i.match(4===r?/^\d{1,4}/:/^\d\d?/)||[""])[0],r=i.length,f[t]=0|i,"Y"===t&&f.Y<70&&(f.Y+=2e3)):/^(MMMM?|A)$/.test(n)&&a(s[o][n],function(e,n){return i.indexOf(e)?void 0:(f[t]="M"===t?n+1:n,r=e.length,0)}),u+=r}),f},c=function(e,n){return s[o].parsers.h(e,n)};r.format=function(e,n,t){var r=new Date(e.getTime()+(t?6e4*e.getTimezoneOffset():0)),i=s[o],a=i.formats;return r.utc=t,n.replace(/(\[[^\[\]]*]|\[.*\][^\[]*\]|YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|ddd?d?|.)/g,function(e){var n=a[e];return n?a.post(n.call(i,r)):e.replace(/\[(.*)]/,"$1")})},r.parse=function(e,n,t){var r=u(e,n),o=new Date(r.Y,r.M-1,r.D,r.H||c(r.h,r.A),r.m,r.s,r.S);return t?new Date(o.getTime()-6e4*o.getTimezoneOffset()):o},r.isValid=function(e,n){var t=u(e,n),r=t.H||c(t.h,t.A),o=new Date(t.Y,t.M-1,t.D,r,t.m,t.s,t.S);return t.Y===o.getFullYear()&&t.M-1===o.getMonth()&&t.D===o.getDate()&&r===o.getHours()&&t.m===o.getMinutes()&&t.s===o.getSeconds()&&t.S===o.getMilliseconds()},r.addYears=function(e,n){var t=new Date(e.getTime());return t.setFullYear(t.getFullYear()+n),t},r.addMonths=function(e,n){var t=new Date(e.getTime());return t.setMonth(t.getMonth()+n),t},r.addDays=function(e,n){return new Date(e.getTime()+864e5*n)},r.addHours=function(e,n){return new Date(e.getTime()+36e5*n)},r.addMinutes=function(e,n){return new Date(e.getTime()+6e4*n)},r.addSeconds=function(e,n){return new Date(e.getTime()+1e3*n)},r.addMilliseconds=function(e,n){return new Date(e.getTime()+n)},r.subtract=function(e,n){var t=e.getTime()-n.getTime();return{toMilliseconds:function(){return t},toSeconds:function(){return t/1e3|0},toMinutes:function(){return t/6e4|0},toHours:function(){return t/36e5|0},toDays:function(){return t/864e5|0}}},r.isLeapYear=function(e){var n=e.getFullYear();return!((n%4||!(n%100))&&n%400)},r.locale=function(n){return n&&("en"!==n&&i()&&e("./locale/"+n),o=n),o},r.getLocales=function(e){return s[e||o]},r.setLocales=function(e,n){var t=function(e,n){var t,r,o=function(){};o.prototype=n,t=new o;for(r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},r=s[e]||s.en,o=t(n,r);n.formats&&(o.formats=t(n.formats,r.formats)),n.parsers&&(o.parsers=t(n.parsers,r.parsers)),s[e]=o},i()?n.exports=r:"function"==typeof define&&define.amd?define([],function(){return r}):t.date=r}(this)},{}],4:[function(e,n,t){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var e=arguments,n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return e;var r="color: "+this.color;e=[e[0],r,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,s=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,r),e}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?c.removeItem("debug"):c.debug=e}catch(n){}}function a(){var e;try{e=c.debug}catch(n){}return e}function u(){try{return window.localStorage}catch(e){}}t=n.exports=e("./debug"),t.log=s,t.formatArgs=o,t.save=i,t.load=a,t.useColors=r;var c;c="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){return JSON.stringify(e)},t.enable(a())},{"./debug":5}],5:[function(e,n,t){function r(){return t.colors[f++%t.colors.length]}function o(e){function n(){}function o(){var e=o,n=+new Date,s=n-(c||n);e.diff=s,e.prev=c,e.curr=n,c=n,null==e.useColors&&(e.useColors=t.useColors()),null==e.color&&e.useColors&&(e.color=r());var i=Array.prototype.slice.call(arguments);i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&(i=["%o"].concat(i));var a=0;i[0]=i[0].replace(/%([a-z%])/g,function(n,r){if("%%"===n)return n;a++;var o=t.formatters[r];if("function"==typeof o){var s=i[a];n=o.call(e,s),i.splice(a,1),a--}return n}),"function"==typeof t.formatArgs&&(i=t.formatArgs.apply(e,i));var u=o.log||t.log||console.log.bind(console);u.apply(e,i)}n.enabled=!1,o.enabled=!0;var s=t.enabled(e)?o:n;return s.namespace=e,s}function s(e){t.save(e);for(var n=(e||"").split(/[\s,]+/),r=n.length,o=0;r>o;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function a(e){var n,r;for(n=0,r=t.skips.length;r>n;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;r>n;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=n.exports=o,t.coerce=u,t.disable=i,t.enable=s,t.enabled=a,t.humanize=e("ms"),t.names=[],t.skips=[],t.formatters={};var c,f=0},{ms:8}],6:[function(e,n,t){(function(r){!function(e){if("object"==typeof t&&"undefined"!=typeof n)n.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof r?r:"undefined"!=typeof self?self:this,o.jade=e()}}(function(){return function n(t,r,o){function s(a,u){if(!r[a]){if(!t[a]){var c="function"==typeof e&&e;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var l=r[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return s(n?n:e)},l,l.exports,n,t,r,o)}return r[a].exports}for(var i="function"==typeof e&&e,a=0;a<o.length;a++)s(o[a]);return s}({1:[function(e,n,t){"use strict";function r(e){return null!=e&&""!==e}function o(e){return(Array.isArray(e)?e.map(o):e&&"object"==typeof e?Object.keys(e).filter(function(n){return e[n]}):[e]).filter(r).join(" ")}function s(e){return a[e]||e}function i(e){var n=String(e).replace(u,s);return n===""+e?e:n}t.merge=function c(e,n){if(1===arguments.length){for(var t=e[0],o=1;o<e.length;o++)t=c(t,e[o]);return t}var s=e["class"],i=n["class"];(s||i)&&(s=s||[],i=i||[],Array.isArray(s)||(s=[s]),Array.isArray(i)||(i=[i]),e["class"]=s.concat(i).filter(r));for(var a in n)"class"!=a&&(e[a]=n[a]);return e},t.joinClasses=o,t.cls=function(e,n){for(var r=[],s=0;s<e.length;s++)r.push(n&&n[s]?t.escape(o([e[s]])):o(e[s]));var i=o(r);return i.length?' class="'+i+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,o){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(o?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,n){var r=[],s=Object.keys(e);if(s.length)for(var i=0;i<s.length;++i){var a=s[i],u=e[a];"class"==a?(u=o(u))&&r.push(" "+a+'="'+u+'"'):r.push(t.attr(a,u,!1,n))}return r.join("")};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},u=/[&<>"]/g;t.escape=i,t.rethrow=function f(n,t,r,o){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&t||o))throw n.message+=" on line "+r,n;try{o=o||e("fs").readFileSync(t,"utf8")}catch(s){f(n,null,r)}var i=3,a=o.split("\n"),u=Math.max(r-i,0),c=Math.min(a.length,r+i),i=a.slice(u,c).map(function(e,n){var t=n+u+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n");throw n.path=t,n.message=(t||"Jade")+":"+r+"\n"+i+"\n\n"+n.message,n},t.DebugItem=function(e,n){this.lineno=e,this.filename=n}},{fs:2}],2:[function(){},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{fs:2}],7:[function(e,n){function t(){}function r(e,n,r){function i(){u.parentNode&&u.parentNode.removeChild(u),window[l]=t,c&&clearTimeout(c)}function a(){window[l]&&i()}"function"==typeof n&&(r=n,n={}),n||(n={});var u,c,f=n.prefix||"__jp",l=n.name||f+s++,d=n.param||"callback",p=null!=n.timeout?n.timeout:6e4,g=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head;return p&&(c=setTimeout(function(){i(),r&&r(new Error("Timeout"))},p)),window[l]=function(e){o("jsonp got",e),i(),r&&r(null,e)},e+=(~e.indexOf("?")?"&":"?")+d+"="+g(l),e=e.replace("?&","?"),o('jsonp req "%s"',e),u=document.createElement("script"),u.src=e,m.parentNode.insertBefore(u,m),a}var o=e("debug")("jsonp");n.exports=r;var s=0},{debug:4}],8:[function(e,n){function t(e){var n=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(n){var t=parseFloat(n[1]),r=(n[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return t*f;case"days":case"day":case"d":return t*c;case"hours":case"hour":case"hrs":case"hr":case"h":return t*u;case"minutes":case"minute":case"mins":case"min":case"m":return t*a;case"seconds":case"second":case"secs":case"sec":case"s":return t*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t}}}function r(e){return e>=c?Math.round(e/c)+"d":e>=u?Math.round(e/u)+"h":e>=a?Math.round(e/a)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function o(e){return s(e,c,"day")||s(e,u,"hour")||s(e,a,"minute")||s(e,i,"second")||e+" ms"}function s(e,n,t){return n>e?void 0:1.5*n>e?Math.floor(e/n)+" "+t:Math.ceil(e/n)+" "+t+"s"}var i=1e3,a=60*i,u=60*a,c=24*u,f=365.25*c;n.exports=function(e,n){return n=n||{},"string"==typeof e?t(e):n["long"]?o(e):r(e)}},{}],9:[function(e,n){var t=e("jade/runtime");n.exports=function(n){var r,o=[],s=n||{};return function(e,n,s){var i=n("date-and-time");(function(){var n=s;if("number"==typeof n.length)for(var a=0,u=n.length;u>a;a++){var c=n[a],f=i.format(new e(c.publication_date),"MMMM D, YYYY");o.push('<li class="federal-register-item"><h3><a'+t.attr("href",c.html_url,!0,!1)+' target="_blank">'+t.escape(null==(r=c.title)?"":r)+"</a></h3><p><strong>"+t.escape(null==(r=f)?"":r)+"</strong></p><p>"+t.escape(null==(r=c["abstract"])?"":r)+"</p><p><a"+t.attr("href",c.pdf_url,!0,!1)+' target="_blank">Download PDF</a></p></li>')}else{var u=0;for(var a in n){u++;var c=n[a],f=i.format(new e(c.publication_date),"MMMM D, YYYY");o.push('<li class="federal-register-item"><h3><a'+t.attr("href",c.html_url,!0,!1)+' target="_blank">'+t.escape(null==(r=c.title)?"":r)+"</a></h3><p><strong>"+t.escape(null==(r=f)?"":r)+"</strong></p><p>"+t.escape(null==(r=c["abstract"])?"":r)+"</p><p><a"+t.attr("href",c.pdf_url,!0,!1)+' target="_blank">Download PDF</a></p></li>')}}}).call(this)}.call(this,"Date"in s?s.Date:"undefined"!=typeof Date?Date:void 0,"require"in s?s.require:"undefined"!=typeof e?e:void 0,"results"in s?s.results:"undefined"!=typeof results?results:void 0,"undefined"in s?s.undefined:void 0),o.join("")}},{"date-and-time":3,"jade/runtime":6}]},{},[1]);