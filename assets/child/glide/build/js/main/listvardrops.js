import $ from 'jquery'

/**
 * Collapse navigation with "more" dropdown
 */
$(function() {
    $('.product-box .variant-dropdown .dropdown-menu-link').on('click', function(){
        $(this).closest('.dropdown').find('input[type="hidden"]').val($(this).data('selection-id'));
        $(this).closest('form').submit();
    })
})