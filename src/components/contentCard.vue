<template>
    <div style="padding-top: 30px; padding-left: 30px;">
        <div @click="$emit('clickCard')" id="card">
        <span class="text">
            <slot />
        </span>
        </div>
    </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>
#card {
    width: 100%;
    height: 150px;
    border: 0.5px solid rgb(60, 53, 53);
    border-radius: 10px;
    
    background-color: rgb(255, 255, 255);
}

#card:hover {
    cursor: pointer;
    box-shadow: 3px 3px 2px rgb(180, 175, 175);
}

.text{
    font-size: 25px;
}
</style>