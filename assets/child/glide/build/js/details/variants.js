import $ from 'jquery'

export default function () {

       // Variantenauswahl
       $('#variants .dropdown-menu li a').on('click', function (e) {
               e.preventDefault();
               const dropdown = $(this).closest('.dropdown').find('[data-toggle="dropdown"]')
               dropdown.dropdown('hide')
               dropdown.find('span').first().text($(this).text());
           }
       );

       // Auswahllisten
       $('#productSelections .dropdown-menu li a').on('click', function (e) {
               e.preventDefault();
               const dropdown = $(this).closest('.dropdown').find('[data-toggle="dropdown"]')
               dropdown.dropdown('hide')
               $(this).closest('.dropdown-menu').find('li a').removeClass('active')
               $(this).addClass('active')

                $(this).parent().parent().prev().val($(this).attr('data-selection-id'));
               $(this).parent().parent().prev().siblings('button').find('span').first().text($(this).text());
           }
       );

}