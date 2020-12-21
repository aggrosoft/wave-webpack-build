require('dotenv').config()
const chalk = require('chalk')

function msg(msg) {
  return '#'.repeat(msg.length) +
    "\n"+msg+"\n" +
    '#'.repeat(msg.length)
}

if (process.env.AUTO_DEPLOY != 1) {
  console.error(chalk.bgRed(msg('Auto deployment is deactivated in .env file, set AUTO_DEPLOY=1 to use deployment script')))
  return
}

if (!process.env.FTP_HOST || !process.env.FTP_USER || !process.env.FTP_PATH) {
  console.error(chalk.bgRed(msg('You need to set FTP_HOST, FTP_USER and FTP_PATH for deployment')))
  return
}

console.log(chalk.bgYellow(msg('Deploying application files to ' + process.env.FTP_HOST)))

const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  user: process.env.FTP_USER,
  // Password optional, prompted if none given
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + '/../public/',
  remoteRoot: process.env.FTP_PATH,
  include: ['*'],
  exclude: [],
  deleteRemote: false,
  forcePasv: true
}

// use with promises

ftpDeploy
  .deploy(config)
  .then(res => console.log(chalk.bgGreen('Deployment finished successfully')))
  .catch(err => console.error(chalk.bgRed('Deployment failed with error', err)))

