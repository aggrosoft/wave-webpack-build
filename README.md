# wave-webpack-build
Build Oxid eShop Wave theme using webpack

## Installation

`git clone https://github.com/aggrosoft/wave-webpack-build.git`

`npm install`

`npm run wave:init`

## Usage

Copy `.env.dist` to `.env` and change parameters accordingly.

Clone `assets/child/example/` and adjust to your template name.

Modify everything in `assets/child/[yourtheme]` folder to your needs, then  run the following command to build the assets in `public` folder

`npm run build:prod`

For CSS purging to work correctly `assets/child/[yourtheme]/tpl` should contain a copy of your template files.

## Deployment

Contents of `public` folder need to be deployed to your `source` folder. Alternatively you can set AUTO_DEPLOY in .env
and enter Ftp credentials to deploy to.

## But why?

Wave theme is compiled using Grunt currently, it lacks effective tree shaking and css purging. This leads to badly
optimized assets and slower loading times. Using this webpack build will remove unneeded javascript and css from the
template.