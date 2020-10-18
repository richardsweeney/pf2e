import { useContext } from 'react';
import { store } from '../stores/PlayerContext';

function usePlayer () {
  const {
    state: {
      player
    }
  } = useContext(store);

  return player;
}

export default usePlayer;
