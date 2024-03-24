<template>
    <div style="">
    <a-row>
        <a-col :span="10" style="padding-top:30px; padding-left: 30px;">   
            <a-card size="large" title="⚝ 重要且緊急" style="background-color: #FFDCDC;">
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </a-card>                
        </a-col>
        <a-col :span="10" style="padding-top:30px; padding-left: 30px;">           
            <a-card size="large" title="⚝ 重要不緊急" style=" background-color: #E7FBDB;">
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </a-card>        
        </a-col>
        
    </a-row>
    
    <a-row>
        <a-col :span="10" style="padding-top:30px; padding-left: 30px;">   
            <a-card size="large" title="⚝ 不重要但緊急" style=" background-color: #D9E4FF;">
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </a-card>                
        </a-col>
        <a-col :span="10" style="padding-top:30px; padding-left: 30px;">           
            <a-card size="large" title="⚝ 不重要不緊急" style=" background-color: #FFFFFF;">
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </a-card>        
        </a-col>        
    </a-row>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#card{
    height: 100px;
    background-color: rgb(105, 202, 202);
}
</style>