import router from './router'
import store from './store'
import { MessageBox } from 'mint-ui';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import "./assets/stylus/load.styl";
import { getToken, setToken } from '@/utils/auth' // getToken from cookie
import { loadingShow, loadingHidden } from '@/components/Loading/index' // Loading
import Cookies from 'js-cookie'
// 动态改造路由
function mapRouter(roles) { // 遍历后台传来的路由字符串，转换为组件对象
    let itme_data = [];
    let itme = [];
    roles.forEach((route, i) => {
        itme = {
            "path": "/",
            "name": route.urlName,
            "component": route.component
        }
    })
    itme_data.push(itme);
    return itme_data
}



function GetUrlQuery(name) // 获取地址栏参数  // GetUrlQuery('lotteryCode')  // 调用
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}


// OPENAPI信息
let oLotteryCode = GetUrlQuery('lotteryCode'),
    oPlayRuleCode = GetUrlQuery('playRuleCode'),
    oAuthtoken = GetUrlQuery('authtoken'),
    oChannel = GetUrlQuery('channel')

if (oLotteryCode) {
    store.dispatch('getOpenLotteryCode', oLotteryCode) // 彩种
}
if (oPlayRuleCode) {
    store.dispatch('getOpenLotteryCode', oPlayRuleCode) // 彩种
}
if (oAuthtoken) {
    store.dispatch('getOpenLotteryCode', oAuthtoken) // 彩种
    setToken(oAuthtoken)
    Cookies.set('uid', oAuthtoken)
}
if (oChannel) {
    store.dispatch('getOpenLotteryCode', oChannel) // 彩种
}



const whiteList = ['/login', '/test'] // no redirect whitelist
router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    if (getToken()) { // determine if there has token
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
                loadingShow() // Loading加载 
                store.dispatch('GetUserInfo').then(res => { // 拉取user_info
                    const roles = mapRouter(res.content) //动态设置路由
                    store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
                        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                        next({...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                        loadingHidden() // 去掉Loading加载 
                    })
                    store.dispatch('GetMenuIcon', 'personal') // 修改登入后的颜色
                }).catch((err) => {
                    store.dispatch('FedLogOut').then(() => {
                        MessageBox.alert(err).then(action => {});
                        next({ path: '/' });
                        loadingHidden() // 去掉Loading加载 
                    })
                })
            } else {
                next()
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login`) // 否则全部重定向到登录页
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})