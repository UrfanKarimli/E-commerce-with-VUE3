<template>
    <div class="container flex flex-wrap justify-between">
        <ImgCard v-for="item in datas.slice(0, 4)" :key="item.id" :data="item" />
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import ImgCard from '../Main/components/ImgCard.vue';

let datas = ref([])

onMounted(async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    if (res?.data) {
        datas.value = res.data
    }
})


</script>
