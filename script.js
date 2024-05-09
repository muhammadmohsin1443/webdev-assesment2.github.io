$(document).ready(function() {
    $('nav ul li a, .btn').click(function(e) {
        e.preventDefault(); 

        var url = $(this).attr('href');

        if (url !== '#' && url !== '') {
            window.location.href = url;
        } else {
            var sectionId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(sectionId).offset().top
            }, 1000); 
        }
    });
});