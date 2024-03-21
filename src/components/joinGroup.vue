<template>
    <a-float-button type="defult" @click="modalShow=true" style="position: absolute; width:80px; height: 80px; right: 120px;"/>
        <div>
            <a-modal v-model:open="modalShow    " width="400px" title="加入群組"  style="text-align: center;">
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
</template>

<script setup>
const modalShow = ref(false)
</script>

<style lang="scss" scoped>

</style>