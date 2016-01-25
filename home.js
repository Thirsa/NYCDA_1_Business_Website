// The first function below makes the navigation bar slide up and down when scrolling. //
// Make sure you also copy the css for navbar-fixed! //

$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.main-nav').addClass('navbar-fixed');

    }
    if ($(window).scrollTop() < 281) {
      $('.navbar-fixed').removeClass('navbar-fixed');
    };
  });

// This function (below) adds the 'active1' class to the navigationbar-link //
// Make sure you also copy in the css for 'active1' //


var path = window.location.href; 
$('.main-nav a').each(function() {
    if (this.href === path) {
        $(this).addClass('active1');
    };
});

// This function below I copied from Inessa which work really good YAY! //

    $('.slideshow').cycle({
    fx: 'fade'
    });

$('#swapImage1').click(function () {
     if ($('#swapImage1').attr('src')=='img/teacher1Norm.jpg'){
       $('#swapImage1').attr('src','img/teacher1.jpg');
     }
     else {
       $('#swapImage1').attr('src','img/teacher1Norm.jpg');
     }
   });

   $('#swapImage2').click(function () {
     if ($('#swapImage2').attr('src')=='img/teacher2Norm.jpg'){
       $('#swapImage2').attr('src','img/teacher2.jpg');
     }
     else {
       $('#swapImage2').attr('src','img/teacher2Norm.jpg');
     }
   });

   $('#swapImage3').click(function () {
     if ($('#swapImage3').attr('src')=='img/teacher3Norm.jpg'){
       $('#swapImage3').attr('src','img/teacher3.jpg');
     }
     else {
       $('#swapImage3').attr('src','img/teacher3Norm.jpg');
     }
   });
});