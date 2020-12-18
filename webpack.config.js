var Encore = require('@symfony/webpack-encore');
var PurgeCssPlugin = require('purgecss-webpack-plugin');
var glob = require('glob-all');
var path = require('path');
const webpack = require('webpack');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  // directory where compiled assets will be stored
  .setOutputPath('public/out/wave/src/')
  // public path used by the web server to access the output path
  .setPublicPath('/out/wave/src')
  .configureFilenames({
    js: 'js/[name].js',
    css: 'css/[name].css',
    images: 'bg/[name].[ext]',
    fonts: 'fonts/[name].[ext]'
  })
  // only needed for CDN's or sub-directory deploy
  //.setManifestKeyPrefix('build/')
  .copyFiles([{
    from: 'assets/wave',
    to: '../../../Application/views/wave/[path][name].[ext]',
    includeSubdirectories: true,
    pattern: /.*/
  }])
  .addPlugin(new PurgeCssPlugin({
    paths: glob.sync([
      path.join(__dirname, 'assets/wave/tpl/**/*.tpl')
    ])
  }))
  .addPlugin(new webpack.ProvidePlugin({
    PhotoSwipe: 'photoswipe',
    PhotoSwipeUI_Default: 'photoswipe/src/js/ui/photoswipe-ui-default.js'
  }))
  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
   */
  .addEntry('main', './assets/app.js')
  .addEntry('details', './assets/js/details.js')
  .addEntry('checkout', './assets/js/checkout.js')
  //.addEntry('page2', './assets/page2.js')

  // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
  .splitEntryChunks()

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  /*
   * FEATURE CONFIG
   *
   * Enable & configure other features below. For a full
   * list of features, see:
   * https://symfony.com/doc/current/frontend.html#adding-more-features
   */
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(false)

  // enables @babel/preset-env polyfills
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
  })

// enables Sass/SCSS support
.enableSassLoader()
.enableLessLoader()

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
//.enableIntegrityHashes(Encore.isProduction())

// uncomment if you're having problems with a jQuery plugin
.autoProvidejQuery()

// uncomment if you use API Platform Admin (composer require api-admin)
//.enableReactPreset()
//.addEntry('admin', './assets/admin.js')
;

module.exports = Encore.getWebpackConfig();