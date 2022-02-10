$(document).ready(function(){


// counterup function ---start>
	$('h1').counterUp({
		delay: 20,
		time: 4000
	});
// counterup function -end-->

// cricle bar style -------------------------
	$('.our-circle').circleProgress({
		value: .5,
		size: 220,
		fill: '#000'
	});
	$('.our-circle2').circleProgress({
		value: .7,
		size: 220,
		fill: {
      gradient: ["blue", "yellow"]
    }
	});
	$('.our-circle3').circleProgress({
		value: .8,
		size: 220,
		fill: {
      gradient: ["red", "pink","yellow"]
    }
	});
// circle bar style end--------------------------
// magnific pop up -----------start
	$('a').magnificPopup({type:'image'});


// smoothScroll code start---------------------
	$('html').smoothScroll(2000);


});
