import '../styles/main/index.scss'
import 'jq-bootstrap-validation/dist/jq.bootstrap.validation.min.js'

import 'bootstrap'

// Autoload every file in main / start folders
const reqMain = require.context("./main", true, /^(.*\.(js$))[^.]*$/im);
reqMain.keys().forEach(function(key){
  reqMain(key);
});

const reqStart = require.context("./start", true, /^(.*\.(js$))[^.]*$/im);
reqStart.keys().forEach(function(key){
  reqStart(key);
});

import '../../../../wave/build/js/pages/compare.js'
import 'jquery-ui/ui/widget.js'