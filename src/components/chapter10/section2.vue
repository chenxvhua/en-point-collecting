<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">造句方式</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">理论基础</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">as从句的变化</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">as从句或than从句亦可采倒装结构</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">“as...as”用于肯定句及否定句，“so...as”则只用于否定句</h1><div class="segment-content"></div></div>

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
