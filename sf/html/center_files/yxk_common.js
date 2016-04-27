$(function(){
	var iconGrayArr =[],iconGreenArr =[];
	iconGrayArr[0]="<span style='margin-left:-115px;'>可参加网站积分兑换活动，升级为普通会员即可享受</span>";
	iconGreenArr[0]="<span style='margin-left:-55px;'>可参加网站积分兑换活动</span>";
	iconGrayArr[1]="<span>可参加优选每月的会员日活动，升级为银卡会员即可享受</span>";
	iconGreenArr[1]="<span style='margin-left:-95px;'>可参加优选每月的会员日活动</span>";
	iconGrayArr[2]="<span style='margin-left:11px;'>享受网站运费政策</span>";
	iconGreenArr[2]="<span style='margin-left:11px;'>享受网站运费政策</span>";
	iconGrayArr[3]="<span>购物积分加速，升级为普通会员即可享受</span>";
	iconGreenArr[3]="<span style='margin-left:70px;'>购物积分加速</span>";
	iconGrayArr[4]="<span>生日送10元现金券，购物可当现金用，升级为普通会员即可享受</span>";
	iconGreenArr[4]="<span>生日送10元现金券，购物可当现金用</span>";
	iconGrayArr[5]="<span>在生日月份购物，可获双倍积分，升级为银卡会员即可享受</span>";
	iconGreenArr[5]="<span style='margin-left:65px;'>在生日月份购物，可获双倍积分</span>";
	iconGrayArr[6]="<span>生日送20元现金券，购物可当现金用，升级为银卡会员即可享受</span>";
	iconGreenArr[6]="<span>生日送20元现金券，购物可当现金用</span>";
	iconGrayArr[7]="<span>生日送100元现金券，购物可当现金用，升级为钻石卡会员即可享受</span>";
	iconGreenArr[7]="<span style='margin-left:25px;'>生日送100元现金券，购物可当现金用</span>";
	iconGrayArr[8]="<span>生日送50元现金券，购物可当现金用，升级为金卡会员即可享受</span>";
	iconGreenArr[8]="<span>生日送50元现金券，购物可当现金用</span>";
	iconGrayArr[9]="<span>购买顺丰优选自营商品满59元免运费，升级为钻石卡会员即可</span>";
	iconGreenArr[9]="<span>购买顺丰优选自营商品满59元免运费</span>";
	/*
	@优选卡规章icon移上显示tips说明
	@bright0-bright9 亮icon
	@rules0-rules9 灰icon
	@rulesIcon0-rulesIcon7 三角显示位置样式
	*/
	$('.yxk_r1_icon span').hover(function(){
		var i = $(this).index();
		$('.icon_content').show();
		var icon_s_w = $()
		var vi = parseInt($(this).attr("isv"));
		if($(this).attr("isGreen")==1){
			$('.icon_content em').addClass('rulesIcon'+i).next().html(iconGrayArr[vi]);
		}	
		if($(this).attr("isGreen")==2){
			$('.icon_content em').addClass('rulesIcon'+i).next().html(iconGreenArr[vi]);
		}	
	},function(){
		var i = $(this).index();
		$('.icon_content').hide();
		$('.icon_content em').removeClass('rulesIcon'+i);
	})
	/*
	@弹出层
	@yxk_layer_ok 点击向左滑出弹出层
	@yxk_layer_close 点击向右隐藏弹出层
	*/
	$('.yxk_layer_ok').click(function(){
		$('.loucky_bird').stop().animate({'right':263},500); 
		$('.yxk_layer').show().stop().animate({'left':63},500); 
		$('.yxk_layer_ok').hide();
		$('.yxk_layer_close').show();
		$('.yxk_C').css('z-index',11);
		$('.zSuse').css('z-index',12);
	})
	$('.yxk_layer_close').click(function(){
		$('.loucky_bird').stop().animate({'right':-10},500); 
		$('.yxk_layer').stop().animate({'left':373},500, function(){
			$('.yxk_layer_close').hide();
			$('.yxk_layer_ok').show();
			$('.yxk_C').css('z-index',0);
			$('.zSuse').css('z-index',10);
		});
	})
})
