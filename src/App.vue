<script setup>
import Menu from './components/menu.vue';
import { MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons-vue';
import { router } from './router/index'
import { useUserStore } from './pinia/userStore';

const userStore = useUserStore();
const { uId, userName } = storeToRefs(userStore);

const handleClickAccount = () => {
  router.push('/account')  
}

const collapsed = ref(true);
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider :trigger="null" :collapsedWidth="0" v-model:collapsed="collapsed" collapsible>
      <div @click="handleClickAccount" class="logo">
        <a-space :size="large" :style="{ height: '100%', weight: '100%' }">
          <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>
          <span>{{ userName }}</span>
        </a-space>
      </div>
      <Menu></Menu>
    </a-layout-sider>
    <a-layout-content style="margin: 0 16px">
      <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
      <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
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

.trigger {
  padding-top: 15px;
  font-size: 25px;
  position: absolute;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
