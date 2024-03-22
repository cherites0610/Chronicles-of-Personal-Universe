<template>
    <div id="container">
        <div id="rect"></div>
        <span>{{ props.name }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['name','startTime','endTime','top','height','yIndex','color'])
</script>

<style lang="scss" scoped>
#container{
    position: absolute;
    left: v-bind('yIndex');
    top: v-bind('props.top');
    display: flex;
    width: 20%;
}

#rect {
    width: 10%;
    height: v-bind('props.height');
    background-color: v-bind('props.color');
    border-radius: 5%;
}
</style>