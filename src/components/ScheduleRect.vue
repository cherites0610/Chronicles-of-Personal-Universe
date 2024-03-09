<template>
    <div id="container">
        <span>{{ props.startTime }}-{{ props.endTime }} {{ props.name }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['name','startTime','endTime'])
</script>

<style lang="scss" scoped>
#container {

    width: 100%;
    background-color: #8B80F9;
    border-radius: 5%;
}
</style>