import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import Glide, { Controls, Breakpoints, Images, Swipe, Anchors } from '@glidejs/glide/dist/glide.modular.esm'

const initSliders = function () {
  const sliders = document.getElementsByClassName('glide-slider')

  sliders.forEach(slider => {
    const glide = new Glide(slider, JSON.parse(slider.dataset.glide)).mount({ Controls, Breakpoints, Images, Swipe, Anchors })
  })
}

initSliders()

export default initSliders