<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper">
            <h1 class="segment-title">单一连接词</h1>
            <p class="segment-content">
                基本的并列连接词一共只有三个：<span class="red">and 、 or 、 but</span> 。此种连接词可用以连接对等的单
                词，短语或句子，故称为并列连接词。
            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">and、or、but衍生的其他连接词</h1>
            <div class="segment-content">
                both . , . and （一方面～· ⋯同时也～· ⋯）
                either . . . or . . .（要不就是⋯ ⋯要不就是⋯ ⋯）
                neither ... nor ...（既非⋯ ⋯亦非⋯ ⋯）
                not ... but ...（并非⋯ ⋯而是· · ⋯．)
                not only ... but also ⋯（不仅⋯ ⋯而且⋯ ⋯）
                <div class="summary">
                    总共有5种衍生的连接词
                </div>
            </div>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">as well as与rather than作并列连接词</h1>
            <p class="segment-content">
                as well as ⋯以及⋯ ⋯
                rather than ⋯而非⋯ ⋯
            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">使用“both...and...”等连接词应注意事项</h1>
            <p class="segment-content">
             1.连接主语时，“both ⋯ and二”之后始终接复数动词：其余连接词连接主语时，动词则要随最近的主语做单复数变化。
             2.not only ⋯ but also 。 ⋯ ”则可用来连接句子，而且not only引导的句子要采倒装结构
             3.nof only ⋯ but also，二”之中的also通常可以省略。若不省略，则连接单词或短语时but also不可分开但连接句子时，but also一定要分开，也就是将also置于句中
            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">单一连接词的独立用法</h1>
            <p class="segment-content">

            </p>
        </div>

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
