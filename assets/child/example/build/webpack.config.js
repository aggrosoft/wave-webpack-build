const Encore = require('@symfony/webpack-encore');

/*
 This will be run after the base entrypoints and config was done,
 alter to your likings, see webpack.config.js of compiler for settings
 */

/*
  Examples
 */

// Custom entrypoint which will be only loaded in controller named designer (?cl=designer)
// Encore.addEntry('designer', './assets/child/'+process.env.CHILD_THEME+'/build/js/designer.js')