import $ from 'jquery'

export const initMenuFunctions = () => {

    // set the mobile menu hamburger icon
    $(document).on('click', '.hamburger', function () {
        if(!$(this).hasClass('is-active') && !$('header').hasClass('bg-white')){
            $('header').addClass('bg-white')
        }
        $(this).toggleClass('is-active');
        $('.mobile-menu').toggleClass('hidden');
    });

    // mobile slide-ups and downs
    $(document).on('click', '.sub-has-children > a', function (e) {
        e.preventDefault();
        if ($(this).siblings('ul').hasClass('openned')) {
            $(this).siblings('img').removeClass('rotate-open');
            $(this).siblings('ul').removeClass('openned').slideUp(200);
        } else {
            $('.sub-has-children img').removeClass('rotate-open');
            $('.sub-has-children ul').removeClass('openned').slideUp(200);
            $(this).siblings('img').addClass('rotate-open');
            $(this).siblings('ul').addClass('openned').slideDown(200);
        }
    });

    // accssibility - open children menu on enter key
    $(document).keyup(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            $(e.target).parent('.has-children').addClass('open');
        }
    });

    // accssibility - close children menu on esc key
    $(document).keyup(function (e) {
        if (e.keyCode === 27 && $('.has-children').hasClass('open')) {
            e.preventDefault();
            $('.has-children').removeClass('open');
        }
    });

    $(window).scroll(function () {
        let st = $(this).scrollTop();
        if (st > 10) {
            $('header').addClass('bg-white shadow-md')
        } else {
            $('header').removeClass('bg-white shadow-md')
        }
    });

};

export default initMenuFunctions;