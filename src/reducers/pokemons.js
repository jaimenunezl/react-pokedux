import { fromJS, setIn, getIn, get } from 'immutable';
import { SET_FAVORITE, SET_POKEMON } from '../actions/types';

const initialState = fromJS({
  pokemons: [],
});

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return setIn(state, ['pokemons'], action.payload);

    case SET_FAVORITE:
      const pokemonIndex = get(state, 'pokemons').findIndex(
        (pokemon) => get(pokemon, 'id') === fromJS(action.payload)
      );

      if (pokemonIndex === -1) return state;

      const isFavorite = getIn(state, ['pokemons', pokemonIndex, 'isFavorite']);

      return setIn(
        state,
        ['pokemons', pokemonIndex, 'isFavorite'],
        !isFavorite
      );

    default:
      return state;
  }
};
