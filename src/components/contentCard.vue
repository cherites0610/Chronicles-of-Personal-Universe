<template>
    <div @click="$emit('clickCard')" id="card">
        <span class="text">
            <slot />
        </span>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#card {
    width: 40%;
    height: 150px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: aliceblue;
}

#card:hover {
    cursor: pointer;
}

.text{
    font-size: 30px;
}
</style>