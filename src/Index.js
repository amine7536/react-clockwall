import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

window.React = React;

var clocks = [
  { id: 1, town: 'New York', offset: 'America/New_York', locale: 'en', showTown: true, showDate: true },
  { id: 2, town: 'Casablanca', offset: 'Africa/Casablanca', locale: 'ar', showTown: true, showDate: true },
  { id: 3, town: 'Paris', offset: 'Europe/Paris', locale: 'fr', showTown: true, showDate: true },
  { id: 4, town: 'Tokyo', offset: 'Asia/Tokyo', locale: 'ja', showTown: true, showDate: true },
];

ReactDOM.render(
  <div className="flex-container">
    {clocks.map(clock =>
      <Clock key={clock.id} config={clock} />
    )}
  </div>
  , document.getElementById('content')
);
