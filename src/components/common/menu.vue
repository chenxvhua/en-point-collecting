<template>
    <el-menu
            :default-active="defaultActive"
            :default-openeds="['1']"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="false"
            style="width: 240px;">
            <el-submenu :index="idx" v-for="(item,idx) in menuItems">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span :title="item.labelName">{{item.labelName}}</span>
                </template>
                <el-menu-item :index="subItem.action" v-for="(subItem,subIdx) in item.children">
                    <router-link :to="{ path: subItem.action}" :title="subItem.labelName"> <i class="el-icon-setting"></i>{{subItem.labelName}}</router-link>
                </el-menu-item>
            </el-submenu>
    </el-menu>
</template>
<script>

    var  menuObj = [
       {
        "labelName": "第一章 句子的形成",
        "action": "",
        "children": [
            {
                "labelName": "可作主语的词类",
                "action": "/chapter1-section1",
                "children":[],
            }, {
                "labelName": "动词的种类及其用法",
                "action": "/chapter1-section2",
                "children":[],
            }, {
                "labelName": "结论",
                "action": "/chapter1-section3",
                "children":[],
            }
        ]
    },{
        "labelName": "第二章　两句的连接方法",
        "action": "",
        "children": [
            {
                "labelName": "连接符号",
                "action": "/chapter2-section1",
                "children":[],
            },{
                "labelName": "并列连接词",
                "action": "/chapter2-section2",
                "children":[],
            },{
                "labelName": "副词连接词",
                "action": "/chapter2-section3",
                "children":[],
            }
        ]
    },{
            "labelName": "第三章　关系词",
            "action": "",
            "children": [
                {
                    "labelName": "关系代词",
                    "action": "/chapter3-section1",
                    "children":[],
                },{
                    "labelName": "关系代词所有格",
                    "action": "/chapter3-section2",
                    "children":[],
                },{
                    "labelName": "关系副词",
                    "action": "/chapter3-section3",
                    "children":[],
                },{
                    "labelName": "关系指示代词",
                    "action": "/chapter3-section4",
                    "children":[],
                },{
                    "labelName": "复合关系代词",
                    "action": "/chapter3-section5",
                    "children":[],
                },{
                    "labelName": "准关系代词",
                    "action": "/chapter3-section6",
                    "children":[],
                }
            ]
        },{
            "labelName": "第四章　非谓语动词",
            "action": "",
            "children": [
                {
                    "labelName": "不定式",
                    "action": "/chapter4-section1",
                    "children":[],
                },{
                    "labelName": "分词",
                    "action": "/chapter4-section2",
                    "children":[],
                },{
                    "labelName": "动名词",
                    "action": "/chapter4-section3",
                    "children":[],
                }
            ]
        },{
            "labelName": "第五章　助动词及易用错的动词",
            "action": "",
            "children": [
                {
                    "labelName": "助动词",
                    "action": "/chapter5-section1",
                    "children":[],
                },{
                    "labelName": "易用错的动词",
                    "action": "/chapter5-section2",
                    "children":[],
                }
            ]
        },{
            "labelName": "第六章　时态及语态",
            "action": "",
            "children": [
                {
                    "labelName": "时态",
                    "action": "/chapter6-section1",
                    "children":[],
                },{
                    "labelName": "语态",
                    "action": "/chapter6-section2",
                    "children":[],
                }
            ]
        },{
            "labelName": "第七章　虚拟语气",
            "action": "",
            "children": [
                {
                    "labelName": "纯条件虚拟语气",
                    "action": "/chapter7-section1",
                    "children":[],
                },{
                    "labelName": "与现在事实相反的虚拟语气",
                    "action": "/chapter7-section2",
                    "children":[],
                },{
                    "labelName": "与过去事实相反的虚拟语气",
                    "action": "/chapter7-section3",
                    "children":[],
                },{
                    "labelName": "与将来状况相反的虚拟语气",
                    "action": "/chapter7-section4",
                    "children":[],
                },{
                    "labelName": "使用虚拟语气应注意事项",
                    "action": "/chapter7-section5",
                    "children":[],
                }
            ]
        },{
            "labelName": "第八章　副词",
            "action": "",
            "children": [
                {
                    "labelName": "副词的功能",
                    "action": "/chapter8-section1",
                    "children":[],
                },{
                    "labelName": "副词的位置",
                    "action": "/chapter8-section2",
                    "children":[],
                },{
                    "labelName": "重要的副词用法",
                    "action": "/chapter8-section3",
                    "children":[],
                }
            ]
        },{
            "labelName": "第九章　倒装结构",
            "action": "",
            "children": [
                {
                    "labelName": "否定倒装句",
                    "action": "/chapter9-section1",
                    "children":[],
                },{
                    "labelName": "so/such倒装句",
                    "action": "/chapter9-section2",
                    "children":[],
                },{
                    "labelName": "地方副词倒装句",
                    "action": "/chapter9-section3",
                    "children":[],
                },{
                    "labelName": "完全倒装句",
                    "action": "/chapter9-section4",
                    "children":[],
                },{
                    "labelName": "as取代though的倒装法",
                    "action": "/chapter9-section5",
                    "children":[],
                }
            ]
        },{
            "labelName": "第十章　比较结构",
            "action": "",
            "children": [
                {
                    "labelName": "一般比较结构",
                    "action": "/chapter10-section1",
                    "children":[],
                },{
                    "labelName": "原级比较结构",
                    "action": "/chapter10-section2",
                    "children":[],
                },{
                    "labelName": "其他有关as/than的重要用法",
                    "action": "/chapter10-section3",
                    "children":[],
                }
            ]
        },{
            "labelName": "第十一章　代词",
            "action": "",
            "children": [
                {
                    "labelName": "概要",
                    "action": "/chapter11-section1",
                    "children":[],
                }
            ]
        },{
            "labelName": "第十二章　复合形容词",
            "action": "",
            "children": [
                {
                    "labelName": "概要",
                    "action": "/chapter12-section1",
                    "children":[],
                }
            ]
        },{
            "labelName": "第十三章　价词用法",
            "action": "",
            "children": [
                {
                    "labelName": "概要",
                    "action": "/chapter13-section1",
                    "children":[],
                }
            ]
        },{
            "labelName": "第十四章　反意疑问句",
            "action": "",
            "children": [
                {
                    "labelName": "概要",
                    "action": "/chapter14-section1",
                    "children":[],
                }
            ]
        }
    ];




    export default {
        data() {
            return {
                defaultActive:"",
                menuItems:[],
            };
        },
        mounted () {
            this.menuItems=menuObj;
            var localName = location.href.split("#/");
            if( localName[1] ){ //#/foo
                localName = "/"+localName[1];
            }
            if(this.$route && this.$route.matched.length>1){//kenley add
                localName =this.$route.matched[1].path;
            }
            setTimeout(()=>{
                this.defaultActive=localName;
            },3000)
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>


</style>




