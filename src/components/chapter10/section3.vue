<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">“as...as...”可与单数可数名词连用</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">as...as one can</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">as...as any</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">as...as ever</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">as...as ever lived</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">两个形容词的相互比较</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">倍数词造句法</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">not so much...as</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">the＋比较级...,the＋比较级</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">no more...than⋯/no less...than...</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">no more than⋯/no less than...</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">at most/at best</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">much less</h1><div class="segment-content"></div></div>

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
