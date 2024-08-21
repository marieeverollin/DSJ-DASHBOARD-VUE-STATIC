import $ from 'jquery';

export const initFilter = () => {
      
      $('#filtersButton').on('click', function() {
        $('#mobile-filters').toggleClass('hidden');
      });

      $('#close-filters').on('click', function() {
        $('#mobile-filters').toggleClass('hidden');
      });
}

export default initFilter