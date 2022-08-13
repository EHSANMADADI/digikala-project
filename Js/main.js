$(function () {
  $(".slider-item").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 300,
    loop: true,
    autoplayHoverPause: true,
    dots: true,
    ///klid hal moshkel slider ghat charkhesh bood ke ba dastor zir hal shod
    rtl: true,
  });
});

$(function () {
  $("#SLID").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 1000,
    rtl: true,
    loop: true,
    autoplayHoverPause: true,
      // nav: true,
    // dots:true,
    //animateOut: 'slideOutDown',
    // animateOut: 'fadeOut'

      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
  });
});


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
