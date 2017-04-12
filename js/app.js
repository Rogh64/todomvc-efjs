!function(){"use strict";function e(e){if(null===e||void 0===e)throw new TypeError("Sources cannot be null or undefined");return Object(e)}function t(e,t,r){var o=t[r];if(void 0!==o&&null!==o){if(K.call(e,r)&&(void 0===e[r]||null===e[r]))throw new TypeError("Cannot convert undefined or null to object ("+r+")");K.call(e,r)&&V(o)?e[r]=n(Object(e[r]),t[r]):e[r]=o}}function n(e,n){if(e===n)return e;n=Object(n);for(var r in n)K.call(n,r)&&t(e,n,r);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(n),a=0;a<o.length;a++)Q.call(n,o[a])&&t(e,n,o[a]);return e}"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(){var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var n,r=arguments,o=this,a=arguments.length;for(n=0;n<a;n++)e=r[n],t.call(o,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:n.call(this,e)}}e=null}():function(e){if("Element"in e){var t=e.Element.prototype,n=Object,r=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array.prototype.indexOf||function(e){for(var t=this,n=0,r=this.length;n<r;n++)if(n in t&&t[n]===e)return n;return-1},a=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},i=function(e,t){if(""===t)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(e,t)},l=function(e){for(var t=this,n=r.call(e.getAttribute("class")||""),o=n?n.split(/\s+/):[],a=0,i=o.length;a<i;a++)t.push(o[a]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},c=l.prototype=[],s=function(){return new l(this)};if(a.prototype=Error.prototype,c.item=function(e){return this[e]||null},c.contains=function(e){return e+="",-1!==i(this,e)},c.add=function(){var e,t=this,n=arguments,r=0,o=n.length,a=!1;do{e=n[r]+"",-1===i(t,e)&&(t.push(e),a=!0)}while(++r<o);a&&this._updateClassName()},c.remove=function(){var e,t,n=this,r=arguments,o=0,a=r.length,l=!1;do{for(e=r[o]+"",t=i(n,e);-1!==t;)n.splice(t,1),l=!0,t=i(n,e)}while(++o<a);l&&this._updateClassName()},c.toggle=function(e,t){e+="";var n=this.contains(e),r=n?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!n},c.toString=function(){return this.join(" ")},n.defineProperty){var u={get:s,enumerable:!0,configurable:!0};try{n.defineProperty(t,"classList",u)}catch(e){-2146823252===e.number&&(u.enumerable=!1,n.defineProperty(t,"classList",u))}}else n.prototype.__defineGetter__&&t.__defineGetter__("classList",s)}}(window.self));var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){!function(t,n){"function"==typeof define&&define.amd?define(n):"object"==typeof e&&e.exports?e.exports=n():t.log=n()}(r,function(){function e(e){return typeof console!==l&&(void 0!==console[e]?t(console,e):void 0!==console.log?t(console,"log"):i)}function t(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function n(e,t,n){return function(){typeof console!==l&&(r.call(this,t,n),this[e].apply(this,arguments))}}function r(e,t){for(var n=this,r=0;r<c.length;r++){var o=c[r];n[o]=r<e?i:n.methodFactory(o,e,t)}}function o(t,r,o){return e(t)||n.apply(this,arguments)}function a(e,t,n){function a(e){var t=(c[e]||"silent").toUpperCase();try{return void(window.localStorage[f]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(f)+"="+t+";"}catch(e){}}function i(){var e;try{e=window.localStorage[f]}catch(e){}if(typeof e===l)try{var t=window.document.cookie,n=t.indexOf(encodeURIComponent(f)+"=");n&&(e=/^([^;]+)/.exec(t.slice(n))[1])}catch(e){}return void 0===u.levels[e]&&(e=void 0),e}var s,u=this,f="loglevel";e&&(f+=":"+e),u.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},u.methodFactory=n||o,u.getLevel=function(){return s},u.setLevel=function(t,n){if("string"==typeof t&&void 0!==u.levels[t.toUpperCase()]&&(t=u.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=u.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(s=t,!1!==n&&a(t),r.call(u,t,e),typeof console===l&&t<u.levels.SILENT)return"No console available for logging"},u.setDefaultLevel=function(e){i()||u.setLevel(e,!1)},u.enableAll=function(e){u.setLevel(u.levels.TRACE,e)},u.disableAll=function(e){u.setLevel(u.levels.SILENT,e)};var p=i();null==p&&(p=null==t?"WARN":t),u.setLevel(p,!1)}var i=function(){},l="undefined",c=["trace","debug","info","warn","error"],s=new a,u={};s.getLogger=function(e){if("string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=u[e];return t||(t=u[e]=new a(e,s.getLevel(),s.methodFactory)),t};var f=typeof window!==l?window.log:void 0;return s.noConflict=function(){return typeof window!==l&&window.log===s&&(window.log=f),s},s})}),a="[EF]",i=o.getLogger("ef"),l=(i.trace.bind(null,a),i.debug.bind(null,a),i.info.bind(null,a)),c=i.warn.bind(null,a),s=i.error.bind(null,a),u=function(e){return s("Detach the component before attaching it to a new component! Component to be detached:",e)},f=function(){return s("Cannot mount a component to it's child component!")};i.setLevel("error"),l("Debug logging enabled!");var p=new RegExp("\\&[0-7]{1,3}","g"),d=new RegExp("\\&u\\[.*?\\]","g"),h=new RegExp("\\&u.{0,4}","g"),v=new RegExp("\\&x.{0,2}","g"),y=new RegExp("\\&","g"),g=new RegExp("\\&b","g"),m=new RegExp("\\&t","g"),b=new RegExp("\\&n","g"),w=new RegExp("\\&v","g"),$=new RegExp("\\&f","g"),O=new RegExp("\\&r","g"),j=function(){throw new SyntaxError("Octal escape sequences are not allowed in EFML.")},E=function(e){if(e=e.substr(3,e.length-4),!(e=parseInt(e,16)))throw new SyntaxError("Invalid Unicode escape sequence");try{return String.fromCodePoint(e)}catch(e){throw new SyntaxError("Undefined Unicode code-point")}},N=function(e){if(e=e.substring(2),!(e=parseInt(e,16)))throw new SyntaxError("Invalid Unicode escape sequence");return String.fromCharCode(e)},S=function(e){if(e="00"+e.substring(2),!(e=parseInt(e,16)))throw new SyntaxError("Invalid hexadecimal escape sequence");return String.fromCharCode(e)},x=function(e){for(var t=e.split("&&"),n=[],r=0,o=t;r<o.length;r+=1){var a=o[r],i=a.replace(p,j).replace(d,E).replace(h,N).replace(v,S).replace(g,"\b").replace(m,"\t").replace(b,"\n").replace(w,"\v").replace($,"\f").replace(O,"\r").replace(y,"");n.push(i)}return n.join("&")},k=x,T=">#%@.-+".split(""),D="attached data element nodes methods subscribe unsubscribe update destroy".split(" ").map(function(e){return"$"+e}),L=/^\{\{.*\}\}$/,C=function(e,t){return void 0===t&&(t=-2),"Failed to parse eft template: "+e+". at line "+(t+1)},R=function(e){return!e.replace(/\s/,"")},A=function(e,t){null===t.offset&&(t.offset=e.match(/\s*/)[0],t.offset&&(t.offsetReg=new RegExp("^"+t.offset)))},P=function(e,t,n){if(t.offsetReg){var r=!1;if(e=e.replace(t.offsetReg,function(){return r=!0,""}),!r)throw new SyntaxError(C("Expected indent to be grater than 0 and less than "+(t.prevDepth+1)+", but got -1",n))}return e},_=function(e,t){if(!t.indentReg){var n=e.match(/^(\t*)( *).*/)[2];n&&(t.indentReg=new RegExp(n))}},I=function(e,t,n){var r=0;t.indentReg&&(e=e.replace(/^\s*/,function(e){return e.replace(t.indentReg,"\t")}));var o=e.replace(/^\t*/,function(e){return r=e.length,""});if(/^\s/.test(o))throw new SyntaxError(C("Bad indent",n));return{depth:r,content:o}},F=function(e,t){for(var n=e,r=0;r<t;r++)n=n[n.length-1];return n},U=function(e){e=e.substr(2,e.length-4);var t=e.split("="),n=t[0],r=t.slice(1),o=n.trim().split("."),a=k(r.join("=").trim());return a?[o,a]:[o]},q=function(e){var t=e.split("#"),n=t[0],r=t.slice(1),o=n.split("."),a=o[0],i=o.slice(1),l=i.join(".");return L.test(l)?{tag:a,name:r.join("#"),class:U(l)}:{tag:a,name:r.join("#"),class:i.join(" ")}},M=function(e){var t=e.split("="),n=t.shift().trim(),r=t.join("=").trim();return L.test(r)?{name:n,value:U(r)}:{name:n,value:k(r)}},B=function(e){var t=[],n=e.match(/\{\{.+?\}\}/g);if(n)for(var r=e.split(/\{\{.+?\}\}/g),o=0;o<r.length;o++)r[o]&&t.push(k(r[o])),n[o]&&t.push(U(n[o]));else t.push(k(e));return t},W=function(e){var t=e.split(":"),n=t[0],r=t.slice(1),o=r.join(":");return o?L.test(o)?[n.trim(),U(o)]:[n.trim(),k(r.join(":"))]:[n.trim()]},Y=function(e){var t=e.line,n=e.ast,r=e.parsingInfo,o=e.i;if(!R(t)){_(t,r),A(t,r);var a=I(P(t,r,o),r,o),i=a.depth,l=a.content;if(l){if(i<0||i-r.prevDepth>1||i-r.prevDepth==1&&-1===["comment","tag"].indexOf(r.prevType)||"comment"!==r.prevType&&0===i&&r.topExists)throw new SyntaxError(C("Expected indent to be grater than 0 and less than "+(r.prevDepth+1)+", but got "+i,o));var c=l[0];if(l=l.slice(1),!r.topExists&&T.indexOf(c)>=0&&">"!==c)throw new SyntaxError(C("No top level entry",o));if(!l&&T.indexOf(c)>=0)throw new SyntaxError(C("Empty content",o));switch((i<r.prevDepth||i===r.prevDepth&&"tag"===r.prevType)&&(r.currentNode=F(n,i)),r.prevDepth=i,c){case">":r.topExists||(r.topExists=!0,r.minDepth=i);var s=q(l),u=[{t:s.tag}];s.class&&(u[0].a={},u[0].a.class=s.class),s.name&&(u[0].n=s.name),r.currentNode.push(u),r.currentNode=u,r.prevType="tag";break;case"#":var f=M(l),p=f.name,d=f.value;r.currentNode[0].a||(r.currentNode[0].a={}),r.currentNode[0].a[p]=d,r.prevType="attr";break;case"%":var h=M(l),v=h.name,y=h.value;r.currentNode[0].p||(r.currentNode[0].p={}),r.currentNode[0].p[v]=y,r.prevType="prop";break;case"@":var g=M(l),m=g.name,b=g.value;if("string"!=typeof b)throw new SyntaxError(C("Methods should not be wrapped in mustaches",o));r.currentNode[0].e||(r.currentNode[0].e={}),r.currentNode[0].e[m]=W(b),r.prevType="event";break;case".":(w=r.currentNode).push.apply(w,B(l)),r.prevType="text";break;case"-":if(-1!==D.indexOf(l))throw new SyntaxError(C("Reserved name '"+l+"' should not be used",o));r.currentNode.push({n:l,t:0}),r.prevType="node";break;case"+":r.currentNode.push({n:l,t:1}),r.prevType="list";break;default:r.prevType="comment"}}var w}},G=function(e){if(!e)throw new TypeError(C("Template required, but nothing present"));var t=typeof e;if("string"!==t)throw new TypeError(C("Expected a string, but got a(n) "+t));for(var n=e.split(/\r?\n/),r=[],o={indentReg:null,prevDepth:0,offset:null,offsetReg:null,prevType:"comment",currentNode:r,topExists:!1},a=0;a<n.length;a++)Y({line:n[a],ast:r,parsingInfo:o,i:a});if(r[0])return r[0];throw new SyntaxError(C("Nothing to be parsed",n.length-1))},H=function(e,t){return t||(t=G),t(e)},X=Array.prototype,J={copy:function(e){return X.slice.call(e,0)},empty:function(e){return e.length=0,e},equals:function(e,t){if(!Array.isArray(t))return!1;if(e===t)return!0;if(e.length!==t.length)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0},pop:function(e){return X.pop.call(e)},push:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return X.push.apply(e,t)},remove:function(e,t){var n=X.indexOf.call(e,t);if(n>-1)return X.splice.call(e,n,1),t},reverse:function(e){return X.reverse.call(e)},shift:function(e){return X.shift.call(e)},slice:function(e,t,n){return X.slice.call(e,t,n)},sort:function(e,t){return X.sort.call(e,t)},splice:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return X.splice.apply(e,t)},unshift:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return X.unshift.apply(e,t)}},z=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)},V=z,K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,Z=function(t){var r=arguments;t=e(t);for(var o=1;o<arguments.length;o++)n(t,r[o]);return t},ee=function(e,t){for(var n=0,r=e;n<r.length;n+=1){var o=r[n];t[o]||(t[o]={}),t=t[o]}return t},te=function(e,t){for(var n=0,r=e;n<r.length;n+=1){var o=r[n];if(!t[o]){var a={};Object.defineProperty(t,o,{get:function(){return a},set:function(e){Z(a,e)},enumerable:!0})}t=t[o]}return t},ne=function(e){var t=e.path,n=e._key,r=e.parentNode,o=e.subscriberNode,a=e.dataNode;return t.length>0&&(r=te(t,r),o=ee(t,o),a=ee(t,a)),o[n]||(o[n]=[]),Object.hasOwnProperty.call(a,n)||(a[n]=""),{parentNode:r,subscriberNode:o[n],dataNode:a}},re=function(e,t){var n=e.split("."),r=n.pop();return ee(n,t)[r]},oe=function(e){var t=e.bind,n=e.state,r=e.subscriber,o=e.innerData,a=e.handler,i=J.copy(t[0]),l=t[1],c=i.pop(),s=ne({path:i,_key:c,parentNode:n.$data,subscriberNode:r,dataNode:o}),u=s.parentNode,f=s.subscriberNode,p=s.dataNode;return Object.hasOwnProperty.call(u,c)||Object.defineProperty(u,c,{get:function(){return p[c]},set:function(e){if(p[c]!==e){p[c]=e;for(var t=0,r=f;t<r.length;t+=1){r[t].call(n,e)}}},enumerable:!0}),l&&(u[c]=l),a&&(u[c]&&a(u[c]),f.push(a)),{dataNode:p,subscriberNode:f,_key:c}},ae=function(e,t,n){var r=document.createElement(e);return t&&Object.defineProperty(n,t,{value:r,enumerable:!0}),r},ie=function(e){var t=e.dataNode,n=e.subscriberNode,r=e.handler,o=e.state,a=e._key,i=e.value;if(t[a]!==i){t[a]=i;for(var l=0,c=n;l<c.length;l+=1){var s=c[l];s!==r&&s.call(o,i)}}},le=function(e){var t=e.dataNode,n=e.subscriberNode,r=e.handler,o=e.state,a=e.element,i=e.key,l=e._key;"value"===i?(a.addEventListener("input",function(){return ie({dataNode:t,subscriberNode:n,handler:r,state:o,_key:l,value:a.value})},!0),a.addEventListener("change",function(){return ie({dataNode:t,subscriberNode:n,handler:r,state:o,_key:l,value:a.value})},!0)):a.addEventListener("change",function(){return ie({dataNode:t,subscriberNode:n,handler:r,state:o,_key:l,value:a.checked})},!0)},ce=function(e){var t=e.element,n=e.attr,r=e.key,o=e.state,a=e.subscriber,i=e.innerData;"string"==typeof n?t.setAttribute(r,n):oe({bind:n,state:o,subscriber:a,innerData:i,handler:function(e){return t.setAttribute(r,e)}})},se=function(e){var t=e.element,n=e.prop,r=e.key,o=e.state,a=e.subscriber,i=e.innerData;if("string"==typeof n)t[r]=n;else{var l=function(e){t[r]=e},c=oe({bind:n,state:o,subscriber:a,innerData:i,handler:l}),s=c.dataNode,u=c.subscriberNode,f=c._key;"value"!==r&&"checked"!==r||le({dataNode:s,subscriberNode:u,handler:l,state:o,element:t,key:r,_key:f})}},ue=function(e){var t=e.element,n=e.event,r=e.key,o=e.state,a=e.subscriber,i=e.innerData,l=n[0],s=n[1];if(Array.isArray(s)){var u=oe({bind:s,state:o,subscriber:a,innerData:i}),f=u.dataNode,p=u._key;return void t.addEventListener(r,function(e){o.$methods[l]?o.$methods[l]({e:e,value:f[p],state:o}):c("Method named '"+l+"' not found!")})}t.addEventListener(r,function(e){o.$methods[l]?o.$methods[l]({e:e,value:s,state:o}):c("Method named '"+l+"' not found!")},!1)},fe=function(e){var t=e.info,n=e.state,r=e.innerData,o=e.nodes,a=e.subscriber,i=t.t,l=t.a,c=t.p,s=t.e,u=t.n,f=ae(i,u,o);for(var p in l)ce({element:f,attr:l[p],key:p,state:n,subscriber:a,innerData:r});for(var d in c)se({element:f,prop:c[d],key:d,state:n,subscriber:a,innerData:r});for(var h in s)ue({element:f,event:s[h],key:h,state:n,subscriber:a,innerData:r});return f},pe=Node.prototype,de={before:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(e.parentNode){var r=document.createDocumentFragment();t.reverse();for(var o=0,a=t;o<a.length;o+=1){var i=a[o];pe.appendChild.call(r,i)}pe.insertBefore.call(e.parentNode,r,e)}},after:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(e.parentNode){for(var r=document.createDocumentFragment(),o=0,a=t;o<a.length;o+=1){var i=a[o];pe.appendChild.call(r,i)}e.nextSibling?pe.insertBefore.call(e.parentNode,r,e.nextSibling):pe.appendChild.call(e.parentNode,r)}},append:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(-1!==[1,9,11].indexOf(e.nodeType)){for(var r=document.createDocumentFragment(),o=0,a=t;o<a.length;o+=1){var i=a[o];pe.appendChild.call(r,i)}pe.appendChild.call(e,r)}},remove:function(e){pe.removeChild.call(e.parentNode,e)}},he={empty:function(){for(var e=this,t=0,n=e;t<n.length;t+=1){var r=n[t];de.remove(r.$element),r.$destroy()}J.empty(this)},pop:function(){if(0!==this.length){var e=J.pop(this);return de.remove(e.$element),e}},push:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];for(var r=[],o=0,a=t;o<a.length;o+=1){var i=a[o];if(i.$attached)return u(i);J.push(r,i.$element)}return 0===this.length?de.after.apply(de,[e].concat(r)):de.after.apply(de,[this[this.length-1].$element].concat(r)),J.push.apply(J,[this].concat(t))},remove:function(){for(var e=this,t=[],n=arguments.length;n--;)t[n]=arguments[n];for(var r=[],o=0,a=t;o<a.length;o+=1){var i=a[o],l=J.remove(e,i);l&&(de.remove(l.$element),J.push(r,l))}return r},reverse:function(){var e=this;if(0===this.length)return this;var t=document.createTextNode("");de.before(this[0].$element,t);for(var n=[],r=this.length-1;r>=0;r--)J.push(n,e[r].$element);return de.after.apply(de,[t].concat(n)),de.remove(t),J.reverse(this)},shift:function(){if(0!==this.length){var e=J.shift(this);return de.remove(e.$element),e}},sort:function(e){var t=this;if(0===this.length)return this;var n=document.createTextNode("");de.before(this[0].$element,n);for(var r=J.sort(this,e),o=[],a=0,i=t;a<i.length;a+=1){var l=i[a];J.push(o,l.$element)}return de.after.apply(de,[n].concat(o)),de.remove(n),r},splice:function(){for(var e=this,t=[],n=arguments.length;n--;)t[n]=arguments[n];if(0===this.length)return this;var r=document.createTextNode("");de.before(this[0].$element,r);for(var o=J.splice.apply(J,[this].concat(t)),a=[],i=0,l=o;i<l.length;i+=1){var c=l[i];de.remove(c.$element)}for(var s=0,u=e;s<u.length;s+=1){var f=u[s];J.push(a,f.$element)}return de.after.apply(de,[r].concat(a)),de.remove(r),o},unshift:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(0===this.length)return(l=this).push.apply(l,e).length;var n=document.createTextNode("");de.before(this[0].$element,n);for(var r=[],o=0,a=e;o<a.length;o+=1){var i=a[o];if(i.$attached)return u(i);J.push(r,i.$element)}return de.after.apply(de,[n].concat(r)),de.remove(n),J.unshift.apply(J,[this].concat(e));var l}},ve=function(e,t){return Object.defineProperties(e,{empty:{value:he.empty},pop:{value:he.pop},push:{value:he.push.bind(e,t)},remove:{value:he.remove},reverse:{value:he.reverse},shift:{value:he.shift},sort:{value:he.sort},splice:{value:he.splice},unshift:{value:he.unshift}}),e},ye=function(e){return Array.isArray(e)?"array":typeof e},ge="attached data element nodes methods subscribe unsubscribe update destroy".split(" ").map(function(e){return"$"+e}),me=function(e){var t=e.node,n=e.state,r=e.subscriber,o=e.innerData,a=e.element,i=document.createTextNode("");oe({bind:t,state:n,subscriber:r,innerData:o,handler:function(e){i.textContent=e}}),de.append(a,i)},be=function(e){var t=e.$element,n=e.children,r=e.name,o=e.anchor,a=e.value;if(n[r]!==a){if(a&&(a.$attached&&u(a),a.$element.contains(t)))return f();n[r]&&de.remove(n[r].$element),a&&de.after(o,a.$element),n[r]=a}},we=function(e){var t=e.state,n=e.name,r=e.children,o=e.anchor;Object.defineProperty(t,n,{get:function(){return r[n]},set:function(e){be({$element:t.$element,children:r,name:n,anchor:o,value:e})},enumerable:!0,configurable:!0})},$e=function(e){var t=e.$element,n=e.children,r=e.name,o=e.anchor,a=e.value;a=a?J.copy(a):[];var i=document.createDocumentFragment();if(n[r]){for(var l=0,c=a;l<c.length;l+=1){var s=c[l];if(s.$element.contains(t))return f();de.append(i,s.$element),J.remove(n[r],s)}for(var u=0,p=n[r];u<p.length;u+=1){var d=p[u];de.remove(d.$element)}}else for(var h=0,v=a;h<v.length;h+=1){var y=v[h];de.append(i,y.$element)}n[r].length=0,J.push.apply(J,[n[r]].concat(a)),de.after(o,i)},Oe=function(e){var t=e.state,n=e.name,r=e.children,o=e.anchor;r[n]=ve([],o),Object.defineProperty(t,n,{get:function(){return r[n]},set:function(e){r[n]&&J.equals(r[n],e)||$e({$element:t.$element,children:r,name:n,anchor:o,value:e})},enumerable:!0,configurable:!0})},je=function(e){var t=e.node,n=e.nodeType,r=e.element,o=e.state,a=e.innerData,i=e.nodes,l=e.children,s=e.subscriber,u=e.create;switch(n){case"string":de.append(r,document.createTextNode(t));break;case"array":"object"===ye(t[0])?de.append(r,u({ast:t,state:o,innerData:a,nodes:i,children:l,subscriber:s,create:u})):me({node:t,state:o,subscriber:s,innerData:a,element:r});break;case"object":if(-1!==ge.indexOf(t.n)){c("Reserved name '"+t.n+"' should not be used, ignoring.");break}var f=document.createTextNode("");if(0===t.t)we({state:o,name:t.n,children:l,anchor:f});else{if(1!==t.t)throw new TypeError("Not a standard ef.js AST: Unknown mounting point type '"+t.t+"'");Oe({state:o,name:t.n,children:l,anchor:f})}de.append(r,f);break;default:throw new TypeError("Not a standard ef.js AST: Unknown node type '"+n+"'")}},Ee=function(e){for(var t=e.ast,n=e.state,r=e.innerData,o=e.nodes,a=e.children,i=e.subscriber,l=e.create,c=fe({info:t[0],state:n,innerData:r,nodes:o,subscriber:i}),s=1;s<t.length;s++)je({node:t[s],nodeType:ye(t[s]),element:c,state:n,innerData:r,nodes:o,children:a,subscriber:i,create:l});return c},Ne=Object.prototype.toString,Se=function(e){var t=Ne.call(e),n="[object Arguments]"===t;return n||(n="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===Ne.call(e.callee)),n},xe=Object.prototype.hasOwnProperty,ke=Object.prototype.toString,Te=Array.prototype.slice,De=Se,Le=Object.prototype.propertyIsEnumerable,Ce=!Le.call({toString:null},"toString"),Re=Le.call(function(){},"prototype"),Ae=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Pe=function(e){var t=e.constructor;return t&&t.prototype===e},_e={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},Ie=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!_e["$"+e]&&xe.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{Pe(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),Fe=function(e){if("undefined"==typeof window||!Ie)return Pe(e);try{return Pe(e)}catch(e){return!1}},Ue=function(e){var t=null!==e&&"object"==typeof e,n="[object Function]"===ke.call(e),r=De(e),o=t&&"[object String]"===ke.call(e),a=[];if(!t&&!n&&!r)throw new TypeError("Object.keys called on a non-object");var i=Re&&n;if(o&&e.length>0&&!xe.call(e,0))for(var l=0;l<e.length;++l)a.push(String(l));if(r&&e.length>0)for(var c=0;c<e.length;++c)a.push(String(c));else for(var s in e)i&&"prototype"===s||!xe.call(e,s)||a.push(String(s));if(Ce)for(var u=Fe(e),f=0;f<Ae.length;++f)u&&"constructor"===Ae[f]||!xe.call(e,Ae[f])||a.push(Ae[f]);return a};Ue.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return e(De(t)?Te.call(t):t)}}}else Object.keys=Ue;return Object.keys||Ue};var qe=Ue,Me=Object.prototype.hasOwnProperty,Be=Object.prototype.toString,We=function(e,t,n){if("[object Function]"!==Be.call(t))throw new TypeError("iterator must be a function");var r=e.length;if(r===+r)for(var o=0;o<r;o++)t.call(n,e[o],o,e);else for(var a in e)Me.call(e,a)&&t.call(n,e[a],a,e)},Ye=qe,Ge=We,He="function"==typeof Symbol&&"symbol"==typeof Symbol(),Xe=Object.prototype.toString,Je=function(e){return"function"==typeof e&&"[object Function]"===Xe.call(e)},ze=Object.defineProperty&&function(){var e={};try{Object.defineProperty(e,"x",{enumerable:!1,value:e});for(var t in e)return!1;return e.x===e}catch(e){return!1}}(),Ve=function(e,t,n,r){(!(t in e)||Je(r)&&r())&&(ze?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n,writable:!0}):e[t]=n)},Ke=function(e,t){var n=arguments.length>2?arguments[2]:{},r=Ye(t);He&&(r=r.concat(Object.getOwnPropertySymbols(t))),Ge(r,function(r){Ve(e,r,t[r],n[r])})};Ke.supportsDescriptors=!!ze;var Qe=Ke,Ze=Array.prototype.slice,et=Object.prototype.toString,tt=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==et.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var n,r=Ze.call(arguments,1),o=function(){if(this instanceof n){var o=t.apply(this,r.concat(Ze.call(arguments)));return Object(o)===o?o:this}return t.apply(e,r.concat(Ze.call(arguments)))},a=Math.max(0,t.length-r.length),i=[],l=0;l<a;l++)i.push("$"+l);if(n=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")(o),t.prototype){var c=function(){};c.prototype=t.prototype,n.prototype=new c,c.prototype=null}return n},nt=tt,rt=Function.prototype.bind||nt,ot=qe,at=qe,it=rt,lt=function(e){return void 0!==e&&null!==e},ct=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),n=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;e[t]=42;for(t in e)return!1;if(0!==ot(e).length)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var r=Object.getOwnPropertySymbols(e);if(1!==r.length||r[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}(),st=Object,ut=it.call(Function.call,Array.prototype.push),ft=it.call(Function.call,Object.prototype.propertyIsEnumerable),pt=ct?Object.getOwnPropertySymbols:null,dt=function(e,t){var n=arguments;if(!lt(e))throw new TypeError("target must be an object");var r,o,a,i,l,c,s,u=st(e);for(r=1;r<arguments.length;++r){o=st(n[r]),i=at(o);var f=ct&&(Object.getOwnPropertySymbols||pt);if(f)for(l=f(o),a=0;a<l.length;++a)s=l[a],ft(o,s)&&ut(i,s);for(a=0;a<i.length;++a)s=i[a],c=o[s],ft(o,s)&&(u[s]=c)}return u},ht=dt,vt=function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),n={},r=0;r<t.length;++r)n[t[r]]=t[r];var o=Object.assign({},n),a="";for(var i in o)a+=i;return e!==a},yt=function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1},gt=function(){return Object.assign?vt()?ht:yt()?ht:Object.assign:ht},mt=Qe,bt=gt,wt=function(){var e=bt();return mt(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e},$t=Qe,Ot=dt,jt=gt,Et=wt,Nt=jt();$t(Nt,{implementation:Ot,getPolyfill:jt,shim:Et});var St=Nt,xt=Object.assign||St,kt=function(e,t,n){var r=re(e,n);-1!==r.indexOf(t)&&J.remove(r,t)},Tt=function(){return!!this.$element.parentNode},Dt=function(e){var t=xt({},e);t.$data&&(xt(this.$data,t.$data),delete t.$data),t.$methods&&(xt(this.$methods,t.$methods),delete t.$methods),xt(this,t)},Lt=function(){var e=this;for(var t in e)e[t]=null,delete e[t];delete this.$element,delete this.$data,delete this.$methods,delete this.$nodes,delete this.$subscribe,delete this.$unsubscribe,delete this.$attached,delete this.$update,delete this.$destroy},Ct=function(e){var t={},n={},r={},o={},a={},i={},l={};Object.defineProperties(t,{$data:{get:function(){return o},set:function(e){Z(o,e)},configurable:!0},$methods:{get:function(){return i},set:function(e){Z(i,e)},configurable:!0},$nodes:{get:function(){return r},configurable:!0},$subscribe:{value:function(e,n){var r=e.split(".");oe({bind:[r],state:t,subscriber:l,innerData:a,handler:n})},configurable:!0},$unsubscribe:{value:function(e,t){kt(e,t,l)},configurable:!0},$attached:{get:Tt,configurable:!0},$update:{value:Dt,configurable:!0},$destroy:{value:Lt,configurable:!0}});var c=Ee({ast:e,state:t,innerData:a,nodes:r,children:n,subscriber:l,create:Ee});return Object.defineProperty(t,"$element",{value:c,configurable:!0}),t},Rt=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];for(var r="",o=0;o<t.length;o++)r+=e[o]+t[o];return r+e[e.length-1]},At=G,Pt=function(){function e(e){var t=ye(e);if("string"===t)e=H(e,At);else if("array"!==t)throw new TypeError("Cannot create new component without proper template or AST!");var n=e;Object.defineProperty(this,"render",{value:function(e){var t=Ct(n);return e&&t.$update(e),t}})}return e.setPatser=function(e){At=e},e.parseEft=function(e){return G(e)},e.t=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return new e(Rt.apply(void 0,t))},e}();l("ef.js v0.1.2-alpha.8.master.0c5762d initialized!");var _t=new Pt([{t:"section",a:{class:"todoapp"}},[{t:"header",a:{class:"header"}},[{t:"h1"},"todos"],[{t:"input",a:{class:"new-todo",placeholder:"What needs to be done?",autofocus:""},n:"input",p:{value:[["input"]]},e:{keypress:["addTodo",[["input"]]]}}]],{n:"main",t:0},{n:"footer",t:0}]),It=new Pt([{t:"section",a:{class:"main",style:"display: none;"}},[{t:"input",a:{class:"toggle-all",id:"toggle-all",type:"checkbox"},p:{checked:[["allCompleted"]]}}],[{t:"label",a:{for:"toggle-all"}},"Mark all as complete"],[{t:"ul",a:{class:"todo-list"}},{n:"todos",t:1}]]),Ft=new Pt([{t:"li",a:{class:"todo"}},[{t:"div",a:{class:"view"}},[{t:"input",a:{class:"toggle",type:"checkbox"},p:{checked:[["completed"]]}}],[{t:"label",e:{dblclick:["edit"]}},[["title"]]],[{t:"button",a:{class:"destroy"},e:{click:["destroy"]}}]],[{t:"input",a:{class:"edit"},n:"edit",p:{value:[["update"]]},e:{keydown:["confirm"],blur:["confirm"]}}]]),Ut=new Pt([{t:"footer",a:{class:"footer",style:"display: none;"}},[{t:"span",a:{class:"todo-count"}},[{t:"strong"},[["count"],"0"]]," item",[["s"]]," left"],[{t:"ul",a:{class:"filters"}},[{t:"li"},[{t:"a",a:{class:[["allSelected"]],href:"#/"}},"All"]],[{t:"li"},[{t:"a",a:{class:[["activeSelected"]],href:"#/active"}},"Active"]],[{t:"li"},[{t:"a",a:{class:[["completedSelected"]],href:"#/completed"}},"Completed"]]],[{t:"button",a:{class:"clear-completed",style:"display: none;"},n:"clear",e:{click:["clear"]}},"Clear completed"]]),qt=Array.prototype,Mt={copy:function(e){return qt.slice.call(e,0)},empty:function(e){return e.length=0,e},equals:function(e,t){if(!Array.isArray(t))return!1;if(e===t)return!0;if(e.length!==t.length)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0},pop:function(e){return qt.pop.call(e)},push:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return qt.push.apply(e,t)},remove:function(e,t){var n=qt.indexOf.call(e,t);if(n>-1)return qt.splice.call(e,n,1),t},reverse:function(e){return qt.reverse.call(e)},shift:function(e){return qt.shift.call(e)},slice:function(e,t,n){return qt.slice.call(e,t,n)},sort:function(e,t){return qt.sort.call(e,t)},splice:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return qt.splice.apply(e,t)},unshift:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return qt.unshift.apply(e,t)}},Bt=_t.render(),Wt=It.render(),Yt=Ut.render(),Gt=0;Bt.main=Wt,Bt.footer=Yt;var Ht=[],Xt=[],Jt=[],zt=[],Vt=function(){localStorage.setItem("todos-ef",JSON.stringify(zt))},Kt=function(e,t){return e.$data.order>t.$data.order?1:-1},Qt=function(e){switch(e){case"#/active":Wt.todos=Ht.sort(Kt),Yt.$data={allSelected:"",activeSelected:"selected",completedSelected:""};break;case"#/completed":Wt.todos=Xt.sort(Kt),Yt.$data={allSelected:"",activeSelected:"",completedSelected:"selected"};break;default:Wt.todos=Jt,Yt.$data={allSelected:"selected",activeSelected:"",completedSelected:""}}},Zt=function(){0===Jt.length?(Yt.$element.style.display="none",
Wt.$element.style.display="none"):(Yt.$element.style.display="block",Wt.$element.style.display="block"),0!==Jt.length&&Jt.length===Xt.length?Wt.$data.allCompleted=!0:Wt.$data.allCompleted=!1,0===Xt.length?Yt.$nodes.clear.style.display="none":Yt.$nodes.clear.style.display="block",Yt.$data.count=Ht.length,Ht.length>1?Yt.$data.s="s":Yt.$data.s=""},en=function(e){if(e)for(var t=Mt.copy(Ht),n=0,r=t;n<r.length;n+=1){var o=r[n];o.$data.completed=!0}else if(Xt.length===Jt.length)for(var a=Mt.copy(Xt),i=0,l=a;i<l.length;i+=1){var c=l[i];c.$data.completed=!1}"#/"!==location.hash&&Qt(location.hash)},tn=function(){for(var e=0,t=Xt;e<t.length;e+=1){var n=t[e];Mt.remove(Jt,n),Mt.remove(zt,n.$data),Wt.todos.remove(n),n.$destroy()}Xt.length=0,Zt(),Vt(),Qt(location.hash)},nn=function(e){var t=e.state;Mt.remove(Jt,t),Wt.todos.remove(t),Mt.remove(zt,t.$data),Mt.remove(Ht,t),Mt.remove(Xt,t),t.$destroy(),Zt(),Vt(),Qt(location.hash)},rn=function(e){e?(this.$element.classList.add("completed"),Mt.remove(Ht,this),Xt.push(this)):(this.$element.classList.remove("completed"),Ht.push(this),Mt.remove(Xt,this)),Zt(),Vt(),"#/"!==location.hash&&Qt(location.hash)},on=function(e){var t=e.$data.update.trim();if(e.$methods.confirm=null,!t)return nn({state:e});e.$element.classList.remove("editing"),e.$data.title=t,e.$data.update="",Vt()},an=function(e){e.$element.classList.remove("editing"),e.$methods.confirm=null,e.$data.update=""},ln=function(e){var t=e.e,n=e.state;return t.preventDefault(),13===t.keyCode||"blur"===t.type?on(n):27===t.keyCode?an(n):void 0},cn=function(e){var t=e.state;t.$element.classList.add("editing"),t.$data.update=t.$data.title,t.$methods.confirm=ln,t.$nodes.edit.focus()},sn=function(e){e.order=Gt+=1,e.completed=!!e.completed;var t=Ft.render({$data:e,$methods:{edit:cn,destroy:nn}});Jt.push(t),e.completed||Ht.push(t),zt.push(t.$data),t.$subscribe("completed",rn.bind(t)),Zt(),Vt(),Qt(location.hash),Bt.$nodes.input.focus()},un=function(e){var t=e.e,n=e.state,r=e.value;r=r.trim(),13===t.keyCode&&r&&(n.$data.input="",sn({title:r,completed:!1}))};Bt.$methods.addTodo=un,Yt.$methods.clear=tn,Wt.$subscribe("allCompleted",en);var fn=localStorage.getItem("todos-ef");if(fn)for(var pn=JSON.parse(fn),dn=0,hn=pn;dn<hn.length;dn+=1){var vn=hn[dn];sn(vn)}Qt(location.hash),window.addEventListener("hashchange",function(){return Qt(location.hash)}),document.querySelector("body").replaceChild(Bt.$element,document.querySelector(".todoapp"))}();
