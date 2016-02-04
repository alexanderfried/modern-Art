$(document).ready(function() {

'use strict'

//menu toggle		
	$(".glyphicon-menu-down").click(function(){

		$("header ul li").slideToggle(300);
		$("header a span.glyphicon").toggleClass('glyphicon-menu-up');

	});
		
		
//smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000, 'swing');
        return false;
      }
    }
  });
});

	
var stickySidebar = $('article.slideshow').offset().top;

	
$(window).scroll(function() {  
    if ($(window).scrollTop() > stickySidebar+560) {
        $('header').addClass('shrink');
        $('#logo').attr('src', 'images/modern-art-new-logo-SM.png');
    }
    else {
        $('header').removeClass('shrink');
        $('#logo').attr('src', 'images/modern-art-new-logo.svg');
    }
	
	if ($(window).scrollTop() > stickySidebar+600) {
        $('#subNav').addClass('affix');
    }
    else {
        $('#subNav').removeClass('affix');
    }
	
});	


	
	
/*$(function(){
 var shrinkHeader = 1000;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('header').addClass('shrink');	  
           $('#logo').attr('src', 'images/modern-art-new-logo-SM.png');
			$('#slideToTop').fadeIn();
        }
        else {
            $('header').removeClass('shrink');
            $('#logo').attr('src', 'images/modern-art-new-logo.svg');
			$('#slideToTop').fadeOut();
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});*/
		
			
}); //document ready