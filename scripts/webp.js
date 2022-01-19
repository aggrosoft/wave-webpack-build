require('dotenv').config()
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const readdir = require("./readdir")
const fs = require("fs")
const path = require("path")
const CWebp = require('cwebp').CWebp;
const outDir = path.resolve(process.env.DEPLOY_PATH + '/out/')
console.log(argv)
;(async () => {
    for await (const f of readdir(outDir)) {
        const p = path.parse(f);
        const ext = p.ext.toLowerCase();
        if (ext === '.png' || ext === '.jpeg' || ext === '.jpg') {
            const newPath = p.dir + '/' + p.name + '.webp'
            if (argv.force || !fs.existsSync(newPath)) {
                console.log(f)
                try {
                    const encoder = new CWebp(f);
                    await encoder.write(p.dir + '/' + p.name + '.webp')
                }catch(e) {
                    console.log('... file processing failed: ' + e.message)
                }
            }
        }
    }
    process.exit()
})()