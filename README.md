
# React Clockwall

Digital Clock made with React JS.

# Clock component

```javascript
ReactDOM.render(
  <div className="flex-container">
    <Clock config={{ town: 'Paris', offset: '+01:00', locale: 'fr', showTown: true, showDate: true }} />
  </div>
  , document.getElementById('content')
);
```

```bash
amine@pixie ~/Dev/pixelfactory.io/clockwall> npm run test

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

0.0.1 : Initial start --> Done
0.0.2 : Project structure --> Done
0.0.3 : Clock components --> Done
0.0.4 : Using moment.js --> Done
0.0.5 : Unit Test --> Done
0.0.6 : Upgrade to React 0.14.3 --> Done
0.0.7 : Upgrade Test Utils and React 0.14.5 --> Done
0.0.8 : Adding Tests --> Done
0.0.9 : Adding locales i18e --> Done
0.1.0 : Customize CSS -- Partialy
0.1.2 : Switch to SCSS
0.1.3 : Switch to FlexBox --> Done
0.1.4 : ToDo: Toggle Town and Date display --> Done
0.1.5 : Config prop declaration --> Done
0.1.6 : ToDo: Switch to Webpack
