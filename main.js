jQuery(function ($) {
    var current;
    $.scrollify({
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        section: ".box",
        setHeights: false,
        before: function (i, box) {
            current = i;
        },
    });
    $(window).on('resize', function () {
        if (current) {
            var currentScrl = $('.box').eq(current).offset().top;
            $(window).scrollTop(currentScrl);
        }
    });
});


//New Pages Count Down We Are Perfect I Guess That Would Be All Right
var count = new Date("sept 1,2019 10:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}, 1000);