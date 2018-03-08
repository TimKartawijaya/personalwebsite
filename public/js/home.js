//scroll to anchor within html
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-55 //-55 to take account of sticky navbar position
        }, 500);
    }
});