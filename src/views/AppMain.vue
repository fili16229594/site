<script setup lang="ts">

import Card from "../components/Card4.vue";


import { ref } from 'vue';
const produtos = ref(null);

function getImgUrl(idImg: string) {
  const urlbase = 'https://storage.googleapis.com/webclass_imgs/filipe/imagens/';
  let urlimg: string;
  urlimg = urlbase + idImg
  return urlimg
}

fetch("https://livro.4cc.shop/api/livro")
    .then(response => response.json())
    .then(data => produtos.value = data);


</script>

<template>
<div class="card-deck mb-3">
  

  <div class="livros"><Card class="livro" v-for="livro in (produtos as any)?.data">
    <template #Nome> 
      {{ (livro as any)?.attributes.nome }}
      
    </template>
    <template #categoria> 
      {{ (livro as any)?.attributes.categoria }}
      
    </template>
    <template #imagem> 
      <img :src="getImgUrl((livro as any)?.attributes.imagem)"  
            class="card-img-top h-auto" 
            :alt="(livro as any)?.attributes.modelo" />
      
      
    </template>
    <template #compra>
      <router-link  :to="'/addToCompra/' + (livro as any)?.id" class="btn btn-primary">Compre já</router-link>

    </template>
   
  </Card>
  </div>

  </div>

</template>

<style scoped>
.livro{
    margin: 30px 1px;
}
.livros{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
}

header {
  background-color: #0a0a0f;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-top: 0;
}

h1 {
    margin-top: 0;
}
</style>
