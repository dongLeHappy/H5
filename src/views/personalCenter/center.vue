<template lang="jade">
    div.member-center
        div.user-info-head
            div.user-photo
                svg-icon.user_p(icon-class="p_user")
            div.user-balance
                p {{ userName }}
            .todayWinLose 今日输赢
                span ￥
                    em {{winLoss}}
        div.user_list
            ul.control-list
                li(v-for="list,index in menuList", :key="index")
                    router-link.link-icon(:to="{name:list.router}")
                        svg-icon.icon-listArr(:icon-class="list.icon")
                        span {{ list.name }}
                        span.theIcon
                            svg-icon(icon-class="arrows-right")                   
</template>

<script>
import { personalInfo } from '@/api/memberCenter'
export default {
    name: 'memberCenter',
    data() {
        return {
            avatar: require("@/assets/images/avatar.png"),
            userName: '',
            balance: 10000.98,
            winLoss:"",
            customerLink: '',
            menuList: [
                {'icon': 'c_1', 'name': '历史开奖', 'router': 'lotteryResults'},
                {'icon': 'c_2', 'name': '投注记录', 'router': 'betsRecord'},
                {'icon': 'c_3', 'name': '结算详情', 'router': 'billDetail'},
                {'icon': 'c_4', 'name': '盘口信息', 'router': 'pankouInfo'},
                {'icon': 'c_5', 'name': '游戏规则', 'router': 'gameRule'},
                {'icon': 'p_recharge', 'name': '在线充值', 'router': 'pankouInfo'},
                {'icon': 'p_service', 'name': '在线客服', 'router': 'gameRule'},
            ]
        }
    },
    mounted() {
        this.getPersonalInfo();
    },
    methods: {
       getPersonalInfo(){  // 个人中心首页信息
           personalInfo().then( res => {
               console.log("信息：",res)
               if(res.data.success == 1){
                   this.winLoss = res.data.content.dayWinLoss;
                   this.userName = res.data.content.gameUsername;
               }else{
                   this.$tips.info(res.data.respMsg);
                    return
               }
               
           })
       }
    }
}
</script>

<!-- 添加“scoped”属性以仅将CSS限制为此组件 -->
<style scoped lang="stylus">
@import "../../assets/stylus/blue";
   .member-center
        padding 0.1rem
        background-color $mian-contentoutside-color
        .user-info-head
            height 1.08rem
            background-color $main-header-color
            position relative
            .user-photo
                display inline-block
                margin-left 0.24rem
                margin-top 0.28rem
                .user_p
                    color $font-color
                    width 0.5rem
                    height 0.5rem
            .user-balance
                display inline-block
                position relative
                top -0.15rem
                width 1.2rem
                height 0.10rem
                margin-left 0.1rem
                margin-bottom 0.3rem
                color $font-color
                p
                    font-size 0.16rem
            .todayWinLose
                width 1.6rem
                position absolute
                top 0.39rem
                right 0
                background-color $winloss-back-color
                line-height 0.3rem
                border-radius 0.15rem 0rem 0rem 0.15rem
                font-size 0.14rem
                padding-left 0.17rem
                color $font-color
                span 
                    margin-left 0.1rem
                    color $beting-back-color
                    em
                        font-size 0.14rem
        .user_list
            // height 5.15rem
            background-color $mian-contentoutside-color
            padding-top 0.1rem
            .control-list
                li
                    height 0.44rem
                    line-height 0.44rem
                    background-color $main-header-color
                    margin 0.01rem 0 0.01rem 0
                    .link-icon
                        display inline-block
                        width 100%
                        height auto 
                    .theIcon
                        font-weight bold
                        font-size 0.14rem
                        color $font-color
                        margin-left 2.35rem
                    .icon-listArr
                        display inline-block
                        position relative
                        top 0.03rem
                        margin 0 0.08rem 0 0.08rem 
                        width 0.2rem
                        height 0.2rem
                        margin-top 0.1rem
                    a
                        color $font-color
                        span
                            font-size 0.14rem
                            font-weight: normal;
                            font-stretch: normal;
                    &:nth-child(6)
                        margin-top 0.1rem
                    &:nth-child(7)
                        margin-top 0.01rem

</style>
