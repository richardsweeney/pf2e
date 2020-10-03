import React from 'react';
import PlayerContext from './stores/PlayerContext';
import Player from './components/Player';
import getPlayer from './functions/functions';
import './App.css';

function App() {
  return (
    <PlayerContext.Provider value={getPlayer(1)}>
      <div className="max-w-screen-md bg-white rounded shadow-xl mx-auto container">
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
