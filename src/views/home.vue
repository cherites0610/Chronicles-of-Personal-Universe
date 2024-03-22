<template>
    <a-spin :spinning="spinning">
        <a-space style="margin: 20px 15px 20px 40px;" align="start">
            <a-calendar @change="change" @panelChange="onPanelChange" v-model:value="selectTime"> <!--日曆外框(?)-->
                <template #headerRender="{ value: current, type, onChange, onTypeChange }">
                    <a-flex justify="space-around" style="padding: 10px 0px;">
                        <a-button @click="onChange(current.subtract(1,'month'))">上月</a-button>
                        <span style="font-size: larger;">{{ current.format('YYYY-MM-DD') }}</span>
                        <a-button @click="onChange(current.add(1,'month'))">下月</a-button>
                    </a-flex>
                </template>
                
                <template #dateFullCellRender="{ current }" >
                    <div :data-id="current.format('YYYY-MM-DD')" class="dateCell">
                        <span style="font-size: large; margin-right: 10px; padding-right: 5px;">{{ current.format('DD') }}</span> <!--格子內數字-->
                        <ul v-if="sDate.includes(current.format('YYYY-MM-DD'))" class="events">
                            <li style="text-align: left; padding-left: 10px;"> <!--事件靠左-->
                                <a-badge :text="Schedules[sDate.indexOf(current.format('YYYY-MM-DD'))].sName"
                                    :color="Schedules[sDate.indexOf(current.format('YYYY-MM-DD'))].color" />
                            </li>
                        </ul>
                    </div>
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
const lastSelect = ref();

const onPanelChange = (value, mode) => {
    // console.log(value, mode);
};

const change = (day) => {
    if (lastSelect.value) {
        lastSelect.value.style.backgroundColor = ''
        lastSelect.value.style.color = ''
    }

    let temp = '[data-id="' + day.format("YYYY-MM-DD") + '"]'
    var item = document.querySelector(temp).querySelector("span");

    item.style.backgroundColor = '#288CA3' //點擊後背景色
    item.style.borderRadius = '50%'; //圓形背景
    item.style.color = 'white' //文字顏色
    item.style.padding='0px 3px 2px 3px' //調整圓圈到文字的距離 上右下左
    lastSelect.value = item
}

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
.events {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.dateCell {
    height: 12.5vh;
    width: auto;
    border: 1px solid rgb(248, 248, 248); //框框顏色
}

.dateCell:hover {
    background-color: rgb(213, 233, 253); //滑鼠移動到日曆上的顏色
}

.ant-picker-calendar {
    margin: 0px 10px 10px 10px;
    padding: 0px 12px;
}

.ant-picker-calendar .ant-picker-calendar-header {
    padding: 12px 12px;
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-picker-calendar.ant-picker-calendar-full .ant-picker-calendar-date-content {
    height: 50px !important;
}

.dateSetting{
    background-color: rgb(117, 29, 114);
}

.colorText{
    background-color: rgb(164, 222, 235);
}
</style>