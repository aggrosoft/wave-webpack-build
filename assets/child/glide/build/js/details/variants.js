import $ from 'jquery'

export default function () {
    const $oDetailsWrapper = $('#details')
 
     if ($oDetailsWrapper.length) {
         // Variantenauswahl
         $('#variants .dropdown-menu li a', $oDetailsWrapper).click(function (e) {
                 e.preventDefault();
                 var $this = $(this);
                 $this.closest('.selectbox').removeClass('show');
                 $this.parent().parent().prev().siblings('button').find('span').first().text($this.text());
 
                 // $oDetailsWrapper.find('#detailsMain').prepend(getAjaxLoader());
             }
         );
 
         // Auswahllisten
         $('#productSelections .dropdown-menu li a', $oDetailsWrapper).click(function (e) {
                 e.preventDefault();
                 var $this = $(this);
                 $this.closest('.selectbox').removeClass('show');
                 $this.parent().parent().prev().val($this.attr('data-selection-id'));
                 $this.parent().parent().prev().siblings('button').find('span').first().text($this.text());
             }
         );
     }
}