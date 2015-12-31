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
];

ReactDOM.render(
  <div className="flex-container clockwall">
    {clocks.map(clock =>
      <Clock key={clock.id} config={clock} />
    )}
    <Clock config={{town: 'Paris', timezone: 'Europe/Paris', locale: 'fr'}}/>
  </div>
  , document.getElementById('content')
);
