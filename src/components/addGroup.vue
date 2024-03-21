<template>
    <a-float-button type="primary" @click="modalShow = true" style="position: absolute;width:80px; height: 80px;" />

    <div>
        <a-modal v-model:open="modalShow" :footer="null" width="400px" title="增加群組" style="text-align: center;">


            <a-form :model="addGroupp">
                <a-form-item label="群組名稱">
                    <a-input v-model:value="addGroupp.groupName"></a-input>
                </a-form-item>
                <a-form-item label="群組成員">
                    <a-input v-model:value="addGroupp.groupNumber"></a-input>
                </a-form-item>
                <a-form-item>
                    <a-flex justify="center">
                        <a-button key="submit" type="primary" style="background-color: #288CA3;"
                            @click="handleOk">確定</a-button>
                    </a-flex>
                </a-form-item>
            </a-form>

        </a-modal>
    </div>
</template>

<script setup>
const modalShow = ref(false)

const addGroupp = ref({
    groupName: 'test',
    groupNumber: 'test'
})
</script>

<style lang="scss" scoped></style>