$(document).ready(function(){

	// progress bar

	$('#progressbar1').LineProgressbar({
	  percentage: 90,
	  fillBackgroundColor: '#ee9e00',
	  height: '10px',
	  radius: '15px'
	});

	$('#progressbar2').LineProgressbar({
	  percentage: 100,
	  fillBackgroundColor: '#4f50e9',
	  height: '10px',
	  radius: '15px'
	});

	$('#progressbar3').LineProgressbar({
	  percentage: 95,
	  fillBackgroundColor: '#ef3d01',
	  height: '10px',
	  radius: '15px'
	});

	// slick slider
	$('.center').slick({
	  centerMode: true,
	  centerPadding: '30px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: true,
	        centerMode: true,
	        centerPadding: '0',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        arrows: false,
	        dots: true,
	        centerMode: true,
	        centerPadding: '0',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	// accordion
    $( "#accordion" ).accordion({
      collapsible: true
    });

    // counter
	$('.counter').counterUp({
	    delay: 10,
	    time: 2000
	});
	// counter
});

new WOW().init();