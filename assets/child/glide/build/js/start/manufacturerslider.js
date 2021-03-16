import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import Glide, { Controls, Breakpoints, Images, Swipe, Anchors, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
import lazyLoader from '../main/lazyimages.js' 

const slider = document.getElementById('manufacturerSlider')

if (slider) {
    const glide = new Glide('#manufacturerSlider > .glide', {
        perView: 7,
        type: 'carousel',
        autoplay: 4000,
        breakpoints: {
            800: {
                perView: 4
            },
            480: {
                perView: 2
            }
        }
    })

    glide.on('mount.after', () => {
        lazyLoader.update()
    })

    glide.mount({Controls, Breakpoints, Images, Swipe, Anchors, Autoplay})
}

