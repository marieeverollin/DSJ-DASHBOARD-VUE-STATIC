import $ from 'jquery';

export const initBestsellers = () => {
    $('.cart-icon').on('click', function() {
        $(this).toggleClass('checked');
      });

    $('.favorite-icon').on('click', function() {
        $(this).toggleClass('checked');
    });
}

export default initBestsellers