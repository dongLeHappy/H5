<template lang="jade">
    .login-container
        .tit GG彩票平台代理商游戏用户登录
            ul
                li
                    span * 代理商UUID编号:
                    span 
                        input(type='text',placeholder='请输入代理商UUID编号',  v-model="loginForm.hashCode")
                li
                    span * 游戏用户名称:
                    span 
                        input(type='text',placeholder='请输入游戏用户名称(代理商平台的)', v-model="loginForm.username")
                li
                    span * 代理商游戏大厅链接:
                    span 
                        input(type='text',placeholder='请输入代理商游戏大厅链接',  v-model="loginForm.homeUrl")
                li
                    span * 代理商充值通道链接:
                    span 
                        input(type='text',placeholder='请输入代理商充值通道链接', v-model="loginForm.walletDepositUrl")
                li
                    span  代理商客服通道链接:
                    span 
                        input(type='text',placeholder='请输入代理商客服通道链接',  v-model="loginForm.customerUrl")
                li
                    span  一级彩种定位:
                    span
                        select
                            option(value ="SSC") 时时彩
                li
                    span  二级彩种定位:
                    span
                        select
                            option(value ="SSC_CQ") 重庆时时彩
                li
                    span  设备端:
                    span
                        select(v-model="loginForm.device")
                            option(value ="PC") PC
                            option(value ="H5") H5
                li
                    span 
                        button(type="primary",@click="handleLogin") 立即登录
</template>

<script>
import { getToken, setToken, removeToken } from '@/utils/auth' // 设置token
import { loginByToken } from '@/api/login'
export default {
    name: 'Login',
    components: { },
    data() {
        return {
            secondLevel:'',
            isClick: true,  // 判断是否可以点击
            loginForm:{
                hashCode: '',//'MxrMzYsd3D8vTuyEvpc', // 代理商id，19位整型数
                command:'LOGIN', // 登录命令
                version:'1.0', // 接口版本号
                guserName: '', // 游戏用户名称
                username: '', // 游戏用户名称(代理商平台的)
                walletDepositUrl: '', // 代理商充值通链接
                customerUrl: '', // 代理商客服通道链接
                device: '请选择游戏设备端', // 设备端
                playRuleCode:'', // 玩法代码(传空时定位到彩种首页)
                homeUrl: '', // 游戏大厅页面，玩家点此链接返回游戏大厅
                parentGame:'请选择一级彩种定位', // 父级彩种
                lotteryCode:'请选择二级彩种定位', // 子级彩种
                driveList: ["PC", "H5"],
                parentList: ['香港彩','快三','PK10','11选5','时时彩','快乐十分'],
                lotteryCodeList: ['六合彩','江苏快三','安微快三','北京快三','上海快三','湖北快三','河北快三','甘肃快三','北京赛车','广东11选5'],
                menuListArr: {
                                "PKT": {
                                    "id": 1,
                                    "name": "PK10",
                                    "code": "PKT",
                                    "subMenu": [{
                                        "id": "bjpk10",
                                        "code": "PKT_BJ",
                                        "cname": "北京赛车"
                                    }]
                                },
                                "SSC": {
                                    "id": 2,
                                    "name": "时时彩",
                                    "code": "SSC",
                                    "subMenu": [{
                                        "id": "tjssc",
                                        "code": "SSC_TJ",
                                        "cname": "天津时时彩"
                                    }, {
                                        "id": "xjssc",
                                        "code": "SSC_XJ",
                                        "cname": "新疆时时彩"
                                    }, {
                                        "id": "cqssc",
                                        "code": "SSC_CQ",
                                        "cname": "重庆时时彩"
                                    }, {
                                        "id": "ynssc",
                                        "code": "SSC_YN",
                                        "cname": "云南时时彩"
                                    }]
                                },
                                "EF": {
                                    "id": 3,
                                    "name": "11选5",
                                    "code": "EF",
                                    "subMenu": [{
                                        "id": "hb11x5",
                                        "code": "EF_HuB",
                                        "cname": "湖北11选5"
                                    }, {
                                        "id": "gd11x5",
                                        "code": "EF_GD",
                                        "cname": "广东11选5"
                                    }, {
                                        "id": "ah11x5",
                                        "code": "EF_AH",
                                        "cname": "安徽11选5"
                                    }, {
                                        "id": "sh11x5",
                                        "code": "EF_SH",
                                        "cname": "上海11选5"
                                    }, {
                                        "id": "jx11x5",
                                        "code": "EF_JX",
                                        "cname": "江西11选5"
                                    }, {
                                        "id": "js11x5",
                                        "code": "EF_JS",
                                        "cname": "江苏11选5"
                                    }, {
                                        "id": "sd11x5",
                                        "code": "EF_SD",
                                        "cname": "山东11选5"
                                    }, {
                                        "id": "ln11x5",
                                        "code": "EF_LN",
                                        "cname": "辽宁11选5"
                                    }]
                                },
                                "FT": {
                                    "id": 4,
                                    "name": "快3",
                                    "code": "FT",
                                    "subMenu": [{
                                        "id": "hbk3",
                                        "code": "FT_HuB",
                                        "cname": "湖北快3"
                                    }, {
                                        "id": "gxk3",
                                        "code": "FT_GX",
                                        "cname": "广西快3"
                                    }, {
                                        "id": "ahk3",
                                        "code": "FT_AH",
                                        "cname": "安徽快3"
                                    }, {
                                        "id": "jlk3",
                                        "code": "FT_JL",
                                        "cname": "吉林快3"
                                    }, {
                                        "id": "jxk3",
                                        "code": "FT_JX",
                                        "cname": "江西快3"
                                    }, {
                                        "id": "jsk3",
                                        "code": "FT_JS",
                                        "cname": "江苏快3"
                                    }, {
                                        "id": "fjk3",
                                        "code": "FT_FJ",
                                        "cname": "福建快3"
                                    }, {
                                        "id": "bjk3",
                                        "code": "FT_BJ",
                                        "cname": "北京快3"
                                    }]
                                },
                                "KLT": {
                                    "id": 5,
                                    "name": "快乐十分",
                                    "code": "KLT",
                                    "subMenu": [{
                                        "id": "gd10",
                                        "code": "KLT_GD",
                                        "cname": "广东快乐10分"
                                    }, {
                                        "id": "tj10",
                                        "code": "KLT_TJ",
                                        "cname": "天津快乐10分"
                                    }, {
                                        "id": "hn10",
                                        "code": "KLT_HuN",
                                        "cname": "湖南快乐10分"
                                    }, {
                                        "id": "sx10",
                                        "code": "KLT_SX3",
                                        "cname": "陕西快乐10分"
                                    }, {
                                        "id": "yn10",
                                        "code": "KLT_YN",
                                        "cname": "云南快乐10分"
                                    }, {
                                        "id": "sxj10",
                                        "code": "KLT_SX1",
                                        "cname": "山西快乐10分"
                                    }]
                                },
                                "HK": {
                                    "id": 6,
                                    "name": "香港彩",
                                    "code": "HK",
                                    "subMenu": [{
                                        "id": "lhc",
                                        "code": "HK_LH",
                                        "cname": "香港六合彩"
                                    }]
                                }
                        },
            }
        }
    },
    created(){
        
    },
    methods:{
        getDriveSelect() { // 设备端
            
        },
        getFistGame() { // 获取一级彩种
            
        },
        getSecondGame() { // 获取二级彩种
           
        },
        getFistCode(val){ 
            this.secondLevel = val.subMenu
            this.loginForm.value1 = ''
            this.loginForm.lotteryCode = val.subMenu[0].cname
            // console.log('val----',this.loginForm.lotteryCode )
        },
        handleLogin() {
            this.$loading.show(); // loading显示
            if(this.isClick == false){
                return;
            }
            this.isClick = false;  // 防多点击
            let s = {
                walletDepositUrl: this.loginForm.walletDepositUrl, // 代理商充值通链接
                customerUrl: this.loginForm.customerUrl, // 代理商客服通道链接
                username: this.loginForm.username, // 游戏用户名称(代理商平台的)
                device: this.loginForm.device, // 设备端
                lotteryCode: this.loginForm.lotteryCode, // 二级彩种
                playRuleCode: this.loginForm.playRuleCode, // 玩法代码(传空时定位到彩种首页)
                homeUrl: this.loginForm.homeUrl // 游戏大厅页面，玩家点此链接返回游戏大厅                
            }
            s = JSON.stringify(s)
            let data = {
                hashCode: this.loginForm.hashCode, // 代理商账号
                command: this.loginForm.command, // 登录命令
                version: this.loginForm.version, // 接口版本号
                data: s
            }
            loginByToken(data).then(response => {
                this.$loading.hidden(); // loading隐藏
                this.isClick = true;  // 防多点击
                let res = response.data
                // location.href = '/'
                if(res.data.success == 1){
                    // window.open(res.data.content.url)
                    location.href = '/'
                    setToken(res.data.content.authtoken)
                }else{
                    this.$tips.error(res.data.respMsg)
                }
            })
        }
    }
}
</script>

<style lang="stylus">
.login-container
    width 80%
    position fixed
    left 50%
    top 50%
    height 4.2rem
    margin-top -2.1rem
    margin-left -40%
    background #ff0
.electron
    position relative
@media screen and (min-width: 750px) 
    .login-container
        width 680px
        margin-top -2.1rem
        margin-left -340px

</style>