$(document).ready(function() {

$(window).scroll(function() {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 280) {
    $('.main-nav').addClass('navbar-fixed');

  }
  if ($(window).scrollTop() < 281) {
    $('.navbar-fixed').removeClass('navbar-fixed');
  };
});


var path = window.location.href;
$('.main-nav a').each(function() {
  if (this.href === path) {
    $(this).addClass('active1');
  };
});


$('.slideshow').cycle({
  fx: 'fade'
});



$('#swapImage').click(function() {
  if ($('#swapImage').attr('src') == 'teacher3Norm.jpg') {
    $('#swapImage').attr('src', 'teacher3.jpg');
  } else {
    $('#swapImage').attr('src', 'teacher3Norm.jpg');
  }
});


});