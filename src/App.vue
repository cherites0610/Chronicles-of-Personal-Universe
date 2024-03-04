<script setup>
import Menu from './components/menu.vue';

const collapsed = ref(false);
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider :collapsedWidth="70" v-model:collapsed="collapsed" collapsible>
      <div class="logo" ></div>
      <Menu ></Menu>
    </a-layout-sider>
    <a-layout-content style="margin: 0 16px">
        <RouterView></RouterView>
      </a-layout-content>
  </a-layout>
</template>
<style scoped>
</style>
