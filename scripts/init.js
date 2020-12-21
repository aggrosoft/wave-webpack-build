const fse = require('fs-extra');
const path = require('path');

fse.emptyDirSync(path.join(__dirname, '../assets/wave'));

// copy wave base
fse.copySync(path.join(__dirname, '../vendor/oxid-esales/wave-theme/'), path.join(__dirname, '../assets/wave'), {overwrite: true});

// copy images to scss
fse.copySync(path.join(__dirname, '../vendor/oxid-esales/wave-theme/out/wave/img'), path.join(__dirname, '../assets/wave/build/scss/img'), {overwrite: true});