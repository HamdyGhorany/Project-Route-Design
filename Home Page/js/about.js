
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $(".changeX").css("background", "#fff");
        } else {
            $(".changeX").css("background", "rgba(0,0,0,0.0)");
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


