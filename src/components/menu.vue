<template>
  <a-menu @click="handleMenuClick" mode="inline" theme="dark" v-model:selectedKeys="selectedKeys">
    <a-menu-item key="home">
      <HomeOutlined />
      <span>主界面</span>
    </a-menu-item>
    <a-menu-item key="checkList">
      <ScheduleOutlined />
      <span>記錄本</span>
    </a-menu-item>
    <a-menu-item key="group">
      <GatewayOutlined />
      <span>群組</span>
    </a-menu-item>
    <a-menu-item key="diary">
      <FileTextOutlined />
      <span>筆記本</span>
    </a-menu-item>
    <a-menu-item key="wordToUniverse">
      <CommentOutlined />
      <span>給宇宙的話</span>
    </a-menu-item>
    <a-menu-item key="login">
      <PieChartOutlined />
      <span>登錄(方便測試用)</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { router } from '../router/index'
import { HomeOutlined, PieChartOutlined, FileTextOutlined, CommentOutlined,ScheduleOutlined,GatewayOutlined } from '@ant-design/icons-vue';

const selectedKeys = ref(['home'])

const handleMenuClick = ({ item, key, keyPath }) => {
  router.push('/' + key)
}
</script>

<style lang="scss" scoped></style>