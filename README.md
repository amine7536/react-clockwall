# Clockwall [![Build Status](https://travis-ci.org/amine7536/clockwall.svg?branch=master)](https://travis-ci.org/amine7536/clockwall)

Digital Clock made with React JS.

## Features
- Customizable with CSS
- Built-in Internationalization (i18n)
- Light, Create as many clocks as you want
- Unit tested
- ES2015, Future-proof javascript

## Browser Support :
- Chrome
- Safari
- FireFox
- IE Edge
- IE9, IE10, IE11 (partial FlexBox support)

## Stack
- __NodeJS__ : [https://nodejs.org](https://nodejs.org)
- __BabelJS__ : [https://babeljs.io](https://babeljs.io)
- __ReactJS__ : [https://facebook.github.io/react/](https://facebook.github.io/react/)

## Preview
A Demo of the Clock component is availabe in folder `demo`.
Open ```demo/index.html``` in your Browser.

![Clockwall-Demo](https://raw.githubusercontent.com/amine7536/clockwall/master/docs/js/img/clockwall-demo.png)

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

## Build application
Once you have installed the dependencies using [NPM](https://www.npmjs.org/) you can build the project using the command :

```
user@pixelfactory.io> npm run build

> clockwall@1.4.2 build /Dev/pixelfactory.io/clockwall
> gulp build

[16:47:27] Requiring external module babel-core/register
[16:47:29] Using gulpfile /Dev/pixelfactory.io/clockwall/gulpfile.babel.js
[16:47:29] Starting 'build'...
[16:47:29] Starting 'clean'...
[16:47:29] Finished 'clean' after 5.42 ms
[16:47:29] Starting 'browserify'...
[16:47:29] Finished 'browserify' after 36 ms
[16:47:29] Starting 'styles'...
[16:47:29] Finished 'styles' after 9.84 ms
[16:47:29] Starting 'htmlReplace'...
[16:47:29] Finished 'htmlReplace' after 3.13 ms
[16:47:29] Finished 'build' after 60 ms
```

 This will create a new folder ```dist``` with the following files :
 ```
 .
├── index.html
├── js
│   ├── app.js
│   └── app.js.map
└── styles
    ├── main.css
    ├── main.css.map
    ├── reset.css
    ├── reset.css.map
    ├── theme.css
    └── theme.css.map

2 directories, 9 files
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

The Development environment uses [browserSync](https://www.browsersync.io) to enable **LiveReload**. Your browser will be automatically as you change HTML, CSS and Javascript files or other files under ```src``` folder.    

## Running test
The project test can be found in the folder ```test/components```. You can run the tests by running the command: ```npm test```

```
user@pixelfactory.io> npm test

> clockwall@1.4.2 test /Dev/pixelfactory.io/clockwall
> mocha --reporter nyan --compilers js:babel/register --recursive

 24  -_-_-_-_-_-_-_-_-_-_-_-_-_,------,
 0   -_-_-_-_-_-_-_-_-_-_-_-_-_|   /\_/\
 0   -_-_-_-_-_-_-_-_-_-_-_-_-^|__( ^ .^)
     -_-_-_-_-_-_-_-_-_-_-_-_-  ""  ""

  24 passing (78ms)
```

# Getting started

## Basic Usage
Simply ```import Clock from './components/Clock';``` and start using the **<Clock/>** component.

```javascript
ReactDOM.render(
  <div className="flex-container clockwall">
      <Clock config={{ timezone: 'Europe/Paris', town: 'Paris'}} />
  </div>
  , document.getElementById('content')
);
```

## Advanced Usage
__Usage__ :
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

window.React = React;

var clocks = [
  { id: 'clock1', town: 'New York', timezone: 'America/New_York' },
  { id: 'clock2', town: 'الدار البيضاء', timezone: 'Africa/Casablanca', locale: 'fr' },
  { id: 'clock3', town: 'Paris', timezone: 'Europe/Paris', locale: 'fr' },
  { id: 'clock4', town: '香港', timezone: 'Asia/Hong_Kong', locale: 'zh-cn' },
  { id: 'clock5', town: 'नई दिल्ली', timezone: 'Asia/Kolkata', locale: 'hi' },
  { id: 'clock6', town: '東京', timezone: 'Asia/Tokyo', locale: 'ja' },
  { id: 'clock7', town: 'Αθήνα', timezone: 'Europe/Athens', locale: 'el'},
  { id: 'clock8', town: 'Москва', timezone: 'Europe/Moscow', locale: 'ru' },
  { id: 'clock9', town: 'Hà Nội', timezone: 'Asia/Bangkok', locale: 'vi' },
  { id: 'clock10', town: 'Sao Paulo', timezone: 'America/Sao_Paulo', locale: 'pt' },
];

ReactDOM.render(
  <div className="flex-container clockwall">
    {clocks.map(clock =>
      <Clock key={clock.id} config={clock} />
    )}
  </div>
  , document.getElementById('content')
);

```
__Required params__ :
 - config.timezone : [ISO Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
 - config.town : Town name to display

__Defaults values__ :
 - config.id : CSS ```#id``` (default: ```pixelfactory-town```)
 - config.locale : ISO language code (default: ```en```)
 - config.showTown : Include TOWN name in rendered html (default: ```true```)
 - config.showTimezone : Include TIMEZONE name in rendered html (default: ```true```)
 - config.showDate : Include DATE in rendered html (default: ```true```)

**Clock Class Definition** can be found in [Components-Clock](/module-Components-Clock.html)


## Customize
The Clock component will generate the following HTML for each clock you create :

```html
<div id="clock1" class="clock">
  <h1 class="town">New York</h1>
  <h2 class="timezone">America/New_York EST</h2>
  <ul class="time">
    <li class="hours">09</li>
    <li class="points">:</li>
    <li class="minutes">43</li>
    <li class="seconds"><sup>57</sup></li>
  </ul>
  <h1 class="date">Monday 4 January 2016</h1>
</div>
```

Each html element has its own CSS class, to customize the look of the Clock you can simply override the CSS classes in the ```styles/theme.css``` file.

For example to set minutes color to red just add :

```css
#clock1 .minutes {
	color: red;
}
```  

Note that we are also using the Clock CSS `#id` to target only one Clock.


# CHANGELOG
- 1.0.0 : Initial start
- 1.0.0 : Project structure
- 1.1.0 : Clock components
- 1.1.1 : Using moment.js
- 1.1.1 : Unit Test
- 1.1.2 : Upgrade to React 0.14.3
- 1.1.2 : Upgrade Test Utils and React 0.14.5
- 1.1.3 : Adding more Tests
- 1.2.0 : Adding locales i18e
- 1.2.1 : Customize CSS
- 1.2.2 : Switch to FlexBox
- 1.3.0 : Toggle Town and Date display
- 1.4.0 : Config prop declaration
- 1.4.1 : Use moment-timezone
- 1.4.2 : Use ES6 Class
