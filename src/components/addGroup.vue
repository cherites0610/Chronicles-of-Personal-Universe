<template>
    <div>
        <div v-if="!isEmpty" id="container">
        <a-card hoverable @click="handleClick(index)" :title="key.year" v-for="(key, index) in comments" class="rect">
            <a-typography-paragraph :ellipsis="true" :content="key.comment" />
        </a-card>

    </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>

</style>