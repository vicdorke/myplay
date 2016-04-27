$(document).ready(function() {
//账户判断

$(".account input").focus(
	function() {
		$(".account2").hide()
		$(".account1").show()
		$(".account3").hide()
		$(".account input").css({
			"border-color": "#CDCDCD"
		})
	})

$(".account input").blur(
		function() {
			$(".account1").hide()

			if ($(".account input").val() !== "") {

				var patt1 = new RegExp(/^1(3|5|7|8|9)\d{9}$/);
				if (patt1.test($(".account input").val()) == false) {
					$(".account2").show()
					$(".account input").css({
						"border-color": "red"
					})
				} else {
					$(".account3").show()
				}
			}
		})
	//密码判断
$(".password input").focus(
	function() {
		$(".password2").hide()
		$(".password1").show()
		$(".password3").hide()
		$(".password input").css({
			"border-color": "#CDCDCD"
		})
	})

$(".password input").blur(
		function() {
			$(".password1").hide()

			if ($(".password input").val() !== "") {

				var patt1 = new RegExp(/^[a-zA-Z_]\w{5,14}$/);
				if (patt1.test($(".password input").val()) == false) {
					$(".password2").show()
					$(".password input").css({
						"border-color": "red"
					})
				} else {
					$(".password3").show()
					if (($(".repassword input").val() !== "") && ($(".password input").val() != $(".repassword input").val())) {
						$(".repassword2").show()
						$(".repassword3").hide()
						$(".repassword input").css({
							"border-color": "red"
						})
					}
				}
			}
		})
	//再次密码判断
$(".repassword input").focus(
	function() {
		$(".repassword2").hide()
		$(".repassword1").show()
		$(".repassword3").hide()
		$(".repassword input").css({
			"border-color": "#CDCDCD"
		})
	})

$(".repassword input").blur(
	function() {
		$(".repassword1").hide()

		if ($(".repassword input").val() !== "") {

			var patt1 = new RegExp(/^[a-zA-Z_]\w{5,14}$/);
			if ($(".password input").val() != $(".repassword input").val()) {
				$(".repassword2").show()
				$(".repassword input").css({

					"border-color": "red"
				})
			} else {
				$(".repassword3").show()

			}
		}
	})

$(".send").click(
	function() {	
		if ((getCookie("account")=="")&&($(".account3").css("display") == "block") && ($(".password3").css("display") == "block") && ($(".repassword3").css("display") == "block")) {
			addCookie("account", $(".account input").val(), 5);
			addCookie("keyword", $(".repassword input").val(), 5);
			
			alert("注册成功")
			window.location="../index.html";
		}else{alert("注册失败")}

	})
})