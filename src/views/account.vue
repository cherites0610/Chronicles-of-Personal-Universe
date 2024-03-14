<template>
    <div style="width: 100px;height: 100px;"></div>
    <a-card :bordered="false" style="width: 350px " class="shape">
        <div style="display: flex; justify-content: center;">
                <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" style=""/>
        </div>
        
        <a-form :model="loginForm" name="basic">
            <a-form-item label="帳號">
                {{ userName }}
            </a-form-item>
            
        </a-form>

    </a-card>
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

const loginForm = ref({
    username: '',
    nyckname:'', //暱稱
    password: '',
    email:'',
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