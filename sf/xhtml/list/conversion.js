(function(){var g=this;var aa=function(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent&&a.attachEvent("on"+b,d)};var h=function(a){return{visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||0},ba=function(a){var b;a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState?b="webkitvisibilitychange":a.visibilityState&&(b="visibilitychange");return b},m=function(a,b){if(3==h(b))return!1;a();return!0},ca=function(a,b){if(!m(a,b)){var d=!1,c=ba(b),e=function(){if(!d&&m(a,b)){d=!0;var f=e;b.removeEventListener?b.removeEventListener(c,f,!1):b.detachEvent&&
b.detachEvent("on"+c,f)}};c&&aa(b,c,e)}};var n=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var da=n("0.04"),ea=n("0.001");var fa=/^true$/.test("true")?!0:!1;var p=function(a){p[" "](a);return a};p[" "]=function(){};var u=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(void 0,a[d],d,a)};var v=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},w=function(a,b){return a<b?-1:a>b?1:0};var x;a:{var y=g.navigator;if(y){var z=y.userAgent;if(z){x=z;break a}}x=""};var ga=-1!=x.indexOf("Opera")||-1!=x.indexOf("OPR"),A=-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"),ha=-1!=x.indexOf("Edge"),B=-1!=x.indexOf("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge"))&&!(-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"))&&-1==x.indexOf("Edge"),ia=-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge"),C=function(){var a=g.document;return a?a.documentMode:void 0},D;
a:{var E="",F=function(){var a=x;if(B)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ha)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ia)return/WebKit\/(\S+)/.exec(a);if(ga)return/(?:Version)[ \/]?(\S+)/.exec(a)}();F&&(E=F?F[1]:"");if(A){var G=C();if(null!=G&&G>parseFloat(E)){D=String(G);break a}}D=E}
var H=D,I={},J=function(a){if(!I[a]){for(var b=0,d=v(String(H)).split("."),c=v(String(a)).split("."),e=Math.max(d.length,c.length),f=0;0==b&&f<e;f++){var k=d[f]||"",l=c[f]||"",q=RegExp("(\\d*)(\\D*)","g"),la=RegExp("(\\d*)(\\D*)","g");do{var r=q.exec(k)||["","",""],t=la.exec(l)||["","",""];if(0==r[0].length&&0==t[0].length)break;b=w(0==r[1].length?0:parseInt(r[1],10),0==t[1].length?0:parseInt(t[1],10))||w(0==r[2].length,0==t[2].length)||w(r[2],t[2])}while(0==b)}I[a]=0<=b}},K=g.document,ja=K&&A?C()||
("CSS1Compat"==K.compatMode?parseInt(H,10):5):void 0;var L;if(!(L=!B&&!A)){var M;if(M=A)M=9<=Number(ja);L=M}L||B&&J("1.9.1");A&&J("9");var ka=function(a){this.b={};this.a={};this.c=!1;for(var b=0,d=arguments.length;b<d;++b)this.a[arguments[b]]=""},O=function(a,b,d){var c=N;if(!c.c&&(d?c.a.hasOwnProperty(d)&&""==c.a[d]:1)){var e;a:{try{var f=window.top.location.hash;if(f){var k=f.match(/\bdeid=([\d,]+)/);e=k&&k[1]||"";break a}}catch(q){}e=""}if(e=(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))&&e[0]||null)a=e;else a:{if(!(1E-4>Math.random())&&(e=Math.random(),e<b)){b=window;try{var l=new Uint32Array(1);b.crypto.getRandomValues(l);
e=l[0]/65536/65536}catch(q){e=Math.random()}a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(d?c.a.hasOwnProperty(d)&&(c.a[d]=a):c.b[a]=!0)}},P=function(a){var b=N;return b.a.hasOwnProperty(a)?b.a[a]:""},ma=function(){var a=N,b=[];u(a.b,function(a,c){b.push(c)});u(a.a,function(a){""!=a&&b.push(a)});return b};var N,Q="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" "),
R=["google_conversion_first_time","google_conversion_snippets"];function S(a){return null!=a?"3455583315"==(N?P(2):"")?encodeURIComponent(a.toString()):escape(a.toString()):""}function T(a){return null!=a?a.toString().substring(0,512):""}function U(a,b){var d=S(b);if(""!=d){var c=S(a);if(""!=c)return"&".concat(c,"=",d)}return""}function V(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function na(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var d=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&"function"==typeof c.join){for(var e=[],f=0;f<c.length;++f){var k=V(c[f]);null!=k&&e.push(k)}c=0==e.length?null:e.join(",")}else c=V(c);(e=V(b))&&null!=c&&d.push(e+"="+c)}b=d.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))}
function W(a){return"number"!=typeof a&&"string"!=typeof a?"":S(a.toString())}function oa(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],d=0,c=a.length;d<c;d++){var e=a[d],f=[];e&&(f.push(W(e.value)),f.push(W(e.quantity)),f.push(W(e.item_id)),f.push(W(e.adwords_grouping)),f.push(W(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}
function pa(a,b,d){var c=[];if(a){var e=a.screen;e&&(c.push(U("u_h",e.height)),c.push(U("u_w",e.width)),c.push(U("u_ah",e.availHeight)),c.push(U("u_aw",e.availWidth)),c.push(U("u_cd",e.colorDepth)));a.history&&c.push(U("u_his",a.history.length))}d&&"function"==typeof d.getTimezoneOffset&&c.push(U("u_tz",-d.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&c.push(U("u_java",b.javaEnabled())),b.plugins&&c.push(U("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(U("u_nmime",b.mimeTypes.length)));
return c.join("")}function qa(a){a=a?a.title:"";if(void 0==a||""==a)return"";var b=function(a){try{return decodeURIComponent(a),!0}catch(b){return!1}};a=encodeURIComponent(a);for(var d=128;!b(a.substr(0,d));)d--;return"&tiba="+a.substr(0,d)}
function X(a,b,d,c){var e="";if(b){var f;if(a.top==a)f=0;else{var k=a.location.ancestorOrigins;if(k)f=k[k.length-1]==a.location.origin?1:2;else{k=a.top;try{var l;if(l=!!k&&null!=k.location.href)c:{try{p(k.foo);l=!0;break c}catch(q){}l=!1}f=l}catch(q){f=!1}f=f?1:2}}l="";l=d?d:1==f?a.top.location.href:a.location.href;e+=U("frm",f);e+=U("url",T(l));e+=U("ref",T(c||b.referrer))}return e}
function Y(a){return!fa&&!ra.test(navigator.userAgent)||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}function Z(a,b,d){d=d.google_remarketing_only?"googleads.g.doubleclick.net":d.google_conversion_domain||"www.googleadservices.com";return Y(a)+"//"+d+"/pagead/"+b}
function sa(a,b,d,c){var e="/?";"landing"==c.google_conversion_type&&(e="/extclk?");var e=Z(a,[c.google_remarketing_only?"viewthroughconversion/":"conversion/",S(c.google_conversion_id),e,"random=",S(c.google_conversion_time)].join(""),c),f;a:{f=c.google_conversion_language;if(null!=f){f=f.toString();if(2==f.length){f=U("hl",f);break a}if(5==f.length){f=U("hl",f.substring(0,2))+U("gl",f.substring(3,5));break a}}f=""}a=[U("cv",c.google_conversion_js_version),U("fst",c.google_conversion_first_time),
U("num",c.google_conversion_snippets),U("fmt",c.google_conversion_format),U("value",c.google_conversion_value),U("currency_code",c.google_conversion_currency),U("label",c.google_conversion_label),U("oid",c.google_conversion_order_id),U("bg",c.google_conversion_color),f,U("guid","ON"),U("disvt",c.google_disable_viewthrough),U("eid",ma().join()),oa(c),pa(a,b,c.google_conversion_date),na(c),X(a,d,c.google_conversion_page_url,c.google_conversion_referrer_url),c.google_remarketing_for_search&&!c.google_conversion_domain?
"&srr=n":"",qa(d)].join("");return e+a}function ta(a){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"}var ra=/Android ([01]\.|2\.[01])/i;
function ua(a,b,d,c){3!=c.google_conversion_format||c.google_remarketing_only||c.google_conversion_domain||N&&O(["317150500","317150501","317150504","317150505"],da,1);N&&O(["3455583314","3455583315"],ea,2);var e=N?P(1):"";b=sa(a,b,d,c);d=function(a,b,c){return'<img height="'+c+'" width="'+b+'" border="0" alt="" src="'+a+'" />'};return 0==c.google_conversion_format&&null==c.google_conversion_domain?'<a href="'+(Y(a)+"//services.google.com/sitestats/"+ta(c.google_conversion_language)+"?cid="+S(c.google_conversion_id))+
'" target="_blank">'+d(b,135,27)+"</a>":1<c.google_conversion_snippets||3==c.google_conversion_format?"317150501"==e||"317150504"==e||"317150505"==e?d(b,1,1)+('<script src="'+b.replace(/(&|\?)fmt=3(&|$)/,"$1fmt=4&adtest=on$2")+'">\x3c/script>'):d(b,1,1):'<iframe name="google_conversion_frame" title="Google conversion frame" width="'+(2==c.google_conversion_format?200:300)+'" height="'+(2==c.google_conversion_format?26:13)+'" src="'+b+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">'+
d(b.replace(/\?random=/,"?frame=0&random="),1,1)+"</iframe>"}function va(){return new Image}function wa(a,b){var d=va;"function"===typeof a.opt_image_generator&&(d=a.opt_image_generator);d=d();b+=U("async","1");d.src=b;d.onload=function(){}}
function xa(a,b,d){var c;c=[S(d.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");c=Y(a)+"//www.google.com/ads/user-lists/"+c;c+=[U("label",d.google_conversion_label),U("fmt","3"),X(a,b,d.google_conversion_page_url,d.google_conversion_referrer_url)].join("");wa(d,c)}
function ya(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version=
"8";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1);N=new ka(1,2);return!0}function za(a){for(var b=0;b<Q.length;b++)a[Q[b]]=null}function Aa(a){for(var b={},d=0;d<Q.length;d++)b[Q[d]]=a[Q[d]];for(d=0;d<R.length;d++)b[R[d]]=a[R[d]];return b}
function Ba(a){var b=document.getElementsByTagName("head")[0];b||(b=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(b,document.getElementsByTagName("body")[0]));var d=document.createElement("script");d.src=Z(window,"conversion_debug_overlay.js",a);b.appendChild(d)};(function(a,b,d){if(a)if(null!=/[\?&;]google_debug/.exec(document.URL))Ba(a);else{try{if(ya(a))if(3==h(d)){var c=Aa(a),e="google_conversion_"+Math.floor(1E9*Math.random());d.write('<span id="'+e+'"></span>');ca(function(){try{var f=d.getElementById(e);f&&(f.innerHTML=ua(a,b,d,c),c.google_remarketing_for_search&&!c.google_conversion_domain&&xa(a,d,c))}catch(k){}},d)}else d.write(ua(a,b,d,a)),a.google_remarketing_for_search&&!a.google_conversion_domain&&xa(a,d,a)}catch(f){}za(a)}})(window,navigator,
document);}).call(this);
