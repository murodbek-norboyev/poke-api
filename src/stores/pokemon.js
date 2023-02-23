import { defineStore } from "pinia";
import axios from "axios";
export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [],
    pokemon: {},
    loading: false,
  }),
  actions: {
    async fetchPokemons() {
      this.loading = true;
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const results = response.data.results;

        const pokemons = await Promise.all(
          results.map(async (result) => {
            const pokemeonResponse = await axios.get(result.url);
            const pokemonData = pokemeonResponse.data;
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: pokemonData.sprites.other.dream_world.front_default,
              types: pokemonData.types.map((type) => type.type.name),
            };
          })
        );
        this.pokemons = pokemons;
        console.log(this.pokemons);
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false;
      }
    },
    async fetchPokemon() {
      this.loading = true;
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        this.pokemon = response.data;
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
});
