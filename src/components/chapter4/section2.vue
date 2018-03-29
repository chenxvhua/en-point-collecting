<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">分词可作形容词用</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">分词可作表语用</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">分词可作名词用</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">分词可作副词用</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">分词结构——动词变化</h1><div class="segment-content">
            1.若两个动词所代表的动作同时发生时，第二个动词一定要变成现在分词，若该动词是being动词，变成现在分词being之后要省略。
            2.若两个动词所代表的动作并非同时发生而是有先后次序时，第二个动词就要变成 “to＋原形动词”形成的不定式短语。
            3.若两动词有逗号相隔而无连接时就不必考虑动词所代表的动作先后发生的次序第二个动词一定要变成现在分词。

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">分词结构——单句化简法</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">分词短语——定语从句化简法</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">测验站</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">分词结构——状语从句化简法</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">表身体组织的名词可变成过去分词当形容词用</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">少数现在分词可当介词使用</h1><div class="segment-content">
            including（包括）
            excluding（除外）
            considering（考虑）
            regardlng（关于）
            conceming（关于）
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">独立分词短语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">与使役动词有关的重要分词短语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.分词作形容词用时可置于名词之前修饰该名词；亦可置于be动词之后，纯作表语。

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
