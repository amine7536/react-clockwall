import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

window.React = React;

const clocks = [
  { id: 'clock1', town: 'New York', timezone: 'America/New_York' },
  { id: 'clock2', town: 'الدار البيضاء', timezone: 'Africa/Casablanca', locale: 'fr' },
  { id: 'clock3', town: 'Paris', timezone: 'Europe/Paris', locale: 'fr', meridiem: true },
  { id: 'clock4', town: '香港', timezone: 'Asia/Hong_Kong', locale: 'zh-cn' },
  { id: 'clock5', town: 'नई दिल्ली', timezone: 'Asia/Kolkata', locale: 'hi' },
  { id: 'clock6', town: '東京', timezone: 'Asia/Tokyo', locale: 'ja' },
  { id: 'clock7', town: 'Αθήνα', timezone: 'Europe/Athens', locale: 'el' },
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
