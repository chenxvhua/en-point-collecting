<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">修饰动词</h1><div class="segment-content">


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">修饰形容词</h1><div class="segment-content">
            1
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">修饰副词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">修饰全句</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.副词形成
              I.形容词+ly形成的副词
              II.自成一格的副词
              III.有些形容词本身既是副词用
              IV.good and可作副词
            2.副词作用
              I.修饰动词（包括动词转化的不定式、动名词、分词），此时副词通常置于动词之后 (看情况)
              II.修饰形容词：此时副词通常置于该形容词之前
              III.修饰副词:此时副词通常置于该副词之前
              IV.修饰全句：此时副词通常置于句首：
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
