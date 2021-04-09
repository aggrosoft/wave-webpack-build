$(function()
  {
    var $oReviewRating = $( '#reviewRating' );

    if( $oReviewRating.length )
    {
      var $oRatingForm = $( '#rating' );

      $oReviewRating.find( '.ox-write-review' ).on( 'click mouseenter touch', function()
        {
          var $this    = $( this ),
            $oParent = $this.parent();

          $oParent.prevAll().find( '.svg-icon' ).find('use').attr('xlink:href', '#fas-star');
          $oParent.nextAll().find( '.svg-icon' ).find('use').attr('xlink:href', '#far-star')
          $this.find( '.svg-icon' ).find('use').attr('xlink:href', '#fas-star');

          $oRatingForm.find( '#recommListRating, #productRating' ).val( $oParent.attr( 'data-rate-value' ) );
        }
      );
    }
  }
);