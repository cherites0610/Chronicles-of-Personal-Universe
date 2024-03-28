<template>
    <span id="title">群組</span>
    <a-spin :spinning="spinning" size="large" >
        <div class="container">
            <contentCard class="card" v-for="(key, index) in groups">
                <div style="padding-left: 10px; padding-top: 10px;">
                   {{ key }} 
                </div>                
            </contentCard>
        </div>
    </a-spin>

    <addGroup />
    <joinGroup />
</template>

<script setup>
import addGroup from '../components/addGroup.vue';
import joinGroup from '../components/joinGroup.vue';
import contentCard from '../components/contentCard.vue';
import '../mock/index.js'
import { getGroupsById } from '../api/userApi'

const groups = ref([]);
const spinning = ref(true)

getGroupsById(1).then((result) => {
    groups.value = result.data;
    spinning.value = false
})
</script>

<style lang="scss" scoped>
:where(.css-dev-only-do-not-override-1hsjdkk).ant-spin-nested-loading {
    height: 100%;
    position: relative;
}

 #title { //改標題
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