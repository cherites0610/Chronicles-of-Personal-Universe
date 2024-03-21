<template>
    <span id="title">給宇宙的話</span>

    <a-spin :spinning="spinning" size="large">
        <contentCard v-for="(key, index) in comments">
            <h3>
                {{ key.year }}
            </h3>
            <a-typography-paragraph :ellipsis="{rows:4}" :content="key.comment" />
        </contentCard>
    </a-spin>

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
import contentCard from '../components/contentCard.vue'
import { getWordToUById } from '../api/scheduleApi'

const onExpand = (event) => {
    console.log(event)
}

const onEllipsis = (event) => {
    console.log(evenet)
}

const comments = ref([]);
const isEmpty = ref(false);
const showModel = ref(false)
const spinning = ref(true);
const formState = ref({
    isNew: true,
    year: dayjs(),
    comment: ''
})

getWordToUById('1').then((result) => {
    comments.value = result.data
    spinning.value = false
})

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