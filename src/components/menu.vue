<template>
    <div style="width: 256px">
    <a-button type="primary" style="margin-bottom: 16px" @click="state.collapsed = !state.collapsed;">
      <MenuUnfoldOutlined v-if="state.collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="light"
      :inline-collapsed="state.collapsed"
      
      :items="items"
    ></a-menu>
  </div>
</template>

<script setup>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
const state = reactive({
  collapsed: false,
  selectedKeys: ['1']
});
const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: '賬戶資訊預留'
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: '記錄本(測試註冊用)'
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: '群組(測試登錄用)'
  },
  {
    key: '4',
    icon: () => h(MailOutlined),
    label: '筆記本'
  },
  {
    key: '5',
    icon: () => h(AppstoreOutlined),
    label: '給宇宙的話'
  },
]);
</script>

<style lang="scss" scoped></style>