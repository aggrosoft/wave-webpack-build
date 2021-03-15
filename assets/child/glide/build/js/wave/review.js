import { icon } from '@fortawesome/fontawesome-svg-core'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

const solid = icon(faStarSolid).html
const regular = icon(faStarRegular).html

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

          $oParent.prevAll().find( '.fa-star' ).replaceWith(solid);
          $oParent.nextAll().find( '.fa-star' ).replaceWith(regular);
          $this.find( '.fa-star' ).replaceWith(solid);

          $oRatingForm.find( '#recommListRating, #productRating' ).val( $oParent.attr( 'data-rate-value' ) );
        }
      );
    }
  }
);