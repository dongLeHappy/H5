import Vue from 'vue'
import Router from 'vue-router'


const login = r => require.ensure([], () => r(require('@/views/login/index')), 'login');
// 个人中心
const memberCenter = r => require.ensure([], () => r(require('@/views/personalCenter/center')), 'memberCenter');
// 历史开奖
const lotteryResults = r => require.ensure([], () => r(require('@/views/personalCenter/lotteryResults')), 'lotteryResults');
// 投注记录
const betsRecord = r => require.ensure([], () => r(require('@/views/personalCenter/betsRecord')), 'betsRecord');
// 结算详情
const billDetail = r => require.ensure([], () => r(require('@/views/personalCenter/billDetail')), 'billDetail');
// 盘口信息
const pankouInfo = r => require.ensure([], () => r(require('@/views/personalCenter/pankouInfo')), 'pankouInfo');
// 游戏规则
const gameRule = r => require.ensure([], () => r(require('@/views/personalCenter/gameRule')), 'gameRule');
//  彩种通用入口
const lotteryEnter = r => require.ensure([], () => r(require('@/views/rulePageGroup/lotteryEnter')), 'lotteryEnter');
//  暂无数据页面
const noneRecord = r => require.ensure([], () => r(require('@/views/personalCenter/recordGroup/noneRecord')), 'noneRecord');


Vue.use(Router)

export const constantRouterMap = [
    {path: '/login', name: 'login', component: login},
    {path: '/memberCenter', name: 'memberCenter', component: memberCenter},
    {path: '/lotteryResults', name: 'lotteryResults', component: lotteryResults},
    {path: '/betsRecord', name: 'betsRecord', component: betsRecord},
    {path: '/billDetail', name: 'billDetail', component: billDetail},
    {path: '/pankouInfo', name: 'pankouInfo', component: pankouInfo},
    {path: '/gameRule', name: 'gameRule', component: gameRule},
    {path: '/lotteryEnter', name: 'lotteryEnter', component: lotteryEnter},
    {path: '/noneRecord', name: 'noneRecord', component: noneRecord},
]

export default new Router({
    scrollBehavior: function scrollBehavior() {
        return { y: 0 };
    },
    routes: constantRouterMap
});
