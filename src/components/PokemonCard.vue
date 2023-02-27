<script setup>
import { defineProps } from "vue";
defineProps(["pokemon"]);
await new Promise((res) => setTimeout(res, 2000));
</script>

<template>
  <router-link
    :to="`pokemon/${pokemon.id}`"
    class="p-6 rounded-lg hover:shadow relative h-56"
    :class="pokemon.types[0]"
  >
    <img
      :src="pokemon.image"
      :alt="pokemon.name"
      class="absolute w-52 h-52 right-3 -top-12"
    />
    <h5 class="mb-2 text-4xl font-bold capitalize">
      {{ pokemon.name }}
    </h5>
  </router-link>
</template>
