$(function() {
			var nowpage = 0;
			$(document).mousewheel(function(event,delta){
				nowpage = nowpage - delta;	

				if(nowpage > 3){
					nowpage = 3;
				}
				if(nowpage < 0){
					nowpage = 0;
				}

				$(".container").stop().animate(
					{
						"top":-100 * nowpage + "%"
					},1000
				);

				$(".small ul li").eq(nowpage).addClass("cur").siblings().removeClass("cur");
				$(".page").eq(nowpage).addClass('current').siblings().removeClass('current');
			});

			$(".small ul li").click(
				function(){
					nowpage = $(this).index();
					$(".container").stop().animate(
						{
							"top":-100 * nowpage + "%"
						},1000
					);

					$(".small ul li").eq(nowpage).addClass("cur").siblings().removeClass("cur");
					$(".page").eq(nowpage).addClass('current').siblings().removeClass('current');
				}
			);

     $(".nav ul li").click(
				function(){
					nowpage = $(this).index();
					$(".container").stop().animate(
						{
							"top":-100 * nowpage + "%"
						},1000
					);

					$(".nav ul li").eq(nowpage).addClass("cur").siblings().removeClass("cur");
					$(".page").eq(nowpage).addClass('current').siblings().removeClass('current');
				}
			);






			var speed=10;
		var box=document.getElementById("box");   /*获取box大盒子*/
		/*alert(box.offsetWidth);*/
		var left=document.getElementById("left");   /*获取左侧盒子，然后给右盒子*/
		/*alert(left.offsetWidth);*/
		var right=document.getElementById("right");
		 right.innerHTML=left.innerHTML; /*把左侧盒子里面的内容给右侧盒子*/
		var timer=setInterval(fun,speed);/* 开启定时器*/
		 function fun(){
		 /*	box.scrollLeft++;
		 	document.getElementById("demo").innerHTML=box.scrollLeft++;*/
		 	if(left.offsetWidth-box.scrollLeft<=0)/*当scrollleft 的大小和 left 盒子的宽度一样大的时候，就说明left盒子走完了。*/
		 	{
				box.scrollLeft=0; /*就应该立马返回 */
		 	}
		 	else
		 	{
		 		box.scrollLeft++;  /*否则继续走*/
		 	}
		 }
		
		});
		/*       */
		
		
		