<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>


        <div class="segment-wraper"><h1 class="segment-title">at</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">by</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">for</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">from</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">in</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">on</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">to</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">with</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">about</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">after</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1 class="segment-title">toward</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">except</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">behind</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">into</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">within</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">without</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">above</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">over</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">below</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">beneath</h1><div class="segment-content"></div></div>


        <div class="segment-wraper"><h1 class="segment-title">under</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">underneath</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">against</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">along</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">before</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">beyond</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">during</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">through</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">besides</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">till/until</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">since</h1><div class="segment-content"></div></div>



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
