require('dotenv').config()

const fs = require('fs-extra')
const path = require('path')
const themeDir = path.resolve(__dirname + '/../assets/child/'+process.env.CHILD_THEME)

const icon = require('@fortawesome/fontawesome-svg-core').icon
const solidIcons = require('@fortawesome/free-solid-svg-icons')

const icons = [
  solidIcons.faPlus,
  solidIcons.faUser
]

let html = ''

for (const def of icons) {
  const iconHtml = icon(def).html[0]
  const symbol = iconHtml.replace('<svg', '<symbol id="'+def.prefix+'-'+def.iconName+'"').replace('</svg', '</symbol')
  html += symbol + "\n"
}

console.log(html)
