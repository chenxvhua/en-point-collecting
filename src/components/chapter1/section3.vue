<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper">
            <h1 class="segment-title">五大句型</h1>
            <p class="segment-content">
                1.主语＋完全不及物动词
                2.主语＋不完全不及物动词＋表语
                3.主语十完全及物动词＋宾语
                4.主语＋不完全及物动词＋宾语＋宾语补语
                5.主语＋授与动词＋间接宾语（授与对象）＋直接宾语（被授与的东西）
            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">祈使句、感叹句、问句</h1>
            <p class="segment-content">
                1.祈使句:简单的说，祈使句就是把主语you及助动词should或must省略的句子。此类句型一开头即为原形动词，亦由上列五大句型演变而成。句尾可视语气强弱置感叹号或句号。
                2.感叹句:What + n．十主语＋动词+... 把需要强调的部分放在what之后,How + adj或ady．十主语十动词+...或者How + adj+a(n)十主语十动词+...
                3.问句:
                一般疑问句:此类问句不能以what 、why 、when,how,where,who,whom,which等疑问词为句首。皆可用Yes / No回答
                特殊疑问句:此类问句均以what 、why 、when,how,where,who,whom,which等疑问词为句首。由于表示疑问，故不可用Yes／No 回答
                例句： Whom did he see then?
            </p>
        </div>
        <div class="segment-wraper">
            <h1 class="segment-title">结语</h1>
            <p class="segment-content">

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
