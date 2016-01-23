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

  // $(window).scroll(function () {
  //     console.log($(window).scrollTop())
  //   if ($(window).scrollTop() > 250) {
  //     $('header').slideUp(50);
  //   }
  //   if ($(window).scrollTop()<150){
  //     $('header').slideDown(50);
  //   }
  // });

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

$('#swapImage1').click(function () {
     if ($('#swapImage1').attr('src')=='teacher1Norm.jpg'){
       $('#swapImage1').attr('src','teacher1.jpg');
     }
     else {
       $('#swapImage1').attr('src','teacher1Norm.jpg');
     }
   });

   $('#swapImage2').click(function () {
     if ($('#swapImage2').attr('src')=='teacher2Norm.jpg'){
       $('#swapImage2').attr('src','teacher2.jpg');
     }
     else {
       $('#swapImage2').attr('src','teacher2Norm.jpg');
     }
   });

   $('#swapImage3').click(function () {
     if ($('#swapImage3').attr('src')=='teacher3Norm.jpg'){
       $('#swapImage3').attr('src','teacher3.jpg');
     }
     else {
       $('#swapImage3').attr('src','teacher3Norm.jpg');
     }
   });
// 1  

// [2:51] 
// this is js for the Home.html. Each img inside div.box has to have a corresponding id. Ex.: id='swapImage1' , etc


});