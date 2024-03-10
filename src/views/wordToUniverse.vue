<template>
    <span id="title">給宇宙的話</span>

    <div v-if="!isEmpty" id="container">
        <div v-for="(key, index) in comments" class="rect">
            <h1>{{ key.year }}</h1>
            <span>{{ key.comment }}</span>
        </div>

    </div>

    <a-float-button type="primary" @click="showModel = true" style="position: absolute;width:80px; height: 80px;" />
    <a-modal title="給宇宙的話" v-model:open="showModel">
        <a-form @finish="onFinish" :model="formState">
            <a-form-item :rules="[{ required: true, message: '請選擇月份' }]" name="year" label="年份">
                <a-date-picker disabled v-model:value="formState.year" picker="year" />
            </a-form-item>
            <a-form-item name="comment" :rules="[{ required: true, message: '一定要留言' }]" label="說話">
                <a-textarea v-model:value="formState.comment" style="height: 200px;" />
            </a-form-item>
            <a-form-item>
                
                <a-button type="primary" html-type="submit">提交</a-button>
            </a-form-item>
        </a-form>
        <template #footer>


        </template>
    </a-modal>

    <div>
        <a-empty v-if="isEmpty" description="都被黑洞吸收走啦！" />
    </div>

</template>

<script setup>
import dayjs from 'dayjs';

const isEmpty = ref(false);
const showModel = ref(false)
const formState = ref({
    year: dayjs(),
    comment: ''
})
const comments = [
    {
        year: 2023,
        comment: '我也不知道羽毛要說怎麼，但反正我就隨便亂打，你們就隨便亂看'
    },
    {
        year: 2024,
        comment: '感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次'
    }
]

const onFinish = values => {
    console.log('Success:', values);
    showModel.value=false
};
</script>

<style lang="scss" scoped>
#title {
    font-size: 30px;
    position: relative;
    top: 10px;
    left: 30px
}

#container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 3% 25px 10% 50px;
}

.rect {
    padding: 7px;
    margin: 20px;
    height: 150px;
    width: 43%;
    border-radius: 7px;
    background-color: burlywood
}
</style>