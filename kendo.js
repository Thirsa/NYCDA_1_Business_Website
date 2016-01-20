$(document).ready(function() {
    $('.slideshow').cycle({
		fx: 'fade'
    });
    $('#swapImage').click(function () {
        if ($('#swapImage').attr('src')=='teacher1Norm.jpg'){
            $('#swapImage').attr('src','teacher1.jpg');
        }
        else {
            $('#swapImage').attr('src','teacher1Norm.jpg');
        }
    }); 
});

