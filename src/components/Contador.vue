<template>
    <div>
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        if (this.count > 0) {
          this.count--;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add estilos */
  </style>