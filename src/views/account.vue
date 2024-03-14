<template>
    <div style="width: 100px;height: 100px;"></div>
    <a-card :bordered="false" style="width: 350px " class="shape">
        <div style="display: flex; justify-content: center;" size="large">
            <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" style="" />
        </div>

        <a-form :model="loginForm" name="basic">
            <a-form-item label="帳號">
                {{ uId }}
            </a-form-item>
            <a-form-item label="暱稱">
                {{ userName }}
            </a-form-item>
            <a-form-item label="信箱">
                {{ userEmail }}
            </a-form-item>
            <a-form-item label="密碼">
                ***********
            </a-form-item>
        </a-form>
        <a-flex justify="center">
            <a-button @click="handleLogout">登出</a-button>
        </a-flex>
    </a-card>

</template>

<script setup>
import Cookie from 'js-cookie'
import { useUserStore } from '../pinia/userStore';
import { router } from '../router/index'

const userStore = useUserStore();
const { uId, userName, userEmail } = storeToRefs(userStore);

const handleLogout = () => {
    Cookie.remove('token')
    uId.value = -1;
    userName.value = '未登入';
    router.push('/login');
}

const loginForm = ref({
    username: '',
    nyckname: '', //暱稱
    password: '',
    email: '',
    remember: true,
})
</script>

<style lang="css" scoped>
.shape {
    justify-content: center;
    box-shadow: 2px 5px 5px rgb(180, 175, 175);
    display: flex-col;
    border-radius: 10px;
    margin: auto;
    background-color: #ffffff;
}
</style>