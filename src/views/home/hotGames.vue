<template lang="jade">
    div
        h2.hot-games-tit 
            svg-icon.icon-size(:icon-class="lotteryIcon",)
            {{ hotGamesTit }}
        ul.hot-games
            li(v-for="list,index in hotGamesList[0]", :key="index",@click="checkPlayRule(list.code,list.id,list)")    
                svg-icon.lottery-icon(:icon-class="changeLotteryLogo(list.code)")
                span {{ list.name }}
</template>

<script>
import { mapState } from 'vuex'
import { getRuleOrPercent } from '../../api/home/homePage'
export default {
    name: 'allGames',
    props:[
        'hotGamesTit', // 标题
        'hotGamesList', // 彩种
        'lotteryIcon', // 图标
    ],
    data() {
        return {}
    },
    methods: {
        changeLotteryLogo(icon){  // 彩种logo
            switch (icon) {
                case 'HK_LH':
                    return "lhc_icon"
                    break;
                case 'SSC_TJ':
                    return "tj_ssc"
                    break;
                case 'SSC_XJ':
                    return "xj_ssc"
                    break;
                case 'SSC_CQ':
                    return "cq_ssc"
                    break;
                case 'SSC_YN':
                    return "yn_ssc"
                    break;
                case 'KLT_GD':
                    return "gd_klsf"
                    break;
                case 'KLT_TJ':
                    return "tj_klsf"
                    break;
                case 'KLT_HuN':
                    return "hn_klsf"
                    break;
                case 'KLT_SX3':
                    return "sx_klsf"
                    break;
                case 'KLT_YN':
                    return "yn_klsf"
                    break;
                case 'KLT_SX1':
                    return "shx_klsf"
                    break;
                case 'EF_HuB':
                    return "hb11_icon"
                    break;
                case 'EF_GD':
                    return "gd_icon"
                    break;
                case 'EF_AH':
                    return "ah_icon"
                    break;
                case 'EF_SH':
                    return "sh11_icon"
                    break;
                case 'EF_JX':
                    return "jx11_icon"
                    break;
                case 'EF_JS':
                    return "js11_icon"
                    break;
                case 'EF_SD':
                    return "sd11_icon"
                    break;
                case 'EF_LN':
                    return "ln11_icon"
                    break;
                case 'FT_HuB':
                    return "hb_k3"
                    break;
                case 'FT_GX':
                    return "gx_k3"
                    break;
                case 'FT_AH':
                    return "ah_k3"
                    break;
                case 'FT_JL':
                    return "jl_k3"
                    break;
                case 'FT_JX':
                    return "jx_k3"
                    break;
                case 'FT_JS':
                    return "js_k3"
                    break;
                case 'FT_FJ':
                    return "fj_k3"
                    break;
                case 'FT_BJ':
                    return "bj_k3"
                    break;
                case 'PKT_BJ':
                    return "PK10_icon"
                    break;

            }
        },
        checkPlayRule(val,id,list){
            let data = {lotteryId:id}
            getRuleOrPercent(data).then( (res) => {
                let par = res.data;
                if(par.success == 1){
                    par.content.map(item => {
                        item.playRuleList.map(it => {
                            it.betTypeList.map(element => {
                                Object.values(element).map(ele => {
                                    ele.isShow = false;
                                })
                            })
                        })
                    })
                    this.$store.state.homeData.thisFirstRule = par.content
                    // this.$router.push({path:'/lotteryEnter',query:{name:name,id:val}})
                    this.$router.push(`/lotteryEnter?id=${val}&par=${id}&name=${list.name}`)
                }else{
                    this.$tips.info(par.respMsg);
                    return
                }
            })
        }
    }
}
</script>

<!-- 添加“scoped”属性以仅将CSS限制为此组件 -->
<style scoped lang="stylus">
.hot-games-tit
    height 0.35rem
    line-height 0.35rem
    font-size 0.14rem
    margin-bottom 0.03rem
.icon-size
    width 0.18rem
    height 0.15rem
    padding 0 0.05rem 0 0.05rem
.lottery-icon
    width 0.45rem
    height 0.45rem
.hot-games
    display flex
    justify-content space-between
    width 100%
    height auto
    flex-wrap wrap
    flex-direction row
    max-height 2rem
    overflow auto
    li
        width 25%
        display flex
        flex-direction column
        text-align center
        line-height 0.3rem
        font-size 0.14rem
        span 
            display inline-block
            font-size 0.14rem
        .lottery-icon
            display inline-block
            height 0.45rem
            width 0.45rem
            margin auto
</style>
