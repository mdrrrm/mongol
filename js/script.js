
// gallery

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  nav: true,
  dots: true,
  items: 4,
  loop: true,
  margin: 15,
  });

// On-click action

$("#scroll-top").on('click', function(e){
  e.preventDefault();
  var currentPosition = $(document).scrollTop();
  var scrollTime = currentPosition / 3;
  $('body').animate({'scrollTop':0},scrollTime);
})


// Call function
  // $(window).load(function(e) {
  //   showScrollTopBtn();
  // })
  window.onload = showScrollTopBtn;

  $(document).on('scroll', function(e) {
  showScrollTopBtn();
})


// Function

function showScrollTopBtn() {
  if ($(document).scrollTop() > 500) {
    $('#scroll-top').fadeIn(150);
  }
  else {$('#scroll-top').fadeOut(150)};
}

});
