<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">关系代词引导定语从句</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">关系代词的种类及其功能</h1>
            <pre class="segment-content">
                <table>
                    <tr>
                        <td>关系代词</td>
                        <td>主格</td>
                        <td>宾格</td>
                    </tr>
                    <tr>
                        <td>代替人</td>
                        <td>who</td>
                        <td>whom</td>
                    </tr>
                     <tr>
                        <td>代替事物</td>
                        <td>which</td>
                        <td>which</td>
                    </tr>
                     <tr>
                        <td>代替整个句子</td>
                        <td>which</td>
                        <td>which</td>
                    </tr>
                </table>

            </pre>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">关系代词使用三原则</h1>
            <p class="segment-content">
                1.关系代词之前要有先行词（即表人或事物的名词）;
                2.关系代词在所引导的定语从句中要作主语、宾语或表语；
                3.一些情况下关系代词之前一定要有介词。
            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">介词与关系代词</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">which可代表之前的整个主句</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">which亦可代表前句中的部分概念</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">限制性定语从句与非限制性定语从句的区别</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">关系代词的省略</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">that亦可作关系代词</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">只能使用that的情况</h1>
            <p class="segment-content">
                1.序数词后
                2.最高级之后
                3.the very＋名词
                4.all之后
                5.the only＋名词
                6.句中若有两个相同关系代词引导的定语从句出现时，为避免重复，第二个关系代词通常改用that取代。
                7.关系代词若在be动词后作表语，表示某人的身份时要使用that不可使用who或which。
                8.两个名词性质不一，但却共用一个关系代词时，该关系代词要用that取代。
            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">限制性定语从句可化简为分词短语</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">非限制性定语从句可化简为先行词的同位语</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">注意定语从句与插入语的关系</h1>
            <p class="segment-content">

            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">定语从句可化为不定式短语</h1>
            <div class="segment-content">


            </div>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">本章总结:</h1>
                <div class="summary">
                    1.关系代词、关系代词所有格、关系副词、关系指示代词、复合关系代词均引导定语从句
                    2.复合关系副词、准关系代词两项则具有副词的功能
                    3.定语从句在句中充当定语的作用，用来修饰先行词

                        I.非限制性定语从句：
                        先行词为专有名词（如Tom 、 John 、 Africa）及独一性名词1如father（爸爸只
                        有一个）, mother 〔妈妈只有一个），之后若接关系代词所引导的定语从句时，
                        该关系代词之前一定要置逗号。此时该定语从句就称为非限制性定语从句。换言
                        之，专有名词或独一性名词本身就具有特殊性，不必再用定语从句加以限定。翻译
                        成中文时，按顺序译出来。

                        II.限制性定语从句；
                        先行词为一般名词且本身并未具特殊性，可用定语从句加以限制，以加强其特殊
                        性。限制性定语从句，将之译成“ ⋯ ⋯的”，其关系代词前不置逗号。翻译时，
                        先译定语从句，再译先行词。
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
