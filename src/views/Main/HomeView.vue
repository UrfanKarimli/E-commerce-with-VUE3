<script setup>
import Banner from '@/views/Main/components/Banner.vue'
import FlashSales from '@/views/Main/components/FlashSales.vue'
import Categories from '@/views/Main/components/Categories.vue'
import BestSelling from '@/views/Main/components/BestSelling.vue'
import CountDown from '@/views/Main/components/CountDown.vue'
import OurProducts from '@/views/Main/components/OurProducts.vue'
import NewArrival from '@/views/Main/components/NewArrival.vue'
</script>

<template>
  <div class=" min-h-screen">
    <Banner />
    <FlashSales />
    <Categories/>
    <BestSelling/>
    <CountDown/>
    <OurProducts/>
    <NewArrival/>
  </div>
</template>
