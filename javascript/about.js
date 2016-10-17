$(function(){
    $('#resume').click(function () {
        sendToAnalytics('send', 'event', 'Files', 'click', 'Resume');
    });
});