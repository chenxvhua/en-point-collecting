<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">关系代词所有格的功能</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">关系代词所有格使用三原则</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">取代whose的结构</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">限制性定语从句与非限制性定语从句</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">本节总结:</h1>
            <div class="summary">
               1.whose做所有格关系代词
            </div>
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
