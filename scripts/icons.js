require('dotenv').config()

const fs = require('fs-extra')
const path = require('path')
const themeDir = path.resolve(__dirname + '/../assets/child/'+process.env.CHILD_THEME)

const icon = require('@fortawesome/fontawesome-svg-core').icon
const icons = require( themeDir + '/build/js/svg-icons.js')

let html = ''

for (const def of icons) {
  const iconHtml = icon(def).html[0]
  const symbol = iconHtml.replace('<svg', '<symbol id="'+def.prefix+'-'+def.iconName+'"').replace('</svg', '</symbol')
  html += symbol + "\n"
}

html = '<svg style="display:none"><defs>' + html + '</defs></svg>'

fs.writeFileSync(themeDir + '/tpl/widget/icons.tpl', html)
