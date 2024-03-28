<template>
  <span id="title">記錄本</span>
  <checkListBox />
  <a-float-button type="primary" @click="addNewGroup" style="width:80px; height: 80px;" />
  <div>
    <a-modal v-model:open="open" width="350px" title="增加事件" style="text-align: center;">
      <template #footer>
        <a-flex justify="center">
          <a-button key="submit" type="primary" style="background-color: #288CA3;" @click="handleOk">確定</a-button>
        </a-flex>
      </template>

      <a-form :model="addGroupp" style="padding-top: 10px;">
        <a-form-item label="重要程度">
          <a-radio-group v-model:value="important" button-style="solid" class="radio-group-right">
            <a-radio-button value="重要">重要</a-radio-button>
            <a-radio-button value="不重要">不重要</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="緊急程度">
          <a-radio-group v-model:value="emergency" button-style="solid" class="radio-group-right">
            <a-radio-button value="緊急" class="radioBtn">緊急</a-radio-button>
            <a-radio-button value="不緊急" class="radioBtn">不緊急</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="事件內容">
          <a-textarea v-model:value="value" placeholder="請輸入事件名稱" :rows="2" />
        </a-form-item>

      </a-form>

    </a-modal>
  </div>
</template>

<script setup>
import checkListBox from "../components/checkListBox.vue";
import { reactive, ref } from 'vue';

//增加事件
const open = ref(false);
const addNewGroup = () => { //點開
  console.log('click');
  open.value = true;
};
const handleOk = () => {
  open.value = false;
  console.log("1=" + important.value); //重要
  console.log("2=" + emergency.value); //緊急
  console.log("3=" + value.value); //內文
}

//radio group
const important = ref('');
const emergency = ref('');
const value = ref('');
</script>

<style lang="scss" scoped>
.radio-group-right {
  display: flex;
  justify-content: flex-end; //靠右對齊
  padding-right: 5px;
}

#title {
    font-size: 30px;
    position: relative;
    top: 10px;
    left: 30px
}
</style>
