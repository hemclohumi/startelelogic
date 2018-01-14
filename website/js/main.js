
// Dropdown Menu Fade    
$(document).ready(function(){

    $(".dropdown").hover(     

        function() {
            $('.dropdown-menu', this).not('.open .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.open .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});

// on document ready
$(document).ready(function() { 
$(".intro-bg h1, .intro-bg h3").addClass("load");

//overlay on home page

var Height=$(".item").height();
var Width=$(".item").width();
$(".item img").before( "<div class='overlay'></div>" );
// $(".client-images").before( "<div class='overlay'></div>" );

$(".overlay").height(Height);
$(".overlay").width(Width);


$("#sub-menu").click(function(){

  $(".sub-menus").css("width", "400");

  $('body').append( "<div class='overlay-full'></div>" );
  var Height = $(document).height();
  var Width = $(document).width();
  $(".overlay-full").height(Height);
  $(".overlay-full").width(Width);
});

$(".closebtn").click(function(){
   $(".sub-menus").css("width", "0");
  $('.overlay-full').remove();
  
});



$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  // $(this a).css('color','#1e9afa');
    
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  // $(this).css('backgroundcolor','transparent');

});

    
});

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.intro-bg-container, .intro-bg-container-innerpages');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top){
          $(".navbar-inverse").addClass('navbar-inverse-active');
     
       } else {
          $(".navbar-inverse").removeClass('navbar-inverse-active');
       }
   });
    }
});

//templates for HTML snippets

$(document).ready(function(){       
$('.abs-btn').click( function(){
    $('.quick-form').removeClass('hide');  
});
$('.dismiss-popup').click(function(){
 $('.quick-form').addClass('hide');   
});    
});
