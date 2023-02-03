// router.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'

const routes = 
 [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: "/helloBd",
      name: "h-bd",
      props: true,
      component: () =>
        import("../components/helloBangladesh/helloBangladesh.vue"),
    },
  ];


const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router
