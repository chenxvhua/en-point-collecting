<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">lie、lay</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">sit、set、seat</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">rise、raise、arise、arouse</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">hang</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">fly、flow</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">take、bring</h1><div class="segment-content">
            1.It takes +（人）＋时间＋to V
            2.It costs +（人）＋金钱＋to V
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">refuse</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">spend</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">take、cost</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">answer、reply to</h1><div class="segment-content"></div></div>



        <div class="segment-wraper"><h1 class="segment-title">reach、get to、arrive in/at</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">动词＋介副词＋宾语</h1><div class="segment-content">


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">动词＋介词＋宾语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">“动词＋介词＋名词（代词）”的重要短语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">“动词＋宾语＋介词＋宾语”的重要短语</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">重要的三词（三词以上）短语动词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">prefer的用法</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">mind的用法</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">“动词＋动名词”的结构</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">prevent sb from V-ing</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1 class="segment-title">encourage sb to V　discourage sb from V-ing</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">persuade sb to V　dissuade sb from V-ing</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">resemble sb/sth</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">decide、determine</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">afford</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">wait、await</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">succeed、fail</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">depend、depend on</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">感官动词</h1><div class="segment-content">
            1.look（看起来）、 feel（感觉起来／摸起来）、 sound（听起来）、 taste（尝起来）、smell（闻起来）其后只能加形容词，若要加名词，要与hke连用。

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">表“设法、企图”的动词用法</h1><div class="segment-content"></div></div>




        <div class="segment-wraper"><h1 class="segment-title">anger、angry</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">授与动词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">知觉动词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">remember、forget、regret</h1><div class="segment-content">
            remember to V 记得要⋯ ⋯
            remember + V-ing记得曾⋯ ⋯

            forget to + V 忘了要⋯ ⋯
            forget十V+ing忘了曾⋯ ⋯

            regret to V 抱歉／遗憾要⋯ ⋯
            regret + V+ing后悔曾～一
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
