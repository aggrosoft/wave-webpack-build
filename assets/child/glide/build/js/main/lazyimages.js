import LazyLoad from "vanilla-lazyload";

const lazyLoader = new LazyLoad(
    {
        elements_selector: 'img[data-src]',
        use_native: true
    }
);

export default lazyLoader;