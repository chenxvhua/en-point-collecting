<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>



        <div class="segment-wraper"><h1 class="segment-title">语态的种类</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">主动语态变成被动语态的方式</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">主动语态和被动语态时态要一致</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">授与动词有两种被动语态</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">“动词＋介词”亦可变成被动语态</h1><div class="segment-content">
            1.有些动词之后须与介词连用，形成短语动词，再置宾语时，要把“动词＋介词”形成的短语动词视为及物动词，可变被动语态。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">否定句的语态变化</h1><div class="segment-content">
            he is not loved by them
        </div></div>


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
