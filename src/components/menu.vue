<template>
  <a-menu @click="handleMenuClick" mode="inline" theme="dark" v-model:selectedKeys="selectedKeys">
    <a-menu-item key="login">
      <PieChartOutlined />
      <span>登錄</span>
    </a-menu-item>
    <a-menu-item key="register">
      <MailOutlined />
      <span>註冊</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { router } from '../router/index'
import { PieChartOutlined, MailOutlined, } from '@ant-design/icons-vue';

const selectedKeys = ref(['login'])

const handleMenuClick = ({ item, key, keyPath }) => {
  router.push('/' + key)
}
</script>

<style lang="scss" scoped></style>