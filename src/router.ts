import Home from "./pages/Home.vue";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/:localeName",
    component: Home,
  },
  {
    path: "/",
    component: Home
  }
];