require('dotenv').config()
const chalk = require('chalk')

if (process.env.AUTO_DEPLOY != 1) {
  console.error(chalk.bgRed(
    "##############################################\n",
    'Auto deployment is deactivated in .env file, set AUTO_DEPLOY=1 to use deployment script',
    "\n##############################################"))
  return
}

if (!process.env.FTP_HOST || !process.env.FTP_USER || !process.env.FTP_PATH) {
  console.error(chalk.bgRed(
    "##############################################\n",
    'You need to set FTP_HOST, FTP_USER and FTP_PATH for deployment',
    "\n##############################################"))
  return
}

const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  user: process.env.FTP_USER,
  // Password optional, prompted if none given
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + '/public/',
  remoteRoot: process.env.FTP_PATH,
  include: ['*'],
  exclude: [],
  deleteRemote: false,
  forcePasv: true
}

// use with promises

ftpDeploy
  .deploy(config)
  .then(res => console.log('Deployment finished successfully'))
  .catch(err => console.error('Deployment failed with error', err))

