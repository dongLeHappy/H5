<template lang="jade">
    // 历史开奖
    div.lottery-results
        .result-content
            .lottery-head
                p(@click="showSelect")
                    span {{ lotteryName }}
                    svg-icon(icon-class="aroows-btm")
                p(@click="getTime")
                    span {{ thisDate ? thisDate :todayTime() }}
                    svg-icon(icon-class="aroows-btm")
            div.lotter-search
                vue-allLotterySelect(:dateTime="thisDate ? thisDate :todayTime()")
        
        .timeDialog(v-if="showTime",@click="closeTimelog")
            .logContent
                .time-head 时间选择(近10日)
                ul
                    li(v-for="item,index in dateArr",:key="index",@click.stop="addColor(index,item)",:class="backColor == index ? 'back-color' : ''")
                        span {{item.year}}
                        span {{ index == 0 ? item.month+"(今日)" : item.month }}
                        span {{item.week}}
        lotteryDialog     
</template>

<script>
import { mapState } from 'vuex'
import lotteryDialog from './lotteryDialog'
import allLotterySelect from "./allLotterySelect";
export default {
    name: 'memberCenter',
    components: {
        'vue-allLotterySelect': allLotterySelect,
        lotteryDialog,
    },
    computed:{
        ...mapState({
            lotteryName:state => state.homeData.changeLotteryName
        })
    },
    data() {
        return {
            showTime:false,
            isShow: false,
            backColor:false,
            dateArr:[],
            today:"",
            thisDate:"",
            
        }
    },
    methods: {
        todayTime(){ // 渲染页面
            var my = new Date();
            let a = my.getFullYear()+'年'+(my.getMonth()+1)+"月"+my.getDate()+"日";
            let b = "周"+my.getDay();
            let c = this.changweek(b);
            return a+' '+c
        },
        closeTimelog(){ // 关闭选择时间弹框
            this.showTime = false;
        },
        addColor(i,item){  // 选择时间
            this.backColor = i;
            this.showTime = false;
            this.thisDate = item.year+''+item.month+' '+item.week;
        },
        changweek(val){
            switch (val) {
                case "周0":
                    return '周日'
                    break;
                case "周1":
                    return '周一'
                    break;
                case "周2":
                    return '周二'
                    break;
                case "周3":
                    return '周三'
                    break;
                case "周4":
                    return '周四'
                    break;
                case "周5":
                    return '周五'
                    break;
                case "周6":
                    return '周六'
                    break;
            }
        },
        showSelect(){ // 弹出彩种弹框
            this.isShow = true;
            this.$store.state.homeData.showSelect = this.isShow;
        },
        getTime(n){ // 后去前十天日期
            this.dateArr = [];
            var myDate = new Date(); //获取今天日期
            myDate.setDate(myDate.getDate() - 9);
            var dateArray = []; 
            var dateTemp; 
            var flag = 1; 
            for (var i = 0; i < 10; i++) { // 获取十天前的日期
                let a = myDate.getFullYear()+'年/';
                let b = myDate.getMonth()+1 < 10 ? '0'+(myDate.getMonth()+1)+"月":(myDate.getMonth()+1)+"月";
                let c = myDate.getDate() < 10 ? '0'+myDate.getDate()+"日/周"+myDate.getDay() : myDate.getDate()+"日/周"+myDate.getDay();
                dateTemp = a+b+c;
                dateArray.push(dateTemp);
                myDate.setDate(myDate.getDate() + flag);
            }
            let a = {
                year:'',
                month:'',
                week:''
            };
            let b = [];
            for(var j = 0;j < dateArray.length;j++){
                b.push(dateArray[j].split('/'));
            }
            for(var t = 0; t < b.length;t++){ // 拆分到一个对象里面，再push到一个数组里
                a = {
                    year:b[t][0],
                    month:b[t][1],
                    week:this.changweek(b[t][2])
                };
                this.dateArr.push(a);
            }
            this.dateArr.sort(function(a, b) {  // 时间倒序排列
                    return b.month> a.month ? 1 : -1;
            });
            this.showTime = true;
        },
        
    }
}
</script>

<!-- 添加“scoped”属性以仅将CSS限制为此组件 -->
<style scoped lang="stylus">
@import "../../assets/stylus/blue";
.back-color
    background-color #31374d
.timeDialog
    width 100%
    height 100%
    z-index 99
    position fixed
    background rgba(0,0,0,0.8)
    left 0
    top 0
    filter "Alpha(opacity=60)"
    opacity 1
    .logContent
        z-index 999999
        width 3.05rem
        margin auto
        height 4rem
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        .time-head
            text-align center
            color #9199be
            font-size 0.14rem
            line-height 0.4rem
            background-color #31374d
        ul
            background-color $mian-contentoutside-color
            li
                height 0.4rem
                line-height 0.4rem
                border-bottom 0.01rem solid #7b7e8e
                &:last-child
                    border-bottom none
                span 
                    display inline-block
                    width 33%
                    text-align center
                    color #9199be
.lottery-results
    background-color $mian-contentoutside-color
    padding 0.1rem 0.1rem 0
    .result-content
        margin auto
        .lottery-head
            display flex
            flex-direction row
            border-bottom 0.01rem solid #444b64
            padding-bottom 0.1rem
            p   

                width 1.64rem 
                text-align center
                background-color $center-back-color
                line-height 0.28rem
                color $font-color
                &:last-child
                    margin-left 0.25rem
                span 
                    margin-right 0.1rem
.lotter-search
    display flex
    height calc(100vh - 0.95rem) !important
    line-height 0.35rem
    overflow auto
</style>
