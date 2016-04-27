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
//跳转支付
	$("#close").click(function(){
		
		window.location = "../index.html";
	})
	
	
	
	
	
	
	
	
	
	
	
	
})