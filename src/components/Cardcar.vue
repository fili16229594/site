<script setup lang="ts">
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import { useCartStore } from '../store/CartStore'

const store = useCartStore()

const produto = ref(null)
const quantity = ref(1)



const props = defineProps({
  id: { type: String, required: true },
})


onBeforeMount(() => {
  quantity.value = 1

})

onMounted(() => {

  if (store[props.id] === undefined){
    store[props.id] = 1
    quantity.value = 1
  }else{
    quantity.value = store[props.id] + 1
  }

  fetch("https://livro.4cc.shop/api/livro/" + props.id)
    .then(response => response.json())
    .then(data => produto.value = data.data);
})

function getImgUrl(idImg: string) {
  const urlbase = 'https://storage.googleapis.com/webclass_imgs/filipe/imagens/';
  let urlimg: string;
  urlimg = urlbase + idImg
  return urlimg
}

function increment(){
  quantity.value = quantity.value + 1
  store[props.id] = quantity.value
}

function decrement(){
  if(quantity.value > 0){
    quantity.value = quantity.value - 1
    store[props.id] = quantity.value
  }
}

function update(){
    store[props.id] = quantity.value
}

</script>



<template>


<div class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="book">
                    <img :src="getImgUrl(produto?.attributes.imagem)" class="book-img">
                </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">{{  produto?.attributes.nome}}</h6>
                    <p class="mob-text">{{ produto?.attributes.categoria}}</p>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
                <div class="col-4">
                    <p class="mob-text">Digital</p>
                </div>
                <div class="col-4">
                    <div class="row d-flex justify-content-end px-3">
                        <p class="mb-0" id="cnt1">1</p>
                        <div class="d-flex flex-column plus-minus">
                            <span class="vsm-text plus">+</span>
                            <span class="vsm-text minus">-</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="mob-text">$9.99</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.plus-minus {
    position: relative;
}

.plus {
    position: absolute;
    top: -4px;
    left: 2px;
    cursor: pointer;
}

.minus {
    position: absolute;
    top: 8px;
    left: 5px;
    cursor: pointer;
}

.vsm-text:hover {
    color: #FF5252;
}

.book, .book-img {
    width: 120px;
    height: 180px;
    border-radius: 5px;
}

.book {
    margin: 20px 15px 5px 15px;
}

.border-top {
    border-top: 1px solid #EEEEEE !important;
    margin-top: 20px;
    padding-top: 15px;
}

.card {
    margin: 40px 0px;
    padding: 40px 50px;
    border-radius: 20px;
    border: none;
    box-shadow: 1px 5px 10px 1px rgba(0,0,0,0.2);
}

input, textarea {
    background-color: #F3E5F5;
    padding: 8px 15px 8px 15px;
    width: 100%;
    border-radius: 5px !important;
    box-sizing: border-box;
    border: 1px solid #F3E5F5;
    font-size: 15px !important;
    color: #000 !important;
    font-weight: 300;
}

input:focus, textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #9FA8DA;
    outline-width: 0;
    font-weight: 400;
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0;
}

.pay {
    width: 80px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #673AB7;
    margin: 10px 20px 10px 0px;
    cursor: pointer;
    box-shadow: 1px 5px 10px 1px rgba(0,0,0,0.2);
}

.gray {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    filter: grayscale(100%);
    color: #E0E0E0;
}

.gray .pay {
    box-shadow: none;
}

#tax {
    border-top: 1px lightgray solid;
    margin-top: 10px;
    padding-top: 10px;
}

.btn-blue {
    border: none;
    border-radius: 10px;
    background-color: #673AB7;
    color: #fff;
    padding: 8px 15px;
    margin: 20px 0px;
    cursor: pointer;
}

.btn-blue:hover {
    background-color: #311B92;
    color: #fff;
}

#checkout {
    float: left;
}

#check-amt {
    float: right;
}

@media screen and (max-width: 768px) {
    .book, .book-img {
        width: 100px;
        height: 150px;
    }

    .card {
        padding-left: 15px;
        padding-right: 15px;
    }

    .mob-text {
        font-size: 13px;
    }

    .pad-left { 
        padding-left: 20px;
    }
}

</style>