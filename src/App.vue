<template lang="jade">
    #app
        vue-header(:menuIcon="menuIcon", v-if= " menuIcon=='menu' ? false : true ")  // 头部
        .nav-content
            router-view // 路由
        // vue-center  // 用户中心
</template>
<script>
import { getToken } from '@/utils/auth' // getToken from cookie
import center from "@/views/user/center";
import header from "@/views/common/header";
import { mapGetters } from 'vuex';
export default {
    name: 'App',
    components:{
        "vue-header": header,
        "vue-center": center
    },
    computed:{
        ...mapGetters([
            'menuIcon'
        ])
    },
    data() {
        return {
            getToken: false
        }
    },
    mounted() {
        this.getTokenIcon()
    },
    methods: {
        getTokenIcon() { // 判断是否登入
           if(getToken()) {
               this.getToken = true
           }
        }
    }
}
</script>
<style lang="stylus">
@import "assets/stylus/base";
@import "assets/stylus/mint-ui";

#app 
    padding: 0rem;
    height 100%
    width 100%
    background #3a3f53
    position relative
    .nav-content
        width 100%
        height 100%
        -webkit-overflow-scrolling touch
        top 0.44rem
        position absolute
</style>
