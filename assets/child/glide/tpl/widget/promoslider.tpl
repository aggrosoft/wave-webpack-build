[{block name="dd_widget_promoslider"}]
    [{assign var="oBanners" value=$oView->getBanners()}]
    [{assign var="currency" value=$oView->getActCurrency()}]

    [{if $oBanners|@count}]

    <div id="promo-carousel" class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
            [{block name="dd_widget_promoslider_list"}]
            [{foreach from=$oBanners key="iPicNr" item="oBanner" name="promoslider"}]
            [{assign var="oArticle" value=$oBanner->getBannerArticle()}]
            [{assign var="sBannerPictureUrl" value=$oBanner->getBannerPictureUrl()}]
            [{if $sBannerPictureUrl}]
            <li class="glide__slide">
                [{assign var="sBannerLink" value=$oBanner->getBannerLink()}]
                [{if $sBannerLink}]
                <a href="[{$sBannerLink}]" title="[{$oBanner->oxactions__oxtitle->value}]">
                    [{/if}]
                    <img [{if !$smarty.foreach.promoslider.first}]data-[{/if}]src="[{$sBannerPictureUrl}]" class="w-100" alt="[{$oBanner->oxactions__oxtitle->value}]" title="[{$oBanner->oxactions__oxtitle->value}]">

                    [{if $sBannerLink}]
                </a>
                [{/if}]
                [{if $oViewConf->getViewThemeParam('blSliderShowImageCaption') && $oArticle}]
                <div class="glide__caption d-none d-md-block">
                    [{if $sBannerLink}]
                    <a href="[{$sBannerLink}]" class="glide__caption-link" title="[{$oBanner->oxactions__oxtitle->value}]">
                        [{/if}]
                        <span class="glide__caption-title">[{$oArticle->oxarticles__oxtitle->value}]</span>[{if $oArticle->oxarticles__oxshortdesc->value|trim}]<br/><span class="glide__caption-shortdesc">[{$oArticle->oxarticles__oxshortdesc->value|trim}]</span>[{/if}]
                        [{if $sBannerLink}]
                    </a>
                    [{/if}]
                </div>
                [{/if}]
            </li>
            [{/if}]
            [{/foreach}]
            [{/block}]
            </ul>
        </div>
        <div class="glide__arrows d-none d-md-block" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left btn btn-primary" data-glide-dir="<">&laquo;</button>
            <button class="glide__arrow glide__arrow--right btn btn-primary" data-glide-dir=">">&raquo;</button>
        </div>
    </div>
    [{/if}]
    [{/block}]
