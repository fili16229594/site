<template>
  <div class="card mb-4">
  <slot name="imagem">

  </slot>
  <div class="card-body">
    <h5 class="card-title"><slot name="livro"></slot></h5>
    <p class="card-text"><slot name="Descricao"></slot></p>
    <a href="#" class="btn btn-primary">comprar</a>
  </div>
</div>
</template>

<style scoped>
  @media (min-width: 576px) {
  .card-deck {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
}
</style>