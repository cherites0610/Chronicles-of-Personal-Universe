<template>
    {{ value }}
    <a-space align="start">
        <a-calendar v-model:value="selectTime" @panelChange="onPanelChange" />
        <div>
            <TimingScheduleCard  :selectTime="selectTime.format('YYYY/MM/DD dddd')"/>
            <a-float-button type="primary" @click="showModal" style="width:80px; height: 80px;"/>
            <div class="addDates">
                <a-modal v-model:open="open" width="400px" title="增加事項"  style="text-align: center;">
                    <template #footer>
                        <a-flex justify="center">
                            <a-button key="submit" type="primary" style="background-color: #288CA3;" @click="handleOk">確定</a-button>
                        </a-flex>
                    </template>
                    <a-input v-model:value="value" :bordered="false" placeholder="標題" style="font-size: large;"/>

                    
                    <!--時間-->
                    <a-flex justify="flex-start" style="padding-top:10px ;"  >
                        <a-divider type="vertical" style="height: 100px; background-color: #288CA3" />  
                        <FieldTimeOutlined/>
                        <div style="padding-left: 10px; width: 25%; text-align: left;"  >
                            全天 :<br/>
                            <div style="padding-top: 15px; height:10%;">開始日期 :</div><br/>
                            <div style="padding-top: 15px; ;">結束日期 :</div>
                        </div>
                        <div style="padding-left: 25px; width: 75%; margin-right: 5%;"> 
                            <a-flex justify="flex-end" vertical>
                                <a-switch v-model:checked="checked" @click="showTime" style="margin-left: 80%;"/>
                                <a-flex justify="flex-end"><!--開始日期-->
                                    <a-date-picker size="small" style="margin-top: 15px; max-width: 55%;" @change="onChange" @ok="onOk" placeholder="date"></a-date-picker>                                   
                                    <a-time-picker v-if="checked" style="margin-top: 15px; max-width:35% ; margin-left: 5px;" format="HH:mm" placeholder="time" size="small"></a-time-picker>
                                </a-flex>
                                <a-flex justify="flex-end"><!--結束日期-->
                                    <a-date-picker size="small" style="margin-top: 15px; max-width: 55%;" @change="onChange" @ok="onOk" placeholder="date"></a-date-picker>                                   
                                    <a-time-picker v-if="checked" style="margin-top: 15px; max-width:35% ; margin-left: 5px;" format="HH:mm" placeholder="time" size="small"></a-time-picker>
                                </a-flex>
                            </a-flex>                          
                        </div>
                    </a-flex>
                    
                    <!--提醒-->
                    
                    
                </a-modal>
            </div>
        </div>   
       
       
        
    </a-space>
    
</template>

<script setup>
import TimingScheduleCard from '../components/TimingScheduleCard.vue';
import dayjs from 'dayjs';
import { ref } from 'vue';
import { FieldTimeOutlined } from '@ant-design/icons-vue';
const selectTime = ref(dayjs());
const onPanelChange = (value, mode) => {
    //console.log(value, mode);
};
console.log(dayjs.locale())

const timeTTMM=ref(false)
const showTime=()=>{
        if(checked.value==false){console.log("關"+checked.value);}
        else{console.log("開"+checked.value);}
}

//以下是在做增加
const open = ref(false);
const showModal = () => { //主介面點開
  open.value = true;
};
const handleOk = e => { //點開來後確定
  //console.log(e);
  open.value = false;
};

//讓全天鈕可以動(disabled=true時會鎖定)
const checked = ref(false);



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