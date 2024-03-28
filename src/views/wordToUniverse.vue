<template>
    <span id="title">給宇宙的話</span>
    <a-spin :spinning="spinning" size="large">
        <div class="container">
            <contentCard class="card" @clickCard="handleCardClick(index)" v-for="(key, index) in comments">
                <div>
                    <h3 style="padding-top: 5px; padding-left: 10px;">
                        {{ key.year }}
                    </h3>
                    <a-typography-paragraph :ellipsis="{ rows: 4 }" :content="key.comment"
                        style="padding-left: 10px; padding-right: 10px;" />
                </div>
            </contentCard>
        </div>
    </a-spin>

    <a-float-button type="primary" @click="formState.isNew = true, showCreatModel = true" v-if="true"
        style="position: absolute;width:80px; height: 80px;" />
    <a-modal :footer="null" :afterClose="modalCancel" title="留言" v-model:open="showCreatModel">
        <a-form v-if="formState.isNew" :model="formState">
            <a-form-item :rules="[{ required: true, message: '請選擇月份' }]" name="year" label="年份">
                <a-date-picker disabled v-model:value="formState.year" picker="year" />
            </a-form-item>
            <a-form-item name="comment" :rules="[{ required: true, message: '一定要留言' }]" label="說話">
                <a-textarea v-model:value="formState.comment" style="height: 200px;" />
            </a-form-item>
            <a-form-item>
                <a-flex justify="center">
                    <a-button key="submit" @click="showCreatModel = false" type="primary"
                        style="background-color: #288CA3;">確定</a-button>
                </a-flex>
            </a-form-item>
        </a-form>
    </a-modal>

    <a-modal :title="editState.year" @ok="showEditModel = false" v-model:open="showEditModel">
        <a-typography-paragraph v-model:content="editState.comment"
            :editable="editState.year == Number(dayjs().format('YYYY'))" />
    </a-modal>

    <div>
        <a-empty v-if="isEmpty" description="都被黑洞吸收走啦！" />
    </div>

</template>

<script setup>
import dayjs from 'dayjs';
import contentCard from '../components/contentCard.vue'
import { getWordToUById } from '../api/scheduleApi'

const comments = ref([]);
const isEmpty = ref(false);
const showCreatModel = ref(false)
const showEditModel = ref(false)
const spinning = ref(true);
const formState = ref({
    year: dayjs(),
    comment: ''
})

const editState = ref({
    year: 2023,
    comment: '',
})

getWordToUById('1').then((result) => {
    comments.value = result.data
    spinning.value = false
})

const handleCardClick = (index) => {
    showEditModel.value = true;
    editState.value.year = comments.value[index].year;
    editState.value.comment = comments.value[index].comment
    console.log(Number(dayjs().format('YYYY')))

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

.container{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.card{
    width: 45%;
}
</style>