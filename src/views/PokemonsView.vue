<script setup>
import { usePokemonStore } from "@/stores/pokemon";
import { storeToRefs } from "pinia";

const { pokemons } = storeToRefs(usePokemonStore());
const { fetchPokemons } = usePokemonStore();
fetchPokemons();
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-4 gap-6">
      <div
        v-for="(pokemon, index) in pokemons"
        :key="index"
        class="block max-w-sm p-6 rounded-lg shadow"
        :class="pokemon.types[0]"
      >
        <img :src="pokemon.image" :alt="pokemon.name" />
        <h5 class="mb-2 text-xl font-bold text-gray-900 capitalize">
          {{ pokemon.name }}
        </h5>
      </div>
    </div>
  </div>
</template>
