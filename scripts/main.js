$(function() {
    $("#nav").load("nav.html");
});

function toggle_nav() {
    $('.nav-collapse').toggleClass('hidden');
    $('#arrow').html($('#arrow').html() == '«' ? '»' : '«');
}