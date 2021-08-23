import {createRouter, createWebHistory} from 'vue-router';
import Home from '/src/components/Home.vue';
import Success from '/src/components/success.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/success',
    name: 'Success',
    component: Success,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
