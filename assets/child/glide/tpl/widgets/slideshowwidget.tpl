[{ assign var=settings value=$widget->getSettings() }]

<div class="[{ $widget->agwidget__cssclasses->rawValue }] agcms-glide glide" style="[{$widget->getCssStyle()}]">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">

            [{section name=slides start=1 loop=8 step=1}]
            [{if $settings->hasBannerContent($smarty.section.slides.index) }]
            <li class="glide__slide">
            <div class="glide__slide-content">
            [{if $settings->getBannerLink($smarty.section.slides.index) }]
            <a class="glide__slide-link" href="[{ $settings->getBannerLink($smarty.section.slides.index) }]">
            [{/if}]
            [{ if $settings->getBannerPicture($smarty.section.slides.index) }]
            <img class="glide__slide-image" src="[{$settings->getBannerPictureUrl($smarty.section.slides.index)}]" />
            [{/if}]
            [{if $settings->getBannerText($smarty.section.slides.index)}]
            <div class="glide__slide-text">
                [{ $settings->getBannerText($smarty.section.slides.index) }]
            </div>
            [{/if}]
            [{if $settings->getBannerLink($smarty.section.slides.index) }]
            </a>
            [{/if}]
            </div>
            </li>
            [{/if}]
            [{/section}]

        </ul>
    </div>
    <div class="glide__arrows d-none d-md-block" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left btn btn-primary" data-glide-dir="<">&laquo;</button>
        <button class="glide__arrow glide__arrow--right btn btn-primary" data-glide-dir=">">&raquo;</button>
    </div>
</div>