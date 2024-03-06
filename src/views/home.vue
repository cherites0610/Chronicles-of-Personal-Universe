<template>
    <a-spin :spinning="spinning">
        <a-space style="margin: 20px 15px 20px 40px;" align="start">
            <a-calendar v-model:value="selectTime" @panelChange="onPanelChange">

                <template #dateCellRender="{ current }">
                    <ul v-if="sDate.includes(current.format('YYYY-MM-DD'))" class="events">
                        <li>
                            <a-badge text="期中考" />
                        </li>
                    </ul>
                </template>
            </a-calendar>
            <TimingScheduleCard :selectTime="selectTime.format('YYYY/MM/DD dddd')" />
        </a-space>
    </a-spin>
</template>

<script setup>
import TimingScheduleCard from '../components/TimingScheduleCard.vue';
import dayjs from 'dayjs';
import { useUserStore } from '../pinia/userStore';
import '../mock/index'
import { getScheduleById } from '../api/scheduleApi'

const userStore = useUserStore();
const { uId, userName } = storeToRefs(userStore);

const spinning = ref(true);

const Schedules = ref({});
const sDate = ref([]);

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
const onPanelChange = (value, mode) => {
    console.log(value, mode);
};
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