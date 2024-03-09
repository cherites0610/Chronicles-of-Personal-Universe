<template>
    <div id="container">
        <a-empty description="都被黑洞吸收走啦！" />
    </div>
</template>

<script setup>
import { Empty } from 'ant-design-vue';
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
</script>

<style lang="scss" scoped>
#container{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>