<template>
    <span id="title">筆記本</span>
    <a-spin :spinning="spinning">
        <div>
            <contentCard @clickCard="handleClick" v-for="(key,index) in groups">
                <div style="padding-top: 10px; padding-left: 10px;">
                    {{ key }}
                </div>                
            </contentCard>
        </div>
    </a-spin>
</template>

<script setup>
import contentCard from '../components/contentCard.vue';
import '../mock/index.js'
import { getGroupsById } from '../api/userApi'

const groups = ref([]);
const spinning = ref(true)

getGroupsById(1).then((result) => {
    groups.value = result.data;
    spinning.value = false
})

const handleClick = () => {
    console.log('123')
}
</script>

<style lang="scss" scoped>
#title {
    font-size: 30px;
    position: relative;
    top: 10px;
    left: 30px
}
</style>