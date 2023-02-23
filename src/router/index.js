import { createRouter, createWebHistory } from "vue-router";
import PokemonsView from "@/views/PokemonsView.vue";

const routes = [
  {
    path: "/",
    name: "pokemons",
    component: PokemonsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
