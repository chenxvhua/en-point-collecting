<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper">
            <h1 class="segment-title">关系指示代词由指示代词变化而成</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">关系指示代词的功能</h1>
            <p class="segment-content">

            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">本节总结：</h1>
            <div class="summary">
                用which代替指示代词,引导定语从句修饰前面的名词
                that（那个⋯ ⋯）
                this（这个⋯ ⋯）
                those（那些⋯ ⋯）
                these（这些⋯ ⋯）
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
