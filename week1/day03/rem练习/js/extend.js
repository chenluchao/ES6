$.fn.extend({
	menu:function(selector){
		selector = selector || "active";
		this.each(function(index,ele){
			$(ele).children().eq(0).find("ul>li").mouseenter(function(){
				$(this).addClass(selector).siblings().removeClass(selector);
				$(ele).children().eq(1).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector);
            });
            $(".tab").mouseleave(function(){
                $(ele).children().eq(1).children().removeClass(selector);
            })
		});
	},
	tab:function(selector){
		selector = selector || "active";
		this.each(function(index,ele){
			$(ele).children().eq(0).children().eq(1).children().mouseenter(function(){
				$(this).addClass(selector).siblings().removeClass(selector);
				$(ele).children().eq(1).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector);
			});
		});
	},
	tab1:function(selector){
		selector = selector || "active";
		this.each(function(index,ele){
			$(ele).children().eq(0).children().find("li").click(function(){
				$(this).find("a").addClass(selector).parent().siblings().find("a").removeClass(selector);
				$(ele).children().eq(1).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector);
			});
		});
	},
	tab2:function(selector){
		selector = selector || "active";
		this.each(function(index,ele){
			$(ele).children().eq(0).children().mouseenter(function(){
				$(this).addClass(selector).siblings().removeClass(selector);
				$(ele).children().eq(1).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector);
			});
		});
	},
});