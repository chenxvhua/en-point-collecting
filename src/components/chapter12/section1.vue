<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">数词＋名词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">数词＋名词＋形容词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">名词＋现在分词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">副词＋现在分词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">名词＋过去分词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">形容词＋名词变成的过去分词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">well及ill如何形成复合形容词</h1><div class="segment-content"></div></div>

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
