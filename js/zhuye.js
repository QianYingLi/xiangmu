//下拉列表
$(".lc").mouseenter(function(){
	$(".inset").css("display","block");
})

//轮播图
var timer=null;
var index=0;
var $ulist=$(".ul li");
	$olist=$(".ol li");
	timer =setInterval(autoplay,1800);
	function autoplay(){
		index++;
		if(index==$ulist.length){
			index=0;
		}
		$olist.eq(index).css("background-color","white").siblings().css("background-color","");
		$ulist.eq(index).fadeIn(1500).siblings().fadeOut(1500);
	}
$(".hd").find("a").mouseenter(function(){
	$(this).find("img").animate({top:10},30);
})

$olist.mouseenter(function(){
	clearInterval(timer);
	index=$(this).index()-1;
	autoplay();
}).mouseleave(function(){
	timer=setInterval(sutoplay,2000);
})
$(".sw").mouseenter(function(){
	$(this).css("background","pink");
}).mouseleave(function(){
	$(this).css("background","");
})
$(".rightc").find("img").mouseenter(function(){
	$(this).animate({left:2},300);
}).mouseleave(function(){
	$(this).animate({left:13},300);
})
