$(document).ready(function(){
	//控制block显示隐藏
	$(".list4").hover(function(){
		$(this).next().show();
		$(this).addClass("hover");
	},function(){
		$(".block").hide();
		$(this).removeClass("hover");
	})
	$(".block").hover(function(){
		$(this).show();
		$index=$(".block").index($(this));
		$(".list4").eq($index).addClass("hover");
		
	},function(){
		$(".list4").removeClass("hover");
		$(".block").hide();
	})
	//菜单拓展
	$(".list3").click(function(){
		$index=$(".list3").index($(this));
		if($index==0){
			$(".list4").hide();
			$(".home").show();
		}
		if($index==1){
			$(".list4").hide();
			$(".3c").show();
		}
		if($index==2){
			$(".list4").hide();
			$(".electrical").show();
		}
		if($index==3){
			$(".list4").hide();
			$(".fashion").show();
		}
		if($index==4){
			$(".list4").hide();
			$(".tour").show();
		}
	})
	//导航菜单触摸
	$("#menu p").mouseenter(function(){
		$(".list2").show();
	})

	//登录检测
	if(checkCookie("account")==true){
		$("#top3 dd").html("欢迎您："+getCookie("account"));
	}
	//商品检测
	if(checkCookie("name_360404")==true){
		$("#shopping dl dt").text(1)
	}
	
	
	
	
	
	
	
	
	
})