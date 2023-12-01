<script setup lang="ts">

import Header from "./components/Header.vue";
import Foot from "./components/Foot.vue";

</script>

<template>
<div class="container">
    <Header></Header>
    <RouterView></RouterView>
  <Foot></Foot>
</div>
</template>

<style scoped>

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
