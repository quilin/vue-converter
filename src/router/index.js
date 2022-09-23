import { createRouter, createWebHistory } from 'vue-router';
import CurrenciesList from '../components/CurrenciesList.vue';
import ConverterPage from '../components/ConverterPage.vue';

const routes = [
  {
    path: '/',
    component: CurrenciesList,
  },
  {
    path: '/currencies_list',
    component: ConverterPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
