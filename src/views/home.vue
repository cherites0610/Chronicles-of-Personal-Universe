<template>
    {{ value }}
    <a-space align="start">
        <a-calendar v-model:value="selectTime" @panelChange="onPanelChange" />
        <TimingScheduleCard  :selectTime="selectTime.format('YYYY/MM/DD dddd')"/>
    </a-space>
</template>

<script setup>
import TimingScheduleCard from '../components/TimingScheduleCard.vue';
import dayjs from 'dayjs';
const selectTime = ref(dayjs());
const onPanelChange = (value, mode) => {
    console.log(value, mode);
};
console.log(dayjs.locale())
</script>

<style lang="scss" scoped>
.ant-picker-calendar {
    margin: 0px 10px 10px 10px;
    padding: 0px 12px;
}

.ant-picker-calendar .ant-picker-calendar-header {
    padding: 12px 12px;
}
</style>