import $ from 'jquery'

/**
 * toggle dropdown selections
 */
$(function() {
    $('.product-box .variant-dropdown .dropdown-menu-link, .basket .selectorsBox .dropdown-menu-link').on('click', function(){
        $(this).closest('.dropdown').find('input[type="hidden"]').val($(this).data('selection-id'));
        $(this).closest('form').submit();
    })
})