<template>
    <div class="container-center">
    <a-row>
        <a-col :span="10" style="padding-top:30px; padding-left: 30px;">   
            <a-card hoverable size="large" @ok="showModel = false" v-model:open="showModel" title="⚝ 重要且緊急"  style="background-color: #FFDCDC;">
                <li v-for="task in imUrgent" :key="task.commit">
                    <a-radio></a-radio>
                    {{ task.commit }}
                </li>
            </a-card>                
        </a-col>
        <a-col :span="10" style="padding-top:30px; padding-left: 30px;">           
            <a-card hoverable size="large" title="⚝ 重要不緊急" style=" background-color: #E7FBDB;">
                <li v-for="task in imNourgent" :key="task.commit">
                    <a-radio></a-radio>
                    {{ task.commit }}
                </li>
            </a-card>        
        </a-col>
        
    </a-row>
    
    <a-row>
        <a-col :span="10" style="padding-top:30px; padding-left: 30px;">   
            <a-card hoverable size="large" title="⚝ 不重要但緊急" style=" background-color: #D9E4FF;">
                <li v-for="task in unimUrgent" :key="task.commit">
                    <a-radio></a-radio>
                    {{ task.commit }}
                </li>
            </a-card>                
        </a-col>
        <a-col :span="10" style="padding-top:30px; padding-left: 30px;">           
            <a-card hoverable size="large" title="⚝ 不重要不緊急" style=" background-color: #FFFFFF;">
                <li v-for="task in unimNourgent" :key="task.commit">
                    <a-radio></a-radio>
                    {{ task.commit }}
                </li>
            </a-card>        
        </a-col>        
    </a-row>
    </div>
</template>

<script setup>
    import {ref} from 'vue' ;
    const imUrgent =[ //重要且緊急
        { commit: "期中考" },
        { commit: "超市特價" },
    ]
    const unimUrgent =[ //不重要緊急
        { commit: "上廁所" },
        { commit: "洗衣服" },
    ]
    const imNourgent =[ //重要不緊急
        { commit: "英文免修" },
        { commit: "期末報告" },
    ]
    const unimNourgent =[ //不重要不緊急
        { commit: "玩遊戲" },
        { commit: "大哥" },
    ]

    const showModel = ref(false);
    const formState = ref({
        isNew: true,
        comment: ''
    })
    const ok = (index) => {
        showModel.value = true ;
        formState.value.isNew = false ;
        formState.value.comment = comments[index].comment ;
    }
</script>

<style lang="scss" scoped>

</style>