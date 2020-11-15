import React, { createContext, useReducer } from 'react';
export const SET_PLAYER = 'SET_PLAYER';
export const CAST_SPELL = 'CAST_SPELL';
export const UNDO_CAST = 'UNDO_CAST';
export const CAST_CANTRIP = 'CAST_CANTRIP';
export const UNDO_CAST_CANTRIP = 'UNDO_CAST_CANTRIP';
export const SET_HP = 'SET_HP';

const initialState = {
  player: null,
  HP: 0,
  cantripCasts: 0,
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
  const [state, dispatch] = useReducer((state, { type, payload = null }) => {
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

      case CAST_CANTRIP:
        return {
          ...state,
          cantripCasts: state.cantripCasts + 1
        }

      case UNDO_CAST_CANTRIP:
        return {
          ...state,
          cantripCasts: state.cantripCasts - 1
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
