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
                hi
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
                yo
            </a-modal>
        </div>
        
    </div>
</template>

<script setup>
import addGroup from '../components/addGroup.vue';
import {ref} from 'vue';

//增加群組
const open = ref(false);
const addNewGroup = () => { 
    console.log('click');
    open.value = true;
};

//加入群組
const joing=ref(false);
const joinGroup=()=>{
    joing.value=true;
    console.log('c')
}
</script>

<style lang="scss" scoped>

</style>