$(document).ready(function(){

	// COVER 

	$("#bannerSp").click(function(){
		$("#bannerSp").hide();
		$("#bannerEn").show();
	});

	$("#bannerEn").click(function(){
		$("#bannerEn").hide();
		$("#bannerSp").show();
	});


	// VOLCANES

	$("#volVideo").click(function(){
		$("#volcanoVideo").fadeToggle();
		$("#volcanoImage, #volcanoDiagram").hide();
	});
	$("#volPic").click(function(){
		$("#volcanoImage").fadeToggle();
		$("#volcanoVideo, #volcanoDiagram").hide();
	});
	$("#volDia").click(function(){
		$("#volcanoDiagram").fadeToggle();
		$("#volcanoVideo, #volcanoImage").hide();
	});

	$("#volSp").click(function(){
		$("#volSp").hide();
		$("#volEn").show();
	});

	$("#volEn").click(function(){
		$("#volEn").hide();
		$("#volSp").show();
	});

	// DERRUMBES

	$("#lsVideo").click(function(){
		$("#landslideVideo").fadeToggle();
		$("#landslideImage, #landslideDiagram").hide();
	});
	$("#lsPic").click(function(){
		$("#landslideImage").fadeToggle();
		$("#landslideVideo, #landslideDiagram").hide();
	});
	$("#lsDia").click(function(){
		$("#landslideDiagram").fadeToggle();
		$("#landslideVideo, #landslideImage").hide();
	});

	$("#lsSp").click(function(){
		$("#lsSp").hide();
		$("#lsEn").show();
	});

	$("#lsEn").click(function(){
		$("#lsEn").hide();
		$("#lsSp").show();
	});

	// TSUNAMIS

	$("#tsuVideo").click(function(){
		$("#tsunamiVideo").fadeToggle();
		$("#tsunamiImage, #tsunamiDiagram").hide();
	});
	$("#tsuPic").click(function(){
		$("#tsunamiImage").fadeToggle();
		$("#tsunamiVideo, #tsunamiDiagram").hide();
	});
	$("#tsuDia").click(function(){
		$("#tsunamiDiagram").fadeToggle();
		$("#tsunamiVideo, #tsunamiImage").hide();
	});

	$("#tsuSp").click(function(){
		$("#tsuSp").hide();
		$("#tsuEn").show();
	});

	$("#tsuEn").click(function(){
		$("#tsuEn").hide();
		$("#tsuSp").show();
	});

	// TERREMOTOS

	$("#eqVideo").click(function(){
		$("#earthquakeVideo").fadeToggle();
		$("#earthquakeImage, #aerthquakeDiagram").hide();
	});
	$("#eqPic").click(function(){
		$("#earthquakeImage").fadeToggle();
		$("#earthquakeVideo, #earthquakeDiagram").hide();
	});
	$("#eqDia").click(function(){
		$("#earthquakeDiagram").fadeToggle();
		$("#earthquakeVideo, #earthquakeImage").hide();
	});

	$("#eqSp").click(function(){
		$("#eqSp").hide();
		$("#eqEn").show();
	});

	$("#eqEn").click(function(){
		$("#eqEn").hide();
		$("#eqSp").show();
	});



	// HORIZONTAL SCROLLING

	$("#clickVol").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#page3")).offset().left
        }, 9000);
	});

	$("#clickLs").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#page5")).offset().left
        }, 9000);
	});

	$("#clickTsu").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#page7")).offset().left
        }, 9000);
	});

	$("#clickEq").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#page9")).offset().left
        }, 9000);
	});

	$("#clickBegin").click(function(){
		 $('html, body').stop().animate({
            scrollLeft: $($("#cover")).offset().left
        }, 3000);
	});


});