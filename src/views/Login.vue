<script  lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '../store/login.ts'

const store = useLoginStore()
const router = useRouter()

const d_email = ref();
const d_password = ref();

async function login(){

  try {
   const response = await fetch('https://livro.4cc.shop/api/login',{
          method:  'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: d_email.value,
            password: d_password.value,
          })
        })
    const result = await response.json();
    store.id =  result["id"] 
    store.email =  result["email"] 
    store.token =  result["token"]

    router.push("/")
    console.log("Success:", result);

  } catch (error) {
    console.error("Error:", error);
  }
            //.then(response => response.json())
          //.then(data => console.log(data))


}
/*async  function login(){


  try {
    const response = await fetch("https://jogo.4cc.shop/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: {"email": d_email,
             "password": d_password
            }
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }

    console.log("Login");
    console.log(d_email.value);
    console.log(d_password.value);

}*/
</script> 
<template>
<section class="vh-50 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input v-model="d_email" type="email" id="typeEmailX" class="form-control form-control-lg" 
                  placeholder="Digite seu e-mail"/>
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input v-model="d_password" type="password" id="typePasswordX" class="form-control form-control-lg" 
                  placeholder="Digite sua senha"/>
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button @click="login()" class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template> 
<style scoped>
</style>
