<template>
    <a-spin :spinning="spinning">
        <div id="content">
            <contentCard @clickCard="handleClick" v-for="(key,index) in groups">
                {{ key }}
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
#content {
    margin-top: 75px;
}
</style>