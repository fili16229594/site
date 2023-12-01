import { createRouter, createWebHistory } from 'vue-router'
import AppAbout from "../views/AppAbout.vue"
import AppMain from "../views/AppMain.vue"
import Login from "../views/Login.vue"
import AppCompra from "../views/AppCompra.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppMain
  },
  {
    path: '/about',
    name: 'Sobre',
    component: AppAbout
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/addToCompra/:id',
    name: 'Compra',
    component: AppCompra
  },
  {
    path: '/Carrinho/',
    name: 'Carrinho',
    component: AppCompra
  },
]

const base_url = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base_url),
  routes
})

export default router