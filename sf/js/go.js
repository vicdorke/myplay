$(document).ready(function() {
	$(".mygo").find("img").eq(0).click(function() {
		window.location = "../index.html"
	})
	$(".goods2 img").attr("src", getCookie("lensrc"))
	$(".goods2 a").text(getCookie("lename"))
	$(".goods4 input").val(getCookie("lenum"))
	deleteCookie("lenum")
	$(".goods b").text("￥" + getCookie("lenprice"))
	if (checkCookie("account") == true) {
		$(".pianren1").hide()
	} else {
		$(".gobike").hide()
	}
	$(".goods5").text(parseInt($(".goods4 input").val() * getCookie("lenheight")) + "kg")
	$(".goods6").text("￥" + $(".goods4 input").val() * getCookie("lenprice"))


	$(".a1").click(function() {
		if ($(".goods4 input").val() > 1) {
			$(".goods4 input").val($(".goods4 input").val() - 1)
			$(".goods6").text("￥" + $(".goods4 input").val() * getCookie("lenprice"))
			$(".goods5").text(parseInt($(".goods4 input").val() * getCookie("lenheight")) + "kg")
			$("#allWeight").text($(".goods5").text())
			$("#allMoney2").text($(".goods6").text())
		}
	})
	$(".a2").click(function() {

		$(".goods4 input").val(parseInt($(".goods4 input").val()) + 1)
		$(".goods6").text("￥" + $(".goods4 input").val() * getCookie("lenprice"))
		$(".goods5").text(parseInt($(".goods4 input").val() * getCookie("lenheight")) + "kg")
		$("#allWeight").text($(".goods5").text())
		$("#allMoney2").text($(".goods6").text())
	})
	$("#allWeight").text($(".goods5").text())
	$("#allMoney2").text($(".goods6").text())
	$(".cartclear").click(function() {
		$(".gobike").hide();
		$(".pianren1").show();
	})
	$(".givemoney").click(function(){
		window.location="../xhtml/jiesuan.html"
	})

})