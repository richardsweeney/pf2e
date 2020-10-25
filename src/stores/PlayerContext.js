import React, { createContext, useReducer } from 'react';
export const SET_PLAYER = 'SET_PLAYER';
export const CAST_SPELL = 'CAST_SPELL';
export const UNDO_CAST = 'UNDO_CAST';
export const SET_HP = 'SET_HP';

const initialState = {
  player: null,
  HP: 0,
  spellCasts: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }
};

const store = createContext(initialState);
const { Provider } = store;
let spellCasts = null;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case SET_PLAYER:
        return {
          ...state,
          HP: payload.HP,
          player: payload
        };

      case CAST_SPELL:
        spellCasts = { ...state.spellCasts };
        spellCasts[payload]++;

        return {
          ...state,
          spellCasts
        }

      case UNDO_CAST:
        spellCasts = { ...state.spellCasts };
        spellCasts[payload]--;

        return {
          ...state,
          spellCasts
        }

      case SET_HP:
        return {
          ...state,
          HP: payload
        }

      default:
        throw new Error();
    }
  }, initialState);

  return (
    <Provider value={{ state, dispatch }}>{children}</Provider>
  );
};

export { store, StateProvider };
