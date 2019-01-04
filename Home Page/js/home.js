jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 1000);
    });
});

new WOW().init();



$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $(".changeX").css("background", "#fff");
            $(".navbar-light .navbar-nav .nav-link").css("color", "#000");
        } else {
            $(".changeX").css("background", "rgba(0,0,0,0.0)");
            $(".navbar-light .navbar-nav .nav-link").css("color", "gainsboro");

        }
    })
})
  

function toggi(x){
    x.classList.toggle("change");
}





$(document).load($(window).bind("resize", checkPosition));

function checkPosition()
{
    if($(window).width() < 991)
    {
          $(".changeX").css("background", "#fff");
            $(".navbar-light .navbar-nav .nav-link").css("color", "#000");
        } else {
            $(".changeX").css("background", "rgba(0,0,0,0.0)");
            $(".navbar-light .navbar-nav .nav-link").css("color", "gainsboro");

    }
}














	



