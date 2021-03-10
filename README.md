# wave-webpack-build
Build Oxid eShop Wave theme using webpack encore

## Installation

You will need [composer](https://www.get-composer.org) and [nodejs](https://www.nodejs.org) and [yarn](https://yarnpkg.com/getting-started/install) installed to use this

`git clone https://github.com/aggrosoft/wave-webpack-build.git`

`yarn install`

`composer install`

`yarn run wave:init`

To be able to include module related css or anything else from your shop install we recommend symlinking DEPLOY_PATH with
your shop source folder. This will also auto copy everything on builds to the shop.

`ln -s [SHOP_SOURCE] [DEPLOY_PATH]`

For this kind of setup we recommend having the webpack builder in a subfolder where your oxid composer.json lies.

* install-folder
* * source
* * vendor
* * composer.json
* * ...
* * **webpack** (create folder and clone here)

You can then symlink your shop as easy as

`cd webpack && ln -s ../source/ public`

## Usage

Copy `.env.dist` to `.env` and change parameters accordingly.

Clone `assets/child/example/` and adjust to your template name.

Modify everything in `assets/child/[yourtheme]` folder to your needs, then run the following command to build the assets in `public` folder

`yarn run build:prod`

While developing you can auto build / deploy with

`yarn run watch`

If you only need to watch template changes use 

`yarn run watch:template`

## CSS Purging

For CSS purging to work correctly `assets/child/[yourtheme]/tpl` should contain a copy of your template files.
To enable this feature set `USE_PURGECSS=1` in .env file, this is still experimental as dynamic contents (CMS etc.)
will not be picked up.

## Deployment

Contents of `public` folder need to be deployed to your `source` folder. 

Alternatively you can set AUTO_DEPLOY in .env  and enter Ftp credentials to deploy to. Run 

`yarn run deploy` or `yarn run build-deploy`

to build and/or deploy in single command


## Dependencies

You need to have [oxid-webpack-theme-loader](https://github.com/aggrosoft/oxid-webpack-theme-loader) module installed and enabled to 
use the themes correctly.

## But why?

Wave theme is compiled using Grunt currently, it lacks effective tree shaking and css purging. This leads to badly
optimized assets and slower loading times. Using this webpack build will remove unneeded javascript and css from the
template.