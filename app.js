$(document).ready(function(){

	$("#clickVol").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#page3")).offset().left
        }, 11000);
	});

	$("#clickLs").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#page5")).offset().left
        }, 11000);
	});

	$("#clickTsu").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#page7")).offset().left
        }, 11000);
	});

	$("#clickEq").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#page9")).offset().left
        }, 11000);
	});

	$("#clickBegin").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#cover")).offset().left
        }, 4000);
	});










});