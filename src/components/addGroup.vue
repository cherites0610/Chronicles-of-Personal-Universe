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

    const comments = [
    {
        year: 2023,
        comment: '我也不知道羽毛要說怎麼，但反正我就隨便亂打，你們就隨便亂看'
    },
    {
        year: 2024,
        comment: '感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次'
    },
    {
        year: 2025,
        comment: '但反正就是亂打，只要有內容可以測試我就很滿意了'
    }
    ]

    const handleClick = (index) => {
    showModel.value = true;
    formState.value.isNew = false
    formState.value.comment = comments[index].comment
    formState.value.year = dayjs().year(comments[index].year)
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