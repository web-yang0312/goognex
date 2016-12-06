$(document).ready(function(){
//banner
	    var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(move,6000);
		function move(){
		next=n+1;
		if(next>=$(".banner-pic").length){
			next=0;
		}
	    $(".banner-pic").eq(n).removeClass("banner-pic-first")
	    $(".banner-pic").eq(next).addClass("banner-pic-first");
        n=next;
       }
		$(".banner-left").eq(0).click(function(){
			next=n+1;
			if(next>=$(".banner-pic").length){
				next=0;
			}
			 $(".banner-pic").eq(n).removeClass("banner-pic-first")
	         $(".banner-pic").eq(next).addClass("banner-pic-first");
	        n=next; 
		})
		$(".banner-right").eq(0).click(function(){
			next=n-1;
			if(next<=0){
				next=$(".banner-pic").length-1;
			}
			 $(".banner-pic").eq(n).removeClass("banner-pic-first")
	         $(".banner-pic").eq(next).addClass("banner-pic-first");
	        n=next; 
		})
		  $(".banner-pic").hover(function(){
			  	clearInterval(t);
			   $(".banner-left").eq(0).css("display","block")	
			   $(".banner-right").eq(0).css("display","block")	
			  },function(){
			  	t=setInterval(move,6000)			   
			  	$(".banner-left").eq(0).css("display","none")			   
			  	$(".banner-right").eq(0).css("display","none")
			  })
	   //xuanxiangka
	 $(".opt-lis").each(function(index){
	  	$(this).click(function(){
		$(".opt").css("display","none").eq(index).css("display","block");
	  	})
	  })
	  //top xuanxiangka
	  $(".select2").each(function(index){
		$(this).hover(
			function(){
				$(".select2").eq(index).css({"background":"#79BE0B","color": "#fff"})
				$(".select2").eq(index).find("a").css({"background":"#79BE0B","color": "#fff"})
				$(".select1").eq(index).css("display","block");
			},function(){
				$(".select1").eq(index).css("display","none");
				$(".select2").eq(index).find("a").css({"background":"","color": ""})
				$(".select2").eq(index).css({"background":"","color":""})
			})
	})
	  //top chuxian
	  $(window).on("scroll",function(){
        var top=$(window).scrollTop()
        if(top>=200){
            $(".da-nav").css("display","block")  
        } else{
            $(".da-nav").css("display","none")  
        }
     })
});
