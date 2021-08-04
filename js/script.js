$(document).ready(function(){
    $(".slider").bxSlider({
      pager:false,
    });
});

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