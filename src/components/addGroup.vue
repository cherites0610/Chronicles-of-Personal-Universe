<template>
    <a-float-button type="primary" @click="modalShow = true" style="position: absolute;width:80px; height: 80px;" />

    <div>
        <a-modal :forceRender="true" v-model:open="modalShow" :footer="null" width="400px" title="增加群組"
            style="text-align: center;">


            <a-form :model="addGroupp">
                <a-form-item label="群組名稱">
                    <a-input v-model:value="addGroupp.groupName"></a-input>
                </a-form-item>
                <a-form-item label="群組成員">
                    <a-input id="groupInput" v-model:value="addGroupp.groupNumber"></a-input>
                </a-form-item>

                <div id="groupMemberDiv">
                    <memberRect />
                </div>
                <a-form-item>
                    <a-flex justify="center">
                        <a-button key="submit" type="primary" style="background-color: #288CA3;">確定</a-button>
                    </a-flex>
                </a-form-item>


            </a-form>

        </a-modal>
    </div>
</template>

<script setup>
import memberRect from './memberRect.vue';

const modalShow = ref(false)

onMounted(() => {
    const groupInput = document.getElementById('groupInput');
    const groupMemberDiv = document.getElementById('groupMemberDiv')

    groupInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            
            groupMemberDiv.innerHTML+="<div>"+addGroupp.value.groupNumber+"</div>";
            addGroupp.value.groupNumber=''
        }
    })
})

const addGroupp = ref({
    groupName: 'test',
    groupNumber: 'test'
})
</script>

<style lang="scss" scoped>
#groupMemberDiv {
    height: 100px;
    width: 100%;
    background-color: antiquewhite;
    border-radius: 2%;
    margin-bottom: 15px;
}
</style>