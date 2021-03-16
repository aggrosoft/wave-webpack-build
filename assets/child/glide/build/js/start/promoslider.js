import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import Glide, { Controls, Breakpoints, Images, Swipe, Anchors } from '@glidejs/glide/dist/glide.modular.esm'

const slider = document.getElementById('promo-carousel')

if (slider) {
    new Glide('#promo-carousel').mount({ Controls, Breakpoints, Images, Swipe, Anchors })
}
