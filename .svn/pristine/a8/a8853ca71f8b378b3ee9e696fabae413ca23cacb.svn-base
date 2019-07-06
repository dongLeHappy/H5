import request from '@/utils/request'
import qs from 'qs'

export function homePageData() { // 获取首页初始化数据
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/gameHome',
        method: 'post'
    })
}

export function intervalMainPage() { // 游戏大厅轮询
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/fetchHome',
        method: 'post'
    })
}
export function getRuleOrPercent(res) { // 获取玩法赔率
    let data = { lotteryId: res.lotteryId }
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/oddsList',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function getGameResult(res) { // 获取开盘信息
    let data = { id: res.lotteryId }
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/gameResult',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function getFetchGame(res) { // 游戏界面轮询
    let data = { id: res.id }
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/fetchGame',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function balanceInterval() { // 余额轮询
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/balance',
        method: 'post'
    })
}

export function confirmBetting(res) { // 投注
    let data = {
        lotteryId: res.lotteryId,
        betList: res.betList
    }
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/betOrder',
        method: 'post',
        data: data
    })
}