<template>
    <a-card style="height: 100%;width: 300px">
        <template #title>
            <a-space style="width:100%" direction="vertical" align="center">{{ props.selectTime }}</a-space>
        </template>

        <a-row class="container" :gutter="10" v-for="key of array " :key="key">
            <a-col :class="{ mainText: (key % 3) === 0, secondaryText: (key % 3) !== 0 }">
                <span class="text">{{ key }}</span>
            </a-col>

            <a-col :class="{ mainArea: (key % 3) === 0, secondaryArea: (key % 3) !== 0 }" :span="20">

            </a-col>
        </a-row>

        <ScheduleRect v-for="(key, index) in props.Schedules.length"
            :height="timeRange(props.Schedules[index].startTime, props.Schedules[index].endTime)"
            :top="rectHeight(props.Schedules[index].startTime)" :name="props.Schedules[index].sName"
            :startTime="props.Schedules[index].startTime" :endTime="props.Schedules[index].endTime"
            :yIndex="(props.Schedules[index].y_index*50)+'px'" :color="props.Schedules[index].color" />
    </a-card>
</template>

<script setup>
import ScheduleRect from './ScheduleRect.vue';
const props = defineProps(['selectTime','Schedules']);

const array = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

const temp = [
{
        sName: '期中考',
        startTime: '10:00',
        endTime: '13:00',
        color: '#8B80F9',
        y_index: 0
    }
]

const rectHeight = (startTime) => {
    const startTimeList = startTime.split(':');
    const minuteDiffenence = (Number(startTimeList[1]) / 60);
    return ((Number(startTimeList[0]) + Number(minuteDiffenence) - 6) * 30 + 95) + 'px'
}

const timeRange = (startTime, endTime) => {
    const startTimeList = startTime.split(':');
    const endTimeList = endTime.split(':');
    const hourDifference = Number(endTimeList[0] - startTimeList[0]);
    const minuteDiffenence = Math.abs(endTimeList[1] - startTimeList[1]) / 60;
    const total = ((hourDifference + minuteDiffenence) * 30)
    return total + 'px';
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
        z-index: 500;
        background-color: black;
        transform: translate(-50%, -50%);
    }
}

.mainText {
    width: 30px;
    font-size: large;
}

.secondaryText {
    width: 30px;
    font-size: small;
    color: thistle;
}

.text {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
</style>