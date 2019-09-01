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
