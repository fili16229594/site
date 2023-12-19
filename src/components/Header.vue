<script setup lang="ts">
import {useRouter} from 'vue-router'; 
import { useLoginStore } from '../store/login.ts';

const store = useLoginStore() 
const router = useRouter()
function logout(){

store.email = ""
store.id = ""
stote.token = ""

}
</script>

<template>
<header >

    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 text-secondary">Home</router-link></li>
          <li><router-link to="/feature" class="nav-link px-2 text-white">Features</router-link></li>
          <li><router-link to="/pricing" class="nav-link px-2 text-white">Pricing</router-link></li>
          <li><router-link to="/FAQs" class="nav-link px-2 text-white">FAQs</router-link></li>
          <li><router-link to="/about" class="nav-link px-2 text-white">About</router-link></li>
                  
        
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>

       
        <div v-if="store.email === ''" class="text-end">
          <button type="button" class="btn btn-outline-light me-2" @click="router.push('/login')">Login</button>
          <button type="button" class="btn btn-warning" @click="router.push('/Sign-up')">Sign-up</button>
        </div>
        <div v-else>
          <p>{{store.email}}</p>
          <button type="button" class="btn btn-warning" @click="logout()">Logout</button>
        </div>
        <div class="px-2 md-2">
           <router-link to="/Carrinho" class=" btn btn-warning">
           <i class="bi bi-cart text-white h5">
          </i><span class="badge  "></span>
        </router-link>
        </div>
      </div>
     
   

</header>

</template>