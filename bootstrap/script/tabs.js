function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	//鼠标点击切换
	var titles=$('mouse-click-tit').getElementsByTagName('li'),
			divs=$('mouse-click-con').getElementsByTagName('div');
	if (titles.length!=divs.length) 
		return;
	for (var i = 0; i < titles.length; i++) {
		titles[i].id=i;
		titles[i].onclick=function(){
			for (var j = 0; j < titles.length; j++) {
				titles[j].className='';
				divs[j].style.display='none';
			};
			this.className='selected';
			divs[this.id].style.display='block';
		}
	}
	//鼠标滑过切换
	var ts=$('mouse-over-tit').getElementsByTagName('li'),
			ds=$('mouse-over-con').getElementsByTagName('div');
	if (ts.length != ds.length) return;
	for(var i=0; i < ts.length; i++){
		ts[i].id=i;
		ts[i].onmouseover=function(){
			for(var j=0;j<ts.length;j++){
				ts[j].className='';
				ds[j].style.display='none';
			}
			this.className='selected';
			ds[this.id].style.display='block';
		}
	}
	//鼠标滑过延迟切换
	var ts2=$('mouse-delay-tit').getElementsByTagName('li'),
			ds2=$('mouse-delay-con').getElementsByTagName('div');
	var timer=null;
	if (ts2.length != ds2.length) return;

	for(var i=0; i < ts2.length; i++){
		ts2[i].id=i;
		ts2[i].onmouseover=function(){
			var that=this;
			if (timer) {
				clearTimeout(timer);
				timer=null;
			};
			timer=setTimeout(function(){
				for (var j = 0; j < ts2.length; j++) {
					ts2[j].className='';
					ds2[j].style.display='none';
				};
				ts2[that.id].className='selected';
				ds2[that.id].style.display='block';
			},500);
		}
}

	//练习
	var menu_p=$('menu').getElementsByTagName('p')
			menu_ul=$('menu').getElementsByTagName('ul');
	if (menu_p.length != menu_ul.length) return;
	for (var i = 0; i < menu_p.length; i++) {
		menu_ul[i].id=i;
		menu_p[i].id=i;
		menu_p[i].onclick=function(){
			if (menu_ul[this.id].style.display=='block') {
				menu_ul[this.id].style.display='none';
			}else{
				menu_ul[this.id].style.display='block';
			};
		}
	}
	//自动切换
	var auto_p=$('auto-tit').getElementsByTagName('li'),
			auto_ul=$('auto-con').getElementsByTagName('div');
	var autoTimer=null, index=0;
	//判断页签和展示的个数
	if (auto_p.length != auto_ul.length) return;
	if (timer) {
		clearInterval(timer);
		timer=null;
	}
	//定时任务 2秒钟执行一次
	timer=setInterval(function() {
		index++;
		if (index >= auto_p.length) 
			index=0;
		changeOptionById(index);
	},2000);
	//鼠标移入的操作
	for (var i = 0; i < auto_p.length; i++) {
		auto_p[i].id=i;
		auto_p[i].onmouseover=function(){
			if (timer) {
				clearInterval(timer);
				timer=null;
			};
			changeOptionById(this.id);
		}
		//鼠标移除的操作
		auto_p[i].onmouseout=function(){
			timer=setInterval(function() {
				index++;
				if (index >= auto_p.length) 
					index=0;
				changeOptionById(index);
			},2000);
		}
	}

	function changeOptionById (curId) {
		for (var i = 0; i < auto_p.length; i++) {
			auto_p[i].className='';
			auto_ul[i].style.display='none';
		}
		auto_p[curId].className='selected';
		auto_ul[curId].style.display='block';
	}

	var map_ul=$('focus-map-index').getElementsByTagName('li'),
		map_div=$('focus-map-con').getElementsByTagName('div');
	if (map_div.length!=map_ul.length) return;

	for (var i = 0; i < map_ul.length; i++) {
		map_ul[i].id=i;
		map_div[i].id=i;
		map_ul[i].onmouseover=function(){
			for (var j = 0; j < map_div.length; j++) {
				map_ul[j].className='';
				map_div[j].style.display='none';
			}
			map_ul[this.id].className='selected';
			map_div[this.id].style.display='block';
		}
	};
}
