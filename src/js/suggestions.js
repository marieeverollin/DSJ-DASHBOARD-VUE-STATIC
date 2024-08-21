import $ from 'jquery';

export const initSuggestions = () => {
    $('.cat-tab').on('click', function() {
        $('.cat-tab').removeClass('active');
        $(this).addClass('active');
      });
}

export default initSuggestions