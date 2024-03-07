<template>
    <div id="container">
        <a-card :bordered="false" style="width: 350px " class="shape">
            <div style="display: flex; justify-content: center;">
                <img src="../assets/plant.png" width="50px" height="50px" style="margin-top: 10px;">
            </div>
            <div class="header">登入</div>
            <a-form :model="loginForm" name="basic" @finish="handleLogin">
                <div class="content">帳號</div>
                <a-form-item name="username" :rules="[{ required: true, message: '請輸入賬號!' }]">
                    <a-input class="inputText" v-model:value="loginForm.username">

                        <template #prefix> <!--前綴詞-->
                            <UserOutlined />
                        </template>
                    </a-input>
                </a-form-item>

                <a-form-item name="password" :rules="[{ required: true, message: '請輸入密碼！' }]">
                    <div class="content">密碼</div>
                    <a-input-password class="inputText" v-model:value="loginForm.password">

                        <template #prefix> <!--前綴詞-->
                            <LockOutlined />
                        </template>
                    </a-input-password>
                </a-form-item>

                <a-form-item name="remember">
                    <a-checkbox v-model:checked="loginForm.remember" class="chkBox">保持登錄</a-checkbox>
                </a-form-item>

                <div class="btnn">
                    <a-button html-type="submit" style="background-color:#288CA3; color: white;">
                        登入
                    </a-button>
                </div>
            </a-form>
            <div style="display: flex; justify-content: center; padding-top: 10px;">
                <a-button @click="handleRouterRegister" type="text" style="color:#7E7E7E; font-size: 13px;">還沒註冊嗎?
                    點此註冊</a-button>
            </div>
        </a-card>
    </div>

</template>



<script setup>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { router } from '../router/index'
import { login } from '../api/userApi'
import '../mock/index'
import Cookies from 'js-cookie'
import { notification, message } from 'ant-design-vue';
import { useUserStore } from '../pinia/userStore';

const userStore = useUserStore();
const { uId, userName } = storeToRefs(userStore);

const loginForm = ref({
    username: '',
    password: '',
    remember: true,
})

const handleLogin = values => {
    login('test', 'test').then((res) => {
        if (!(values.username == 'admin')) {
            sessionStorage.setItem('user', JSON.stringify({
                'userToken': '123',
                'userName': values.userName,
                'uId': values.uId
            }));

            Cookies.set('token', 'test', { expires: 1 })
            

            userName.value = res.data.name;
            uId.value = res.data.uId;

            notification.open({
                placement: 'bottomLeft',
                type: 'success',
                message: '您好!' + userName.value,
                description: '您今天似乎沒怎麼事情要做！',
                rtl: true
            });

            router.push('/home');
        } else {
            message.error('登錄失敗');
        }
    }).catch((err) => {
        message.error('登錄失敗');
        console.log(err)
    })
}

const handleRouterRegister = () => {
    router.push('/register');
}
</script>

<style lang="css" scoped>
#container {
    height: 100vh;
    display: flex;
}

.shape {
    justify-content: center;
    box-shadow: 2px 5px 5px rgb(180, 175, 175);
    display: flex-col;
    border-radius: 10px;
    margin: auto;
    background-color: #ffffff;
}

.header {
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    padding-top: 5px;
    /* 內部間距 */
}

.content {
    padding-top: 10px;
    padding-left: 10px;
    font-size: 18px;
}

.inputText {
    margin-left: 10px;
    margin-top: 5px;
    width: 90%;
}

.btnn {
    display: flex;
    justify-content: center;
    font-size: 15px;
}

.chkBox{
    padding-left: 10px;

}
</style>