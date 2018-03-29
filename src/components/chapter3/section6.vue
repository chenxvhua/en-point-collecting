<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">准关系代词的种类</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">准关系代词形成的条件</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">than作准关系代词的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">as作准关系代词的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">“such+n．”之后绝不可用like（像）加以修饰</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">比较“the same...as...”与“The same...that...”的不同</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">as可代替主句</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">只能与单数可数名词使用的结构</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">数量词不受限</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">准关系代词but的用法</h1>
            <p class="segment-content">

            </p>
        </div>

        <div class="segment-wraper">
            <h1>本节总结:</h1>
            <div class="summary">
                1.准关系代词只有三个：than 、 as 、 but
                2.than 、 as 、 but作准关系代词时，前面必须有个先行词（名词）。在上例中，我
                们见到than之前有名词money , as之前亦有名词money，而but之前则有代词
                nothing 。这就告诉我们一个重要的概念：than 、 as 、 but之前若有名词，就可形成
                准关系代词
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
