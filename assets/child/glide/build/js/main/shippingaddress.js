import $ from 'jquery';

$(function() {
  $('.dd-delete-shipping-address').attr('type', 'button');
  $('.dd-edit-shipping-address' ).on('click', function(){
    $( '#shippingAddressForm' ).show();
    $( 'html, body' ).animate( { scrollTop: $( '#shippingAddressForm' ).offset().top - 80 }, 600 );
    return false;
  });
});