require('dotenv').config()

const fs = require('fs-extra');
const path = require('path');

if (!process.env.TMP_FOLDER) {
  console.info('The TMP_FOLDER environment variable was not set, clearing tmp skipped')
  return
}

if (!fs.pathExistsSync(path.join(process.env.TMP_FOLDER, 'smarty'))) {
  throw new Error('TMP_FOLDER does not contain smarty folder, clearing tmp skipped')
  return
}

console.info('Clearing tmp ' + process.env.TMP_FOLDER)

fs.emptyDirSync(path.join(process.env.TMP_FOLDER, 'smarty'))