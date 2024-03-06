<template>
    {{ value }}
    <a-space align="start">
        <a-calendar v-model:value="selectTime" @panelChange="onPanelChange" />
        <div>
            <TimingScheduleCard  :selectTime="selectTime.format('YYYY/MM/DD dddd')">
                
            </TimingScheduleCard>
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
                    
                    <!--標籤顏色-->
                    <a-flex justify="flex-start" style="" >
                        <a-divider type="vertical" style="height: 30px; background-color: #288CA3" />
                        <TagOutlined />
                        <div style="padding-top: 5px;padding-left: 10px ;">標籤顏色 :</div>
                        <div style="padding-left: 56%;">
                            <a-popover title="標籤顏色" trigger="click">
                            <template #content>

                                <a-button @click="btnColor" style="border-radius: 50%;  background-color: #FF7575;"/>
                                <a-button   style="border-radius: 50%;  background-color: #FFBB77;"/>
                                <a-button   style="border-radius: 50%;  background-color: #FFFF6F;"/>
                                <a-button   style="border-radius: 50%;  background-color: #79FF79;"/>
                                <a-button   style="border-radius: 50%;  background-color: #66B3FF;"/>
                                <a-button   style="border-radius: 50%;  background-color: #6A6AFF;"/>
                                <a-button   style="border-radius: 50%;  background-color: #B15BFF;"/>
                            </template>
                            <div style="width: 50px; height: 50px;">
                                <a-button style="border-radius: 50%;  background-color: #FF7575; "/>
                            </div>
                            
                            </a-popover>
                        </div>
                        
                    </a-flex>
                    
                    <!--提醒-->
                    <a-flex justify="flex-start" style="" >
                        <a-divider type="vertical" style="height: 30px; background-color: #288CA3" />
                        <BellOutlined />
                        <div style="padding-top: 5px;padding-left: 10px ;">提醒 :</div>
                    </a-flex>

                    <!--群組-->
                    <a-flex justify="flex-start" style="margin-top: 15px;" >
                        <a-divider type="vertical" style="height: 30px; background-color: #288CA3" />
                        <UsergroupAddOutlined />
                        <div style="padding-top: 5px;padding-left: 10px ;">群組 :</div>
                    </a-flex>
                </a-modal>
            </div>
        </div>   
    </a-space>   
</template>

<script setup>
import TimingScheduleCard from '../components/TimingScheduleCard.vue';
import dayjs from 'dayjs';
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