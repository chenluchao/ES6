//作用: 根据不同手机比例(宽度)设置不同的html的font-size

//理解: 直接定义函数, 直接调用函数
//传入2个参数: 
//	document 表示文档对象
//	window	窗口对象
(function(doc, win, undefined) {
	
	//同时定义了3个对象, 根元素, 事件名, 匿名函数
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
		recalc = function() {
			
			//核心代码
			//(1) 获取文档的宽度
			var clientWidth = docEl.clientWidth;
			//(2) 如果文档宽度获取失败, 直接返回
			if(clientWidth === undefined) return;
			//(3) 根据当前窗口的大小设置html元素的font-size的值
			//	iphone4,iphone4s,iphone5,iphone5s设备都是320点
			//			很多UI设计稿320px
			//	当前屏幕320, 1rem = 100px		320px = 3.2rem
			//	当前屏幕640, 1rem = 200px
			//	当前屏幕750, 1rem = 200px
			//
			//	整个屏幕多宽	
			//	750px = 1rem
			
			docEl.style.fontSize = 100 * (clientWidth / 372) + 'px';
			
			//docEl.style.fontSize = clientWidth  / 7.5 + 'px';
			
			console.log("1rem = "+docEl.style.fontSize);
		};
	if(doc.addEventListener === undefined) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);