const fse = require('fs-extra');


fse.emptyDirSync('assets/wave');

// copy wave base
fse.copySync('vendor/oxid-esales/wave-theme/', 'assets/wave', {overwrite: true});

// copy images to scss
fse.copySync('vendor/oxid-esales/wave-theme/out/wave/img', 'assets/wave/build/scss/img', {overwrite: true});