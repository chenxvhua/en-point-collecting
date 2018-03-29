<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title">一般规则</h1><div class="segment-content">
            1.遇有be动词时，副词置于该be动词之后
            2.遇有助动词时、副词置于该助动词之后
            3.遇有一般动词时，副词置于该动词之前
              I.如果修饰动词的副词表示某种状态，则副词要置于动词之后
              II.如果修饰动词的副词表示<span class="red">肯定、否定或频率</span>的意味，则此类副词多置于动词之月
                有肯定意味的副词：surely（确定地）、 certainly（确定地）、 absolutely（绝对地）、 probably（可能）、 really（真正地）
                有否定意味的副词或频率副词：never（从不）、 seldom（很少）、 hardly ever ( 几乎不曾）、 always（总是）、 often（常常）。


        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">简化结构中副词位置的变化</h1><div class="segment-content">
            1.be动词 副词放在be动词之前
            2.助动词 副词放在助动词之前
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">状态副词在被动语态中的位置</h1><div class="segment-content">
            1.表示状态的副词在被动语态中，要置于过去分词前。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">否定副词的位置</h1><div class="segment-content">
            1.否定副词never（从不）' seldom（很少）' hardly ever ( jL乎不曾＝scarcely
            ever）、 rarely（很少）修饰动词时，可直接置于该动词之前，无须另加助动词do 、
            does或did 。但not不可直接置于动词之前，须另加do 、 does或did，且之后的动
            词一律改为原形。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">can与not连用习惯上写成cannot</h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title">时间副词的位置</h1><div class="segment-content">
            1.时间副词，如yesterday 、 today 、 tomorrow · this year 、 at five ( 5点钟）、 in 2000，可置于句首或句尾。习惯的用法为：
            <span class="red">句子短时，时间副词置于句尾，句子长时．则置于句首</span>

        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">地方副词的位置</h1><div class="segment-content">
            1.地方副词，如here 、 there 、 home 、 downtown 、 uPstairs 、 downstairs，以及表场所的介副词，如in 、 out 、 up 、 down等，均置于动词之后。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">副词对等语及其在句中的位置</h1><div class="segment-content">
            1.介词短语当副词用：通常置于句尾，修饰句中的动词
            2.有时介词短语亦出现在句首，此时该短语仍被视为副词，修饰整个主句。但亦有形容词的功能，修饰主语。此类介词短语多半由
            <span class="red">in 、 by或on</span>加动名词形成
            3.in、by或on 加动名词所形成的介词短语，置于句首时，主语要有行驶动名词所表示的动作能力
            4.不定式短语当副词用，除可修饰动词外亦可置于形容词或副词之后，修饰该形容词或副词 例子：He is rich enough to buy a car .
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">副词应尽量靠近被修饰的动词</h1><div class="segment-content">
            1.句中若含有两组以上的动词（包括由动词变成的分词及动名词），副词应尽量靠近被修饰的动词，以免造成句意的混淆。
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">名词性从句修饰形容词</h1><div class="segment-content">
            1.名词性从句亦可置于形容词之后，修饰该形容词。
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
