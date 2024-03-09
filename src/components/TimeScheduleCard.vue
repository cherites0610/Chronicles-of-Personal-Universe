<template>
    <a-card style="height: 100%;width: 300px">
        <template #title>
            <a-space style="width:100%" direction="vertical" align="center">{{ props.selectTime }}</a-space>
        </template>

        <ScheduleRect />

        <a-row class="container" :gutter="10" v-for="key of array " :key="key">
            <a-col :class="{ mainText: (key % 3) === 0, secondaryText: (key % 3) !== 0 }">
                {{ key }}
            </a-col>

            <a-col :class="{ mainArea: (key % 3) === 0, secondaryArea: (key % 3) !== 0 }" :span="20">
                
            </a-col>
        </a-row>

        <ScheduleRect v-for="key in schedules.length" style="position: absolute;top: 26px;height: 50px;"
                    :name="schedules[0].sName" :startTime="schedules[0].startTime" :endTime="schedules[0].endTime" />
    </a-card>
</template>

<script setup>
import ScheduleRect from './ScheduleRect.vue';
const props = defineProps(['selectTime']);

const array = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

const schedules = [
    {
        sName: '期中考',
        startTime: '10:00',
        endTime: '12:00',
        color: '#8B80F9',
    }
]

const timeRange = () => {
    
}
</script>

<style lang="scss" scoped>
.container {
    height: 30px;
}

.mainArea {
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 0.5px;
        background-color: black;
        transform: translate(-50%, -50%);
    }
}

.secondaryArea {
    // background-color:antiquewhite;
}

.mainText {
    width: 30px;
    text-align: center;
    font-size: large;
}

.secondaryText {
    width: 30px;
    font-size: small;
    text-align: center;
    color: thistle;
}
</style>