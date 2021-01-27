require('dotenv').config()

var path = require('path');
var fs = require('fs');

if (!process.env.CHILD_THEME) {
  throw new Error('The CHILD_THEME environment variable was not set, please copy .env.dist to .env and set at least the CHILD_THEME variable')
}

var Encore = require('@symfony/webpack-encore');
var PurgeCssPlugin = require('purgecss-webpack-plugin');
var glob = require('glob-all');

const webpack = require('webpack');
const DEPLOY_PATH = process.env.DEPLOY_PATH || 'public'

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  // directory where compiled assets will be stored
  .setOutputPath(DEPLOY_PATH+'/out/'+process.env.CHILD_THEME+'/src/')
  // public path used by the web server to access the output path
  .setPublicPath('/out/'+process.env.CHILD_THEME+'/src/')
  .configureFilenames({
    js: 'js/[name].js',
    css: 'css/[name].css',
    images: 'bg/[name].[ext]',
    fonts: 'fonts/[name].[ext]'
  })
  // only needed for CDN's or sub-directory deploy
  //.setManifestKeyPrefix('build/')
  .copyFiles([{
    from: 'assets/child/',
    to: '../../../Application/views/[path][name].[ext]',
    includeSubdirectories: true,
    pattern: /.*/
  }])
  .addPlugin(new PurgeCssPlugin({
    paths: glob.sync([
      path.join(__dirname, 'assets/wave/tpl/**/*.tpl'),
      path.join(__dirname, 'assets/child/'+process.env.CHILD_THEME+'/tpl/**/*.tpl')
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
  .addEntry('main', './assets/child/'+process.env.CHILD_THEME+'/build/app.js')
  .addEntry('details', './assets/child/'+process.env.CHILD_THEME+'/build/js/details.js')
  .addEntry('checkout', './assets/child/'+process.env.CHILD_THEME+'/build/js/checkout.js')

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
  //.cleanupOutputBeforeBuild()
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
// enable post css
.enablePostCssLoader()
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

// Allow custom config per theme
if (fs.existsSync('./assets/child/'+process.env.CHILD_THEME+'/build/webpack.config.js')) {
  require('./assets/child/'+process.env.CHILD_THEME+'/build/webpack.config.js')
}

module.exports = Encore.getWebpackConfig();