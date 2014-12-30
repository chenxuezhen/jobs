function page2(speed,timeSpeed){


	var $key=0; 
	var $circle=0; 	
	$(".rightbut123").click(function(event) {
	
      autoplay();  

	});

$(".leftbut123").click(function(event) {
		$key--; 
		if($key<0) /* 如果处于第1张，就返回*/
		{
			$key=$(".ganbeng123 ul li").length-2; /*因为我们的第1张图片，实际是第5张，因此下次播放第4张，所以是3*/
			$(".ganbeng123 ul").css("left",-($(".ganbeng123 ul li").length-1)*$(".ganbeng123").width());
		}
		$(".ganbeng123 ul").stop().animate({"left":-$key*$(".ganbeng123").width()},speed);

	});
	
     var timer=setInterval(autoplay,timeSpeed);
	  function autoplay(){

	  	$key++; 
		if($key>($(".ganbeng123 ul").length-1)) 
		{
			$key=1; 
			$(".ganbeng123 ul").css("left",0);
		}
		$(".ganbeng123 ul").stop().animate({"left":-$key*$(".ganbeng123 ul").width()},speed);
		/*console.log($key);*/

		

	  }

	
	 $(".ganbeng123").hover(function() {
	 
	 	clearInterval(timer);
	 }, function() {
	 		
	 	clearInterval(timer);  
	 	timer=setInterval(autoplay,timeSpeed);
	 });

  
   }