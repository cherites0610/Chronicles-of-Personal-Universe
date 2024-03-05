<template>
    <a-card style="height: 100%;width: 300px">
        <template #title>
            <a-space style="width:100%" direction="vertical" align="center">{{ props.selectTime }}</a-space>
        </template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
    </a-card>
</template>

<script setup>
const props = defineProps(['selectTime']);
</script>

<style lang="scss" scoped></style>