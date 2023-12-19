import { createRouter, createWebHistory } from 'vue-router'
import AppAbout from "../views/AppAbout.vue"
import AppMain from "../views/AppMain.vue"
import Login from "../views/Login.vue"
import AppCompra from "../views/AppCompra.vue"
import AppCreateUser from "../views/AppCreateUser.vue"

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
    path: '/Carrinho/:id',
    name: 'Compra',
    component: AppCompra
  },
  {
    path: '/Carrinho/',
    name: 'Carrinho',
    component: AppCompra
  },
  {
    path: '/Sign-up/',
    nome: 'cadastro',
    component: AppCreateUser
  }
]

const base_url = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base_url),
  routes
})

export default router