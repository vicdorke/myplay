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
	if(getCookie("num_360404")>99){
		updateCookie("num_360404",99,5);
		alert("最大购买数量为99");
	}
	if(checkCookie("num_360404")==true)
	{
		$(".no-goods").hide();
		$(".list-no").show();
		$(".goods-img").attr("src", getCookie("img_360404"));
		$(".goods-name").text(getCookie("name_360404"));
		$(".money").text(getCookie("price_360404"));
		$(".textbox").val(getCookie("num_360404"));
		$(".allprice").html($(".textbox").val()*getCookie("price_360404"));
	}
	else
	{
		$(".no-goods").show();
		$(".list-no").hide();
	}
	
	$("#plus").click(function(){
		if($(".textbox").val()>=99){
			alert("超出最大购买数量");
			return 
		}
		else{
			var plus=Number($(".textbox").val())+1;
			updateCookie("num_360404",plus,5);
			$(".textbox").val(plus)	;
			$(".allprice").html($(".textbox").val()*getCookie("price_360404"));
			}
	})
	
	$("#reduce").click(function(){
		if($(".textbox").val()<=1){
			alert("超出最小购买数量")
			return 
		}
		else{
			var reduce=Number($(".textbox").val())-1;
			updateCookie("num_360404",reduce,5);
			$(".textbox").val(reduce);
			$(".allprice").html($(".textbox").val()*getCookie("price_360404"));
		}
	})
	
	$(".textbox").blur(
		function(){
		if($(".textbox").val()>99){
			$(".textbox").val(99);
			alert("最大购买数量为99");
		}
			updateCookie("num_360404",$(".textbox").val(),5);
			$(".allprice").html($(".textbox").val()*getCookie("price_360404"));
	})
	var name_360404="name_360404";
	$("#del").click(function(){
		Cookies.remove('name_360404');
		Cookies.remove("img_360404");
		Cookies.remove("price_360404");
		Cookies.remove("num_360404");
		location.reload()
	})

	$(".nexter").click(function(){
		
		addCookie('allprice',$(".allprice").html(),5)
		window.location = "buybike2.html";
		
	})
	
	
	
	
	
})