# Clockwall

Digital Clock made with React JS.

## Prerequistes
- nodejs
- npm
- browser support

## BabelJS

## ReactJS

## Preview
A Demo of the Clock component is availabe in folder demo.
Open ```demo/index.html``` in your Browser.

**Todo**: add screenshot here

# Build

**Please note that any commands we tell you to run must be ran from the project's root folder.**

## Gulp task runner
[Gulp](http://gulpjs.com) is an Task / Build runner. This project relies on Gulp for automation of tasks.  
In order to use [Gulp](http://gulpjs.com) you will need to have [Node.js](https://nodejs.org) installed on your computer. Also insure that you have [NPM](https://www.npmjs.org/) installed. You can check if these are installed properly by opening up a Terminal (Linux or Mac) or Command Prompt (Windows) and entering the command: ```node --version``` and ```npm --version```. These commands should output something similar to "v5.1.1" and "3.3.12" respectively.

Once you have installed these programs, you'll need to get **gulp**. You can achieve this by running the following command:
```bash
user@pixelfactory.io> npm install -g gulp
```
  
Now you should be able to exectue the command **gulp** :
```bash
user@pixelfactory.io> gulp --version
CLI version 3.9.0
```

## Install dependencies
Clockwall dependencies are managed with [NPM](https://www.npmjs.org/). The list of all dependencies can be found in the file ```package.json```.
You can install the dependencies simply by running the following command:
```bash
user@pixelfactory.io> npm install
```

## Development Server
We've made it easy to develop and test on your local machine. Once you've installed the dependencies and built your project, you can start a local server by running the command ```npm run watch```. This will start a local server and open up your browser.

```
user@pixelfactory.io> npm run watch

> clockwall@1.4.1 watch /Dev/pixelfactory.io/clockwall
> gulp watch

[23:10:13] Requiring external module babel-core/register
[23:10:20] Using gulpfile /Dev/pixelfactory.io/clockwall/gulpfile.babel.js
[23:10:20] Starting 'watch'...
[23:10:20] Starting 'clean'...
[23:10:20] Finished 'clean' after 34 ms
[23:10:20] Starting 'browserSync'...
[23:10:21] Finished 'browserSync' after 139 ms
[23:10:21] Starting 'watchTask'...
[23:10:21] Finished 'watchTask' after 13 ms
[23:10:21] Starting 'watchify'...
[23:10:21] Starting 'styles'...
[23:10:21] Finished 'styles' after 7.55 ms
[23:10:21] Starting 'lint'...
[23:10:21] Finished 'lint' after 170 ms
[BS] Access URLs:
-------------------------------------
      Local: http://localhost:3000
   External: http://172.16.1.174:3000
-------------------------------------
         UI: http://localhost:3001
UI External: http://172.16.1.174:3001
-------------------------------------
[BS] Serving files from: ./
[BS] 4 files changed (main.css.map, main.css, reset.css.map, reset.css)
[BS] 1 file changed (app.js)
[23:10:26] Finished 'watchify' after 5.39 s
[23:10:26] Finished 'watch' after 5.58 s
```


```javascript
ReactDOM.render(
  <div className="flex-container">
    <Clock config={{ town: 'Paris', offset: '+01:00', locale: 'fr', showTown: true, showDate: true }} />
  </div>
  , document.getElementById('content')
);
```

```
#> npm run test

> clockwall@0.1.6 test ~/Dev/pixelfactory.io/clockwall
> mocha --reporter nyan --compilers js:babel/register --recursive

21  -_-_-_-_-_-_-_-_-_-_-__,------,
0   -_-_-_-_-_-_-_-_-_-_-__|  /\_/\
0   -_-_-_-_-_-_-_-_-_-_-_~|_( ^ .^)
    -_-_-_-_-_-_-_-_-_-_-_ ""  ""

 21 passing (69ms)

```

## Usage

__Install the dependencies:__

`npm install`

__Test:__

`npm run test`

__Development mode with livereload:__

`npm run watch`

__When you are done, create a production ready version of the JS bundle:__

`npm run build`

## What's new in v0.1.6:

- React Router integration
- CSS processing via [PostCSS](https://github.com/postcss/postcss)
  - cssnano for minification
  - nested
  - extend
  - vars
  - autoprefixer
- gulpifle written in ES6 (ES2015)
- better folder structure
- no predefined AJAX libraries (use [Fetch](https://github.com/github/fetch) or [Superagent](https://github.com/visionmedia/superagent) if you need one).
