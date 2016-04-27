$(function(){
	$(".list2").hide();
	$(".list2").hover(
		function(){
			$(".list2").show();
		},
		function(){
			$(".list2").hide();
		}
	)
	$("#menu p").hover(
		function(){
			$(".list2").show();
		},
		function(){
			$(".list2").hide();
		}
	)

//账户判断
$("#account-input").blur(
		function() {

			if ($("#account-input").val() !== "") {
				if (/^1(3|5|7|8|9)\d{9}$/.test($("#account-input").val()) == false) {
					$("#prompt-account").css({"color":"red"})
				} else {
					
					$("#prompt-account").css({"color":"green"})
				}
			}
		})
//邮箱判断
$("#email-input").blur(
		function() {
			if ($("#email-input").val() !== "") {
				if (/^\w+@\w+(\.\w+)+$/.test($("#email-input").val()) == false) {
					$("#prompt-email").css({"color":"red"})
				} else {
					$("#prompt-email").css({"color":"green"})
				}
			}
		})


	//密码判断
$("#password-input").blur(
		function() {
			if ($("#password-input").val() !== "") {
				if (/^[a-zA-Z_]\w{5,14}$/.test($("#password-input").val()) == false) {
					$("#password-prompt").css({"color": "red"})
				} 
				else {
					$("#password-prompt").css({"color": "green"})
					if (($("#re-password-input").val() !== "") && ($("#password-input").val() != $("#re-password-input").val())) {
						
					$("#password-prompt").css({"color": "red"})
					
					}
				}
			}
		})
	//再次密码判断
	var repass=0;
$("#re-password-input").blur(
	function() {

		if ($("#re-password-input").val() !== "") {
			if ($("#password-input").val() != $("#re-password-input").val()) {
				$("#re-password-prompt").css({"color": "red"})
				repass=0;
			} else {
				$("#re-password-prompt").css({"color": "green"})
				repass=1;
			}
		}
	})

	$("#reg-send").click(
	function() {	
		if ((getCookie("account")=="")&&
		(/^1(3|5|7|8|9)\d{9}$/.test($("#account-input").val()) == true)&&
		(/^\w+@\w+(\.\w+)+$/.test($("#email-input").val()) == true)&&
		(/^[a-zA-Z_]\w{5,14}$/.test($("#password-input").val()) == true)&&
		(repass==1)
		   ) {
			addCookie("account", $("#account-input").val(), 5);
			addCookie("keyword", $("#re-password-input").val(), 5);
			
			alert("注册成功")
			window.location="../index.html";
		}
		else{alert("注册失败")}
	})
	
	
	
	
	
	
})