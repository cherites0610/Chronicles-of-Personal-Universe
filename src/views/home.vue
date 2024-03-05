<template>
    {{ value }}
    <a-space align="start">
        <a-calendar v-model:value="selectTime" @panelChange="onPanelChange" />
        <div>
            <TimingScheduleCard  :selectTime="selectTime.format('YYYY/MM/DD dddd')"/>
            <a-button type="primary" @click="showModal">增加</a-button>
            <div class="addDates">
                <a-modal v-model:open="open" width="400px" title="增加事項" @ok="handleOk" style="text-align: center;">
                    <template #footer>
                        <a-flex justify="center">
                            <a-button key="submit" type="primary" style="background-color: #288CA3;" @click="handleOk">確定</a-button>
                        </a-flex>
                    </template>
                    <a-input v-model:value="value" :bordered="false" placeholder="標題" style="font-size: large;"/>

                    

                    <a-flex justify="flex-start" style="padding-top:10px ;"  >
                        <a-divider type="vertical" style="height: 80px; background-color: #288CA3" />
                        <FieldTimeOutlined/>
                        <div style="padding-left: 10px; width: 15%;" >
                            全天 :<br/>
                            <div style="margin-top: 15px;">
                                日期 :
                                
                            </div>
                        </div>
                        <div style="padding-left: 20px; width: 70%;"> 
                            <a-flex justify="flex-end" vertical>
                                <a-switch v-model:checked="disabled" style="margin-left: 80%; background-color: #288CA3;"/>
                                <a-flex justify="flex-end">
                                    <a-date-picker size="small" style="margin-top: 15px; max-width: 45%;" @change="onChange" @ok="onOk"></a-date-picker>
                                    <a-time-picker style="margin-top: 15px; max-width:45% ;" size="small"></a-time-picker>
                                </a-flex>
                                
                            </a-flex>                          
                                
                        </div>
                        
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
import { FieldTimeOutlined } from '@ant-design/icons-vue';
const selectTime = ref(dayjs());
const onPanelChange = (value, mode) => {
    console.log(value, mode);
};
console.log(dayjs.locale())



//以下是在做增加
const open = ref(false);
const showModal = () => { //主介面點開
  open.value = true;
};
const handleOk = e => { //點開來後確定
  console.log(e);
  open.value = false;
};
const handleCancel = () => { //點開來後取消
  open.value = false;
};

//讓全天鈕可以動(disabled=true時會鎖定)
const disabled = ref(false);

const showTime=ref("");
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