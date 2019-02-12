//下拉列表
//left
$(".lc").mouseenter(function(){
	$(".inset").css("display","block");
}).mouseleave(function(){

})
$(".inset").mouseenter(function(){
	$(".inset").css("display","block");
}).mouseleave(function(){
	$(".inset").css("display","none");
})
$(".inset").find("a").mouseenter(function(){
	$(this).css("background-color","#E2A446").parent().siblings().find("a").css("background-color","white");
		$(this).css("background-color","#E2A446").siblings().find("a").css("background-color","white");
})
$(".inset").find("a").click(function(){
	if($(this).html()=="渝中区"||$(this).html()=="重庆"){
		$(".lc").html($(".lc").html());
	}else{
		$(".lc").html($(this).html());
	}
})

$(".left a").mouseenter(function(){
	$(this).css("color","orange");
}).mouseleave(function(){
	$(this).css("color","black");
})
$(".right a").mouseenter(function(){
	$(this).css("color","orange");
}).mouseleave(function(){
	$(this).css("color","black");
})

//right
$(".ec1").mouseenter(function(){
		   $(".order").show();
	})
	$(".order").mouseleave(function(){
		$(this).hide();
	})
	
$(".cl").mouseenter(function(){
		$(".collect").css("display","block");
	})
	$(".cl").mouseleave(function(){
		$(".collect").css("display","none");
	})
	$(".pho").mouseenter(function(){
		$(".img").css("display","block");
	})
	$(".pho").mouseleave(function(){
		$(".img").css("display","none");
	})
//活动
window.onscroll=function(){
	var sTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(sTop>10&&sTop<200){
		huodong.style.display="block";
	}else{
		huodong .style.display="none";
	}
}
//gotop.onclick = function(){
// 		document.documentElement.scrollTop = document.body.scrollTop = 0;
// 		
// 		gotop.style.display = "none";
// 	}


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
