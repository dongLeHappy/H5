<template lang="jade">
    div.content
        //- vue-banner
        vue-marquee(v-if="noticeContent.length > 0",:title="noticeContent")
        .home-hotGames
            vue-hotGames.hot-history(v-if="hotGameList.length >= 1",:hotGamesTit="hotGamesTit", :hotGamesList="hotGameList",:lotteryIcon="lotteryIcon2")
            vue-hotGames.hot-history(v-if="historyLottery == []",:hotGamesTit="lastGamesTit", :hotGamesList="historyLottery",:lotteryIcon="lotteryIcon1")
        vue-allGames(v-if="alreaySucces == true")
</template>

<script>
import { homePageData } from '../../api/home/homePage'
import banner from '@/views/common/banner'  // 走马灯
import marquee from '@/views/common/marquee'  // 公告
import hotGames from '@/views/home/hotGames'  // 热门彩种
import allGames from '@/views/home/allGames'  // 全部彩种
import { getHotGames } from '@/api/home' // 获取中奖榜单
import { mapState} from 'vuex'
import { log, debug } from 'util';
export default {
    name: 'Index',
    components: {
        'vue-banner': banner,
        'vue-marquee': marquee,
        'vue-hotGames': hotGames,
        'vue-allGames': allGames
    },
    data () {
        return {
            lastGamesTit: '游戏记录',
            hotGamesTit: '热门彩种',
            hotGameList:[],// 热门彩种
            historyLottery:[],// 历史彩种
            noticeContent:"", // 公告
            lotteryIcon1:"yxjl_icon",
            lotteryIcon2:"tmcz_icon"
        }
    },
    computed:{
        ...mapState({
            alreaySucces: state => state.homeData.alreaySucces,
        }),
    },
    mounted() {
        homePageData().then((response) => {  // 初始化页面信息
            if(response.data.success == 1){
                let res = response.data.content;
                let tree = res.lotteryTree;
                this.$store.state.homeData.persenalBalance = res.balance; // 余额
                this.$store.state.homeData.noticeContent = res.content; // 公告内容
                this.$store.state.homeData.hotGameList = res.hotLottery; // 热门彩种
                this.$store.state.homeData.historyList = res.userVisited; // 历史彩种
                this.$store.state.homeData.serverDate = res.serverTime; // 服务时间
                this.hotGameList.push(res.hotLottery); // 热门彩种
                this.historyLottery.push(res.userVisited); // 历史彩种
                this.noticeContent = res.content;
                this.$store.state.homeData.firstLottery = []; // 一级彩种
                // 拆分重组一级彩种
                let treeArr = [];
                tree.forEach(it => {
                    treeArr.push({
                        code: it.code,
                        id: it.id,
                        name: it.name
                    })
                });
                for (var i = 0; i < tree.length; i++) {
                    this.$store.state.homeData.secondLottery.push(tree[i].children); // 拆分重组二级彩种
                    if(i == tree.length - 1){
                        this.$store.state.homeData.alreaySucces = true; // 标记十分已经重组好存储到状态库
                    }
                }
                for (var j = 0; j < this.$store.state.homeData.secondLottery.length; j++) {
                    for (var t = 0; t < this.$store.state.homeData.secondLottery[j].length; t++) {
                        this.$store.state.homeData.allSecondLottery.push(this.$store.state.homeData.secondLottery[j][t]); // 拆分重组所有彩种
                    }
                }
                this.$store.state.homeData.firstLottery = treeArr;  // 添加到一级彩种
            }else{
                this.$tips.info(response.data.respMsg);
                return
            }
        })  
    },
}
</script>

<!-- 添加“scoped”属性以仅将CSS限制为此组件 -->
<style scoped lang="stylus">
@import "../../assets/stylus/blue";
.content
    width 100%
    position relative
    background $main-content-color
    color $font-color
    padding 0.1rem 0.1rem 0
.home-hotGames
    width 100%
    height 100%
    .hot-history
        height 1.2rem
        background-color $mian-contentoutside-color
        box-shadow 0rem 0rem 0.08rem 0rem rgba(29, 24, 26, 0.2)
</style>
