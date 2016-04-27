$(document).ready(function() {
	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=")
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1
				c_end = document.cookie.indexOf(";", c_start)
				if (c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end))
			}
		}
		return ""
	}

	//轮播
	var $banner2list = $(".banner2 span"),
		$banner1img = $(".banner1 img"),
		$banner1 = $(".banner1"),
		$banner = $(".banner")
	var index = 0;
	var imgwidth = $banner1img.eq(0).width()
	var color = ["rgb(191, 189, 185)", "rgb(54, 65, 70)", "rgb(244, 244, 246)", "rgb(251, 246, 240)", "rgb(244, 244, 242)"]
	$banner1img.eq(0).siblings().css({
		"top": "0",
		"left": imgwidth
	})
	$banner2list.mouseover(
		function() {

			if ($(this).index() > index) {
				$banner1img.stop(true, true)
				$banner2list.eq(index).removeClass("spanactive")
				$(this).addClass("spanactive")
				$banner1img.eq($(this).index()).css({
					"top": "0",
					"left": imgwidth
				})
				$banner1img.eq(index).animate({
					"top": "0",
					"left": -imgwidth
				})
				$banner1img.eq($(this).index()).animate({
					left: '0px'
				});
				$banner.css({
					"background": color[$(this).index()]
				})
				index = $(this).index();
			}
			if ($(this).index() < index) {
				$banner1img.stop(true, true)
				$banner2list.eq(index).removeClass("spanactive")
				$(this).addClass("spanactive")
				$banner1img.eq($(this).index()).css({
					"top": "0",
					"left": -imgwidth
				})
				$banner1img.eq(index).animate({
					"top": "0",
					"left": imgwidth
				})
				$banner1img.eq($(this).index()).animate({
					left: '0px'
				});
				$banner.css({
					"background": color[$(this).index()]
				})
				index = $(this).index();
			}
			if (index == 5) {
				index = 0
			}
		})
	timer = setInterval(function() {
		if (index <= 3) {
			$banner2list.eq(index + 1).mouseover()
		}
		if (index == 4) {
			$banner2list.eq(0).mouseover()
		}
	}, 5000);

	$(".bbig li").hover(
		function() {
			$(this).find(".bbtn").stop().animate({
				top: "220px"
			})
		},
		function() {
			$(this).find(".bbtn").stop().animate({
				top: "260px"
			})
		})

	$(".bsmall li").hover(
			function() {
				$(this).find(".bbtn").stop().animate({
					top: "170px"
				})
			},
			function() {
				$(this).find(".bbtn").stop().animate({
					top: "260px"
				})
			})
		//圆变色
	$(".cont41 .right li").hover(
		function() {
			$(this).css({
				"background-position-y": "-60px",
				"color": "white"
			})

		},
		function() {
			$(this).css({
				"background-position-y": "0px",
				"color": "black"
			})

		}
	)

	$("div.item").mouseover(function() {
		$(this).addClass("hover");
	});
	$("div.item").mouseleave(function() {
		$(this).removeClass("hover");
	});

	$("#navlistbd").click(function() {
		window.location = "html/go.html";
	})

	$(".cont41 li img").eq(0).click(
		function() {
			window.location = "html/product.html"
		})
	$(".cont41 .left a").hover(function() {
		$(".cont41 .left div").css({
			"backgroundPositionX": "-170px"
		})
	}, function() {
		$(".cont41 .left div").css({
			"backgroundPositionX":"-140px"
		})
	})

})