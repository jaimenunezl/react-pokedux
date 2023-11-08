import { getPokemon } from '../api/pokemons';
import { SET_LOADING, SET_POKEMON, SET_FAVORITE } from './types';

export const setPokemons = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const detailed = await Promise.all(
      pokemons.map((pokemon) => getPokemon(pokemon.name))
    );

    dispatch(setPokemons(detailed));
  };

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
