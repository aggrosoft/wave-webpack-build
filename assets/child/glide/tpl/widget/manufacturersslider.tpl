<div class="row">
    <div id="manufacturerSlider" class="manufacturer-slider col-sm boxwrapper">
        <div class="page-header">
            <h3>[{oxmultilang ident="OUR_BRANDS"}]</h3>
            <span class="subhead">[{oxmultilang ident="MANUFACTURERSLIDER_SUBHEAD"}]</span>
        </div>

        <div class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides my-0">
                [{foreach from=$oView->getManufacturerForSlider() item=oManufacturer}]
                [{if $oManufacturer->oxmanufacturers__oxicon->value}]
                <li class="glide__slide-item d-flex">
                    <a href="[{$oManufacturer->getLink()}]" title="[{oxmultilang ident="VIEW_ALL_PRODUCTS"}]" class="flexslider-link m-auto">
                        <img src="[{$oViewConf->getImageUrl('spinner.gif')}]" class="flexslider-img" data-src="[{$oManufacturer->getIconUrl()}]" alt="[{$oManufacturer->oxmanufacturers__oxtitle->value}]">
                    </a>
                </li>
                [{/if}]
                [{/foreach}]
                </ul>
            </div>
        </div>
    </div>
</div>