<template>
  <a-menu @click="handleMenuClick" mode="inline" theme="dark" v-model:selectedKeys="selectedKeys">
    <a-menu-item key="home">
      <HomeOutlined />
      <span>主界面</span>
    </a-menu-item>
    <a-menu-item key="checkList">
      <MailOutlined />
      <span>待辦清單</span>
    </a-menu-item>
    <a-menu-item key="diary">
      <MailOutlined />
      <span>筆記本</span>
    </a-menu-item>
    <a-menu-item key="login">
      <PieChartOutlined />
      <span>登錄</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { router } from '../router/index'
import { HomeOutlined, PieChartOutlined, MailOutlined, } from '@ant-design/icons-vue';

const selectedKeys = ref(['home'])

const handleMenuClick = ({ item, key, keyPath }) => {
  router.push('/' + key)
}
</script>

<style lang="scss" scoped></style>