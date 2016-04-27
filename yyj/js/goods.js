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
	
	$("#buy-number").blur(function(){
		if($("#buy-number").val()<0 || $("#buy-number").val()>99){
			alert("请输入1-99之内的数字")
			$("#buy-number").val(1)
		}
		
	})
	
	
	$("#bybike").click(function(){
		if(checkCookie("num_360404")==false)
		{
			addCookie("num_360404", $("#buy-number").val(), 5);
			addCookie("name_360404", $(".goodsname h1").html(), 5);
			addCookie("img_360404", $(".smallpic img").attr("src"), 5);
			addCookie("price_360404",$(".goodmoney").html(), 5);
		 	alert("添加成功");
		 	$("#shopping dl dt").text(1)
		}
		else{
			var upvalue=Number(getCookie("num_360404"))+Number($("#buy-number").val());
			updateCookie("num_360404",upvalue,5);
			alert("添加成功");
		}	
	});
	
	$("#clickbutton").click(function(){
			if(checkCookie("num_360404")==false)
		{
			addCookie("price_360404",$(".goodmoney").html(), 5);
			addCookie("num_360404", $("#buy-number").val(), 5);
			addCookie("name_360404", $(".goodsname h1").html(), 5);
			addCookie("img_360404", $(".smallpic img").attr("src"), 5);
		 	
		 	window.location = "buybike.html";
		}
		else{
			var upvalue=Number(getCookie("num_360404"))+Number($("#buy-number").val());
			updateCookie("num_360404",upvalue,5);
			
			window.location = "buybike.html";
		}	
	});
	//固定效果
	$(document).scroll(function(){
			if($(document).scrollTop()>770)
			{
				$(".contfixul").addClass("fix")
			}
			else{
				$(".contfixul").removeClass("fix")
			}	
	})
	
	$(".contfixul li").click(function(){
		$(".contfixul li").removeClass("call");
		$(this).addClass("call");
		var index=$(this).index();
		$(".detail-a").hide();
		if(index==0){
			$(".detail-a").show();
			$("#null").hide()
		}
		else{
			$("#null").show()
		}
		
	})
	
	
	
	
})