import $ from 'jquery'

export default function () {
    const $oReviewRating = $('#reviewRating')
 
     if ($oReviewRating.length) {
         var $oRatingForm = $('#rating');
 
         $oReviewRating.find('.ox-write-review').on('click mouseenter touch',
             function () {
                 var $this = $(this),
                     $oParent = $this.parent();
                 $oParent.prevAll().find('i').removeClass('far').addClass('fas');
                 $oParent.nextAll().find('i').removeClass('fas').addClass('far');
                 $this.find('i').removeClass('far').addClass('fas');
 
                 $oRatingForm.find('#recommListRating, #productRating').val($oParent.attr('data-rate-value'));
             }
         );
     }
}