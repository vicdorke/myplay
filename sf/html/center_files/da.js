//-- UTM User Settings
var _dn="auto";		// (auto|none|domain) set the domain name for cookies
var _hash="on";		// (on|off) unique domain hash for cookies
var _timeout="1800";   	// set the inactive session timeout in seconds
var _tsp="|";			// transaction field separator
var _anchor=0;			// enable use of anchors for campaign (1=on|0=off)
var _tcp="/";			// the cookie path for tracking
var _sample=100;		// The sampling % of visitors to track (1-100).

//-- UTM Campaign Tracking Settings
var _ctm=1;			// set campaign tracking module (1=on|0=off)
var _cto="15768000";		// set timeout in seconds (6 month default)
var _ccn="utm_campaign";	// name
var _cmd="utm_medium";		// medium (cpc|cpm|link|email|organic)
var _csr="utm_source";		// source
var _ctr="utm_term";		// term/keyword
var _cct="utm_content";	// content
var _cid="utm_id";		// id number
var _cno="utm_nooverride";	// don't override

//-- Auto/Organic Sources and Keywords
var _Osr=new Array();
var _Okw=new Array();  //#搜索引擎名称
_Osr[0]="google";	_Okw[0]="q";
_Osr[1]="yahoo";	_Okw[1]="p";
_Osr[2]="msn";		_Okw[2]="q";
_Osr[3]="live";	_Okw[3]="q";
_Osr[4]="baidu";	_Okw[4]="wd";
_Osr[5]="bing"; _Okw[5]="q";

//-- Auto/Organic Keywords to Ignore
var _Ono=new Array();
//-- Referral domains to Ignore
var _Rno=new Array();

var _ff,_dh,_dt,_bl=0,_do="",_u,_fns=0,_ns=0,_r="-",_fno=0,_st=0,_bd=document,_dl=_bd.location,_hn= _dl.hostname,_dlh="";
var _gifpath='http://da'+_hn.substring(_hn.lastIndexOf('.',_hn.lastIndexOf('.')-1), _hn.length)+"/da.gif";
if (_dl.protocol=="https:") _gifpath='https://'+_hn+'/da.gif';
if (_dl.hash) _dlh=_dl.href.substring(_dl.href.indexOf('#'));
if (!_tcp || _tcp=="") _tcp="/";


function daTracker(page) {
 if (_dl.protocol=="file:") return;
 if (_ff && (!page || page=="")) return;
 var a,b,xx,v,z,k,x="",s="",nv=0;
 var nx=" expires="+_Nx()+";";
 var dc=_bd.cookie;
 _dh=_Domain();
 _u=Math.round(Math.random()*2147483647);
 _dt=new Date();
 _st=Math.round(_dt.getTime()/1000);
 a=dc.indexOf("_da_a="+_dh+".");
 b=dc.indexOf("_da_b="+_dh+".");
 o_s=dc.indexOf("_da_s="+_dh+".");

 if (_dn && _dn!="") { _do=" domain="+_dn+";"; }
 if (_timeout && _timeout!="") {
  x=" expires="+(new Date(_dt.getTime()+(_timeout*1000))).toGMTString()+";";
 }
 if (a>=0 && b>=0) {
    b = _GC(dc,"_da_b="+_dh,";");
    b = _FixB(_bd.cookie,";",_st); 
    _bd.cookie="_da_b="+b+"; path="+_tcp+";"+x+_do;
 } else {
    if (a>=0){
      a=_FixA(_bd.cookie,";",_st);
    } else {
     a=_dh+"."+_GPid()+"."+_st+"."+_st+"."+_st+".1";   
     nv=1;
    }
    b=_dh+".1.10."+_st;
    _bd.cookie="_da_a="+a+"; path="+_tcp+";"+nx+_do;
    _bd.cookie="_da_b="+b+"; path="+_tcp+";"+x+_do;
    _fns=1;
 }

//order start
var order_source,order_medium,order_campaign;
hf=_dl.href
if(hf.indexOf("union_source=") >= 0){
  order_source = _GC(hf,"union_source=","&");
  order_medium = _GC(hf,"union_medium=","&");
  order_campaign = _GC(hf,"union_campaign=","&");
  _bd.cookie="_da_s="+order_source+","+order_medium+","+order_campaign+"; path="+_tcp+";"+nx+_do;
}
//order end

 var wc=window;
 var c=_bd.cookie;
 if(wc && wc.gaGlobal && wc.gaGlobal.dh==_dh){
  var g=wc.gaGlobal;
  var ua=c.split("_da_a="+_dh+".")[1].split(";")[0].split(".");
  if(g.sid)ua[3]=g.sid;
  if(nv>0){
   ua[2]=ua[3];
   if(g.vid){
    var v=g.vid.split(".");
    ua[0]=v[0];
    ua[1]=v[1];
   }
  }
  _bd.cookie="_da_a="+_dh+"."+ua.join(".")+"; path="+_tcp+";"+nx+_do;
 }
 _Info(page);
 _fns=0;
 _fno=0;
 if (!page || page=="") _ff=1;
}

function _Info(page) {
 var p,s="",dm="",pg=_ES(_dl.pathname+_dl.search),dc=_bd.cookie;
 if (page && page!="") pg=_ES(page);
 _r=_bd.referrer;
 if (!_r || _r=="") { _r="-"; }
 else {
  if (_r.indexOf("[")==0 && _r.lastIndexOf("]")==(_r.length-1)) { _r="-"; }
 }
 _uid=dc.indexOf("DA_UID=");
 if (_uid>-1) { _uid=_GC(dc,"DA_UID=",";"); }
 s+="u="+_uid;
 s+=_BInfo();
 if (_ctm) s+=_CInfo();
 if (_bd.title && _bd.title!="") s+="&dt="+_ES(_bd.title);
 if (_hn && _hn!="") s+="&hn="+_ES(_hn);
 if (_sample && _sample != 100) s+="&sp="+_ES(_sample);
 s+="&r="+_ES(_r);
 s+="&p="+pg;
 s+=_SInfo();
 s+=_OInfo();
 var i=new Image(1,1);
 i.src=_gifpath+"?"+s+"&cc="+_GCS();
 i.onload=function() { return; }
 return;
}


function _CInfo() {
 if (!_cto || _cto=="") { _cto="15768000"; }
 var c="",t="-",t2="-",t3="-",o=0,cs=0,cn=0,i=0,z="-",s="";
 if (_anchor && _dlh && _dlh!="") s=_dlh+"&";
 s+=_dl.search;
 var x=new Date(_dt.getTime()+(_cto*1000));
 var dc=_bd.cookie;
 x=" expires="+x.toGMTString()+";";
 z=dc.indexOf("_da_z="+_dh+".");
 if (z>-1) { z=_GC(dc,"_da_z="+_dh+".",";"); }
 else { z="-"; }
 t=_GC(s,_cid+"=","&");
 t2=_GC(s,_csr+"=","&");
 t3=_GC(s,"gclid=","&");
 if ((t!="-" && t!="") || (t2!="-" && t2!="") || (t3!="-" && t3!="")) {
  if (t!="-" && t!="") c+="cid="+_EC(t);
  if (t2!="-" && t2!="") { if (c != "") c+="|"; c+="csr="+_EC(t2); }
  if (t3!="-" && t3!="") { if (c != "") c+="|"; c+="gclid="+_EC(t3); }
  t=_GC(s,_ccn+"=","&");
  if (t!="-" && t!="") c+="|ccn="+_EC(t);
  else c+="|ccn=(not+set)";
  t=_GC(s,_cmd+"=","&");
  if (t!="-" && t!="") c+="|cmd="+_EC(t);
  else  c+="|cmd=(not+set)";
  t=_GC(s,_ctr+"=","&");
  if (t!="-" && t!="") c+="|ctr="+_EC(t);
  else { t=_Org(1); if (t!="-" && t!="") c+="|ctr="+_EC(t); }
  t=_GC(s,_cct+"=","&");
  if (t!="-" && t!="") c+="|cct="+_EC(t);
  t=_GC(s,_cno+"=","&");
  if (t=="1") o=1;
  if (z!="-" && o==1) return "";
 }
 if (c=="-" || c=="") { c=_Org(); if (z!="-" && _fno==1)  return ""; }
 if (c=="-" || c=="") { if (_fns==1)  c=_Ref(); if (z!="-" && _fno==1)  return ""; }
 if (c=="-" || c=="") {
  if (z=="-" && _fns==1) { c="ccn=(direct)|csr=(direct)|cmd=(none)"; }
  if (c=="-" || c=="") return "";
 }
 if (z!="-") {
  i=z.indexOf(".");
  if (i>-1) i=z.indexOf(".",i+1);
  if (i>-1) i=z.indexOf(".",i+1);
  if (i>-1) i=z.indexOf(".",i+1);
  t=z.substring(i+1,z.length);
  if (t.toLowerCase()==c.toLowerCase()) cs=1;
  t=z.substring(0,i);
  if ((i=t.lastIndexOf(".")) > -1) {
   t=t.substring(i+1,t.length);
   cn=(t*1);
  }
 }
 if (cs==0 || _fns==1) {
  t=_GC(dc,"_da_a="+_dh+".",";");
  if ((i=t.lastIndexOf(".")) > 9) {
   _ns=t.substring(i+1,t.length);
   _ns=(_ns*1);
  }
  cn++;
  if (_ns==0) _ns=1;
  _bd.cookie="_da_z="+_dh+"."+_st+"."+_ns+"."+cn+"."+c+"; path="+_tcp+"; "+x+_do;
 }
 if (cs==0 || _fns==1) return "&cn=1";
 else return "&cr=1";
}


function _Ref() {
 if (_r=="0" || _r=="" || _r=="-") return "";
 var i=0,h,k,n;
 if ((i=_r.indexOf("://"))<0 || _GCse()) return "";
 h=_r.substring(i+3,_r.length);
 if (h.indexOf("/") > -1) {
  k=h.substring(h.indexOf("/"),h.length);
  if (k.indexOf("?") > -1) k=k.substring(0,k.indexOf("?"));
  h=h.substring(0,h.indexOf("/"));
 }
 h=h.toLowerCase();
 n=h;
 if ((i=n.indexOf(":")) > -1) n=n.substring(0,i);
 for (var ii=0;ii<_Rno.length;ii++) {
  if ((i=n.indexOf(_Rno[ii].toLowerCase())) > -1 && n.length==(i+_Rno[ii].length)) { _fno=1; break; }
 }
 if (h.indexOf("www.")==0) h=h.substring(4,h.length);
 return "ccn=(referral)|csr="+_EC(h)+"|"+"cct="+_EC(k)+"|cmd=referral";
}


function _Org(t) {
 if (_r=="0" || _r=="" || _r=="-") return "";
 var i=0,h,k;
 if ((i=_r.indexOf("://"))<0 || _GCse()) return "";
 h=_r.substring(i+3,_r.length);
 if (h.indexOf("/") > -1) {
  h=h.substring(0,h.indexOf("/"));
 }
 for (var ii=0;ii<_Osr.length;ii++) {
  if (h.toLowerCase().indexOf(_Osr[ii].toLowerCase()) > -1) {
   if ((i=_r.indexOf("?"+_Okw[ii]+"=")) > -1 || (i=_r.indexOf("&"+_Okw[ii]+"=")) > -1) {
    k=_r.substring(i+_Okw[ii].length+2,_r.length);
    if ((i=k.indexOf("&")) > -1) k=k.substring(0,i);
    for (var yy=0;yy<_Ono.length;yy++) {
     if (_Ono[yy].toLowerCase()==k.toLowerCase()) { _fno=1; break; }
    }
    if (t) return _EC(k);
    else return "ccn=(organic)|csr="+_EC(_Osr[ii])+"|"+"ctr="+_EC(k)+"|cmd=organic";
   }
  }
 }
 return "";
}


function _GCse() {
 var h,p;
 h=p=_r.split("://")[1];
 if(h.indexOf("/")>-1) {
  h=h.split("/")[0];
  p=p.substring(p.indexOf("/")+1,p.length);
 }
 if(p.indexOf("?")>-1) {
  p=p.split("?")[0];
 }
 if(h.toLowerCase().indexOf("google")>-1) {
  if(_r.indexOf("?q=")>-1 || _r.indexOf("&q=")>-1) {
   if (p.toLowerCase().indexOf("cse")>-1) {
    return true;
   }
  }
 }
}


function _BInfo() {
 var sr="-",sc="-",ul="-",fl="-",cs="-",je=1;
 var n=navigator;
 if (self.screen) {
  sr=screen.width+"x"+screen.height;
  sc=screen.colorDepth+"-bit";
 } else if (self.java) {
  var j=java.awt.Toolkit.getDefaultToolkit();
  var s=j.getScreenSize();
  sr=s.width+"x"+s.height;
 }
 if (n.language) { ul=n.language.toLowerCase(); }
 else if (n.browserLanguage) { ul=n.browserLanguage.toLowerCase(); }
 je=n.javaEnabled()?1:0;
 fl=_Flash();
 if (_bd.characterSet) cs=_ES(_bd.characterSet);
 else if (_bd.charset) cs=_ES(_bd.charset);
 return "&cs="+cs+"&sr="+sr+"&sc="+sc+"&ul="+ul+"&je="+je+"&fl="+fl;
}

function _Flash() {
 var f="-",n=navigator;
 if (n.plugins && n.plugins.length) {
  for (var ii=0;ii<n.plugins.length;ii++) {
   if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) {
    f=n.plugins[ii].description.split('Shockwave Flash ')[1];
    break;
   }
  }
 } else {
  var fl;
  try {
   fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
   f = fl.GetVariable("$version");
  } catch(e) {}
  if (f == "-") {
   try {
    fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
    f = "WIN 6,0,21,0";
    fl.AllowScriptAccess = "always";
    f = fl.GetVariable("$version");
   } catch(e) {}
  }
  if (f == "-") {
   try {
    fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
    f = fl.GetVariable("$version");
   } catch(e) {}
  }
  if (f != "-") {
   f = f.split(" ")[1].split(",");
   f = f[0] + "." + f[1] + " r" + f[2];
  }
 }
 return f;
}


function _SInfo() {
  var sk="-",scp=0,stp=0;
  if(_dl.href.indexOf("productlist/search") >= 0){
    var pa = $(".plistpage a")
    if (pa.length > 0) {
      var la = pa[pa.length-1]
      var pn = parseInt(la.href.split("pageNo=")[1])
      if(la.text == "尾页"){
        stp = pn + 1
      }else{
        stp = pn +2
      }
      scp = $(".plistpage .current").text()
    }else{
      if($(".plist li").length > 0){stp = scp = 1};
    }
    sk = _EC(_GC(_dl.href,"keyword=","&"))
    
  }
 return "&sk="+sk+"&scp="+scp+"&stp="+stp;
}


function _OInfo() {
  var nb="-",pd=0,ig=0,pm='-',sp='-',hf=_dl.href;
  if(hf.indexOf("order/msg") >= 0 || hf.indexOf("order/prompt") >= 0){    
    nb=_GC(hf,"orderId=","&")
    pd=_GC(hf,"count=","&")
    ig=_GC(hf,"integral=","&")
    if(hf.indexOf("order/prompt") >= 0) pm=1;else pm=_GC(hf,"pay_id=","&");
    sp=_GC(hf,"shipping_id=","&")
  }
  return "&od="+nb+"."+pd+"."+ig+"."+pm+"."+sp;
}


function _GPid() {
  var d = new Date();
  var cy = d.getFullYear();
  var cm = d.getMonth()+1; if (cm < 10){cm = "0" + cm;}
  var cd = d.getDate(); if (cd < 10){cd = "0" + cd;}
  var ch = d.getHours(); if (ch < 10){ch = "0" + ch;}
  var ci = d.getMinutes(); if (ci < 10){ci = "0" + ci;}
  var cs = d.getSeconds(); if (cs < 10){cs = "0" + cs;}
  return cy + cm +cd + ch + ci + cs + (Math.ceil(Math.random()*(999999-100000)+100000));
}


function _GCS() {
 var t,c="",dc=_bd.cookie;
 if ((t=_GC(dc,"_da_a="+_dh+".",";"))!="-") c+=_ES("_da_a="+t+";+");
 if ((t=_GC(dc,"_da_b="+_dh+".",";"))!="-") c+=_ES("_da_b="+t+";+");
 if ((t=_GC(dc,"_da_z="+_dh+".",";"))!="-") c+=_ES("_da_z="+t+";");
 if (c.charAt(c.length-1)=="+") c=c.substring(0,c.length-1);
 return c;
}


function _GC(l,n,s) {
 if (!l || l=="" || !n || n=="" || !s || s=="") return "-";
 var i,i2,i3,c="-";
 i=l.indexOf(n);
 i3=n.indexOf("=")+1;
 if (i > -1) {
  i2=l.indexOf(s,i); if (i2 < 0) { i2=l.length; }
  c=l.substring((i+i3),i2);
 }
 return c;
}


function _Domain() {
 if (!_dn || _dn=="" || _dn=="none") { _dn=""; return 1; }
 if (_dn=="auto") {
  var d=_bd.domain;
  if (d.substring(0,4)=="www.") {
   d=d.substring(4,d.length);
  }
  _dn=d;
 }
 _dn = _dn.toLowerCase(); 
 if (_hash=="off") return 1;
 return _Hash(_dn);
}
function _Hash(d) {
 if (!d || d=="") return 1;
 var h=0,g=0;
 for (var i=d.length-1;i>=0;i--) {
  var c=parseInt(d.charCodeAt(i));
  h=((h << 6) & 0xfffffff) + c + (c << 14);
  if ((g=h & 0xfe00000)!=0) h=(h ^ (g >> 21));
 }
 return h;
}
function _FixA(c,s,t) {
 if (!c || c=="" || !s || s=="" || !t || t=="") return "-";
 var a=_GC(c,"_da_a="+_dh+".",s);
 var lt=0,i=0;
 if ((i=a.lastIndexOf(".")) > 9) {
  _ns=a.substring(i+1,a.length);
  _ns=(_ns*1)+1;
  a=a.substring(0,i);
  if ((i=a.lastIndexOf(".")) > 7) {
   lt=a.substring(i+1,a.length);
   a=a.substring(0,i);
  }
  if ((i=a.lastIndexOf(".")) > 5) {
   a=a.substring(0,i);
  }
  a+="."+lt+"."+t+"."+_ns;
 }
 return a;
}
function _FixB(c,s,t) {
  if (!c || c=="" || !s || s=="" || !t || t=="") 
    return "-";
  var b=_GC(c,"_da_b="+_dh+".",s);
  var lt=0,i=0;
  if ((i=b.lastIndexOf(".")) > 5) {
    ts=b.substring(i+1,b.length);
    b=b.substring(0,i);
    if ((i=b.lastIndexOf(".")) > 3) {
     tk=b.substring(i+1,b.length);
     b=b.substring(0,i);
    }
    if ((i=b.lastIndexOf(".")) > 1) {
     ht=b.substring(i+1,b.length);
     ht=(ht*1)+1;
     b=b.substring(0,i);
    }
    b+="."+ht+"."+tk+"."+ts;
  }
  return b;
}
function _EC(s) {
  var n="";
  if (!s || s=="") return "";
  for (var i=0;i<s.length;i++) {if (s.charAt(i)==" ") n+="+"; else n+=s.charAt(i);}
  return n;
}
function _IN(n) {
 if (!n) return false;
 for (var i=0;i<n.length;i++) {
  var c=n.charAt(i);
  if ((c<"0" || c>"9") && (c!=".")) return false;
 }
 return true;
}
function _ES(s) {
 if (typeof(encodeURIComponent) == 'function') {
  return encodeURIComponent(s);
 } else {
  return escape(s);
 }
}
function _Nx() {
  return (new Date((new Date()).getTime()+63072000000)).toGMTString();
}
daTracker();
