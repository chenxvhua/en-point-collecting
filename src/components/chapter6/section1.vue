<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">时态的种类</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1 class="segment-title">使用一般现在时的时机</h1><div class="segment-content">
            1.表知觉、状态、所有：
            2.表习惯性的动作：
            3.表真理、事实、格言：
            4.begin 、 start 、 arrive 、 leave 、 come 、 go等动词可用一般现在时表将来。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用一般过去时的时机</h1><div class="segment-content">
            1.表过去的动作、习惯、状态！
            2.表过去的经验
            3.句中若有after 、 untll 、 before等连接词引导的从句．由于时间先后很清楚，可用一般过去时代替过去完成时。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用一般将来时的时机</h1><div class="segment-content">
            1.由连接词when 、 unless 、 if、 once（一旦）等所引导的状语从句表示某条件时一定要用一般现在时，而王句用一般将来时
            2.is / am / are going to十原形动词=will＋原形动词
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">使用现在进行时的时机</h1><div class="segment-content">
            1.用以表示现在正在做的动作
            2.用以表示即将发生的动作．常与表将来的副词连用，此时is/am/are/  译成'即将'
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用过去进行时的时机</h1><div class="segment-content">
            1.用以表示过去某时正在做的动作：
            2.表一般过去时中即将发生的事：
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用将来进行时的时机</h1><div class="segment-content">
            1.用以表示于将来某时将进行的动作：
        </div></div>


        <div class="segment-wraper"><h1 class="segment-title">使用现在完成时的时机</h1><div class="segment-content">
            1.用以表示到现在为止完成的动作：
            2.用以表示到现在为止的经验；
            <span class="red">3.用以表示到现在为止仍在继续的动作或状态 例子：She has lived here for 10 years(这种情况推荐用现在完成进行时) </span>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用过去完成时的时机</h1><div class="segment-content">
            1.用以表示截至过去某时为止所完成的动作或经验
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用将来完成时的时机</h1><div class="segment-content">
          1.用以表示到将来某时为止所完成 <span class="red"> 或仍在继续的动作或经验等(这是推荐使用将来完成进行时)</span>
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">使用现在完成进行时的时机</h1><div class="segment-content">
            1.用以表示一直继续到现在且仍将继续下去的动作 例子: she has been working with this company for 5 years
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用过去完成进行时的时机</h1><div class="segment-content">
            1.用以表示一直继续到过去某时，而当时仍在继续进行的动作。与过去完成时一样，过去完成进行时不能单独存在，须与一般过去时连用
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">使用将来完成进行时的时机</h1><div class="segment-content">
            1.表一直继续到将来某时，而仍将继续进行的动作：
        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">时态的前后一致</h1><div class="segment-content">
            1.主句若为一般现在时，从属从句除过去完成时、过去完成进行时不能用以外，其它时态皆可用。
            2.主句为一般过去时时则从属从句不得用表现在或将来的时态但可使用一般过去、过去完成时、过去进行时、过去完成进行时。
            3.从属从句表示真理时，无论主句是过去、现在或将来时，该从句都用一般现在时
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">“for＋一段时间”与完成时的关系</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">since与完成时的关系</h1><div class="segment-content">
            1.主语十have/has＋过去分词十Since ⋯自从⋯ ⋯以来就一直
            2.主语十have/has been＋现在分词＋since
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">常用的不规则动词变化</h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            总能9种时态，
            现在时，过去时，将来时,
            现在进行时，过去进行时，将来进行时，
            现在完成时，过去完成时，将来完成时，
            现在进行完成时，过去进行完成时，将来进行完成时

        </div></div>

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
