<script setup>
import { defineProps } from "vue";
defineProps(["pokemon"]);
</script>

<template>
  <div class="block max-w-sm p-6 rounded-lg shadow" :class="pokemon.types[0]">
    <img :src="pokemon.image" :alt="pokemon.name" />
    <h5 class="mb-2 text-xl font-bold text-gray-900 capitalize">
      {{ pokemon.name }}
    </h5>
  </div>
</template>
