<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper">
            <h1 class="segment-title">副词连接词只能连接从句</h1>
            <p class="segment-content">

            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">常用的副词连接词</h1>
            <p class="segment-content">
                1.because（因为)
                2.though（虽然)
                3.if（如果）
                4.unless（除非)
                5.as soon as(一旦）
                6.once（一旦）等。
            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">副词连接词引导状语从句</h1>
            <p class="segment-content">

            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">状语从句的位置</h1>
            <p class="segment-content">
                任何一个副词连接词所引导的从句若置于主句之后，两句之间通常不置逗号。但若该状语从句置于主句之前，则两句之间通常置逗号。
            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">避免双重连接</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">条件句与主句的时态</h1>
            <p class="segment-content">
                if    一般现在时（或现在完成时）动词，主语＋will＋原形动词
                once
                as soon as
                unless
                then
            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">连接性副词</h1>
            <p class="segment-content">
             有些副词有连接词的意味但却不能作连接词用，此类副词就称为连接性副词。此类副词前面要有<span class="red">分号</span>，用以连接两句。
             1.however、nevertheless（然而）
             2.therefore 、 thus(因此)
             3.moreover 、 furthermore 、 in addition(此外)
             4.besides（此外）
             备注：besides与in addition均表“此外”，不过前者多用于有否定或消极意味的句中，而in addition则用于肯定句或积极意味的句中

            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">while作副词连接词及并列连接词的用法</h1>
            <p class="segment-content">
                1.表“当⋯ ⋯ ”时．while视为副词连接词，引导状语从句。
                2.表“而”时，while视为并列连接词连接并列句
            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">其他重要的副词连接词</h1>
            <p class="segment-content">
                1.as (当：虽然：因为〕)
                2.where 在什么地方
                3.or(否则)
                4.nor（也不）
                5.so that（这样的话：以便）
                备注：so that引导的状语从句句中应有助动词may 、 will 、 can等。
                6.so⋯ that ⋯（如此⋯ ⋯以致于⋯ ⋯）
                7.in that（因为）
                8.except that（只可惜，只不过是）
                9.since（因为；自从）
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
