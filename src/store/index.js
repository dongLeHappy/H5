//定义一个状态管理容器
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
import homeData from './home/homePage' // 获取主页数据
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
        permission,
        homeData, // 获取主页数据
    },
    getters
})

export default store;