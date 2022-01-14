require('dotenv').config()
const readdir = require("./readdir")
const fs = require("fs")
const path = require("path")
const CWebp = require('cwebp').CWebp;
const outDir = path.resolve(process.env.DEPLOY_PATH + '/out/')

;(async () => {
    for await (const f of readdir(outDir)) {
        const p = path.parse(f);
        if (p.ext === '.png' || p.ext === '.jpeg' || p.ext === '.jpg') {
            const newPath = p.dir + '/' + p.name + '.webp'
            if (!fs.existsSync(newPath)) {
                console.log(f)
                try {
                    const encoder = new CWebp(f);
                    await encoder.write(p.dir + '/' + p.name + '.webp')
                }catch(e) {
                    console.log('... file processing failed!')
                }
            }
        }
    }
    process.exit()
})()