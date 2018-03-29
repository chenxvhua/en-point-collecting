<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper">
            <h1 class="segment-title">复合关系代词的种类</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">whoever的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">whomever的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">what的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">whatever的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">whichever的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">加油站</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">whatever及whoever亦可作副词连接词</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">however有两种词性</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">whether的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">however的特殊句型</h1>
            <p class="segment-content">

            </p>
        </div>

        <div class="segment-wraper">
            <h1>本节总结:</h1>
            <div class="summary">
               复合关系代词的种类：
                代替人：
                whoever（凡⋯ ⋯的人）
                whomever（凡⋯ ⋯的人）

                代替人或物：
                whichever（三者或者三者以上同一类的任何东西）

                what （所 ⋯的东西）例子：I am interested in what he is doing
                  I.注意事项：
                    1）前面不可有先行词（名词）;
                    2) which在所引导的定语从句中可作主语、宾语或在be动词后作表语

                whatever ( ⋯的任何东西）
                    whatever与whichever很类似，不同之处为：whichever则指同一类的任何
                    一项，而<span class="red">whatever指不同类的任何东西</span>。例如：三辆汽车中的任何一辆要用
                    whichever表示；他有汽车、房子，还收藏了许多名画，这些东西的任何一项则要
                    用whatever表示

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
