<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>


        <div class="segment-wraper">
            <h1 class="segment-title">破折号</h1>
            <p class="segment-content">
              1.换句话说
              例子：  He is trash--he 15 good for nothing
              2.同位语
              例子：  He finally made his purpose known to us --to chase Susan .
            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">冒号</h1>
            <p class="segment-content">
                此类符号亦可用以连接句子，来强调前面句中的名词。
            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">分号</h1>
            <p class="segment-content">
               1.此类符号在文章中较常出现等于“逗号＋连接词（and 、 so 、but...）”
               2.句中的对等语原本用逗号相隔，再以并列连接词相连，但若某对等语中间有插入语
                时，会多出一些逗号。为了句意清楚起见，可用分号取代逗号。
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
