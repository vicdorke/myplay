$(document).ready(function(){
	//轮播
	var $index=0;
	$(".wrapimg img").eq($index).siblings().css({"left":"720px"});
	$(".wrap li").eq($index).css({"background":"#CB0000"});
	
	$(".wrap li").mouseenter(
		function(){
			$(".wrapimg img").stop(true, true)
			if($index>$(this).index()){
				$(".wrap li").css({"background":"#989898"});	
				$(this).css({"background":"#CB0000"});	
				$(".wrapimg img").css({"left":"-720px"});
				$(".wrapimg img").eq($index).css({"left":"0"});
				$(".wrapimg img").eq($(this).index()).animate({left:"0"});
				$(".wrapimg img").eq($index).animate({left:"720px"});
			}
			if($index<$(this).index()){
				$(".wrap li").css({"background":"#989898"});
				$(this).css({"background":"#CB0000"});
				$(".wrapimg img").css({"left":"720px"});
				$(".wrapimg img").eq($index).css({"left":"0"});
				$(".wrapimg img").eq($(this).index()).animate({left:"0"});
				$(".wrapimg img").eq($index).animate({left:"-720px"});
			}
			$index=$(this).index();
		})
		timer = setInterval(function() {
		if ($index <= 1) {
			$(".wrap li").eq($index + 1).mouseenter();
		}
		else {
			$(".wrap li").eq(0).mouseenter();
		}
		}, 5000);
	//无缝滚动
	var $move=$(".demo1").width()/2;
	$(".demo2").html($(".demo1").html());
	$(".demo2").css({"left":$(".demo1").width()});
	
	$(".LeftButton").click(function(){
		$(".demo1").stop(true, true);
		$(".demo2").stop(true, true);
		if($(".demo1").position().left==-$move*2){
		  $(".demo1").css({"left":$(".demo1").width()});
		}
		if($(".demo2").position().left==-$move*2){
		  $(".demo2").css({"left":$(".demo1").width()});
		}
		$(".demo2").animate({left:"-="+$move});
		$(".demo1").animate({left:"-="+$move});
	})
	
	$(".RightButton").click(function(){
		$(".demo1").stop(true, true);
		$(".demo2").stop(true, true);
		if($(".demo1").position().left==$move*2){
		  $(".demo1").css({"left":-$(".demo1").width()});
		}
		if($(".demo2").position().left==$move*2){
		  $(".demo2").css({"left":-$(".demo1").width()});
		}
		$(".demo2").animate({left:"+="+$move});
		$(".demo1").animate({left:"+="+$move});
	})
	$(".banner").mouseenter(function(){
			clearInterval(bannersmall);
		})
	$(".banner").mouseleave(function(){
			bannersmall=setInterval(function() {
				$(".LeftButton").click();
	 		}, 3000);
		})
	var bannersmall=setInterval(function() {
		$(".LeftButton").click();
	 }, 3000);
	//商品切换
	$(".subMenu li").mouseenter(function(){
		$(".subMenu li").removeClass("underline")
		$(this).addClass("underline")
		$(".subContent ul").removeClass("contshow")
		$(".subContent ul").eq($(this).index()).addClass("contshow")
	})
	

	
})