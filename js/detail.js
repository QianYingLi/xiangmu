$(".mtop").mouseenter(function(){
	$(this).find("span").eq(0).mouseenter(function(){
        $(".mc1").show();
	})
	$(this).find("span").eq(1).mouseenter(function(){
		$(".mc2").show();
	})
	$(this).find("span").eq(2).mouseenter(function(){
		$(".mc3").show();
	})
	$(".mc").mouseleave(function(){
		$(this).hide();
	})
}).mouseleave(function(){
	$(".mc").hide();
})

$(".mc li").mouseenter(function(){
	$(this).css("background","#ddd");
	$(this).find("a").css("text-decoration","none");
}).mouseleave(function(){
	$(this).css("background","#fff");
})
$(".hd span").mouseenter(function(){
	$(".leftc").show();
})
$(".leftc").mouseleave(function(){
	$(".leftc").hide();
})
/* 面向对象放大镜效果 */
/* mask遮罩的拖拽
 属性：操作的元素  mask
 功能：mask的拖拽*/
 $(".spic").mouseenter(function(){
	 $(".mask").show();
	 $(".bpic").show();
 }).mouseleave(function(){
	 $(".mask").hide();
	 $(".bpic").hide();
 })
 
 $(".spic").mouseenter(function(e){
	 var e=e||event;
	 new Drag().init(e);
 })
 
 
 
 
 function Drag(){
	 this.mask=document.getElementsByClassName("mask")[0];//遮罩
	 this.lefts=document.getElementsByClassName("lefts")[0];//小图框
	 this.bigImg=document.getElementsByClassName("bigImg")[0];//大图
	 this.bpic=document.getElementsByClassName(" bpic")[0];//大图框
	 this.init=function(e){
		document.onmousemove=function(e){
			var e=e||event;
			var disx=e.pageX-this.mask.offsetWidth/2-this.lefts.offsetLeft-100;
			var disy=e.pageY-this.mask.offsetHeight/2-this.lefts.offsetTop-350;
			var maxL=this.lefts.offsetWidth-this.mask.offsetWidth-150;
			var maxT=this.lefts.offsetHeight-this.mask.offsetHeight-100;
			var x=Math.min(maxL,Math.max(0,disx));
			var y=Math.min(maxT,Math.max(-20,disy));
			this.mask.style.top=y+"px";
			this.mask.style.left=x+"px";
			var y1=y*(this.bigImg.offsetHeight-this.bpic.offsetHeight)/(this.bpic.offsetHeight-this.mask.offsetHeight);
			var x1=x*(this.bigImg.offsetWidth-this.bpic.offsetWidth)/(this.bpic.offsetWidth-this.mask.offsetWidth);
			this.bigImg.style.left=-x1+"px"; // 大图移动的方向和mask 移动的方向相反
			this.bigImg.style.top=-y1+"px";	
		}.bind(this) 
	 }
 }
 
 /*详情页选项卡*/
$(".gt a").click(function(){
	var index=$(this).index();
	$(this).css({"background":"#fff","border-top":"2px solid #e74085"}).siblings().css({"background":"#f5f5f5","border-top":"1px solid #ccc"});
	$(".rightr").children().eq(index-1).show().siblings().hide();
	$("html,body").animate({"scrollTop":865},500);
	//设置底部的位置
	$(".footer").css({"position":"absolute","top":$(".rightr").offset().top+$(".rightr").children().eq(index-1).height()+100,"left":-25})
	console.log($(".footer").offset().top);
})

/* 左边图片显示效果 */
$(".leftg>img").mouseenter(function(){
	$(".gtimg").show();
}).mouseleave(function(){
	$(".gtimg").hide();
})

$(".gt>p").mouseenter(function(){
	$(this).css("background-color","#f5f5f5");
	$(this).next().show();
}).mouseleave(function(){
	$(this).css("background-color","#fff");
	$(this).next().hide();
})
/* 吸顶 */
$(window).scroll(function(){
	var sTop = $(document).scrollTop();
	if(sTop>890){
		$(".gt").css("position","fixed");
		$(".gt").css({"top":0,"left":"250px","background-color":"#f5f5f5"});
		$(".leftg>img").css("position","fixed");
		$(".leftg>img").css({"top":0});
	}
	else{
		$(".gt").css("position","static");
		$(".gt").css({"background-color":"#fff"});
		$(".leftg>img").css("position","static");
	}
})

