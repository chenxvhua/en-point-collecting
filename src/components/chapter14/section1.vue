<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">反意疑问句的使用规则</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">句中有否定副词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">句中有助动词短语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">否定反意疑问句中not的位置</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">反意疑问句须用人称代词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">“I＋表意见动词＋that从句”的反意疑问句</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">need作一般动词及助动词的反问句</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">助动词不止一个时如何反问</h1><div class="segment-content"></div></div>


        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.陈述句为肯定时，接否定反意疑问句，陈述句为否定时，接肯定反意疑问句。
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
