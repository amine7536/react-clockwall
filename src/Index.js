import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

window.React = React;

var clocks = [
  { id: 1, town: 'New York', timezone: 'America/New_York' },
  { id: 2, town: 'Casablanca', timezone: 'Africa/Casablanca', locale: 'ar' },
  { id: 3, town: 'Paris', timezone: 'Europe/Paris', locale: 'fr' },
  { id: 4, town: 'New Dehli', timezone: 'Asia/Kolkata', locale: 'hi' },
  { id: 5, town: 'Tokyo', timezone: 'Asia/Tokyo', locale: 'ja' },
];

ReactDOM.render(
  <div className="flex-container clockwall">
    {clocks.map(clock =>
      <Clock key={clock.id} config={clock} />
    )}
  </div>
  , document.getElementById('content')
);
