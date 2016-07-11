/* NAV ONSCROLL */
$('#nav').affix({
      offset: {
        top: $('.overlay').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});

 /* ensure the affix element maintains it width */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
   
function affixWidth() {
    var affix = $('#nav');
    var width = affix.width();
    affix.width(width);
}

$(document).ready(function () {

    affixWidth();

});
}

/* CHANGE NAV CLASS */

$(function() {
    var header = $(".nav-logo-lg");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeClass('nav-logo-lg').addClass("nav-logo-sm");
        } else {
            header.removeClass("nav-logo-sm").addClass('nav-logo-lg');
        }
    });
});

/* carousel */
$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

var $item = $('.carousel .item');
var $wHeight = $(window).height();

$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

/* HOMEPAGE VIDEO STOP PLAYING WHEN CLOSED*/
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#meetFatBrainVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#meet-fat-brain-play-button").on('hide.bs.modal', function(){
        $("#meetFatBrainVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#meet-fat-brain-play-button").on('show.bs.modal', function(){
        $("#meetFatBrainVideo").attr('src', url);
    });
});

/* More Video */

( function($) {
  
function iframeModalOpen(){

		// impostiamo gli attributi da aggiungere all'iframe es: data-src andrà ad impostare l'url dell'iframe
		$('.modalButton').on('click', function(e) {
			var src = $(this).attr('data-src');
			var width = $(this).attr('data-width') || 640; // larghezza dell'iframe se non impostato usa 640
			var height = $(this).attr('data-height') || 360; // altezza dell'iframe se non impostato usa 360

			var allowfullscreen = $(this).attr('data-video-fullscreen'); // impostiamo sul bottone l'attributo allowfullscreen se è un video per permettere di passare alla modalità tutto schermo
			
			// stampiamo i nostri dati nell'iframe
			$("#meetFatBrainVideo iframe").attr({
				'src': src,
				'height': height,
				'width': width,
				'allowfullscreen':''
			});
		});

		// se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
		$('#meetFatBrainVideo').on('hidden.bs.modal', function(){
			$(this).find('iframe').html("");
			$(this).find('iframe').attr("src", "");
		});
	}
  
  $(document).ready(function(){
		iframeModalOpen();
  });
  
  } ) ( jQuery );

/* JUMBO PARALLAX */
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

/* PRODUCT PAGE */
