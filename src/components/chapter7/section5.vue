<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1.表示强烈与真理相反的虚拟语气句型：if +主语+were to +原型V,主语+would|could|might|should|ought to| +原形v
            2.if的省略:虚拟语气的if从句中，若有过去完成时助动词had或表“万一”的助动词should或是were出现时，可将这些词类置于主语前，而将if省略
            例子：Were he lazy,he might fail
            3.时态不一致情况:if与过去事实相反，用过去完成时；主句与现在事实相反，则置助动词过去时
            4．可取代if的其他连接词 其引导的从句时态均为一般现在时。
            if = in case ( that）、 on condition that 、 provided / providing ( that )  so long as（只要）、 as fong as（只要），
            5.but for 若非／要不是
            此类句型仅限于与现在事实及过去事实相反的虚拟语气。
            6.lest(should)⋯以免⋯ ⋯
            7.as if ⋯=as though 仿佛
            I.表极大的可能．动词使用一般时态
            II.表与现在事实相反一动词使用一般过去时
            III.表与过去事实相反一动词使用过去完成时
            8.What if should ？要是⋯ ⋯的话会怎样/要怎么办?
            9.It is time + that从句的一般过去时：该是⋯ ⋯的时候了
            10.If only ⋯要是⋯ ⋯就好了
            本句型只用于与现在事实或过去事实相反的虚拟语气中。换言之，本句型的时态只能
            用一般过去时或过去完成时。
            11.wish的用法
            I.wish之后接that从句时，一定要使用虚拟语气。若与现在事实相反要用一般过
            去时；若与过去事实相反，则要用过去完成时“换言之，that从句中的时态绝无一般现在时
            12.hope的用法：
            I.hope之后接that从句时，使用一般时态，表示极大的可能性。即表示现在的状况时
            用现在时，表示将来的状况时用将来时，表示完成的状况时用完成时,表示进行的状
            况时用进行时。
            13.hope与祈使句的关系：
            I.hope接that从句时,从句中可使用助动词may，形成祈使句。此时将1 hope that
            删除，将may置于原that从句的主语之前，动词仍用原形动词原句号改为感叹号
            14.对过去事物的猜测的三种句型
            I.must have十过去分词 一定曾经⋯ ⋯
            II.may have＋过去分词 可能曾经· · ⋯
            III.cannot have＋过去分词 不可能曾经·
            15. didn't need to＋原形 V 与 need not have + pp  的区别：
            I."didn't needto＋原形V ”乃表示过去的事实，即“不必⋯ ⋯同时亦没有如此做” ;
            而“ need not have + P . P . ”乃表示与过去事实相反的虚拟语气，即“不必⋯ ⋯但却这么做了”
            16.意志动词：
            I.意志动词计有“建议” 、 “要求” 、 “命令” 、 “规定” 、 “主张”等五大类。之后用
            that从句作宾语时，由以从句中要使用助动词should，而should往往予以省略。
            II.意志动词有如下这些
            a．建议：suggest 、 recommend 、 advise 、 urge（呼吁）、 propose 、 move（提议）
            b．要求：ask 、 desire 、 demand 、 require 、 request 、 insist（坚持要求）
            c．命令：order 、 commond
            d．规定：rule 、 regulate 、 stipulate
            e．主张：advocate 、 maintain
            17.suggest 、 insist 、 maintain的另类用法：
            suggest若表示“暗示” 、 insist若表“坚信” 、 maintain若表示“坚决认为”时，
            则之后的that从句用一般时态。
            18.insist on十动名词 坚决要⋯ ⋯
            19.表示“有必要的”形容词与that从句的关系：
            I.necessary（有必要的）、 important（很重要的）、 essential（不可或缺的）、
            imperative（有绝对必要的）、 urgent（紧急的）、 desirable（合意的）、
            recommendable（值得推荐的）、 advisable（明智的）。
            20.that从句作同位语
            I.that从句若是置于意志动词变成的名词之后，而与该名词形成同位语时，that从句中
            也要使用助动词should，而should往往予以省略。
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
