<script setup>
import { useRoute } from "vue-router";
import { usePokemonStore } from "@/stores/pokemon";
import { storeToRefs } from "pinia";

const route = useRoute();
const { pokemon } = storeToRefs(usePokemonStore());
const { fetchPokemon } = usePokemonStore();
fetchPokemon(route.params.id);
</script>
<template>
  <div class="container mx-auto">
    <div>{{ pokemon.name }}</div>
    <div>{{ pokemon.height }}</div>
    <div>{{ pokemon.weight }}</div>

    <ul>
      <li v-for="type in pokemon.types" :key="type.slot">
        {{ type.type.name }}
      </li>
    </ul>

    <ul>
      <li v-for="(stat, index) in pokemon.stats" :key="index">
        <div class="mb-1 text-base capitalize">
          {{ stat.stat.name }}
        </div>
        <div
          class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700"
        >
          <div
            class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            :style="`width: ${stat.base_stat}%`"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>
