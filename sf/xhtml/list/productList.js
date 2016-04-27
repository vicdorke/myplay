$(function(){
    $("#cateall h3").toggle(function(e){
		 var o = e.target;
         if (o.tagName == 'A') location.href = o.href;
		$(this).parent().addClass("curr").siblings().removeClass("curr");
	},function(){
		$(this).parent().removeClass("curr");
	});
	$(".attrs-extend > .attr").each(function() {
        if ($(this).find("li").length > 10) {
            var attrs = $(this).find("li:gt(9)");
            attrs.addClass("hide");
            $(this).find(".v-show").removeClass("hide");
            $(this).find(".v-show").toggle(function() {
                attrs.removeClass("hide");
                $(this).html('<span class="s-less"><b></b>收起</span>');;
            }, function() {
                attrs.addClass("hide");
                $(this).html('<span class="s-more"><b></b>更多</span>');
            })
        }
    });
	$(".list-all li").hover(function(){
		$(this).addClass("curr");
	},function(){
		$(this).removeClass("curr");
	});
	sfAddCart.init();	
	if ($(".attrs-extend").find(".attr").length > 4){
		var t = $(".attrs-extend").find(".attr:gt(3)");
		var a=[];
		t.each(function(){
			var n = $(this).find(".a-key").html();
			var s = n.substring(0,n.length-1);
			a.push(s);
		});  
		var b = a.join(" / ");
        t.addClass("hide");
		$(".attrs-show").html('<div class="attrs-extra"><div>查看全部（' +b+ '）<b></b></div></div>').removeClass("hide");
		$(".attrs-show").toggle(function() {
			t.removeClass("hide");
			$(this).html('<div class="attrs-extra close"><div>收起<b></b></div></div>');
		}, function() {
			t.addClass("hide");
			$(this).html('<div class="attrs-extra"><div>查看全部（' +b+ '）<b></b></div></div>');
		})
	}
	if($(".r-filter").length > 0){
		var filterTop = $(".r-filter").offset().top-100;
		var filterScroll=function(){
			var domTop = $(document).scrollTop();
				(domTop > filterTop) ? $(".r-filter").addClass("filterScroll") : $(".r-filter").removeClass("filterScroll");
		};
		$(window).bind("scroll", filterScroll);
		filterScroll();
	}
	if($(".s-top").length > 0){
		$(".s-top").click(function() {
			$("html, body").scrollTop(0);
		});
		var bToTop = function() {
			var st = $(document).scrollTop();
			(st > 0) ? $(".s-top").css("display","block") : $(".s-top").css("display","none");
		};
		$(window).bind("scroll", bToTop);
		bToTop();
	}
	(function($){
		$.fn.extend({
			"slidelf":function(value){
				value = $.extend({
					"prev":"",
					"next":"",
					"speed":""	
				},value)
				var dom_this = $(this).get(0);
				var marginl = parseInt($("ul li:first",this).css("margin-left"));
				var movew = $("ul li:first",this).outerWidth()+marginl;	
				function leftani(){
					$("ul li:first",dom_this).animate({"margin-left":-movew},value.speed,function(){
							$(this).css("margin-left",marginl).appendTo($("ul",dom_this));	
					});	
				}
				function rightani(){
					$("ul li:last",dom_this).prependTo($("ul",dom_this));
					$("ul li:first",dom_this).css("margin-left",-movew).animate({"margin-left":marginl},value.speed);
				}
				$("."+value.prev).click(function(){
					if(!$("ul li:first",dom_this).is(":animated")){
						leftani();
					}	
				});
				$("."+value.next).click(function(){
					if(!$("ul li:first",dom_this).is(":animated")){
						rightani();
					}	
				})
			}	
		});	
	})(jQuery)
	$("#J_Slide").slidelf({
		"prev":"right-arrow",
		"next":"left-arrow",
		"speed":1000
	});
	0 !== $("#cateall").length && $("#cateall").find(".catitem:first").css("border-top","0");
	0 !== $(".attrs-extend").length && $(".attrs-extend").find(".attr:first").css("border-top","0");
	0 !== $(".l-hot").length && $(".l-hot").find("li:last").addClass("last");
	
	//Date 2015-04-20 列表页活动浮层 author zyf
	var mytime = Date.parse(new Date());
	var actStr='<div class="index_rfloat" style="display:block;left:auto;margin-left:0;right:10px;bottom:224px;'+
	'height: 236px;left: 50%;margin-left: 555px;overflow: hidden;position: fixed;text-align: center;'+
	'width: 120px;z-index: 999;"><a target="_blank" href="/html/activity/1428992676.html">'+
	'<img src="http://p.sfbest.com/gold/images/20150415/20150415172520852.png"></a>'+
	'<div onclick="Jrclose()" '+
	'style="background:url(http://i.sfbest.com/html/images/topclose.png) no-repeat;cursor:pointer;'+
	'height:20px;position:absolute;right:0;text-indent:-9999px;top:0;width:15px;">关闭</div></div>';
	if(mytime >=1429200000000 && mytime<=1431273599000){
		$("#footer").before(actStr);
	}
});
//服务器时间判断是否执行
function Jrclose(){
	$(".index_rfloat").hide();
}
function salesRank(cid){
	$.post("/ajax/salesRank/",{categoryid:cid},function(str){
		if(str){
			$("#salesRank").show();
			$("#salesRank").html(str);
		}
    });
}
function categoryCommend(cid){
	$.post("/ajax/categoryCommend/",{categoryid:cid},function(str){
		if(str){
			$("#categoryCommend").show();
			$("#categoryCommend").html(str);
		}
    });
}
function personal(cid){
	$.post("/ajax/personalRecommend/",{categoryid:cid},function(str){
		if(str){
			$("#PersonalRecommend").show();
			$("#PersonalRecommend").html(str);
		}
    });
}

function getHistory(){
	$.post("/product/guang/",{},function(str){
		if(str){
			$("#history_con").html(str);
		}
    });
}

function saleCartAdd(pid){
 cartAdd(pid,0,0,6);
}



function addNum(id){
	if(!$("#p-add"+id).hasClass('disable')){
		$t = $("#number_"+id);
		var $n = parseInt($t.val()) + 1;
		var $d = parseInt($t.attr("d"));
		var $x = parseInt($t.attr("x"));
		num = checkN($n,$x,$d,id);
		chageOnePro(id,num,$d,$x);
	}
}

//调用活动后重新校正商品的最大购买数和最小购买数
function checkOneProMaxMinBuy(id){
	$t = $("#number_"+id);
	var num = parseInt($t.val());
	var max = parseInt($t.attr("d"));
	var min = parseInt($t.attr("x"));
	if(num <= min){
		$('#p-reduce'+id).addClass('disable');
		$t.val(min);
	}else{
		$('#p-reduce'+id).removeClass('disable');
	}
	if(num >= max){
		$('#p-add'+id).addClass('disable');
		$t.val(max);
	}else{
		$('#p-add'+id).removeClass('disable');
	}
	if(max <= min){
		$('#p-reduce'+id).addClass('disable');
		$t.val(min);
	}
	if(num < max && num > min){
		$t.val(num);
	}
}

//获取
function chageOnePro(id,num,max,min){
	$t = $("#number_"+id);
	$.post("/product/listIsStock/",{product_id:id,number:num},function(str){
		if(str){
			max = str.max > max ? max : str.max;
			if(num <= min){
				$('#p-reduce'+id).addClass('disable');
				$t.val(min);
			}else{
				$('#p-reduce'+id).removeClass('disable');
			}
			if(num >= max){
				$('#p-add'+id).addClass('disable');
				$t.val(max);
			}else{
				$('#p-add'+id).removeClass('disable');
			}
			if(max <= min){
				$('#p-reduce'+id).addClass('disable');
				$t.val(min);
			}
			if(num < max && num > min){
				$t.val(num);
			}
			var oldSiteId = $("#productStockStatus_"+id).attr('siteid');
			if(oldSiteId != str.newSiteId){
				getAllPrices(id,id,num);
			}
		}
    },'json');
}

function reduceNum(id){
	var $t = $("#number_"+id);
	var $n = parseInt($t.val()) - 1;
	var $d = parseInt($t.attr("d"));
	var $x = parseInt($t.attr("x"));
	var n = checkN($n,$x,$d,id);
	$t.val(n);
	if(n <= $n){
		$('#p-add'+id).removeClass('disable');
	}
	chageOnePro(id,n,$d,$x);
}

function checkN($n,min,max,id){
	$n = parseInt($n);
	if($n <= min){
		$('#p-reduce'+id).addClass('disable');
		return min;
	}
	if($n >= max){
		return max;
	}
	return isNaN($n) ? 1 : $n;	
}


function changeRegion(p,c,a,t){
	$.post("/product/changecity/",{provinceid:p,cityid:c,areaid:a,townid:t},function(str){
		submitArea();
    });
}

function getArticleNum(keyword){
	$.post("/article/getNumber/",{keyword:keyword},function(str){
		if(str){
			$("#articlenum").html(str);
		}
    });
}

function submitPriceForm(){
	var startPrice = parseInt($.trim($("#startPrice").val()));
	var endPrice = parseInt($.trim($("#endPrice").val()));
	if(startPrice>0 || endPrice>0){
		$("#priceForm").submit();
	}
}