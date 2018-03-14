//video模块右侧Tab部分切换
$("#video .dj_order>ul").on("click","[data-toggle='item']",function(e){
	e.preventDefault();
	if(!$(this).parent().hasClass("current")){
		$(this).parent().addClass("current").siblings('.current').removeClass("current");
		$($(this).attr("href")).addClass("tab_in").siblings(".tab_in").removeClass("tab_in");
	}
})

//利用下标i进行定位
//$("#video .dj_order>ul>li").click(function(){
//	$(this).toggleClass("current").siblings().removeClass("current");
//	var i=$("#video .dj_order>ul>li").index($(this));
//	$($("#video .dj_order_content>div").get(i)).toggleClass("tab_in").siblings().removeClass("tab_in");
//})

//news模块左侧Tab切换
$("#news .left_news .title").on("click","[data-toggle='item']",function(e){
	e.preventDefault();
	if(!$(this).parent().hasClass("current")){
		$(this).parent().addClass("current").siblings('.current').removeClass("current");
		$($(this).attr("href")).addClass("tab_in").siblings(".tab_in").removeClass("tab_in");
	}
})

//利用下标i进行定位
//$("#news .left_news .title>li").click(function(){
//	$(this).toggleClass("current").siblings().removeClass("current");
//	var i=$("#news .left_news .title>li").index($(this));
//	$($("#news .left_news>div").get(i)).toggleClass("tab_in").siblings().removeClass("tab_in");
//})

//news模块左侧百叶窗
$(".accordion").on("click","[data-toggle='title']",function(){
	$(this).siblings(".acc_in").removeClass("acc_in");
	$(this).next().addClass("acc_in");
})

//news模块轮播图

//大图根据小图进行移动切换
var imgs=[
{'i':0,'img':'images/mid_banner01.jpg'},
{'i':1,'img':'images/mid_banner02.jpg'},
{'i':2,'img':'images/mid_banner03.jpg'},
{'i':3,'img':'images/mid_banner04.jpg'},
{'i':4,'img':'images/mid_banner05.jpg'}
];
var imgs1=[
{'i':0,'img':'images/mid_banner01.jpg'},
{'i':1,'img':'images/mid_banner02.jpg'},
{'i':2,'img':'images/mid_banner03.jpg'},
{'i':3,'img':'images/mid_banner04.jpg'},
{'i':4,'img':'images/mid_banner05.jpg'}
];
var adv={
	$div:null,
	$ul:null,
	LIWIDTH:0,
	INTERVAL:1000,
	WAIT:3000,
	timer:null,
	$banner:null,
	init(){
		this.$div=$("#banImgs");
		this.$ul=$("#icon_list_ul");
		this.$banner=$(".sub_banner");
		this.LIWIDTH=parseFloat($("#news div.banner").css('width'));
		this.updateView();
		this.$ul.on('mouseover','img',(e)=>{
			var target=this.$ul.children().index(e.target.parentNode);
			var old=imgs[0].i;
			this.move(target-old);
		});
		this.autoMove();
		this.$banner.on("click",'u', (e)=> {
			if($(e.target).hasClass("u_show")){
				this.move(1);
			}else if($(e.target).hasClass("u_last_show")){
				this.move(-1);
			}
		})
	},
	autoMove(){
		this.timer=setTimeout(()=>this.move(1),this.WAIT);
	},
	movePrev(n){
		n*=-1;
		imgs=imgs.splice(-n,n).concat(imgs);//把后面的N个元素拼接到最前面
		this.updateView();
		this.$div.css('left',parseFloat(this.$div.css('left'))-n*this.LIWIDTH);
	},
	move(n){
		clearTimeout(this.timer);
		if(n<0){
			this.movePrev(n);
			this.$div.stop(true).animate({left:0},this.INTERVAL,this.autoMove());
		}else{
			this.$div.stop(true).animate({left:-n*this.LIWIDTH},this.INTERVAL,()=>this.moveCallback(n));
		}
	},
	moveCallback(n){
		imgs=imgs.concat(imgs.splice(0,n));//把前面的n张图拼接到后面
		this.updateView();
		this.$div.css('left',0);
		this.autoMove();
	},
	updateView(){//更新画面
		for(var i=0,lis='',lixs='';i<imgs.length;i++){
			lis+=`<p><img src="${imgs[i].img}"></p>`;
			lixs+=`<li><img src="${imgs1[i].img}"></li>`;
		}
		this.$div.html(lis).css('width',imgs.length*this.LIWIDTH);
		this.$ul.html(lixs).children(`li:eq(${imgs[0].i})`).addClass('hover');
	}
}
adv.init();

////小图实现左右移动
//var zoom={
//	$ul:null,
//	LICOUNT:0,
//	LIWIDTH:0,
//	moved:0,
//	OFFSET:0,
//	init(){
//		this.$ul=$("#icon_list_ul");
//		this.LIWIDTH=parseFloat(this.$ul.children(":first").css("width"));
//		this.OFFSET=parseFloat(this.$ul.children(":first").css('marginLeft'));
//		this.LICOUNT=this.$ul.children().size();
//		$("#news .sub_banner u:last").click({dir:1},this.move.bind(this));
//		$("#news .sub_banner u:first").click({dir:-1},this.move.bind(this));
//	},
//	move(e){
//		var $a=$(e.target);
//		if($a.attr("class").indexOf("show")!=-1){
//			this.moved+=e.data.dir*1;
//			this.$ul.css("marginLeft",-this.moved*(this.LIWIDTH+this.OFFSET));
//		}
//		this.checkA();
//	},
//	checkA(){
//		if(this.LICOUNT-this.moved==5){
//			$("#news .sub_banner u:last").attr("class","u_last");
//		}else if(this.moved==0){
//			$("#news .sub_banner u:first").attr("class","u");
//		}else{
//			$("#news .sub_banner u:last").attr("class","u_last_show");
//			$("#news .sub_banner u:first").attr("class","u_show");
//		}
//	}
//}
//zoom.init();









//登录注册界面Tab切换
function toggle3(i){
	var li=document.querySelector("#checkin ul").children[i];
	if(li.className!=="current"){
		document.querySelector("#checkin div.checkin_box ul li.current").className="";
		li.className="current";
	}
	var div=document.querySelector("#checkin .checkin_box .container").children[i];
	if(div.className!=="tab_show"){
		document.querySelector("#checkin .checkin_box .container .tab_show").className="tab_hidden";
		div.className="tab_show";
	}
}

//登录界面输入框功能
//function getFocus(txt,hint){
//	txt.className="login_input getFocus";
//	var span=txt.parentNode.querySelector(hint);
//	span.style.display="none";	
//}
$('#enter>div.loginBox>input:nth-child(2)').on('focus',function(){
	$(this).addClass('getFocus');
})
$('#enter>div.loginBox>input:nth-child(4)').on('focus',function(){
	$(this).addClass('getFocus');
})
$('#enter>div.loginBox>input:nth-child(2)').on('blur',function(){
	var $div=$(this).next();
	if(/^\s*$/.test($(this).val())){
		$(this).attr('class',"login_input");
		$div.css('display',"none");
		$(this).css('backgroundColor',"#fff");
	}else{
		if(/^\w{1,10}$/.test($(this).val())){
			$(this).attr('class',"login_input");
			$div.css("display","none");
			$(this).css('color',"#000");
			$(this).css('backgroundColor',"#FAFFBD");
			return true;
		}else{
			$div.css('display',"block");
			$(this).css('backgroundColor',"#fff");
			return false;
		}
	}
})
$('#enter>div.loginBox>input:nth-child(4)').on('blur',function(){
	var $div=$(this).next();
	if(/^\s*$/.test($(this).val())){
		$(this).attr('class',"login_input");
		$div.css('display',"none");
		$(this).css('backgroundColor',"#fff");
	}else{
		if(/^\d{6}$/.test($(this).val())){
			$(this).attr('class',"login_input");
			$div.css('display',"none");
			$(this).css('color',"#000");
			$(this).css('backgroundColor',"#FAFFBD");
			return true;
		}else{
			$div.css('display',"block");
			$(this).css('backgroundColor',"#fff");
			return false;
		}
	}
})
//注册界面输入框功能
//function getFocus_zc(txt,hint){
//	txt.className="login_ipt getFocus1";
//	var span=txt.parentNode.querySelector(hint);
//	span.style.display="none";	
//}
$('#register>div.regBox>input:nth-child(1)').on('focus',function(){
	$(this).addClass('getFocus1');
})
$('#register>div.regBox>input:nth-child(2)').on('focus',function(){
	$(this).addClass('getFocus1');
})
$('#register>div.regBox>input:nth-child(3)').on('focus',function(){
	$(this).addClass('getFocus1');
})
$('#register>div.regBox>input:nth-child(1)').on('blur',function(){
//	var $div=$(this).next();
	if(/^\s*$/.test($(this).val())){
		$(this).attr('class',"login_ipt");
//		$div.css('display',"none");
		$(this).css('backgroundColor',"#fff");
	}else{
		if(/^\w{1,10}$/.test($(this).val())){
			$(this).attr('class',"login_ipt");
//			$div.css("display","none");
			$(this).css('color',"#000");
			$(this).css('backgroundColor',"#FAFFBD");
			return true;
		}else{
//			$div.css('display',"block");
			$(this).css('backgroundColor',"#fff");
			return false;
		}
	}
})
$('#register>div.regBox>input:nth-child(2)').on('blur',function(){
//	var $div=$(this).next();
	if(/^\s*$/.test($(this).val())){
		$(this).attr('class',"login_ipt");
//		$div.css('display',"none");
		$(this).css('backgroundColor',"#fff");
	}else{
		if(/^\d{6}$/.test($(this).val())){
			$(this).attr('class',"login_ipt");
//			$div.css('display',"none");
			$(this).css('color',"#000");
			$(this).css('backgroundColor',"#FAFFBD");
			return true;
		}else{
//			$div.css('display',"block");
			$(this).css('backgroundColor',"#fff");
			return false;
		}
	}
})
//function valiPwd2(txt){
////	var div=txt.parentNode.querySelector(".valiPwd");
//	var span=txt.parentNode.querySelector(".getValue5");
//	if(/^\s*$/.test(txt.value)){
//		txt.className="login_ipt";
////		div.style.display="none";
//		span.style.display="block";
//	}else{
//		if(/^\d{6}$/.test(txt.value)){
//			txt.className="login_ipt";
////			div.style.display="none";
//			txt.style.color="#000";
//			txt.style.backgroundColor="#FAFFBD";
//			return true;
//		}else{
////			div.style.display="block";
//			return false;
//		}
//	}
//}
$('#register>div.regBox>input:nth-child(3)').on('blur',function(){
//	var $div=$(this).next();
	if(/^\s*$/.test($(this).val())){
		$(this).attr('class',"login_ipt");
//		$div.css('display',"none");
		$(this).css('backgroundColor',"#fff");
	}else{//在输入密码的验证基础上增加验证与输入密码的内容是否相同
		if(/^\d{6}$/.test($(this).val())&&($(this).val()===$('#register>div.regBox>input:nth-child(2)').val())){
			$(this).attr('class',"login_ipt");
//			$div.css('display',"none");
			$(this).css('color',"#000");
			$(this).css('backgroundColor',"#FAFFBD");
			return true;
		}else{
//			$div.css('display',"block");
			$(this).css('backgroundColor',"#fff");
			return false;
		}
	}
})

//打开登录界面
document.querySelector("#head_top ul.boardin li:first-child a").onclick=function(e){
	e=e||document.event;
	e.preventDefault();	
	document.querySelector("#checkin").style.display="block";
	document.body.style.overflowY='hidden';
}
//打开注册界面
document.querySelector("#head_top ul.boardin li:last-child a").onclick=function(e){
	e=e||document.event;
	e.preventDefault();
	document.querySelector("#checkin").style.display="block";
	document.querySelector("#checkin .checkin_box .container").children[0].className="tab_hidden";
	document.querySelector("#checkin .checkin_box .container").children[1].className="tab_show";
	document.querySelector("#checkin ul").children[0].className="";
	document.querySelector("#checkin ul").children[1].className="current";
}
//登录注册界面关闭功能
document.querySelector("#checkin div.checkin_box ul li:last-child a").onclick=function(e){
	e=e||document.event;
	e.preventDefault();	
	document.querySelector("#checkin").style.display="none";
	document.body.style.overflowY='scroll';
}
//注册界面协议名称点击
//document.querySelector("#register form .chb").onclick=function(e){
//	e=e||document.event;
//	e.preventDefault();	
//}

