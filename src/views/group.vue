<template>
    <a-spin wrapperClassName="temp" :spinning="spinning" size="large" style="height: 100%;">
        <div>
            <contentCard v-for="(key, index) in groups">
                {{ key }}
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
</style>