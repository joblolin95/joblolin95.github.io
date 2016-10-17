$(function () {
    $('.smooth-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the responsive menu on menu item click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

function sendToAnalytics(command, hitType, eventCategory, eventAction, eventLabel) {
    ga(command, hitType, eventCategory, eventAction, eventLabel);
}