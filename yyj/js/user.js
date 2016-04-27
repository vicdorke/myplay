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

	if(checkCookie("name_360404")==true){
	   $(".orderStatusTab2_kong").hide()
		$(".goods-imgq img").attr("src", getCookie("img_360404"));
			$(".name").text(getCookie("name_360404"));
			$(".value2").text(getCookie("allprice"));
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})