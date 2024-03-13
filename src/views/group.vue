<template>
    <div>
        <addGroup/>
        <a-float-button type="primary" @click="showModal" style="width:80px; height: 80px;"/>
        <div>
            <a-modal v-model:open="open" width="400px" title="增加群組"  style="text-align: center;">
                <template #footer>
                        <a-flex justify="center">
                            <a-button key="submit" type="primary" style="background-color: #288CA3;" @click="handleOk">確定</a-button>
                        </a-flex>
                </template>
                
            </a-modal>
        </div>
        
    </div>
</template>

<script setup>
import addGroup from '../components/addGroup.vue';
import {ref} from 'vue';
const open = ref(false);
const showModal = () => { //主介面點開
    console.log('click');
    open.value = true;
};

</script>

<style lang="scss" scoped>

</style>