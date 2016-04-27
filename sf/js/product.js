$(document).ready(function() {
	$(".pq,.dd").hover(
		function() {
			$(".dd").show()
		},
		function() {
			$(".dd").hide()
		}
	)
	$("#btn-forward").click(
		function() {
			$(".pic-items ul").animate({
				top: "0px"
			})
		}
	)

	$("#btn-backward").click(
		function() {
			$(".pic-items ul").animate({
				top: "-60px"
			})
		}
	)

	var $width = $(".getwhite").width()
	var $height = $(".getwhite").height()
	var $lw = $(".lemen").width()
	var $lh = $(".lemen").height()
	$(".lemen").mousemove(function(e) {
		$(".getwhite").show()
		$(".bigimg").show()

		var magnify_offset = $(this).offset()
		mx = e.pageX - magnify_offset.left,
			my = e.pageY - magnify_offset.top;
		if (mx <= $width / 2) {
			ileft = 0
			$(".getwhite").css({
				left: ileft
			})
			$(".bigimg img").css({
				left: -(ileft * 2.4)
			})
		} else if (mx > $lw - $width / 2) {
			ileft = $lw - $width
			$(".getwhite").css({
				left: ileft
			})
			$(".bigimg img").css({
				left: -(ileft * 2.4)
			})
		} else {
			ileft = mx - $width / 2
			$(".getwhite").css({
				left: ileft
			})
			$(".bigimg img").css({
				left: -(ileft * 2.4)
			})
		};
		if (my <= $height / 2) {
			itop = 0
			$(".getwhite").css({
				top: itop
			})
			$(".bigimg img").css({
				top: -(itop * 2.4)
			})
		} else if (my > $lh - $height / 2) {
			itop = $lh - $height
			$(".getwhite").css({
				top: itop
			})
			$(".bigimg img").css({
				top: -(itop * 2.424242)
			})
		} else {
			itop = my - $height / 2
			$(".getwhite").css({
				top: itop
			})
			$(".bigimg img").css({
				top: -(itop * 2.4)
			})
		}
	})
	$(".lemen").mouseleave(function() {
		$(".getwhite").hide()
		$(".bigimg").hide()
	})

	$(".bigdiv li").mouseover(function() {
		var q = $(this).index() + 1
		$(".lemen").find("img").eq(0).attr("src", ("../images/middle" + q + ".jpg"))
		$(".bigimg").find("img").eq(0).attr("src", ("../images/big" + q + ".jpg"))
	})
	$("#add-sell-num").click(
		function() {
			$lemonumber = Number($("#number_56503").val()) + 1
			$("#number_56503").val($lemonumber)
			$("#reduce-sell-num").removeClass("disable")
		}
	)
	$("#reduce-sell-num").click(
		function() {
			$lemonumber = Number($("#number_56503").val()) - 1
			if ($lemonumber == 0) {
				$("#reduce-sell-num").addClass("disable");
				return;
			}
			$("#number_56503").val($lemonumber)

		}
	)
	$("#cart-add-btn-sf").click(
		function() {
			alert("添加成功")
			var lename = $("#base_name-sf").text()
			var lenprice = $(".price").text()
			var lensrc = $(".lensrc").attr("src")
		
			addCookie("lenum", $("#number_56503").val(), 5)
			addCookie("lename", lename, 5)
			addCookie("lenprice",lenprice, 5)
			addCookie("lenheight", 0.6, 5)
			addCookie("lensrc", lensrc, 5)
		}
	)
	$("#navlistbd").click(function() {
		window.location = "../html/go.html";
	})



})