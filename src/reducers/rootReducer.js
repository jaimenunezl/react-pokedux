import { combineReducers } from 'redux-immutable';
import { pokemonReducer } from './pokemons';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
  data: pokemonReducer,
  ui: uiReducer,
});
