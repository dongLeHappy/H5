import { loginByToken, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import Cookies from 'js-cookie' // 设置cookie

const user = {
    state: {
        token: getToken(),
        name: '', // 设置用户名
        roles: [] // 设置路由
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },

    actions: {
        // 获取用户登入Token
        LoginByToken({ commit }, data) {
            return new Promise((resolve, reject) => {
                loginByToken(data).then(response => {
                    console.log(response.data.data)
                    commit('SET_NAME', response.data.data.content.userName)
                    resolve(response.data.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(response => {
                        if (!response.data.data) { // 后台未返回数据
                            reject('验证失败，请重新登录')
                        }
                        if (response.data.data.content == '') { // 如果用户未授权路由
                            response.data.data.content = [{
                                "urlName": "home",
                                "component": "home/index"
                            }]
                        }
                        commit('SET_ROLES', response.data.data.content) // 设置路由
                        Cookies.set("SET_NAME", response.data.data.name)
                        resolve(response.data.data)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        // 登出
        LogOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    Cookies.remove('SET_NAME') // 测试 删除前端用户名
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', []) // 设置路由
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                Cookies.remove('SET_NAME') // 测试 删除前端用户名
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }

    }
}

export default user