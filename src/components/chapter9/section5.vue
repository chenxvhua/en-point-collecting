<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>


        <div class="segment-wraper"><h1 class="segment-title">as取代though的句型</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">as表“因为”的用法</h1><div class="segment-content"></div></div>

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
