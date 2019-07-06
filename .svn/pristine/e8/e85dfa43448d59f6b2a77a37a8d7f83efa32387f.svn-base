import Vue from 'vue'
import 'babel-polyfill' // 转ES5
import router from './router' // 路由
import store from './store' // 状态库
import './components/SvgIcon/icons' // svg图标
// import vTips from './components/Tips/index' // 提示
import loading from './components/Loading/index' // Loading
import vTips from './components/Tips/index' // Loading
import './permission' // 权限控制
import App from './App'
import { MessageBox } from 'mint-ui';
import { InfiniteScroll, DatetimePicker } from 'mint-ui';

Vue.use(vTips)
Vue.use(InfiniteScroll);
Vue.use(loading)
Vue.component(MessageBox)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.prototype.$messageBox = MessageBox; // 弹出框挂到Vue原型
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'



//1.部分部件按需引入
// import element from '@/element/index'
// Vue.use(element)

Vue.config.productionTip = false // Vue.config.productionTip
    // console.log(this) // loading显示)
    // Window.loadingShow = this.$loading.show(); // loading显示
    // console.log(Window.loadingShow)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})