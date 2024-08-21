import $ from 'jquery'

export const initUtilities = () => {

    //PRODUCT SECTION
    // Replace main image
    $('.thumbnail').on('click', function() {
        let src = $(this).attr('src');
        $('.main-image').attr('src', src);
    });

    // Product page price selector
    $('.price-selector').on('click', function() {
        $('.price-selector').removeClass('is-active');
        $(this).addClass('is-active');

        // Update price
        let price = $(this).find('.price').text();
        $('.price-selected').text(price);
    });

    // Add note
    $('#addNote').on('click', function() {
        $('#addNote').hide();
        $('#noteInputContainer').show();
    });

    // Confirm note
    $('#confirmNote').on('click', function() {
        let note = $('#noteInput').val();
        if (note) {
            $('#noteList').append(`<p class="product-note">${note}</p>`);
            $('#noteInput').val('');
            $('#noteInputContainer').hide();
            $('#addNote').show();
        }
    });

    // Cancel note
    $('#cancelNote').on('click', function() {
        $('#noteInput').val('');
        $('#noteInputContainer').hide();
        $('#addNote').show();
    });

    // Icon toggles
    $('.favorite-icon-product').on('click', function() {
        $(this).toggleClass('checked');
    });

    //PRODUCT DESCRIPTION
    // Toggle tabs
    $('.tab').on('click', function() {
        $('.tab').removeClass('is-active');
        $(this).addClass('is-active');
        
        let targetId = $(this).data('target');
        
        $('.tab-content').addClass('hidden'); 
        $(`#${targetId}`).removeClass('hidden');
    });
}

export default initUtilities;