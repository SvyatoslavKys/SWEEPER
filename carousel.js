$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        centerMode: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.autoplay').on('mouseenter', function() {
        $(this).slick('slickPause');
    });

    $('.autoplay').on('mouseleave', function() {
        $(this).slick('slickPlay');
    });

    $('.photo-box-item').on('click', function() {
        $(this).toggleClass('open');
    });
});