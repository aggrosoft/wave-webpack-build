import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import Glide, { Controls, Breakpoints, Images, Swipe, Anchors } from '@glidejs/glide/dist/glide.modular.esm'

const slider = document.getElementById('promo-carousel')

if (slider) {
    const glide = new Glide('#promo-carousel').mount({ Controls, Breakpoints, Images, Swipe, Anchors })

    // Currently hiding body until fonts loaded to prevent layout shift, update glide when everything is loaded
    const observer = new MutationObserver( function( mutations ){
        if (document.documentElement.classList.contains('fontawesome-i2svg-complete')){
            glide.update({})
            observer.disconnect()
        }
    });
    observer.observe( document.documentElement, { attributes: true, attributeFilter: ['class'] } );
}
