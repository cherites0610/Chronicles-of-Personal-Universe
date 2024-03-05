<template>
    <div id="container">
        <a-card :bordered="false" style="width: 350px " class="shape">
            <div style="display: flex; justify-content: center;">
                <img src="../assets/plant.png" width="50px" height="50px" style="margin-top: 10px;">
            </div>
            <div class="header">登入</div>
            <div class="content">帳號</div>
            <a-input class="inputtext" v-model:value="userName">
                <template #prefix> <!--前綴詞-->
                    <UserOutlined />
                </template>
            </a-input>
            <div class="content">密碼</div>

            <a-input class="inputtext" v-model:value="userPassword">

                <template #prefix> <!--前綴詞-->
                    <LockOutlined />
                </template>
            </a-input>

            <div class="btnn">
                <a-button style="background-color:#288CA3; color: white;">登入</a-button>
            </div>

            <div style="display: flex; justify-content: center; padding-top: 10px;">
                <a-button @click="handleRouterRegister" type="text" style="color:#7E7E7E; font-size: 13px;">還沒註冊嗎? 點此註冊</a-button>
            </div>
        </a-card>
    </div>

</template>



<script setup>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { router } from '../router/index'

const handleRouterRegister = () => {
    router.push('/register');
}

</script>

<style lang="css" scoped>
#container{
    height: 100%;
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

.inputtext {
    margin-left: 10px;
    margin-top: 5px;
    width: 90%;
}

.btnn {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    font-size: 15px;
    padding-top: 30px;
}
</style>