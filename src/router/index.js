import { createRouter, createWebHistory } from "vue-router";
import PokemonsView from "@/views/PokemonsView.vue";
import PokemonView from "@/views/PokemonView.vue";

const routes = [
  {
    path: "/",
    name: "pokemons",
    component: PokemonsView,
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    component: PokemonView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
