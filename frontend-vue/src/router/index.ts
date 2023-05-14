import { createRouter, createWebHistory } from "vue-router";
import Chat from "components/chat/Chat.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Chat,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
