import request from '@/utils/request'
import qs from 'qs'
export function personalInfo() { // 个人中心页面信息
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/dayWinLoss',
        method: 'post',
    })
}
export function getHistoricRecordList(res) { // 获取历史开奖数据列表
    let data = {
        lotteryId: res.lotteryId,
        govPrizeDate: res.date,
        page: res.page,
        size: res.size,
    }
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/prizeHistoryPage',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function getRecordList(res) { // 获取投注记录,带分页
    let data = {
        lotteryId: res.lotteryId,
        settleStatus: res.settleStatus,
        page: res.page,
        size: res.size
    }
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/settleOrder',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function getBettingDetail(res) { // 获取结算详情,带分页
    let data = {
        settleDateBegin: res.settleDateBegin,
        settleDateEnd: res.settleDateEnd,
        page: res.page,
        size: res.size
    }
    return request({
        baseURL: 'http://192.168.60.237/mock/5ca84cc2ea866b0dc477bbd9/wap/',
        url: '/cp4/front/h5/settleForDay',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function getPanKouInfo(res) { // 获取盘口信息
    let data = {
        lotteryId: res.lotteryId,
    }
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/quota',
        method: 'post',
        data: qs.stringify(data)
    })
}
export function getRulelistContent(res) { // 获取游戏规则
    let data = { lotteryId: res.lotteryId }
    return request({
        baseURL: '/api',
        url: '/cp4/front/h5/lotteryDesc',
        method: 'post',
        data: qs.stringify(data)
    })
}