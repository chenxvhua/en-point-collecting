<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">关系副词的种类</h1>
            <p class="segment-content">
                1.where用以修饰表地方的名词
                2.when用以修饰表时间的名词
                3.why用以修饰the reason
                4.how
            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">关系副词的功能</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">where的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">when的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">why的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">how的用法</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">关系副词使用要点</h1>
            <p class="segment-content">
               1.在限定修饰的定语从句中除where以外，when及why均可省略而how则一定予以省略。
               2.不过where 、 when 、 why 、 how所修饰的名词若置于be动词之后作表语时，我们亦可省略该名词而保留关系副词。
               3.where 、 when 、 why 、 how亦可视为疑问代词，引导名词性从句，此时可作及物动词的宾语
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
