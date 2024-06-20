<script setup>
import { RouterView } from 'vue-router'

</script>

<template>

  <my-header />
  <main class="mt-[145px]">
    <RouterView />
  </main>
  <my-footer />

</template>

<style>

body::-webkit-scrollbar {
  width: 0;
}
</style>
