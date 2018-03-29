<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title">动名词的第一功能——主语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">动名词的第二功能——be动词后的表语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">动名词的第三功能——动词的宾语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">动名词的第四功能——介词的宾语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">所有格与动名词的关系</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">动名词亦可与名词连用，形成复合名词</h1><div class="segment-content">
             a sleeping car 火车中的卧车厢
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">“动名词＋宾语”作主语的变化</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">有些动名词亦可作可数的普通名词用</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">常用的动名词惯用语</h1><div class="segment-content"></div></div>
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
