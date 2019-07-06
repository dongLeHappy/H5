import request from '@/utils/request'

export function getBanner() { // 获取首页banner
    return request({
        baseURL: '//192.168.60.237/mock/', 
        url: '/5ca84cc2ea866b0dc477bbd9/wap/getBanner',
        method: 'post'
    })
}

export function getWinList() {  // 中奖用户名单
    return request({
        baseURL: '//192.168.60.237/mock/', // 请求自己配的json
        url: '/5ca84cc2ea866b0dc477bbd9/wap/getWinList',
        method: 'post'
    })
}

export function getGames() {  // 彩种列表
    return request({
        baseURL: '//192.168.60.237/mock/', // 请求自己配的json
        url: '/5ca84cc2ea866b0dc477bbd9/wap/getGames',
        method: 'post'
    })
}

export function getHotGames() {  // 热门彩种
    return request({
        baseURL: '//192.168.60.237/mock/', // 请求自己配的json
        url: '/5ca84cc2ea866b0dc477bbd9/wap/getHotGames',
        method: 'post'
    })
}