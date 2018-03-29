/**
 * Created by chenxuhua on 2017/9/6.
 */
import Vue from 'vue'
import Router from 'vue-router'
import PageCommon from '@/components/common/PageCommon'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name:"首页",
            component : PageCommon,
            children: [
                {
                    path: '/index',
                    component: function (resolve) {
                        require(['@/components/index'], resolve);
                    }
                }
             ]
        },
        {
            path: '/',
            name:"第一章 句子的形成",
            component : PageCommon,
            children: [
                {
                    path: '/chapter1-section1',
                    name:"可作主语的词类",
                    component: function (resolve) {
                        require(['@/components/chapter1/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter1-section2',
                    name:"动词的种类及其用法",
                    component: function (resolve) {
                        require(['@/components/chapter1/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter1-section3',
                    name:"结论",
                    component: function (resolve) {
                        require(['@/components/chapter1/section3'], resolve);
                    },
                },//第三节
            ]
        }, //第一章
        {
            path: '/',
            name:"第一章 句子的形成",
            component : PageCommon,
            children: [
                {
                    path: '/chapter2-section1',
                    name:"连接符号",
                    component: function (resolve) {
                        require(['@/components/chapter2/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter2-section2',
                    name:"并列连接词",
                    component: function (resolve) {
                        require(['@/components/chapter2/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter2-section3',
                    name:"副词连接词",
                    component: function (resolve) {
                        require(['@/components/chapter2/section3'], resolve);
                    },
                },//第三节
            ]
        }, //第二章
        {
            path: '/',
            name:"第三章　关系词",
            component : PageCommon,
            children: [
                {
                    path: '/chapter3-section1',
                    name:"关系代词",
                    component: function (resolve) {
                        require(['@/components/chapter3/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter3-section2',
                    name:"关系代词所有格",
                    component: function (resolve) {
                        require(['@/components/chapter3/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter3-section3',
                    name:"关系副词",
                    component: function (resolve) {
                        require(['@/components/chapter3/section3'], resolve);
                    },
                },//第三节
                {
                    path: '/chapter3-section4',
                    name:"关系指示代词",
                    component: function (resolve) {
                        require(['@/components/chapter3/section4'], resolve);
                    },
                },//第四节
                {
                    path: '/chapter3-section5',
                    name:"复合关系代词",
                    component: function (resolve) {
                        require(['@/components/chapter3/section5'], resolve);
                    },
                },//第五节
                {
                    path: '/chapter3-section6',
                    name:"准关系代词",
                    component: function (resolve) {
                        require(['@/components/chapter3/section6'], resolve);
                    },
                },//第六节
            ]
        }, //第三章
        {
            path: '/',
            name:"第四章　非谓语动词",
            component : PageCommon,
            children: [
                {
                    path: '/chapter4-section1',
                    name:"第一节　不定式",
                    component: function (resolve) {
                        require(['@/components/chapter4/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter4-section2',
                    name:"第二节　分词",
                    component: function (resolve) {
                        require(['@/components/chapter4/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter4-section3',
                    name:"第三节　动名词",
                    component: function (resolve) {
                        require(['@/components/chapter4/section3'], resolve);
                    },
                },//第三节
            ]
        }, //第四章
        {
            path: '/',
            name:"第五章　助动词及易用错的动词",
            component : PageCommon,
            children: [
                {
                    path: '/chapter5-section1',
                    name:"第一节　助动词",
                    component: function (resolve) {
                        require(['@/components/chapter5/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter5-section2',
                    name:"第二节　易用错的动词",
                    component: function (resolve) {
                        require(['@/components/chapter5/section2'], resolve);
                    },
                },//第二节
            ]
        }, //第五章
        {
            path: '/',
            name:"第六章　时态及语态",
            component : PageCommon,
            children: [
                {
                    path: '/chapter6-section1',
                    name:"第一节　时态",
                    component: function (resolve) {
                        require(['@/components/chapter6/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter6-section2',
                    name:"第二节　语态",
                    component: function (resolve) {
                        require(['@/components/chapter6/section2'], resolve);
                    },
                },//第二节
            ]
        }, //第六章
        {
            path: '/',
            name:"第七章　虚拟语气",
            component : PageCommon,
            children: [
                {
                    path: '/chapter7-section1',
                    name:"第一节　纯条件虚拟语气",
                    component: function (resolve) {
                        require(['@/components/chapter7/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter7-section2',
                    name:"第二节　与现在事实相反的虚拟语气",
                    component: function (resolve) {
                        require(['@/components/chapter7/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter7-section3',
                    name:"第三节　与过去事实相反的虚拟语气",
                    component: function (resolve) {
                        require(['@/components/chapter7/section3'], resolve);
                    },
                },//第三节
                {
                    path: '/chapter7-section4',
                    name:"第四节　与将来状况相反的虚拟语气",
                    component: function (resolve) {
                        require(['@/components/chapter7/section4'], resolve);
                    },
                },//第四节
                {
                    path: '/chapter7-section5',
                    name:"第五节　使用虚拟语气应注意事项",
                    component: function (resolve) {
                        require(['@/components/chapter7/section5'], resolve);
                    },
                },//第五节
            ]
        }, //第七章
        {
            path: '/',
            name:"第八章　副词",
            component : PageCommon,
            children: [
                {
                    path: '/chapter8-section1',
                    name:"第一节　副词的功能",
                    component: function (resolve) {
                        require(['@/components/chapter8/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter8-section2',
                    name:"第二节　副词的位置",
                    component: function (resolve) {
                        require(['@/components/chapter8/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter8-section3',
                    name:"第三节　重要的副词用法",
                    component: function (resolve) {
                        require(['@/components/chapter8/section3'], resolve);
                    },
                },//第三节
            ]
        }, //第八章
        {
            path: '/',
            name:"第九章　倒装结构",
            component : PageCommon,
            children: [
                {
                    path: '/chapter9-section1',
                    name:"第一节　否定倒装句",
                    component: function (resolve) {
                        require(['@/components/chapter9/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter9-section2',
                    name:"第二节　so/such倒装句",
                    component: function (resolve) {
                        require(['@/components/chapter9/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter9-section3',
                    name:"第三节　地方副词倒装句",
                    component: function (resolve) {
                        require(['@/components/chapter9/section3'], resolve);
                    },
                },//第三节
                {
                    path: '/chapter9-section4',
                    name:"第四节　完全倒装句",
                    component: function (resolve) {
                        require(['@/components/chapter9/section3'], resolve);
                    },
                },//第四节
                {
                    path: '/chapter9-section5',
                    name:"第五节　as取代though的倒装法",
                    component: function (resolve) {
                        require(['@/components/chapter9/section5'], resolve);
                    },
                },//第五节
            ]
        }, //第九章
        {
            path: '/',
            name:"第十章　比较结构",
            component : PageCommon,
            children: [
                {
                    path: '/chapter10-section1',
                    name:"第一节　一般比较结构",
                    component: function (resolve) {
                        require(['@/components/chapter10/section1'], resolve);
                    },
                },//第一节
                {
                    path: '/chapter10-section2',
                    name:"第二节　原级比较结构",
                    component: function (resolve) {
                        require(['@/components/chapter10/section2'], resolve);
                    },
                },//第二节
                {
                    path: '/chapter10-section3',
                    name:"第三节　其他有关as/than的重要用法",
                    component: function (resolve) {
                        require(['@/components/chapter10/section3'], resolve);
                    },
                },//第三节
            ]
        }, //第十章
        {
            path: '/',
            name:"第十一章　代词",
            component : PageCommon,
            children: [
                {
                    path: '/chapter11-section1',
                    name:"概要",
                    component: function (resolve) {
                        require(['@/components/chapter11/section1'], resolve);
                    },
                },//第一节
            ]
        }, //第十一章
        {
            path: '/',
            name:"第十二章　复合形容词",
            component : PageCommon,
            children: [
                {
                    path: '/chapter12-section1',
                    name:"概要",
                    component: function (resolve) {
                        require(['@/components/chapter12/section1'], resolve);
                    },
                },//第一节
            ]
        }, //第十二章
        {
            path: '/',
            name:"第十三章　价词用法",
            component : PageCommon,
            children: [
                {
                    path: '/chapter13-section1',
                    name:"概要",
                    component: function (resolve) {
                        require(['@/components/chapter13/section1'], resolve);
                    },
                },//第一节
            ]
        }, //第十三章
        {
            path: '/',
            name:"第十四章　反意疑问句",
            component : PageCommon,
            children: [
                {
                    path: '/chapter14-section1',
                    name:"概要",
                    component: function (resolve) {
                        require(['@/components/chapter14/section1'], resolve);
                    },
                },//第一节
            ]
        }, //第十四章
    ]
})



