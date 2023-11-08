import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getPokemons, getPokemon } from '../api/pokemons';
import { setLoading } from './uiSlice';

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    const data = await getPokemons();

    const detailed = await Promise.all(
      data.map((pokemon) => getPokemon(pokemon.name))
    );

    dispatch(setPokemons(detailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const { id } = action.payload;
      const pokemon = state.pokemons.find((pokemon) => pokemon.id === id);

      pokemon.isFavorite = !pokemon.isFavorite;
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;
export default dataSlice.reducer;
