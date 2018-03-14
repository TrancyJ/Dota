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
function getFocus(txt,hint){
	txt.className="login_input getFocus";
	var span=txt.parentNode.querySelector(hint);
	span.style.display="none";	
}
function getFocus1(txt){
	getFocus(txt,".getValue1");
}
function getFocus2(txt){
	getFocus(txt,".getValue2");
}
function valiName(txt){
	var div=txt.parentNode.querySelector(".valiName");
	var span=txt.parentNode.querySelector(".getValue1");
	if(/^\s*$/.test(txt.value)){
		txt.className="login_input";
		div.style.display="none";
		span.style.display="block";
	}else{
		if(/^\w{1,10}$/.test(txt.value)){
			txt.className="login_input";
			div.style.display="none";
			txt.style.color="#000";
			txt.style.backgroundColor="#FAFFBD";
			return true;
		}else{
			div.style.display="block";
			txt.style.backgroundColor="#fff";
			return false;
		}
	}
}
function valiPwd(txt){
	var div=txt.parentNode.querySelector(".valiPwd");
	var span=txt.parentNode.querySelector(".getValue2");
	if(/^\s*$/.test(txt.value)){
		txt.className="login_input";
		div.style.display="none";
		span.style.display="block";
	}else{
		if(/^\d{6}$/.test(txt.value)){
			txt.className="login_input";
			div.style.display="none";
			txt.style.color="#000";
			txt.style.backgroundColor="#FAFFBD";
			return true;
		}else{
			div.style.display="block";
			return false;
		}
	}
}
//function valiAll(form,e){
//	var form=document.forms["msgBox"];
//	if(valiName(form.userName)==false){
//		form.userName.focus();
//		e.preventDefault();//阻止提交
//	}else if(valiPwd(form.pwd)==false){
//		form.pwd.focus();
//		e.preventDefault();//阻止提交
//	}
//}


//注册界面输入框功能
function getFocus_zc(txt,hint){
	txt.className="login_ipt getFocus1";
	var span=txt.parentNode.querySelector(hint);
	span.style.display="none";	
}
function getFocus3(txt){
	getFocus_zc(txt,".getValue3")
}
function getFocus4(txt){
	getFocus_zc(txt,".getValue4");
}
function getFocus5(txt){
	getFocus_zc(txt,".getValue5");
}
function valiName1(txt){
//	var div=txt.parentNode.parentNode.querySelector(".valiName");
	var span=txt.parentNode.querySelector(".getValue3");
	if(/^\s*$/.test(txt.value)){
		txt.className="login_ipt";
//		div.style.display="none";
		span.style.display="block";
	}else{
		if(/^\w{1,10}$/.test(txt.value)){
			txt.className="login_ipt";
//			div.style.display="none";
			txt.style.color="#000";
			txt.style.backgroundColor="#FAFFBD";
			return true;
		}else{
//			div.style.display="block";
			return false;
		}
	}	
}
function valiPwd1(txt){
//	var div=txt.parentNode.querySelector(".valiPwd");
	var span=txt.parentNode.querySelector(".getValue4");
	if(/^\s*$/.test(txt.value)){
		txt.className="login_ipt";
//		div.style.display="none";
		span.style.display="block";
	}else{
		if(/^\d{6}$/.test(txt.value)){
			txt.className="login_ipt";
//			div.style.display="none";
			txt.style.color="#000";
			txt.style.backgroundColor="#FAFFBD";
			return true;
		}else{
//			div.style.display="block";
			return false;
		}
	}
}
function valiPwd2(txt){
//	var div=txt.parentNode.querySelector(".valiPwd");
	var span=txt.parentNode.querySelector(".getValue5");
	if(/^\s*$/.test(txt.value)){
		txt.className="login_ipt";
//		div.style.display="none";
		span.style.display="block";
	}else{
		if(/^\d{6}$/.test(txt.value)){
			txt.className="login_ipt";
//			div.style.display="none";
			txt.style.color="#000";
			txt.style.backgroundColor="#FAFFBD";
			return true;
		}else{
//			div.style.display="block";
			return false;
		}
	}
}
//登录注册界面关闭功能
document.querySelector("#checkin div.checkin_box ul li:last-child a").onclick=function(e){
	e=e||document.event;
	e.preventDefault();	
	document.querySelector("#checkin").style.display="none";
}