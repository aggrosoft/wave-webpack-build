import $ from 'jquery'

export default function () {
    if ($('#variants input[name^="varselid"]').length > 1) {
        const emptySelections = $('#variants input[name^="varselid"]').filter(function() {
            return !$(this).val();
        });
        
        if (emptySelections.length === 1) {
            emptySelections.each(function() {
                const val = $(this).next('.dropdown-menu').find('li:not(".disabled") > a').data('selection-id')
                $(this).val(val)
            })
            var form = $("form.js-oxWidgetReload");
            $('input[name=fnc]', form).val("");
            form.append($('#variants input[name^="varselid"]').clone())
            form.submit();
        }
    }    
}