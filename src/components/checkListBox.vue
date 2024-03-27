<template>
    <a-flex horizontal justify="center" align="center"  style="height: 100%;">
        <a-flex vertical> <!--前兩個-->
            <a-card hoverable size="large" @click="cardClick('1')" title="⚝ 重要且緊急"
        style="background-color: #FFDCDC;" class="shape">
                <li v-for="task in imUrgent" :key="task.commit">
                    <div>
                        <a-radio style="z-index: 1000;" @click="handleRadioClick(task.commit)">
                            {{ task.commit }}
                        </a-radio>
                    </div>
                </li>
            </a-card>     
                
            <a-card hoverable size="large" @click="cardClick('2')" title="⚝ 重要不緊急"
                style=" background-color: #E7FBDB; margin-top: 30px; " class="shape">
                <li v-for="task in imNourgent" :key="task.commit">
                    <a-radio @click="handleRadioClick(task.commit)">
                        {{ task.commit }}
                    </a-radio>
                </li>
            </a-card>  
        </a-flex>
        <a-flex vertical> <!--後兩個-->
            <a-card hoverable size="large" @click="cardClick('3')" title="⚝ 不重要但緊急"
            style=" background-color: #D9E4FF; margin-left: 30px;" class="shape">
                <li v-for="task in unimUrgent" :key="task.commit">
                    <a-radio @click="handleRadioClick(task.commit)">
                        {{ task.commit }}
                    </a-radio>
                </li>
            </a-card>
    
            <a-card hoverable size="large" @click="cardClick('4')" title="⚝ 不重要不緊急"
                style=" background-color: #FFFFFF; margin-top: 30px; margin-left: 30px;" class="shape">
                <li v-for="task in unimNourgent" :key="task.commit">
                    <a-radio @click="handleRadioClick(task.commit)">
                        {{ task.commit }}
                    </a-radio>
                </li>
            </a-card>
        </a-flex>
    </a-flex>
                
    <!-- 以下在做點開來顯示細項 -->
    <a-modal :forceRender="true" v-model:open="showModel" :footer="null" style="width: 40%;">
        <div style="text-align: center;">
            <a-typography-title :level="4">⚝ 重要且緊急</a-typography-title>
        </div>
        <li v-for="task in imUrgent" :key="task.commit" style="padding-top: 5px;">
            <a-radio>
                {{ task.commit }}
            </a-radio>
        </li>
    </a-modal>
</template>

<script setup>
import { ref } from 'vue';
const imUrgent = [ //重要且緊急
    { commit: "期中考" },
    { commit: "超市特價" },
]
const unimUrgent = [ //不重要緊急
    { commit: "上廁所" },
    { commit: "洗衣服" },
]
const imNourgent = [ //重要不緊急
    { commit: "英文免修" },
    { commit: "期末報告" },
]
const unimNourgent = [ //不重要不緊急
    { commit: "玩遊戲" },
    { commit: "大哥" },
]

//以下在做對話框
const showModel = ref(false);

const cardClick = (index) => {
    const item = document.getElementsByClassName('ant-modal-content');
    switch(Number(index)){
        case 1:
            console.log(123)
            item[0].style.backgroundColor = "#FFDCDC"
            break;
        case 2:
            item[0].style.backgroundColor = "#E7FBDB"
            break;
        case 3:
            item[0].style.backgroundColor = "#D9E4FF"
            break;
        case 4:
            item[0].style.backgroundColor = "#FFFFFF"
            break;
    }
    showModel.value = true
}

//以下在做radio點擊事件
const handleRadioClick = (taskCommit) => {
    console.log('Task commit:', taskCommit);
};

</script>

<style lang="scss" scoped>
.A{
    display: flex;
    
    justify-content: center;
    
}
.shape{
    
}
</style>