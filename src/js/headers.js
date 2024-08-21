import $ from 'jquery';

export const initHeader = () => {
    $('#mobile-search').on('click', function() {
        $('#location-bar').addClass('hidden');
        $('#search-bar').toggleClass('hidden');
      });

      $('#location-toggle').on('click', function() {
        $('#search-bar').addClass('hidden');
        $('#location-bar').toggleClass('hidden');
      });

      $('.hamburger').on('click', function() {
        $('#mobile-menu').toggleClass('hidden');
      });

      $('#close-menu').on('click', function() {
        $('#mobile-menu').toggleClass('hidden');
      });
}

export default initHeader