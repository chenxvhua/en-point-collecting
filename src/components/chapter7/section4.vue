<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">基本句型及要点</h1><div class="segment-content"></div></div>


        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            使用本虚拟语气时，if从句一定要加助动词should , " if .. should ”译成“万一” 。
            若假设的可能性很低，则主句要置过去时助动词（和与现在事实相反的虚拟语气相
            同），但若假设的可能性很高，则主句要用现在时助动词（与纯条件虚拟语气相同）。
            句型如下；
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
