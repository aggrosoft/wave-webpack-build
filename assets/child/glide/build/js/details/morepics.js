import Glide, { Controls, Breakpoints, Swipe, Images, Anchors } from '@glidejs/glide/dist/glide.modular.esm'
import "@glidejs/glide/src/assets/sass/glide.core.scss"
import "@glidejs/glide/src/assets/sass/glide.theme.scss"
import Clickable from './glide/clickable.js'
import ZoomPic from './glide/zoompic.js'
import $ from 'jquery'

const initMorePics = function () {
    if (document.getElementById('morePics')) {
        const morePics = new Glide('#morePics',  {
            type: 'carousel',
            startAt: 0,
            perView: 4,
            focusAt: 'center',
            gap: 0,
            breakpoints: {
                1024: {
                    perView: 3
                }
            }
        }).mount({ Controls, Breakpoints, Swipe, Images, Anchors, Clickable, ZoomPic })
        
        let zoomPics
        
        $('#zoomModal').on('shown.bs.modal', function (e) {
            zoomPics = new Glide('#zoomPics', {
                type: 'carousel',
                startAt: morePics.index,
                focusAt: 'center'
            }).mount({ Controls, Breakpoints, Swipe, Images })
        })
        $('#zoomModal').on('hidden.bs.modal', function (e) {
            zoomPics.destroy()
        })
    }    
}

export default initMorePics