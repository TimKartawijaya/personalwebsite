
//scroll to anchor within html
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-50 //-50 to take account of sticky navbar position
        }, 500);
    }
});

//change color of navbar as page progresses
var homeLocation = $('#home').offset().top-50;
var aboutmeLocation = $('#aboutme').offset().top-50;
var projectsLocation = $('#projects').offset().top-50;
var resumeLocation = $('#resume').offset().top-50;
var contactLocation = $('#contact').offset().top-50;

//function to activate the link pressed and deactive all siblings
function toggleActive(id){
    $(id).css('color','orange');
    $(id).siblings().css('color','white');
}
$(document).scroll(function(){
    var scrollPos = $(document).scrollTop();
    if (scrollPos < aboutmeLocation){
        toggleActive('#nav-home');
    } else if (scrollPos >= aboutmeLocation && scrollPos < projectsLocation){
        toggleActive('#nav-about');
    } else if (scrollPos >= projectsLocation && scrollPos < resumeLocation){
        toggleActive('#nav-projects');
    } else if (scrollPos >= resumeLocation && scrollPos < contactLocation){
        toggleActive('#nav-resume');
    }

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        toggleActive('#nav-contact');
    }
});
