import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

window.React = React;

var clocks = [
  { id: 1, town: 'New York', offset: '-05:00', locale: 'en', showTown: true, showDate: true },
  { id: 2, town: 'Casablanca', offset: '+00:00', locale: 'ar', showTown: true, showDate: true },
  { id: 3, town: 'Paris', offset: '+01:00', locale: 'fr', showTown: true, showDate: true },
  { id: 4, town: 'Tokyo', offset: '+09:00', locale: 'ja', showTown: true, showDate: true },
];

ReactDOM.render(
  <div className="flex-container">
    {clocks.map(clock =>
      <Clock key={clock.id} config={clock} />
    )}
    <Clock config={{ town: 'Sydney', offset: '+11:00', locale: 'en-au', showTown: true, showDate: true }} />
  </div>
  , document.getElementById('content')
);
