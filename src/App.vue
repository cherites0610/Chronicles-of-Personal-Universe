<script setup>
import Menu from './components/menu.vue';
import { UserOutlined } from '@ant-design/icons-vue';

const collapsed = ref(false);
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider :collapsedWidth="70" v-model:collapsed="collapsed" collapsible>
      <div v-if="!collapsed" class="logo">
        <a-space :size="large" :style="{ height: '100%', weight: '100%' }">
          <a-avatar size="large" :style="{ backgroundColor: D2D6EF, verticalAlign: 'middle' }">
            user
          </a-avatar>
          <span>前端羽毛</span>
        </a-space>
      </div>
      <Menu></Menu>
    </a-layout-sider>
    <a-layout-content style="margin: 0 16px">
      <RouterView></RouterView>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.logo {
  padding: 5px;
  height: 55px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
