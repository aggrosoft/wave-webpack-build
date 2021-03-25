import LazyLoad from "vanilla-lazyload";
import $ from 'jquery'

const lazyLoader = new LazyLoad(
    {
        elements_selector: 'img[data-src]',
        use_native: true
    }
);

$.fn.unveil = function(options) {
  lazyLoader.update()
}

export default lazyLoader;