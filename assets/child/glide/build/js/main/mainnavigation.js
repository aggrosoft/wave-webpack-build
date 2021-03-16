import $ from 'jquery'
import 'jquery-hoverintent'

/**
 * Give navigation dropdowns hover functioniality
 */
$(function() {
    $('#navigation .dropdown').hoverIntent(
        function() {
            $(this).find('> [data-toggle="dropdown"]').dropdown('show')
        }, function() {
            $(this).find('[data-toggle="dropdown"]').dropdown('hide').removeAttr('aria-expanded')
        }
    )
    $('#navigation [data-toggle="dropdown"]').on('click', function(ev){
        if ($(this).attr('aria-expanded')) {
            window.location.href = $(this).attr('href')
        }
    })
})