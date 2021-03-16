import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import Glide, { Controls, Breakpoints, Images, Swipe, Anchors } from '@glidejs/glide/dist/glide.modular.esm'

const sliders = document.getElementsByClassName('agcms-glide')

sliders.forEach(slider => {
  new Glide(slider).mount({ Controls, Breakpoints, Images, Swipe, Anchors })
})