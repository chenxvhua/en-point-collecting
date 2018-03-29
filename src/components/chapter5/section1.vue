<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">第一种　be动词</h1><div class="segment-content">
            1.be(am 、is、 are 、 was 、 were 、 have / has / had been ))动词原为不完全不及物动词译成“是”此时要用名词或形容词作表语。
            2.be动词之后亦可接现在分词或过去分词表进行时或被动语态，此时be动词就称为助动词。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">第二种　have</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">第三种　do</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">第四种　shall、will</h1><div class="segment-content">
            1.shall 、 will “表“将要”．之后接原形动词。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">第五种　should</h1><div class="segment-content">
            1.should的主要功能就是表示一种义务，译为“应当”，
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">第六种　would</h1><div class="segment-content">
            1.would是will（将要）的过去式，用以表示过去将来时。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">第七种　can、could</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">第八种　may、might</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">第九种　must</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">第十一种　need</h1><div class="segment-content">
            1.否定句中need与not连用此时need为助动词
            2.在疑问句中，need作一般动词或助动词皆可 例子：need he go ? (
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">第十二种　dare</h1><div class="segment-content">
            1.dare可作助动词，用于否定句或疑问句中
            2.How dare +一般陈述句？· · ⋯怎敢⋯ ⋯？
            3.在whether从句中，dare亦可作助动词 例子：I wonder whether he dare do it
            4.dare not ＋原形动词不敢⋯

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">第十三种　used to</h1><div class="segment-content">
            1.used to＋原形动词 过去曾经⋯ ⋯
        </div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.助动词使用时置于动词前，使动词能表现出时态、语态、否定句、疑问句等变化。
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
