<template>
    <div>
        <div v-if="!isEmpty" id="container">
        <a-card hoverable @click="handleClick(index)" :title="key.groupName" v-for="(key, index) in comments" class="rect">
            <a-typography-paragraph :ellipsis="true" :content="key.groupNumber" />
        </a-card>

    </div>
    </div>
</template>

<script setup>

    const comments = [
    {
        groupName: '專研組',
        groupNumber: '1548832112'
        
    },
    {
        groupName: '朋友',
        groupNumber: '1515151223'
    },
    {
        groupName: '家人',
        groupNumber: '1543584265'
    }
    ]

    const handleClick = (index) => {
    
    }

</script>

<style lang="scss" scoped>
#title {
    font-size: 30px;
    position: relative;
    top: 10px;
    left: 30px
}

#container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 3% 25px 10% 50px;
}

.rect {
    padding: 7px;
    margin: 20px;
    width: 43%;
}
</style>