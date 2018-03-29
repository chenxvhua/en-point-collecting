<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">造句方式</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">理论基础</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">than引导的状语从句结构变化</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">形容词及副词的比较级</h1><div class="segment-content">
            1.绝大多数的副词或形容词（特别是三音节以上的副词或形容词），被more修饰时，均保留原级形态
            2.双音节的副词或形容词则是不规则变化（或改变词尾，或用more修饰）
            3.单音节的形容词和副词则几乎都采词尾变化，而甚少用more修饰。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">less之后的副词或形容词均使用原级</h1><div class="segment-content">
            1.less之后的副词或形容词均使用原级

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">与本身作比较</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">比较结构中相同动词的化简</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">数量形容词的比较级变化</h1><div class="segment-content">
            1.much    more    the most
              little  less    the least
            例子：He has more money than John
            2.many（很多的）及few（很少的）修饰可数的复数名词(more|the most  fewer|the fewest)
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">避免错误比较</h1><div class="segment-content">
            1.属性不同故形成对象的错误比较
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">本身已有最高级意味的形容词</h1><div class="segment-content">
            1.有些形容词（包括由其演变过来的副词），本身就有“至极”或“最高级”的意味，
            不能使用在比较级结构中。这些词常用的有：perfect（完美的）、 sublime（卓越的）、
            noble（高贵的）、 extreme（极度的）、 superb（极好的）、 excellent（特优的）
        </div></div>


        <div class="segment-wraper"><h1 class="segment-title">本身已有比较级意味的形容词</h1><div class="segment-content">
           1. be superior to  ⋯比...优越的
              be inferior to ⋯比⋯ ⋯差劲的
              be senior to  ⋯比⋯ ⋯年长的；比⋯ ⋯地位高的/资深的
              be junior to   ⋯比⋯ ⋯年轻的；比⋯ ⋯地位低的/资浅的
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">注意同范围及不同范围的比较</h1><div class="segment-content">
            1.同范围
              John is better than any other student in his class
            2.不同范围
              John is better than any  student in Mary's class
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">be getting more and more+adj</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">修饰比较级的副词</h1><div class="segment-content">
            1.far 、 much 、 a lot 、 a great deal 、 still 、 even
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">最高级副词</h1><div class="segment-content">
            1.最高级副词有两个most及least，可用以修饰句中的形容词、副词或动词。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">最高级的比较对象一定是三者以上</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">the与最高级的关系</h1><div class="segment-content">
            1.最高级副词修饰动词或副词时，不一定要加定冠词the，但最高级形容词修饰名词时，则须加the 。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">the＋最高级形容词</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">最高级结构代换</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">most亦可作very（很）解</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">by far可修饰最高级</h1><div class="segment-content">
            1.带有the的最高级副词或形容词，可被by far及much两个副词修饰，其中以by far较为常用
        </div></div>


        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.原级比较：as
            2.一般比较：than
            3.more+形容词原型 来表示的比较级.这种形容词一般都3个以上的音节

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
