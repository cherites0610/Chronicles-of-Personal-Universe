<template>
    <div class="addDates">
        <a-modal v-model:open="showModel" :footer="null" width="400px" title="增加事項" style="text-align: center;">
            <a-form v-model="Form">
                <a-form-item>
                    <a-input v-model:value="Form.title" :bordered="false" placeholder="標題" style="font-size: large;" />
                </a-form-item>

                <a-flex justify="flex-start" style="padding-top:10px ;">

                    <a-divider type="vertical" style="height: 100px; background-color: #288CA3" />
                    <FieldTimeOutlined />
                    <div style="padding-left: 10px; width: 25%; text-align: left;">
                        全天 :<br />
                        <div style="padding-top: 15px; height:10%;">開始日期 :</div><br />
                        <div style="padding-top: 15px; ;">結束日期 :</div>
                    </div>


                    <div style="padding-left: 25px; width: 75%; margin-right: 5%;">
                        <a-flex justify="flex-end" vertical>
                            <a-form-item>
                                <a-switch v-model:checked="Form.isDay" style="margin-left: 80%;" />
                            </a-form-item>
                            <a-flex justify="flex-end"><!--開始日期-->
                                <a-form-item>
                                    <a-date-picker v-model:value="Form.startDate" size="small" value-format='YYYY-MM-DD'
                                        placeholder="date" />
                                </a-form-item>
                                <a-form-item>
                                    <a-time-picker v-model:value="Form.startTime" v-if="!Form.isDay"
                                        value-format="HH:mm:ss" style="margin-left: 5px;" format="HH:mm"
                                        placeholder="time" size="small"></a-time-picker>
                                </a-form-item>
                            </a-flex>
                            <a-flex justify="flex-end"><!--結束日期-->
                                <a-form-item>
                                    <a-date-picker v-model:value="Form.endDate" value-format='YYYY-MM-DD' size="small"
                                        placeholder="date" />
                                </a-form-item>
                                <a-form-item>
                                    <a-time-picker v-model:value="Form.endTime" v-if="!Form.isDay"
                                        value-format="HH:mm:ss" style="margin-left: 5px;" format="HH:mm"
                                        placeholder="time" size="small"></a-time-picker>
                                </a-form-item>
                            </a-flex>
                        </a-flex>
                    </div>
                </a-flex>



                <!--提醒-->
                <a-flex justify="flex-start" style="">
                    <a-divider type="vertical" style="height: 30px; background-color: #288CA3" />
                    <BellOutlined />
                    <div style="padding-top: 5px;padding-left: 10px ;">提醒 :</div>

                    <a-select v-model:value="Form.times" style="width: 70%;margin-left: 5%;" mode="multiple"
                        placeholder="時間" :options="times"></a-select>

                </a-flex>

                <!--群組-->
                <a-flex justify="flex-start" style="margin-top: 15px;">
                    <a-divider type="vertical" style="height: 30px; background-color: #288CA3" />
                    <UsergroupAddOutlined />
                    <div style="padding-top: 5px;padding-left: 10px ;">群組 :</div>

                    <a-select v-model:value="Form.group" style="width: 70%;margin-left: 5%;" mode="multiple"
                        placeholder="群組" :options="groups"></a-select>

                </a-flex>

                <!--標籤顏色-->
                <a-flex justify="flex-start" style="">
                    <a-divider type="vertical" style="height: 30px; background-color: #288CA3" />
                    <TagOutlined />
                    <div style="padding-top: 5px;padding-left: 10px ;">標籤顏色 :</div>
                    <div style="padding-left: 56%;">
                        <a-popover title="標籤顏色" trigger="click">
                            <template #content>
                                <a-button @click="handleClickCBtn"
                                    style="border-radius: 50%;  background-color: #FF7575;" />
                                <a-button @click="handleClickCBtn"
                                    style="border-radius: 50%;  background-color: #FFBB77;" />
                                <a-button @click="handleClickCBtn"
                                    style="border-radius: 50%;  background-color: #FFFF6F;" />
                                <a-button @click="handleClickCBtn"
                                    style="border-radius: 50%;  background-color: #79FF79;" />
                                <a-button @click="handleClickCBtn"
                                    style="border-radius: 50%;  background-color: #66B3FF;" />
                                <a-button @click="handleClickCBtn"
                                    style="border-radius: 50%;  background-color: #6A6AFF;" />
                                <a-button @click="handleClickCBtn"
                                    style="border-radius: 50%;  background-color: #B15BFF;" />
                            </template>
                            <div style="width: 50px; height: 50px;">
                                <a-button id="PopButton" style="border-radius: 50%;  background-color: #FF7575; " />
                            </div>
                        </a-popover>

                    </div>
                </a-flex>

                <a-flex justify="center">
                    <a-form-item>
                        <a-button key="submit" type="primary" style="background-color: #288CA3;"
                            @click="handleOk">確定</a-button>
                    </a-form-item>
                </a-flex>
            </a-form>
        </a-modal>
    </div>
</template>

<script setup>
import { UsergroupAddOutlined, BellOutlined, TagOutlined, FieldTimeOutlined } from '@ant-design/icons-vue'

const Form = ref({
    title: '',
    isDay: false,
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    color: 'rgb(255, 117, 117)',
    times: [],
    gourps: [],
})

const groups = [
    {
        value: '毛毛毛毛毛'
    },
    {
        value: "專題"
    },
    {
        value: "係學會"
    }
]

const times = [
    {
        value: '30分前'
    },
    {
        value: '一小時前'
    },
    {
        value: '一天前'
    },
    {
        value: '兩天前'
    }
]

const handleClickCBtn = (event) => {
    var item = document.getElementById('PopButton')
    item.style.backgroundColor = event.target.style.backgroundColor
    Form.value.color = event.target.style.backgroundColor;
}

const handleOk = e => { //點開來後確定
    showModel.value = false;
};

const showModel = ref(false);
defineExpose({
    showModel
})
</script>

<style lang="scss" scoped>
.addDates {
    position: fixed;
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    margin-bottom: 0px;
    vertical-align: top;
}
</style>