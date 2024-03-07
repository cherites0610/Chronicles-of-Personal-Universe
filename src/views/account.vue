<template>
    <div style="width: 100px;height: 100px;"></div>
    <span>姓名:{{ userName }}</span>
    <br/>
    <span>使用者編號:{{ uId }}</span>
    <br/>
    <a-button @click="handleLogout">登出</a-button>
</template>

<script setup>
import Cookie from 'js-cookie'
import { useUserStore } from '../pinia/userStore';
import { router } from '../router/index'

const userStore = useUserStore();
const { uId, userName } = storeToRefs(userStore);

const handleLogout = () => {
    Cookie.remove('token')
    uId.value=-1;
    userName.value='未登入';
    router.push('/login');
}
</script>

<style lang="scss" scoped></style>