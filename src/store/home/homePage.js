import { homePageData, lotteryData, openingInfo, getServerTime } from '@/api/home/homePage'
import { getRecordList } from '../../api/memberCenter'
import { deflate } from 'zlib';
import { stat } from 'fs';


const homeData = {
    state: {
        serverDate: "", // 服务器时间
        alreaySucces: false, // 是否已经存储好
        isStop: false,
        // 初始化页面数据
        persenalBalance: "", // 个人中心余额
        noticeContent: '', // 公告内容
        hotGameList: [], // 热门彩种
        historyList: [], // 历史彩种
        firstLottery: [], // 一级彩种
        secondLottery: [], // 二级彩种
        allSecondLottery: [], // 所有二级彩种


        // 所有彩种里面点击需要用到的数据
        thisFirstRule: [], // 当前一级级玩法
        percentOrBallArr: [], // 六合彩特码配赔率集合

        secondRule: [], // 当前二级玩法
        ballAndPercent: [], // 默认显示的赔率玩法
        secondRulePercent: [],

        betsGroup: [], // 下注提交
        changeCalculation: false, //购物车状态
        carHead: true, // 购物车头部
        inputBetingMount: true, // 输入投注额
        showMoreList: false, // 显示下注列表
        showMore: true, // 显示下注提示栏

        thisPercentColor: [], // 判断当前赔率是否添加待该数组里面（选中）

        showSelect: "", // 隐藏显示个人中心的下选择彩种弹框
        changeLotteryCode: "HK_LH",
        changeLotteryId: '8', // 获取到的切换历史开奖彩种的Id
        changeLotteryName: "香港彩", // 获取到的切换历史开奖彩种的name
        recordLotteryId: "", // 获取投注记录的彩种id


        openLotteryCode: '', // openapi彩种
        openPlayRuleCode: '', // openapi二级玩法
        openAuthtoken: '', // openapitoken
        openChannel: '', // openapi进入端口

        bettingRecord: false, // 是否有投注记录
        betingParId: "", // 投注时传的二级玩法ID

    },
    mutations: {
        SET_OPENLOTTERYCODE: (state, data) => { // openapi彩种
            state.openLotteryCode = data
        },
        SET_OPENPLAYRULECODE: (state, data) => { // openapi二级玩法
            state.openPlayRuleCode = data
        },
        SET_OPENAUTHTOKEN: (state, data) => { // openapitoken
            state.openAuthtoken = data
        },
        SET_OPENCHANNEL: (state, data) => { // openapi进入端口
            state.openChannel = data
        }

        // SET_PERCENTCOLOR: (state, data) => {
        //     state.thisPercentColor = data;
        // },

    },
    actions: {
        getOpenLotteryCode({ commit }, data) { // 
            commit('SET_OPENLOTTERYCODE', data)
        },
        getOpenPlayRuleCode({ commit }, data) { // 
            commit('SET_OPENPLAYRULECODE', data)
        },
        getOpenAuthtoken({ commit }, data) { // 
            commit('SET_OPENAUTHTOKEN', data)
        },
        getOpenChannel({ commit }, data) { // 
            commit('SET_OPENCHANNEL', data)
        }

        // getPercentColor({ commit }, data) {
        //     commit("SET_PERCENTCOLOR", data)
        // },
        // getRecordListData({ commit }, data) {
        //     return new Promise(resolve => {
        //         getRecordList(data).then(res => {
        //             resolve(res.data)
        //         }).catch(err => {
        //             reject(err)
        //         })
        //     })
        // },

        // if (res.data.data.success == 1) {
        //     this.totalPage = res.data.data.content.pageable.totalPages
        //     if (this.page < 2) {
        //         this.allData = res.data.data.content.content;
        //     } else {
        //         this.allData = this.allData.concat(res.data.data.content.content);
        //     }
        //     if (this.page == this.totalPage) {
        //         this.showEnd = true;
        //     }
        // }
        // })
    }
}
export default homeData