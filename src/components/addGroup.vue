<template>
    <a-float-button type="primary" @click="modalShow = true" style="position: absolute;width:80px; height: 80px;" />

    <div>
        <a-modal @cancel="modalCanle" :forceRender="true" v-model:open="modalShow" :footer="null" width="400px"
            title="增加群組" style="text-align: center;">

            <a-form :model="addGroupp">
                <a-form-item label="群組名稱">
                    <a-input v-model:value="addGroupp.groupName"></a-input>
                </a-form-item>
                <a-form-item label="群組成員">
                    <a-mentions id="temp" v-model:value="value" :options="options" :loading="loading"
                        @search="onSearch" @select="selectMember">
                        <template #option="{ payload }">
                            <img :src="payload.avatar_url" :alt="payload.login" />
                            <span>{{ payload.login }}</span>
                        </template>
                    </a-mentions>
                    <!-- <a-input id="groupInput" v-model:value="addGroupp.groupNumber"></a-input> -->
                </a-form-item>

                <div id="groupMemberDiv">
                    <memberRect v-for="(key, index) in members">
                        <span>{{ key }}</span>
                    </memberRect>
                </div>
                <a-form-item>
                    <a-flex justify="center">
                        <a-button key="submit" type="primary" style="background-color: #288CA3;">確定</a-button>
                    </a-flex>
                </a-form-item>


            </a-form>

        </a-modal>
    </div>
</template>

<script setup>
import memberRect from './memberRect.vue';

const modalShow = ref(false)
const members = ref([])

// onMounted(() => {
//     const groupInput = document.getElementById('groupInput');

//     groupInput.addEventListener("keydown", function (event) {
//         if (event.keyCode === 13) {
//             members.value.push(addGroupp.value.groupNumber)
//             addGroupp.value.groupNumber = ''

//         }
//     })
// })

const selectMember = (option) => {
    console.log(option)
    members.value.push(option.value)
    value.value=[]
}

const addGroupp = ref({
    groupName: '',
    groupNumber: ''
})

const modalCanle = () => {
    addGroupp.value.groupName = ''
    addGroupp.value.groupNumber = ''
    members.value = []
}

import { debounce } from 'lodash-es';
import { computed, ref } from 'vue';
const value = ref('');
const loading = ref(false);
const users = ref([]);
const search = ref('');
const loadGithubUsers = debounce(key => {
    if (!key) {
        users.value = [];
        return;
    }
    fetch(`https://api.github.com/search/users?q=${key}`)
        .then(res => res.json())
        .then(({ items = [] }) => {
            if (search.value !== key) return;
            users.value = items.slice(0, 10);
            loading.value = false;
        });
}, 800);
const onSearch = searchValue => {
    search.value = searchValue;
    loading.value = !!searchValue;

    users.value = [];

    loadGithubUsers(searchValue);
};

const options = computed(() =>
    users.value.map(user => ({
        key: user.login,
        value: user.login,
        class: 'antd-demo-dynamic-option',
        payload: user,
    })),
);
</script>

<style lang="scss" scoped>
#groupMemberDiv {
    height: 100px;
    width: 100%;
    background-color: antiquewhite;
    border-radius: 2%;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}

.antd-demo-dynamic-option img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
}
</style>