/*!
 * common.js v0.1
 *
 * Author: 王李兵 toowind007@gmail.com
 * Date: 2011-11-15 15:08
 */
var hostUrl = document.location.host;
var urlArr = hostUrl.split('.');
var domain = urlArr[1]+'.'+urlArr[2];
var SF_STATIC_BASE_URL='http://i.'+domain+'/com';
var SF_STATIC_HTML_URL='http://i.'+domain+'/html';
var SF_PASSPORT_URL = 'http://passport.'+domain;
var SF_HOME_URL = 'http://home.'+domain;
var SF_WWW_URL = 'http://www.'+domain;
function reloadValidate(){
	var src = document.getElementById('validateIMG').getAttribute('src') + "?new=" + Math.random(100000);
	document.getElementById('validateIMG').setAttribute('src', src);
}

String.prototype.getBytes = function() {   
    var cArr = this.match(/[^\x00-\xff]/ig);   
    return this.length + 2 * (cArr == null ? 0 : cArr.length);   
}

function image_path(path, server_id){
	server_list = new Array();
	server_list[1] = 'http://p.'+domain;
	
	if(!server_list[server_id]) return path;
	return server_list[server_id] + path;
}

/*
 * 遮罩层
 */
var Shade=new function()
{
  var handle={};
  var shade;
  handle.show=function(func)
  {
	  if(!shade)
	  {
		  shade=document.createElement('div');
		  shade.style.display = 'none';
		  shade.style.zIndex = 2000;
		  shade.style.filter = 'alpha(opacity = 60)';
		  shade.style.left = 0;
		  shade.style.width = '100%';
		  shade.style.position = 'absolute';
		  shade.style.top = 0;
		  shade.style.backgroundColor = '#666';
		  shade.style.opacity = .6;
		  document.body.appendChild(shade);
	  }
	  with((document.compatMode=='CSS1Compat')?document.documentElement:document.body)
	  {
		  var ch=clientHeight,sh=scrollHeight;
		  shade.style.height=(sh>ch?sh:ch)+'px';
		  
		  var cw = clientWidth,sw = scrollWidth, ow=offsetWidth;
		  var width = cw > sw ? cw : sw;
		  width = width > ow ? width : ow;
		  
		  shade.style.width=width+'px';
		  shade.style.display='block';
	  }
	  
	  if(func){
		 func(); 
	  }
  };
  handle.hide=function(func){
	  shade.style.display='none';
	  if(func){
		 func(); 
	  }
  };
  
  return handle;
}

/*
 *弹出框
 */
var Win = new function(){
	var handler = {};
	var win;
	var closebtn;
	handler.show = function(html, func, closebtn){
		Shade.show();
		if(!win){
			win = document.createElement('div');
			win.style.display = 'none';
			//win.style.backgroundColor = '#fff';
			//win.style.border = '1px solid #666';
		  	win.style.zIndex = 2011;
			win.style.position = 'absolute';
			win.style.left = 0;
			win.style.top = 0;
			//win.style.padding = '11px 11px';
		    document.body.appendChild(win);
			
			if(closebtn){
				closebtn = document.createElement('div');
				closebtn.style.width = '11px';
				closebtn.style.height = '11px';
				closebtn.style.border = '1px solid #666';
				closebtn.style.position = 'absolute';
				closebtn.style.zIndex = 2011;
				closebtn.style.fontSize = '10px';
				closebtn.style.color = '#333';
				closebtn.innerHTML = "<a href='javascript:void(0)' onclick='Win.hide()' style='text-decoration:none'>×</a>";
				document.body.appendChild(closebtn);
			}
		}
	    with((document.compatMode=='CSS1Compat')?document.documentElement:document.body)
	    {
			win.style.display = 'block';
			
			win.innerHTML = html;
			var ch=clientHeight,sh=scrollHeight, oh=offsetHeight;
		 	//var height=(sh<ch?sh:ch);
			var height = ch;
			//height = height < oh ? height : oh;
		  
			var cw = clientWidth,sw = scrollWidth, ow=offsetWidth;
			var width = cw < sw ? cw : sw;
			//width = width < ow ? width : ow;
			
			if (document.documentElement && document.documentElement.scrollTop) {
				dh = document.documentElement.scrollTop;
				dw = document.documentElement.scrollLeft;
			}else if (document.body){
				dh = document.body.scrollTop;
				dw = document.body.scrollLeft;
			}else{
				dh = document.documentElement.scrollTop;
				dw = document.documentElement.scrollLeft;
			}
			
			win.style.left = (width - win.offsetWidth) / 2 + dw + 'px';
			win.style.top = (height - win.offsetHeight) / 2 + dh + 'px';
			
			if(closebtn){
				closebtn.style.display = 'block';
				closebtn.style.left = (width -((width - win.offsetWidth) / 2 + dw)- 14) + 'px';
				closebtn.style.top = (height - win.offsetHeight) / 2 + dh + 'px';
			}
		}
		
		if(func){
			func();
		}
	}
	
	handler.iframe = function(title, url, func){
		var html = title + "<iframe src='" + url + "' onload='Win.resize()' frameborder='0' width='100%' height='100%' id='winiframe' name='winiframe' scrolling='auto'></iframe>";
		Win.show(html, func);
	}
	
	handler.hide = function(func){
		win.style.display = 'none';
		if(closebtn) closebtn.style.display = 'none';
		Shade.hide();
		
		if(func){
			func();
		}
	}
	
	handler.resize = function(){
		
		var iframename = 'winiframe';
		
		var FFextraHeight = 16;
		var FFextraWidth = 16;
		if(window.chrome) return;
		var pTar = null;
		if (document.getElementById){
			pTar = document.getElementById(iframename);
		}
		else{
			eval('pTar = ' + iframename + ';');
		}
		if (pTar && !window.opera){
			//begin resizing iframe
			pTar.style.display="block"
			
			if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight){
			  //ns6 syntax
			  pTar.height = pTar.contentDocument.body.offsetHeight+FFextraHeight; 
			  pTar.width = pTar.contentDocument.body.offsetWidth+FFextraWidth;
			}
			else if (pTar.Document && pTar.Document.body.scrollHeight){
			  //ie5+ syntax
			  pTar.height = pTar.Document.body.scrollHeight;
			  pTar.width = pTar.Document.body.scrollWidth;
			}
			
			if(win){
				win.width = win.width > pTar.width ? win.width : pTar.width;
				win.height = win.height > pTar.height ? win.height : pTar.height;
				
				 with((document.compatMode=='CSS1Compat')?document.documentElement:document.body)
				{
					var ch=clientHeight,sh=scrollHeight;
					var height=(sh<ch?sh:ch);
				  
					var cw = clientWidth,sw = scrollWidth, ow=offsetWidth;
					var width = cw > sw ? cw : sw;
					width = width > ow ? width : ow;
					
					win.style.left = (Math.floor((width - win.width) / 2) > 0 ? Math.floor((width - win.width) / 2) : 0) + 'px';
					win.style.top = (Math.floor((height - win.height) / 2) > 0 ? Math.floor((height - win.height) / 2) : 0) + 'px';
					
					if(closebtn){
						closebtn.style.display = 'block';
						closebtn.style.left = (width -(Math.floor((width - win.width) / 2) > 0 ? Math.floor((width - win.width) / 2) : 0)- 14) + 'px';
						closebtn.style.top = (Math.floor((height - win.height) / 2) > 0 ? Math.floor((height - win.height) / 2) : 0) + 'px';
					}
				}
			}
		}
	}
	
	return handler;
}

Login = new function(){
	var handler = {};
	var login;
	var functions;
	
	handler.show = function(func, e){
		
		functions = func; 
		
		if(!jQuery){
			return;
		}
		
		Win.show("<img src='"+SF_STATIC_BASE_URL+"/images/passport/loading.gif' />");
		$.post(SF_PASSPORT_URL+'/ajax/checkLogin/', {}, function(data){
			Win.hide();
			var json = eval('('+data+')');
		
			//if(parseInt(json.isLogin)==0){
				//if(!login){
					login = "<div class=\"sidebarB loginr\">";
					login += "<div class=\"title\"><img src=\""+SF_STATIC_HTML_URL+"/images/logintitlepic.jpg\">请登录顺丰优选";
					login += "		<span style='position:absolute; top:10px; left:320px;'>";
					login += "			<input type='button' value='' style=\"background:url('"+SF_STATIC_BASE_URL+"/images/passport/icons.jpg') no-repeat -106px -70px; border:0; width:19px; height:19px; cursor:pointer\" onmouseover=\"this.style.backgroundPosition='-106px -89px'\" onmouseout=\"this.style.backgroundPosition='-106px -70px'\" onclick=\"Win.hide()\" />";
					login += "		</span></div>";
					login += "		<form action='' onsubmit=\"return Login.submit();\">";
					login += "		<div class=\"content\">";
					login += "			<ul>";
					login += "				<li class=\"sidebarA\">用户名Email：</li><li class=\"sidebarB\"><input type=\"text\" id='login_passportName'></li>";
					login += "				<li class=\"sidebarA\">请输入登录密码：</li><li class=\"sidebarB\"><input type='password' id='login_passportPswd'></li>";
					
					/***********************验证码开始*************************************************************/
					if(parseInt(json.codenum) > 3){
						login +="<li class=\"sidebarA\">请输入验证码：</li><li class=\"sidebarB\"><div style=\"float:left;\">";
						login +="<input  type='text' id='login_validate' style='width:50px;' /></div><div style=\"float:left;\">";
						login +="<img src='/validate/' id='login_validateIMG' onclick=\"this.src+='?new=' + Math.random()\" alt='看不清？点一下！' title='看不清？点一下！'";
						login +="style='cursor:pointer; vertical-align:middle;' /></div>";
						login +="<div class=\"clear\"></div></li><div class=\"clear\"></div>";
					}
					/***********************验证码结束*************************************************************/
					
					login += "				<li class='botton'><input type='submit' style='background:url("+SF_STATIC_HTML_URL+"/images/loginbtn1.jpg);width:109px;height:36px;border:none;cursor:pointer;' value=''><a href='#'>忘记密码?</a></li>";
					login += "		</ul>";
					login += "		<ul style='border:none;'>";
					login += "			<li>如果您还不是顺丰优选会员，可以现在免费注册便能立刻享受优质服务。</li>";
					login += "			<li class='botton'><a href='#'><img src='"+SF_STATIC_HTML_URL+"/images/loginbtn2.jpg'></a></li>";
					login += "		</ul>";
					login += "		</div>";
					login += "		</form>";
					login += "		<div class='clear'></div>";
					login += "	</div>";
				//}
				Win.show(login);
				if(parseInt(json.codenum) > 3){
					document.getElementById('login_validateIMG').src += "?new=" + Math.random();
				}
				document.getElementById('login_passportName').focus();				

			//}
//			else{
//				if(func) func(data);
//			}
		});
	}
	
	handler.submit = function(functions){

		if(!jQuery) return;
		
		var passportName = document.getElementById('login_passportName').value;
		if(passportName.length <= 0){
			jAlert('请输入用户名');
			document.getElementById('login_passportName').focus();
			return false;
		}
		var regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/i;
		if(!regex.test(passportName)){
			jAlert('用户名有误！');
			document.getElementById('login_passportName').focus();
			return false;
		}
		
		var passportPswd = document.getElementById('login_passportPswd').value;
		if(passportPswd.length <= 0){
			jAlert('请输入密码！');
			document.getElementById('login_passportPswd').focus();
			return false;
		}
		regex = /^\S{6,31}$/;
		if(!regex.test(passportPswd)){
			jAlert('输入密码错误，请重新输入!!');
			document.getElementById('login_passportPswd').focus();
			return false;
		}
		if(document.getElementById('login_validate')){
			var validate = document.getElementById('login_validate').value;
			if(validate.length <= 0){
				jAlert('请输入验证码');
				document.getElementById('login_validate').focus();
				return false;
			}
		}
		
		//Win.show("<img src='"+SF_STATIC_BASE_URL+"/images/passport/loading.gif' />");
		$.post('/ajax/doLogin/', {"passportName":passportName, "passportPswd":passportPswd, "validate":validate}, function(data){		
																													
																											
			if(data.types == 'success'){
				if(functions) functions(passportName);
				Win.hide();
			}
			else if(data.types == 'error'){	
				jAlert(data.msg);
				$('#authrow').show();
				//Login.show(functions);
			}
			else{
				jAlert('网络错误');
				//Login.show(functions);
			}
			
			if(parseInt(data.codenum) >2){
				var code ='';
				code +="<li class=\"sidebarA\">请输入验证码：</li><li class=\"sidebarB\"><div style=\"float:left;\">";
				code +="<input  type='text' id='login_validate' style='width:50px;' /></div><div style=\"float:left;\">";
				code +="<img src='/validate/' id='login_validateIMG' onclick=\"this.src+='?new=' + Math.random()\" alt='看不清？点一下！' title='看不清？点一下！'";
				code +="style='cursor:pointer; vertical-align:middle;' /></div>";
				code +="<div class=\"clear\"></div></li><div class=\"clear\"></div>";
				$("#code").html(code);
			}
			
		}, "json");
		
		return false;
	}
	
	handler.checkOnLoad = function(func){
		
		if(!jQuery) return;
		
		if(!func) return;
		
		$.post('/ajax/checkLogin/', {}, function(data){
			if(data != 0){
				func(data);
			}
		});
	}
	
	return handler;
}