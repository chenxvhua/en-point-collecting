<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">三种倒装句型</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">主语必为普通名词或专有名词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">介副词的倒装</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">there与地方副词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">倒装句的好处</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">here与there的习惯用语</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary"></div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted(){

        },
        watch: {
            ...pageCommon.pageCommonWatch.commonWatch
        },
        methods : {
            ...pageCommon.pageCommonMethod.opeMethod,//增删改查方法
            ...pageCommon.pageCommonMethod.otherMethod, //页面其他方法
        },
    }
</script>
<style scoped>

</style>
