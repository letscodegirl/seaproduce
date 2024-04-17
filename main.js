
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]


});

// A $( document ).ready() block.
$(document).ready(function () {

  $(".hamburger-button").click(function () {

    $(this).toggleClass('active');
    $(".mobile-menu").fadeToggle();

  });

  // animate on scroll - activate
  AOS.init({
    duration: 500 // values from 0 to 3000, with step 50ms
  });

});


lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false

});

lightGallery(document.getElementById('lightgallery-2'), {
  speed: 500,
  download: false

});