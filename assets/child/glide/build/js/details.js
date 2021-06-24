import initMorePics from './details/morepics.js'
import initVariants from './details/variants.js'
import initRatings from './details/variants.js'
import setFirstVariant from './details/firstvariant.js'
import lazyLoader from './main/lazyimages.js'
import initSliders from './main/glide.js'

import '../../../../wave/out/wave/src/js/widgets/oxajax.min.js'
import '../../../../wave/out/wave/src/js/widgets/oxarticlevariant.min.js'
import '../../../../wave/out/wave/src/js/widgets/oxlistremovebutton.min.js'

global.Wave.initDetailsEvents = function () {
    initMorePics()
    initVariants()
    initRatings()
    setFirstVariant()
    initSliders()
    lazyLoader.update()
};