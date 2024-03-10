<template>
    <div id="container">
        <div id="rect"></div>
        <span>{{ props.name }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['name','startTime','endTime','top','height'])
</script>

<style lang="scss" scoped>
#container{
    position: absolute;
    left: 50px;
    top: v-bind('props.top');
    display: flex;
    width: 20%;
}

#rect {
    width: 10%;
    height: v-bind('props.height');
    background-color: #8B80F9;
    border-radius: 5%;
}
</style>