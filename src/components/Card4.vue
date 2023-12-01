<template>

<div class="card" style="width: 18rem;">
  <!--aqui tinha a div imagem-->
  <div class="card-body">
    <slot name="imagem"></slot>
    <h5 class="card-title"><slot name="Nome"></slot></h5>
    <h5 class="card-title categoria"><slot name="categoria"></slot></h5>
    <p class="card-text"></p>
    <slot name="compra"> 
      <router-link to="/carrinho" class="btn btn-primary">Compre já</router-link> 
    </slot>
    
  </div>
  
  
</div>
</template>
<style scoped>
.categoria{
  font-size: 15px;
}
  .card-body{ display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>