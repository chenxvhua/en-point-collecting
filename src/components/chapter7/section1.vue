<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">基本句型</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用时机及要点</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            虚拟语气 是一种表示假设状态的句型，由if引导的状语从句与主句构成。依时态的不同而形成下列四种基本句型：
            a．纯条件的虚拟语气 (假设状态) if用现在时
            b．与现在事实相反的虚拟语气    if用过去时，主句过去(would)将来时
            c．与过去事实相反的虚拟语气    if用过去完成时，主句用过去将来完成时
            d．与将来状况相反的虚拟语气    if要用助动词should，译成“万一”，主句则用过去时(低可能性情况)或现在时助动词（高可能性）。

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
