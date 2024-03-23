<template>
    <span id="title">群組</span>
    <a-spin :spinning="spinning" size="large" >
        <div>
            <contentCard v-for="(key, index) in groups">
                <div style="padding-left: 10px; padding-top: 10px;">
                   {{ key }} 
                </div>                
            </contentCard>

            <addGroup />
            <joinGroup />
        </div>
    </a-spin>
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
 #title {
    font-size: 30px;
    position: relative;
    top: 10px;
    left: 30px
}
</style>