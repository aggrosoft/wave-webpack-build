import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import Glide, { Controls, Breakpoints, Images, Swipe, Anchors } from '@glidejs/glide/dist/glide.modular.esm'

const sliders = document.getElementsByClassName('agcms-glide')

sliders.forEach(slider => {
  const glide = new Glide(slider).mount({ Controls, Breakpoints, Images, Swipe, Anchors })

  const observer = new MutationObserver( function( mutations ){
    if (document.documentElement.classList.contains('fontawesome-i2svg-complete')){
      glide.update({})
      observer.disconnect()
    }
  });
  observer.observe( document.documentElement, { attributes: true, attributeFilter: ['class'] } );
})