$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li a').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});

$(document).scroll(function () { 
    if(window.scrollY > 0) {
        $('.nav_menu').css({
            "background-color" : "rgba(0,0,0, 0.7)", 
            "width" : "100%",
            "right" : "0",
        });

        $('.nav').css({
            "position" : "absolute",
            "right" : "20%",
            "top" : "11px",
        });
    } else {
        $('.nav_menu').css({
            "background" : "none", 
            "width" : "auto",
            "right" : "20%",
        });

        $('.nav').css({
            "position" : "static"
        });
    }
 });