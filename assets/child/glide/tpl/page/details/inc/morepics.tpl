[{assign var="oConfig" value=$oViewConf->getConfig()}]

[{if $oView->morePics()}]
<div class="glide mb-2" id="morePics">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides my-auto">
            [{foreach from=$oView->getIcons() key="iPicNr" item="oArtIcon" name="sMorePics"}]
            <li class="glide__slide my-auto" data-target="zoom1" data-zoom="[{$oPictureProduct->getMasterZoomPictureUrl($iPicNr)}]" data-picture="[{$oPictureProduct->getPictureUrl($iPicNr)}]">
                <img class="details-picture-more-img" src="[{$oPictureProduct->getIconUrl($iPicNr)}]" alt="morepic-[{$smarty.foreach.sMorePics.iteration}]">
            </li>
            [{/foreach}]
        </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
        <button type="button" class="glide__arrow glide__arrow--left btn btn-primary" data-glide-dir="<">&laquo;</button>
        <button type="button" class="glide__arrow glide__arrow--right btn btn-primary" data-glide-dir=">">&raquo;</button>
    </div>
</div>

<div class="modal fade" id="zoomModal" tabindex="-1" aria-labelledby="zoomModalLabel">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title" id="zoomModalLabel">[{$oPictureProduct->oxarticles__oxtitle->value|strip_tags}] [{$oPictureProduct->oxarticles__oxvarselect->value|strip_tags}]</div>
                <button type="button" class="close" data-dismiss="modal" aria-label="schließen">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="glide" id="zoomPics">
                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            [{foreach from=$oView->getIcons() key="iPicNr" item="oArtIcon" name="sZoomPics"}]
                            <li class="glide__slide d-flex my-auto">
                                <img class="details-picture-more-img img-fluid mx-auto" src="[{$oPictureProduct->getMasterZoomPictureUrl($iPicNr)}]" alt="zoompic-[{$smarty.foreach.sZoomPics.iteration}]">
                            </li>
                            [{/foreach}]
                        </ul>
                    </div>
                    <div class="glide__arrows" data-glide-el="controls">
                        <button type="button" class="glide__arrow glide__arrow--left btn btn-primary" data-glide-dir="<">&laquo;</button>
                        <button type="button" class="glide__arrow glide__arrow--right btn btn-primary" data-glide-dir=">">&raquo;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
[{else}]
<div class="modal fade" id="zoomModal" tabindex="-1" aria-labelledby="zoomModalLabel">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title" id="zoomModalLabel">[{$oPictureProduct->oxarticles__oxtitle->value|strip_tags}] [{$oPictureProduct->oxarticles__oxvarselect->value|strip_tags}]</div>
                <button type="button" class="close" data-dismiss="modal" aria-label="schließen">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body d-flex">
                <img class="details-picture-more-img img-fluid m-auto" src="[{$oPictureProduct->getMasterZoomPictureUrl(1)}]" alt="zoompic">
            </div>
        </div>
    </div>
</div>
[{/if}]