
(function ($) {
    const DESKTOP_MIN = 1120;

    //адаптивное меню и бургер
    $('.burger').click(function () {
        if ($(this).hasClass('menu-opened')) {
            $("#mainMenu").hide();
            $(this).children('i').removeClass('fa-xmark').addClass('fa-bars');
            $(this).removeClass('menu-opened');
        } else {
            $("#mainMenu").show();
            $(this).children('i').removeClass('fa-bars').addClass('fa-xmark');
            $(this).addClass('menu-opened');
        }
    })

    //стрелки сортировок в каталоге
    $(".sorting li").click(function () {
        $(this).toggleClass('sorting-on');
    })

    //сворачивание и разворачивание скрытых фильтров
    $('.view-more').click(function () {
        $(this).parent().children('.hidden-elems').slideToggle(700, function () {
            if ($(this).hasClass('expanded')) {
                $(this).next().children('i').removeClass('fa-angle-up');
                $(this).next().children('i').addClass('fa-angle-down');
                $(this).next().children('span').text('View More');
            } else {
                $(this).next().children('i').removeClass('fa-angle-down');
                $(this).next().children('i').addClass('fa-angle-up');
                $(this).next().children('span').text('View Less');
            }

            $(this).toggleClass('expanded');
        });
    })

    //карусель на главной
    if (window.innerWidth > DESKTOP_MIN) { //карусель выводится только в десктопном разрешении
        $('.carousel').simplecarousel({
            next: $('.carousel-next'),
            prev: $('.carousel-prev'),

            slidespeed: 700,
            visible: 4,
            auto: 5000,
            width: 275,
        });
    } else { //преобравание карусели в обычный каталог на мобильных устройствах
        $('.carousel').before('<div class="cards"></div>');

        var carouselItems = $('.carousel').children();
        for (let i = 0; i < 3; i++) { //только 3 карточки будет оставлено
            $('.cards').append($(carouselItems[i]).html());
        }

        $('.carousel').detach();
        $('.carousel-controls').detach();
    }

})(jQuery)