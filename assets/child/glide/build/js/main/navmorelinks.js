import $ from 'jquery'
import 'jquery-hoverintent'

/**
 * Collapse navigation with "more" dropdown
 */
$(function() {

    const dropDownIcon = '<svg class="svg-icon svg-inline--fa" aria-hidden="true"><use xlink:href="#fas-angle-down"></use></svg>'
    const moreElement = $('<li class="nav-item dropdown"/>')
    moreElement.append('<a class="nav-link" data-toggle="dropdown">Mehr ' + dropDownIcon + '</a>')
    const moreDropdown = $('<ul class="dropdown-menu"></ul>')
    moreElement.append(moreDropdown)
    
    moreElement.appendTo('#navigation')
    const moreWidth = moreElement.outerWidth()
    moreElement.remove()

    const navigationWidth = $('#navigation').innerWidth() - moreWidth;
    let itemWidth = 0;
    let hasMoreDropdown = false;

    $('#navigation').children().outerWidth(function(i,w){
        itemWidth += w;
        if (itemWidth > navigationWidth) {
            $(this).detach().addClass('dropdown-item').appendTo(moreDropdown);
            hasMoreDropdown = true;
        }
    });

    if (hasMoreDropdown) {
        $('#navigation').append(moreElement)
    }
    
    
})