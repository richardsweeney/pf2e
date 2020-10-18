import React from 'react';
import { StateProvider } from './stores/PlayerContext';
import Player from './components/Player';
import './App.css';

function App () {
  return (
    <StateProvider>
      <div className='max-w-screen-md bg-white rounded shadow-xl mx-auto container'>
        <Player/>
      </div>
    </StateProvider>
  );
}

export default App;
