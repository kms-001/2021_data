
// 메인 슬라이드
$(document).ready(function(){
    $(".slider").bxSlider({
      pager:false,
    });
});

// owl슬라이드
jQuery(document).ready(function($) {
  $('.loop').owlCarousel({
    center: true,
    items: 4,
    loop: true,
    margin: 10,
    responsive: {
      600: {
        items: 4
      }
    }
  });
  $('.nonloop').owlCarousel({
    center: true,
    items: 4,
    loop: false,
    margin: 10,
    responsive: {
      600: {
        items: 4
      }
    }
  });
});

// 스크롤
$(function(){
   $(window).scroll(function(){
   var navbar = $(this).scrollTop();
   console.log(navbar);
   var $header = $('.navWrap');
   if(navbar > 700){
       $header.addClass('activated');
   }else{
       $header.removeClass('activated');
   }
 })
})
