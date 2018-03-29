<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">否定副词、否定副词短语和否定状语从句</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">如何倒装</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">“only＋介词短语”及“only+then”</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">not only...but(also)</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">not+a＋单数可数名词</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">hardly、scarcely</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">nowhere</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">表示“一⋯⋯就⋯⋯”的句型</div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.倒装句是英语特有的句型。其目的是借由句中某些词类的倒置，可用以强调整个句子的语气。
            偶尔在一篇文章出现倒装的结构，可以使平淡的句子变得生动活泼。一般常出现的倒装结构只有五种
        </div></div>

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
