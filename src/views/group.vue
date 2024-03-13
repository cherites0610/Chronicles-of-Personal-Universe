<template>
    <div>
        <addGroup/>
        <a-float-button type="primary" @click="addNewGroup" style="width:80px; height: 80px;"/>
        <div>
            <a-modal v-model:open="open" width="400px" title="增加群組"  style="text-align: center;">
                <template #footer>
                    <a-flex justify="center">
                        <a-button key="submit" type="primary" style="background-color: #288CA3;" @click="handleOk">確定</a-button>
                    </a-flex>
                </template>
                
                <a-form :model="addGroupp">
                  <a-form-item label="群組名稱">
                    <a-input v-model:value="addGroupp.groupName"></a-input>
                  </a-form-item>
                  <a-form-item label="群組代碼">
                    <a-input v-model:value="addGroupp.groupNumber"></a-input>
                  </a-form-item>
                </a-form>
                
            </a-modal>
        </div>
        
        <a-float-button type="defult" @click="joinGroup" style="width:80px; height: 80px; right: 120px;"/>
        <div>
            <a-modal v-model:open="joing" width="400px" title="新增群組"  style="text-align: center;">
                <template #footer>
                    <a-flex justify="center">
                        <a-button key="submit" type="primary" style="background-color: #288CA3;" @click="handleOk">確定</a-button>
                    </a-flex>
                </template>
                <a-form>
                  <a-form-item label="群組代碼">
                    <a-input></a-input>
                  </a-form-item>
                </a-form>
            </a-modal>
        </div>
        
    </div>
</template>

<script setup>
import addGroup from '../components/addGroup.vue';
import {reactive, ref} from 'vue';

//增加群組
const open = ref(false);
const addNewGroup = () => { //點開
    console.log('click');
    open.value = true;
};
const handleOk=()=>{
   open.value=false;
   console.log("群組名稱="+addGroupp.groupName);
   console.log("群組代碼="+addGroupp.groupNumber); 
}
const addGroupp=reactive({
    groupName:'',
    groupNumber:''
});

//加入群組
const joing=ref(false);
const joinGroup=()=>{
    joing.value=true;
    console.log('c')
}
</script>

<style lang="scss" scoped>

</style>