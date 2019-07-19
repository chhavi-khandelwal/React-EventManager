import React from 'react';
import './App.css';
import EventManager from './EventManager';
import { EventData } from './eventData';

function App() {
  return (
      <EventManager events={ EventData }>
      </EventManager>
  );
}

export default App;
