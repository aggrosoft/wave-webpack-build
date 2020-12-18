# wave-webpack-build
Build Oxid eShop Wave theme using webpack

## Installation

`git clone https://github.com/aggrosoft/wave-webpack-build.git`

`npm install`

`npm run wave:init`

## Usage

Modify everything in `assets` folder to your needs, then  run the following command to build the assets in `public` folder

`npm run build:prod`

For CSS purging to work correctly `assets/wave/tpl` should be a copy of your template. 
Will include child theme and other base theme support soon.

## Deployment

Contents of `public` folder need to be deployed to your `source` folder.

## But why?

Wave theme is compiled using Grunt currently, it lacks effective tree shaking and css purging. This leads to badly
optimized assets and slower loading times. Using this webpack build will remove unneeded javascript and css from the
template.