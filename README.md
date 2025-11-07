# React-Clockwall [![CI](https://github.com/amine7536/react-clockwall/actions/workflows/ci.yml/badge.svg)](https://github.com/amine7536/react-clockwall/actions/workflows/ci.yml)

Digital Clock made with React JS.

## Features

- Customizable with CSS
- Built-in Internationalization (i18n)
- Light, Create as many clocks as you want
- Unit tested
- ES2015, Future-proof javascript

## Browser Support

- Chrome
- Safari
- FireFox
- IE Edge
- IE9, IE10, IE11 (partial FlexBox support)

## Stack

- __NodeJS__ : [https://nodejs.org](https://nodejs.org)
- __ReactJS__ : [https://react.dev](https://react.dev)
- __Vite__ : [https://vitejs.dev](https://vitejs.dev)
- __Vitest__ : [https://vitest.dev](https://vitest.dev)

## Preview

A Demo of the Clock component is available in folder `demo`.
Open ```demo/index.html``` in your Browser. Or here : [https://pixelfactory.io/projects/clockwall/](https://pixelfactory.io/projects/clockwall/)

![Clockwall-Demo](https://raw.githubusercontent.com/amine7536/clockwall/master/docs/js/img/clockwall-demo.png)

## Build

**Please note that any commands we tell you to run must be ran from the project's root folder.**

## Prerequisites

This project requires [Node.js](https://nodejs.org) 18+ and [NPM](https://www.npmjs.org/) to be installed on your computer. You can check if these are installed properly by opening up a Terminal (Linux or Mac) or Command Prompt (Windows) and entering the command: ```node --version``` and ```npm --version```.

## Install dependencies

Clockwall dependencies are managed with [NPM](https://www.npmjs.org/). The list of all dependencies can be found in the file ```package.json```.
You can install the dependencies simply by running the following command:

```bash
user@pixelfactory.io> npm install
```

## Build application

Once you have installed the dependencies using [NPM](https://www.npmjs.org/) you can build the project using the command :

```bash
npm run build
```

This will create a new folder ```dist``` with the following files :

 ```bash
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

We've made it easy to develop and test on your local machine. Once you've installed the dependencies, you can start a local development server by running:

```bash
npm run dev
```

This will start the Vite development server with hot module replacement (HMR) at http://localhost:5173

The development environment uses Vite's built-in HMR. Your browser will automatically reload as you change files under the ```src``` folder.

## Running tests

The project tests can be found in the folder ```test```. You can run the tests by running the command: ```npm test```

```bash
npm test
```

Additional test commands:
- `npm run test:ui` - Run tests with interactive UI
- `npm run test:coverage` - Run tests with coverage report

## Getting started

### Basic Usage

Simply ```import Clock from './components/Clock';``` and start using the **<Clock/>** component.

```javascript
ReactDOM.render(
  <div className="flex-container clockwall">
      <Clock config={{ timezone: 'Europe/Paris', town: 'Paris'}} />
  </div>
  , document.getElementById('content')
);
```

### Advanced Usage

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

## CHANGELOG

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
- 1.4.7 : Adding meridiem (FallingSnow Github PR: https://github.com/amine7536/react-clockwall/pull/2)
