$(document).ready(function() {
function checkCookie(name){
	var c = document.cookie.indexOf(name);
	if(c!=-1){
		 return true;
	}else{
		return false;
	}
}
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}


$(".login_btn").click(function(){
	var name=$("#loginname").val();
	var pwd=$("#password").val();
	if(name==""||pwd==""){
		alert("请输入帐号密码")
	}
	else{
	
	if(getCookie("account")==name&&pwd==getCookie("keyword")){
		alert("登录成功")
		window.location="../index.html";
	}else{
			alert("登录失败")
	}
	}	
	
	
	
})



















})