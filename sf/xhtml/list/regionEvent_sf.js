// JavaScript Document
	function cleanKuohao(str){
		if(str&&str.indexOf("(")>0){
			str = str.substring(0,str.indexOf("("));
		}
		if(str&&str.indexOf("（")>0){
			str = str.substring(0,str.indexOf("（"));
		}
		return str;
	}
	function getProvinceStockCallback() {		
			var address = currentAreaInfo.currentProvinceName+currentAreaInfo.currentCityName+currentAreaInfo.currentAreaName+currentAreaInfo.currentTownName;
			var conTitle = currentAreaInfo.currentProvinceName;
			if($('#stock_city_item').attr("municipality")<1){
				conTitle += cleanKuohao(currentAreaInfo.currentCityName);	
			}
			conTitle += cleanKuohao(currentAreaInfo.currentAreaName);
			conTitle += cleanKuohao(currentAreaInfo.currentTownName);
			if($('#stock_city_item').attr("txtTop")>0){
				conTitle = cleanKuohao(currentAreaInfo.currentCityName);
			}
			$("#store-selector .text div").html(conTitle).attr("title",address);
			$.ajax({
				url  : '/product/changecity/',
				type : 'POST',
				data : {provinceid:currentAreaInfo.currentProvinceId,cityid:currentAreaInfo.currentCityId,areaid:currentAreaInfo.currentAreaId,townid:currentAreaInfo.currentTownId},
				async: false,
				success: function(msg){
					if($("#isreach").val()){
						submitArea();
					}else if($("#score")[0]){
						changeOpen();
					}else{
						cartList();	
					}
				}
			});
			if (currentPageLoad.isLoad)currentPageLoad.isLoad=false;
			
	}
	//获取配送库存信息或下一级地址
	function GetStockInfoOrNextAreas(provinceId,cityId,areaId,townId,curLevel){
			try{
				curLevel = new Number(curLevel);
				if (curLevel == requestLevel){
					currentAreaInfo.currentLevel = curLevel; //
					currentAreaInfo.currentRequestLevel = curLevel;  //	
					SfStockTabs.removeClass("curr").eq(curLevel-1).addClass("curr");
					SfStockTabs.find("a").removeClass("hover").eq(curLevel-1).addClass("hover");
					reBindStockEvent();
					for (var i=currentAreaInfo.currentRequestLevel,j=SfStockTabs.length;i<j;i++){
						SfStockTabs.eq(i).hide();
						SfStockContents.eq(i).hide();
					}
					getProvinceStockCallback();		
				}
				else if (curLevel < requestLevel){ //还需要获取下级地址
					currentAreaInfo.currentLevel = curLevel +1;
					SfStockTabs.removeClass("curr").eq(curLevel).addClass("curr");
					SfStockTabs.find("a").removeClass("hover").eq(curLevel).addClass("hover");
					getChildAreaHtml(arguments[curLevel-1],curLevel +1);
				}
			}catch(err){
			}
	}
	/**
	新地址列表数据及时间绑定
	municipality 是否为直辖市
	**/
	function getAreaList(result,idName,level,municipality){
		if (idName && level){
			$("#"+idName).html("");
			var html = "<ul class='area-list'>";
			var longhtml = "";
			var longerhtml = "";
			var cityID = 0;
			if (result){
				$.each(result,function(i,n){
					cityID = i;
					n.region_name = n.region_name.replace(" ","");
					if(n.region_name.length > 12){
							longerhtml += "<li class='longer-area'><a onclick='clickMore($(this));' href='javascript:void(0);' is_last='"+n.is_last+"' data-value='"+i+"'>"+n.region_name+"</a></li>";
					}else if(n.region_name.length > 5){
							longhtml += "<li class='long-area'><a onclick='clickMore($(this));' href='javascript:void(0);' is_last='"+n.is_last+"' data-value='"+i+"'>"+n.region_name+"</a></li>";
						}
						else{
							html += "<li><a href='javascript:void(0);' onclick='clickMore($(this));' is_last='"+n.is_last+"' data-value='"+i+"'>"+n.region_name+"</a></li>";
						}
				})
			}else{
				html += "<li><a href='javascript:void(0);' is_last='1' data-value='"+currentAreaInfo.currentFid+"'> </a></li>";
			}
			html +=longhtml+longerhtml+"</ul>";
			$("#"+idName).html(html);
			//页面初次加载 或 为直辖市
			if (currentPageLoad.isLoad || ($('#stock_city_item').attr("municipality")>0 && level==2)){
				var tempDom = $("#"+idName+" a[data-value='"+currentPageLoad.areaCookie[level-1]+"']");
				if(currentPageLoad.areaCookie&&currentPageLoad.areaCookie[level-1]&&currentPageLoad.areaCookie[level-1]>0&&tempDom.length>0){
					//本地cookie有该级地区ID
					tempDom.click();
				}else{
					$("#"+idName+" a:first").click();
				}
			}
			if($('#stock_city_item').attr("municipality")>0){
				SfStockTabs.eq(1).hide();
			}
		}
	}
	
	
	function clickMore(obj){
				resetBindMouseEvent();
				var areaId = obj.attr("data-value");
				var is_last = obj.attr("is_last");
				var areaName = obj.html();
				var level = obj.parent().parent().parent().attr("data-area");
				SfStockTabs.eq(level).find("a").attr("title",areaName).find("em").html(areaName.length>6?areaName.substring(0,6):areaName);
				level = new Number(level)+1;
				if (level=="2"){
					currentAreaInfo.currentCityId = areaId;
					currentAreaInfo.currentCityName = areaName;
					currentAreaInfo.currentAreaId = 0;
					currentAreaInfo.currentAreaName = "";
					currentAreaInfo.currentTownId = 0;
					currentAreaInfo.currentTownName = "";
				}
				else if (level=="3"){
					currentAreaInfo.currentAreaId = areaId;
					currentAreaInfo.currentAreaName = areaName;
					currentAreaInfo.currentTownId = 0;
					currentAreaInfo.currentTownName = "";
				}
				else if (level=="4"){
					currentAreaInfo.currentTownId = areaId;
					currentAreaInfo.currentTownName = areaName;
				}
				initrequestLevel();
				if(is_last>0){
					requestLevel = level;
				}
				GetStockInfoOrNextAreas(currentAreaInfo.currentProvinceId,currentAreaInfo.currentCityId,currentAreaInfo.currentAreaId,currentAreaInfo.currentTownId,level);
	}
	
	function getIdNameByLevel(level){
		var idName = "";
		if (level == 1){
			idName = "stock_province_item";
		}
		else if (level == 2){
			idName = "stock_city_item";
		}
		else if (level == 3){
			idName = "stock_area_item";
		}
		else if (level == 4){
			idName = "stock_town_item";
		}
		return idName;
	}
	//需要的地址层级
	var requestLevel = 1;
	function initrequestLevel(){
		requestLevel = 4;
	}
	//当前地域信息
	var currentAreaInfo;
	//初始化当前地域信息
	function CurrentAreaInfoInit(){
		currentAreaInfo =  {"currentLevel": 1,"currentProvinceId": getCookie('provinceid')?getCookie('provinceid'):2,"currentProvinceName":"北京","currentCityId": 0,"currentCityName":"","currentAreaId": 0,"currentAreaName":"","currentTownId":0,"currentTownName":""};
	}
	/**
	下级地址回调方法
	**/
	function getAreaList_callback(result){
		var level = currentAreaInfo.currentLevel;
		getAreaList(result,getIdNameByLevel(level),level);
	}
	/**
	根据父地址及地址等级获取下级地址列表
	**/
	function getChildAreaHtml(fid,level){
		var idName = getIdNameByLevel(level);
		if (idName){
			$("#stock_province_item,#stock_city_item,#stock_area_item,#stock_town_item").hide();
			$("#"+idName).show().html("<div class='iloading' style='height:340px;'>正在加载中，请稍候...</div>");
			SfStockTabs.show().removeClass("curr").eq(level-1).addClass("curr").find("em").html("请选择");
			if($('#stock_city_item').attr("municipality")>0 && level>2){
				SfStockTabs.eq(1).hide();
			}
			for (var i=level,j=SfStockTabs.length;i<j ;i++ ){
				SfStockTabs.eq(i).hide();
			}
			currentAreaInfo.currentLevel = level;
			getRegData(fid);
			
		}
	}
	
	function getRegData(rid){
		var is_sfv;
		if('undefined'==typeof(_SF_CFG)){
			is_sfv=0
		}else{
			is_sfv = (3==_SF_CFG.businessModel)?1:0;
		}
		var arrayObj = new Array();
		var test;
		$.post("/ajax/getRegionByID/",{r_id:rid,is_sfv:is_sfv}, function(data) {
			var level = currentAreaInfo.currentLevel;
			var data = eval('('+data+')');
			getAreaList(data.data,getIdNameByLevel(level),level,data.municipality);
		});
	}
	
	var currentPageLoad = {"isLoad":false,"areaCookie":[2,52,500,0]};
	
	
	var mouseEventChange = false;
	function resetBindMouseEvent(){
		if (!mouseEventChange&&!currentPageLoad.isLoad){
			mouseEventChange = true;
			$("#store-selector").unbind("mouseleave");
			$("#store-selector").unbind("mouseenter").bind("mouseenter",function(){
				$("#store-selector").addClass("hover");
			});
		}
	}
	function reBindStockEvent(){
		$("#store-selector").removeClass("hover");
	}
(function(){
	CurrentAreaInfoInit();
	initrequestLevel();
	if(navigator.userAgent.indexOf("Safari")>0) {
    	$("#store-selector").mouseover(function(){$(this).addClass("hover");}).mouseout(function(){$(this).removeClass("hover");});  
    }else{
		$("#store-selector").mouseenter(function(){$(this).addClass("hover");}).mouseleave(function(){$(this).removeClass("hover");}); 
	}
		SfStockTabs = $("#SF-stock .tab li");
		SfStockContents = $("#SF-stock div[data-widget='tab-content']");
		SfStockTabs.bind('click',function(){
			var level = $(this).attr("data-index");
			level = new Number(level);
			SfStockTabs.removeClass("curr").eq(level).addClass("curr");
			SfStockTabs.find("a").removeClass("hover").eq(level).addClass("hover");
			SfStockContents.hide().eq(level).show();
		});
		
	$("#stock_province_item a").unbind("click").click(function() {
			currentPageLoad.isLoad = false;
			resetBindMouseEvent();		
			try{
				CurrentAreaInfoInit();
				currentAreaInfo.currentProvinceId = $(this).attr("data-value");
				currentAreaInfo.currentProvinceName = $(this).html();
				$('#stock_city_item').attr("municipality",$(this).attr("is_my"));
				SfStockTabs.eq(0).find("em").html(currentAreaInfo.currentProvinceName);
				initrequestLevel();
				SfStockTabs.eq(1).show();
				GetStockInfoOrNextAreas(currentAreaInfo.currentProvinceId,0,0,0,1);
				
			}
			catch (err){
			}
		}).end();
	$("#store-selector .close").unbind("click").bind("click",function(){
			reBindStockEvent();
		});
    currentAreaInfo.currentProvinceName = pname?pname:'北京';
	currentAreaInfo.currentCityName = cname?cname:'北京市';
	currentAreaInfo.currentAreaName = aname?aname:'东城区';
	currentAreaInfo.currentProvinceId = provinceId?provinceId:1;
	currentAreaInfo.currentCityId = cityidId?cityidId:1;
	currentAreaInfo.currentAreaId = areaId?areaId:500;
	//GetStockInfoOrNextAreas(getCookie('provinceid')?getCookie('provinceid'):2,0,0,0,1);
})();