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
	/* main动作特效 */
	$(".con3 p").find("img").mouseenter(function(){
		 if($(this).index()==1){
			 $(this).animate({marginTop:-5},100);
		 }
	}).mouseleave(function(){
		 if($(this).index()==1){
			 $(this).animate({marginTop:0},100);
		 }
	})
	$(".con1 p").find("img").mouseenter(function(){
		 if($(this).index()==1){
			 $(this).animate({marginTop:-10},200);
			 $(this).next().animate({marginTop:10},200);
		 }
	}).mouseleave(function(){
		 if($(this).index()==1){
			 $(this).animate({marginTop:0},200);
			 $(this).next().animate({marginTop:0},200);
		 }
	})
	$(".con3 p").find("span").mouseenter(function(){
		 $(this).css("opacity",0.6);
	}).mouseleave(function(){
		 $(this).css("opacity",1);
	})
	$(".con1 p").find("span").mouseenter(function(){
		 $(this).css("opacity",0.6);
	}).mouseleave(function(){
		 $(this).css("opacity",1);
	})

	$(".hd a:not(.ec)").mouseenter(function(){
		$(this).find("img").animate({marginTop:-7},300);
	}).mouseleave(function(){
		$(this).find("img").animate({marginTop:7},300);
	})
	$(".hd a").mouseenter(function(){
		$(this).css("color","red").siblings().css("color","");
	})
	$(".hd span").mouseenter(function(){
		$(this).css("background-color","skyblue").siblings().css("background-color","");
	})
	/* left content */
	$(".hd").find("span").last().mouseenter(function(){
		$(".menu").css("display","block");
	}).mouseleave(function(){
		$(".menu").css("display","none");
	})
	$(".menu").mouseenter(function(){
		$(".menu").css("display","block");
	}).mouseleave(function(){
		$(".menu").css("display","none");
	})
	$(".menu li").mouseenter(function(){
		$(this).css("background","white");
		$(this).css("border","1px solid red");
		$(this).css("border-right","none");
		$(this).prevAll().css("border-right","1px solid red");
		$(this).nextAll().css("border-right","1px solid red");
		$(".dt").css("display","block");
		$(".dt").css("border","1px solid red");
		$(".dt").css("border-left","none");
		$(".o1").css("z-index",-1);
	}).mouseleave(function(){
		$(this).css("background","");
		$(this).css("border","");
		$(".dt").css("display","none");
	})
	$(".dt").mouseenter(function(){
		$(".dt").css("display","block");
	}).mouseleave(function(){
		$(".dt").css("display","none");
	})

//轮播图
var timer=null;
var index=0;
var $ulist=$(".u1 li");
	$olist=$(".o1 li");
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
/* section content */
var $list=$(".con1");
$(".st").find("a").mouseenter(function(){
	$(this).css({"font-size":15,"color":"red","font-weight":"bold","border-bottom":"2px solid red"});
	$list.eq($(this).index()).css("display","block").siblings().not(".st").css("display","none");
}).mouseleave(function(){
	$(this).css({"font-size":13,"color":"","font-weight":100,"border-bottom":"none"});
})

/* section content */
var $list=$(".con1");
$(".st").find("a").mouseenter(function(){
	$(this).css({"font-size":15,"color":"red","font-weight":"bold","border-bottom":"2px solid red"});
	$list.eq($(this).index()).css("display","block").siblings().not(".st").css("display","none");
}).mouseleave(function(){
	$(this).css({"font-size":13,"color":"","font-weight":100,"border-bottom":"none"});
})
/* 猫咪主粮 */
/* 热门 */
$("._left>li").mouseenter(function(){
	$(this).css("color","blue").siblings().css("color","black");
})
$(".hot>li").mouseenter(function(){
	$(this).animate({"background-position-x":"-5px","background-position-y":"0px"},300);
}).mouseleave(function(){
	$(this).animate({"background-position-x":"0px","background-position-y":"0px"},300);
})
/* 进口猫粮 */
$(".import").find("img").mouseenter(function(){
  if($(this).index()==0){
		$(this).animate({marginTop:-2},500);
	}
}).mouseleave(function(){
	if($(this).index()==0){
		$(this).animate({marginTop:0},500);
	}
})
/* 选项卡标题 */
$(".tit>a").mouseenter(function(){
	// alert($(this).index());
	$(this).css("border","1px solid #e74085").siblings().css("border","none");
	$(this).css("border-top","5px solid #e74085").siblings().css("border-top","none");
	$(this).css("border-bottom","1px solid #fff").siblings().css("border","none");
	if($(this).index()==0){
		$(".import").css("display","none");
	 }else{
		$(".import").eq($(this).index()-1).css("display","block");
	 }
})
$(".bt li").mouseenter(function(){
	$(this).css("opacity",0.7).siblings().css("opacity",1);
})
/* 右边固定菜单栏 */
$(".p1").mouseenter(function(){
	$(this).css("background-color","#fff");
	$(".login_menu").css("top",70);
	$(".login_menu").show();
}).mouseleave(function(){
	$(this).css("background-color","#a6a6a6");
})
$(".login_menu").mouseenter(function(){
	$(".p1").css("background-color","#fff");
	$(this).show();
})
$(".login_menu").mouseleave(function(){
	$(".p1").css("background-color","#a6a6a6");
	$(".login_menu").hide();
})
$(".p8").mouseenter(function(){
	$(this).css("color","#fff");
	$(".login_menu").css("top",120);
	$(".login_menu").show();
}).mouseleave(function(){
	$(this).css("color","");
	$(".login_menu").hide();
})
$(".p7").mouseenter(function(){
	$(this).css("color","#fff");
}).mouseleave(function(){
	$(this).css("color","#a6a6a6");
})
$(".p10").mouseenter(function(){
	$(".login_menu").css("top",400);
	$(".login_menu").show();
})

$(".login_menu").mouseenter(function(){
	$(this).show();
}).mouseleave(function(){
	$(this).hide();
})

$(".p9").mouseenter(function(){
	$(".collect").fadeIn(500);
}).mouseleave(function(){
	// $(".collect").fadeOut(500);
})


$(".collect").mouseenter(function(){
	$(this).show();
}).mouseleave(function(){
	$(this).hide();
})



$(".p6").mouseenter(function(){
	$(".pho").show();
}).mouseleave(function(){
	$(".pho").hide();
})

$(".p11").mouseenter(function(){
	$(".wechat").show();
}).mouseleave(function(){
	$(".wechat").hide();
})
$(".p12").mouseenter(function(){
	$(".blog").show();
})
$(".blog").mouseenter(function(){
	$(this).show();
}).mouseleave(function(){
	$(this).hide();
})



$(".p13").mouseenter(function(){
	$(".stop").show();
})
$(".stop").click(function(){
		$("html,body").animate({"scrollTop":0},500);
	}).mouseleave(function(){
		$(".stop").hide();
	})

$("footer a").mouseenter(function(){
	$(this).css("color","red");
}).mouseleave(function(){
	$(this).css("color","#666666");
})
$(".ft img").mouseenter(function(){
	$(this).animate({"margin-top":-10},250);
}).mouseleave(function(){
	$(this).animate({"margin-top":0},250);
})