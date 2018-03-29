<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">句中有be动词时，该be动词与主语倒装</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">句中有助动词时，该助动词与主语倒装</div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content">句中若为一般动词时，不可直接倒装</div></div>


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
