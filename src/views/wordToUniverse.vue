<template>
    <span id="title">給宇宙的話</span>

    <div v-if="!isEmpty" id="container">
        <a-card hoverable @click="handleClick(index)" :title="key.year" v-for="(key, index) in comments" class="rect">
            <a-typography-paragraph :ellipsis="true" :content="key.comment" />
        </a-card>

    </div>

    <!-- 以下在做增加 -->
    <a-float-button type="primary" @click="formState.isNew = true, showModel = true"
        style="position: absolute;width:80px; height: 80px;" />
    <a-modal :footer="null" :afterClose="modalCancel" :title="formState.year.year()" v-model:open="showModel">
        <div v-if="!formState.isNew">
            <a-typography-paragraph stlye="width=100%" v-model:content="formState.comment"
                :editable="dayjs().year() == formState.year.year()" />  
        </div>
        <a-form v-if="formState.isNew" @finish="onFinish" :model="formState">
            <a-form-item :rules="[{ required: true, message: '請選擇月份' }]" name="year" label="年份">
                <a-date-picker disabled v-model:value="formState.year" picker="year" />
            </a-form-item>
            <a-form-item name="comment" :rules="[{ required: true, message: '一定要留言' }]" label="說話">
                <a-textarea v-model:value="formState.comment" style="height: 200px;" />
            </a-form-item>
        </a-form>
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
    isNew: true,
    year: dayjs(),
    comment: ''
})

const comments = [
    {
        year: 2023,
        comment: '我也不知道大哥要說怎麼，但反正我就隨便亂打，你們就隨便亂看'
    },
    {
        year: 2024,
        comment: '感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次'
    },
    {
        year: 2025,
        comment: '但反正就是亂打，只要有內容可以測試我就很滿意了'
    }
]

const onFinish = values => {
    console.log('Success:', values);
    formState.value.comment = ''
    showModel.value = false
};

const handleClick = (index) => {
    showModel.value = true;
    formState.value.isNew = false
    formState.value.comment = comments[index].comment
    formState.value.year = dayjs().year(comments[index].year)
}

const modalCancel = () => {
    formState.value.comment = ''
}
</script>

<style lang="scss" scoped>
#title {
    font-size: 30px;
    position: relative;
    top: 10px;
    left: 30px
}

#container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 3% 25px 10% 50px;
}

.rect {
    padding: 7px;
    margin: 20px;
    width: 43%;
}
</style>