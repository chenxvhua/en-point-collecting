<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">very、much</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">little、a little</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">no longer</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">sometimes、sometime、some time、some times</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">ago、before、since、after</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">quite</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">someday、one day、the other day、some other day</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">so much so that...</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">somewhat、somehow、anyhow</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">enough</h1><div class="segment-content"></div></div>


        <div class="segment-wraper"><h1 class="segment-title">likely、probably、possibly</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">Short Response（简应句）</h1><div class="segment-content">
            1.你是⋯ ⋯我也是／你不是⋯ ⋯我也不是。
            2.之前应有连接词and连接两句
            3.主语与be动词倒装
            4.主语与助动词倒装
            5.主语与do 、 does 、 did倒装 例子：he came, and so did she
            6.否定句用neither（或nor，使用neither或nor时须采倒装结构）或either。neither为副词，故and不可省略但nor为连接词，前面不必置and

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">常见的“名词＋介词＋名词”副词短语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">not要置于不定式短语、分词、动名词之前</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">助动词＋副词＋本动词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">副词修饰被动语态时，通常置于过去分词之前</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">more than与倍数的关系</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">more than与over的关系</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">避免双重比较</h1><div class="segment-content">

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">避免双重否定</h1><div class="segment-content">

        </div></div>


        <div class="segment-wraper"><h1 class="segment-title">关系副词when、why、how、where</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">指示代词that及this可作副词用</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">“I think so．”</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">副词＋独立分词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">all（三人以上一起）、both（两人一起）</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">容易混淆的副词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">greatly与highly之区别</h1><div class="segment-content"></div></div>


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
