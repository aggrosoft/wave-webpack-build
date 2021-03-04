require('dotenv').config()

const fs = require('fs-extra')
const path = require('path')
const chokidar = require('chokidar')
const log = console.log.bind(console)
const themeDir = path.resolve(__dirname + '/../assets/child/'+process.env.CHILD_THEME)
const deployDir = path.resolve(__dirname + '/../' + process.env.DEPLOY_PATH)

log('Watching files in ' + themeDir)

const resolveTemplateFile = function (path) {
  const basePath = path.replace(themeDir, '')
  let appFolder
  let appFile

  if (basePath.indexOf('/images') === 0) {
    appFolder = 'out/' + process.env.CHILD_THEME + '/img/';
    appFile = basePath.replace('/images/', '')
  } else {
    appFolder = 'Application/views/' + process.env.CHILD_THEME + '/tpl/';
    appFile = basePath.replace('/tpl/', '')
  }
  return deployDir + '/' + appFolder + appFile
}

const copyFile = function (path) {
  fs.copySync(path, resolveTemplateFile(path))
  console.log('[COPY]', resolveTemplateFile(path))
}

const deleteFile = function (path) {
  fs.removeSync(resolveTemplateFile(path))
  console.log('[DELETE]', resolveTemplateFile(path))
}


const watcher = chokidar.watch([themeDir + '/tpl', themeDir + '/images'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
})

watcher
  .on('add', copyFile)
  .on('change', copyFile)
  .on('unlink', deleteFile)
