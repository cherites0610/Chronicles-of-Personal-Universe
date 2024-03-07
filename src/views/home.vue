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

import { ref } from 'vue';
import { FieldTimeOutlined,TagOutlined,BellOutlined,UsergroupAddOutlined} from '@ant-design/icons-vue';
const selectTime = ref(dayjs());
const onPanelChange = (value, mode) => {
    //console.log(value, mode);
};
//console.log(dayjs.locale())



const btnColor=()=>{

}

//偵測整天開關動作
const showTime=()=>{
        if(checked.value==false){console.log("關"+checked.value);}
        else{console.log("開"+checked.value); }
}
//讓全天鈕可以動(disabled=true時會鎖定)
const checked = ref(false);

//以下是在做增加
const open = ref(false);
const showModal = () => { //主介面點開
  open.value = true;
};
const handleOk = e => { //點開來後確定
  //console.log(e);
  open.value = false;
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

.addDates{
    position: fixed;

}
</style>