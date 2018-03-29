<template>
    <div class="inner-container" v-else>
     <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper">
            <h1 class="segment-title">名词作主语</h1>
            <p class="segment-content">

            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">代词作主语</h1>
            <div class="segment-content">
                <el-table
                        :data="page"
                        stripe
                        header-row-class-name="table-header"
                        style="width: 100%">
                    <el-table-column
                            prop="nominative"
                            label="主格">
                    </el-table-column>
                    <el-table-column
                            prop="adj"
                            label="形容词性物主代词(后加名词)">
                    </el-table-column>

                    <el-table-column
                            prop="objective"
                            label="宾格">
                    </el-table-column>

                    <el-table-column
                            prop="n-pronoun"
                            label="名词性物主代词(后不加名词)">
                    </el-table-column>

                    <el-table-column
                            prop="self"
                            label="反身代词">
                    </el-table-column>
                </el-table>
                <div class="summary">
                    1.名词性物主代词基本是形容词物主代词后面加s,除了变体mine
                    2.第一.第二人称反身代词是形容词物主代词后面加self或者selves(复数)
                    2.第三人称反身代词是宾格后面加self或者selves(复数)
                </div>
            </div>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">动名词或不定式短语作主语</h1>
            <p class="segment-content">

            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">名词性从句作主语</h1>
            <p class="segment-content">

            </p>
        </div>

        <div class="segment-wraper">
            <h1 class="segment-title">名词短语作主语</h1>
            <p class="segment-content">

            </p>
        </div>


        <div class="segment-wraper">
            <h1 class="segment-title">表距离的地方副词短语作主语</h1>
            <p class="segment-content">
                用法： from＋地方名词＋to＋地方名词

                例子：From Shanghai to Beijing is about 1000 kilometers
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                page:[
                    {
                        "nominative":"I",
                        "adj":"my",
                        "objective":"me",
                        "n-pronoun":"mine",
                        "self":"myself",
                    },{
                        "nominative":"we",
                        "adj":"our",
                        "objective":"us",
                        "n-pronoun":"ours",
                        "self":"ourselves",
                    },{
                        "nominative":"you",
                        "adj":"your",
                        "objective":"you",
                        "n-pronoun":"yours",
                        "self":"yourself",
                    },{
                        "nominative":"you",
                        "adj":"your",
                        "objective":"you",
                        "n-pronoun":"yours",
                        "self":"yourselves",
                    },{
                        "nominative":"he",
                        "adj":"his",
                        "objective":"him",
                        "n-pronoun":"his",
                        "self":"himself",
                    },{
                        "nominative":"she",
                        "adj":"her",
                        "objective":"her",
                        "n-pronoun":"hers",
                        "self":"herself",
                    },{
                        "nominative":"it",
                        "adj":"its",
                        "objective":"it",
                        "n-pronoun":"its",
                        "self":"itself",
                    },{
                        "nominative":"they",
                        "adj":"their",
                        "objective":"them",
                        "n-pronoun":"theirs",
                        "self":"themselves",
                    },
                ]
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
