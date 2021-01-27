require('dotenv').config()

if (!process.env.SHIRTNETWORK_VERSION) {
  throw new Error('The SHIRTNETWORK_VERSION environment variable was not set, please copy .env.dist to .env and set at least the SHIRTNETWORK_VERSION variable')
}

const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')

async function main () {
  const response = await axios.get('http://cdn.shirtnetwork.de/docs/components/'+process.env.SHIRTNETWORK_VERSION+'/components.json')
  const components = response.data
  const writePath = path.join(__dirname, '../assets/child/', process.env.CHILD_THEME, '/build/purgecss/shirtnetwork/')

  if (fs.pathExistsSync(writePath)) {
    fs.emptyDirSync(writePath)
  } else {
    fs.mkdirSync(writePath)
  }

  for (const component of components) {
    let html = component.template + "\n\n" + "<style>" + component.styles.join("\n") + "</style>"
    const fn = path.join(writePath, component.namespace + component.name + '.html')
    fs.writeFileSync(fn, html)
  }
}

main()