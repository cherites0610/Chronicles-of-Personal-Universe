<template>
    <a-card style="height: 100%;width: 300px">
        <template #title>
            <a-space style="width:100%" direction="vertical" align="center">{{ props.selectTime }}</a-space>
        </template>
        <a-timeline>
            <a-timeline-item>06</a-timeline-item>
            <a-timeline-item color="#D0D0D0">07</a-timeline-item>
            <a-timeline-item color="#D0D0D0">08</a-timeline-item>
            <a-timeline-item>09</a-timeline-item>
            <a-timeline-item color="#D0D0D0">10</a-timeline-item>
            <a-timeline-item color="#D0D0D0">11</a-timeline-item>
            <a-timeline-item>12</a-timeline-item>
            <a-timeline-item color="#D0D0D0">13</a-timeline-item>
            <a-timeline-item color="#D0D0D0">14</a-timeline-item>
            <a-timeline-item>15</a-timeline-item>
            <a-timeline-item color="#D0D0D0">16</a-timeline-item>
            <a-timeline-item color="#D0D0D0">17</a-timeline-item>
            <a-timeline-item>18</a-timeline-item>
            <a-timeline-item color="#D0D0D0">19</a-timeline-item>
            <a-timeline-item color="#D0D0D0">20</a-timeline-item>
            <a-timeline-item>21</a-timeline-item>
            <a-timeline-item color="#D0D0D0">22</a-timeline-item>
            <a-timeline-item color="#D0D0D0">23</a-timeline-item>
            <a-timeline-item>24</a-timeline-item>
            <a-timeline-item color="#D0D0D0">01</a-timeline-item>
            <a-timeline-item color="#D0D0D0">02</a-timeline-item>
            <a-timeline-item>03</a-timeline-item>
        </a-timeline>
    </a-card>
</template>

<script setup>
const props = defineProps(['selectTime']);
</script>

<style lang="scss" scoped></style>