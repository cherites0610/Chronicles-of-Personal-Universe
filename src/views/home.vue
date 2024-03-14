<template>
    <a-spin :spinning="spinning">
        <a-space style="margin: 20px 15px 20px 40px;" align="start">
            <a-calendar v-model:value="selectTime">

                <template #dateCellRender="{ current }">
                    <ul v-if="sDate.includes(current.format('YYYY-MM-DD'))" class="events">
                        <li>
                            <a-badge :text="Schedules[sDate.indexOf(current.format('YYYY-MM-DD'))].sName"
                                :color="Schedules[sDate.indexOf(current.format('YYYY-MM-DD'))].color" />
                        </li>
                    </ul>
                </template>
            </a-calendar>
            <TimingScheduleCard :selectTime="selectTime.format('YYYY/MM/DD dddd')" />

            <a-float-button type="primary" @click="form.showModel = true" style="width:80px; height: 80px;" />
            <addScheduleForm ref="form" />
        </a-space>
    </a-spin>
</template>

<script setup>
import TimingScheduleCard from '../components/TimeScheduleCard.vue';
import addScheduleForm from '../components/addScheduleForm.vue'
import dayjs from 'dayjs';
import '../mock/index'
import { getScheduleById } from '../api/scheduleApi'

const spinning = ref(true);
const Schedules = ref({});
const sDate = ref([]);
const form = ref(null);

getScheduleById('2024-03-01', '2024-03-31').then((result) => {
    Schedules.value = result.data.schedules;
    for (let i = 0; i < Schedules.value.length; i++) {
        sDate.value.push(Schedules.value[i].dTime)
    }
    spinning.value = false;
}).catch((err) => {
    console.log(err)
})

const selectTime = ref(dayjs());
</script>

<style lang="scss" scoped>
.events{
    list-style-type: none
}

.ant-picker-calendar {
    margin: 0px 10px 10px 10px;
    padding: 0px 12px;
}

.ant-picker-calendar .ant-picker-calendar-header {
    padding: 12px 12px;
}
</style>