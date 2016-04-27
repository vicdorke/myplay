$(function(){
	$(".userList>li>a").on("click", function() {
		$(this).next().slideToggle(300);
	});
	
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
	
	//点击切换tab 
	tab();
	function tab() {
		$(".orderStatusTab>ul>li>a").on("click", function() {
			$(".orderStatusTab>ul>li>a").removeClass("active");
			$(this).addClass("active");
		});
		$("#ulist1>li").on("click", function() {
			var $index = $(this).index();
			//alert($index);
			$(".content1_right>div").css({
				"display": "none"
			});
			$(".content1_right").find('.mylist' + $index).css({
				"display": "block"
			});
		});
		$("#ulist2>li").on("click", function() {
			var $index = $(this).index() + 7;
			//alert($index);
			$(".content1_right>div").css({
				"display": "none"
			});
			$(".content1_right").find('.mylist' + $index).css({
				"display": "block"
			});
		});
		$("#ulist3>li").on("click", function() {
			var $index = $(this).index() + 14;
			//alert($index);
			$(".content1_right>div").css({
				"display": "none"
			});
			$(".content1_right").find('.mylist' + $index).css({
				"display": "block"
			});
		});
	}

});


