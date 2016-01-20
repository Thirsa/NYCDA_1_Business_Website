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

 // This function (below) makes the header slide up and down when scrolling //

  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('header').slideUp();
    }
    if ($(window).scrollTop()<281){
      $('header').slideDown();
    }
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

   // I haven't tried the other function for the teacher images yet //
    
//     $('#swapImage').click(function () {
//         if ($('#swapImage').attr('src')=='teacher1Norm.jpg'){
//             $('#swapImage').attr('src','teacher1.jpg');
//         }
//         else {
//             $('#swapImage').attr('src','teacher1Norm.jpg');
//         }
//     }); 
// });


});