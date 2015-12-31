import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

window.React = React;

var clocks = [
  { id: 1, town: 'New York', timezone: 'America/New_York' },
  { id: 2, town: 'الدار البيضاء', timezone: 'Africa/Casablanca', locale: 'fr' },
  { id: 3, town: 'Paris', timezone: 'Europe/Paris', locale: 'fr' },
  { id: 4, town: '香港', timezone: 'Asia/Hong_Kong', locale: 'zh-cn' },
  { id: 5, town: 'नई दिल्ली', timezone: 'Asia/Kolkata', locale: 'hi' },
  { id: 6, town: '東京', timezone: 'Asia/Tokyo', locale: 'ja' },
];

ReactDOM.render(
  <div className="flex-container clockwall">
    {clocks.map(clock =>
      <Clock key={clock.id} config={clock} />
    )}
  </div>
  , document.getElementById('content')
);
