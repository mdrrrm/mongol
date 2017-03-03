
// gallery

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  nav: true,
  dots: true,
  items: 4,
  loop: true,
  margin: 15,
  });
});

// $(#scrollTop).on('click', function(e){
//   e.preventDefault();
//   var = currentPosition = $(document).scrollTop();
//   var = scrollTime = currentPosition / 3;
//   $('body').animate({'scrollTop':0},scrollTime);
// })

//   $(window).on('scroll', function(e) {
//   showScrollTopBtn();
// })


// function showScrollTopBtn() {
//   if ((document).scrollTop() > 500 ) {
//     $('#scrollTop').fadeIn(150);
//   }
//   else {$('#scrollTop').fadeOut(150)};
// }
