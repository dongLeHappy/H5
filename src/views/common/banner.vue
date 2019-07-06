<template lang="jade">
    .banner
        swiper(:options="swiperOption", class="swiper-touch")
            swiper-slide(v-for="list,index in bannerList", :key="'banner' +index", class="swiper-touch")
                //- img(:src='list.imgUrl')
                svg-icon(icon-class="xx_icon")
                .swiper-lazy-preloader
            .swiper-pagination(slot='pagination')
</template>
<script>
import 'swiper/dist/css/swiper.css' // //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getBanner } from '@/api/home' // 获取Banner图片样式
export default {
    name: 'banner',
    components: { swiper, swiperSlide },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    data(){
        return{
            swiperOption: { // swiper3
                autoplay : {
                    disableOnInteraction: false, //用户操作后是否禁止自动循环
                    delay: 3000 //自自动循环时间
                },
                speed: 2000, // 切换速度，即slider自动滑动开始到结束的时间（单位ms）
                loop:true, // 循环切换
                grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                autoHeight: true,   // 自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。   
                scrollbar: '.swiper-scrollbar',
                lazyLoading : true, // 懒加载开启 // 这个为true时，↓才有用
                lazyLoadingInPrevNext : true, 
                lazyLoadingInPrevNextAmount: 4, // 设置在延迟加载图片时提前多少个slide
                mousewheelControl: true, // 设置为true时，能使用鼠标滚轮控制slide滑动
                observeParents: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                pagination: {
                el: '.swiper-pagination',
                    clickable :true, // 点击分页器的指示点分页器会控制Swiper切换
                }
            },
            bannerList:[]
        }
    },
    mounted(){
        this.getBannerList()
    },
    methods: {
        getBannerList() { // 获取bannerList
            return new Promise((resolve, reject) => {
                getBanner().then((response) => {
                    let res = response.data
                    if(res.data.respCode == 0){
                        this.bannerList = res.data.content;
                    }else{
                        this.$messageBox({
                            title: '提示',
                            message: res.data.respMsg
                        });
                    }
                    resolve()
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        }
    }
}
</script>

<style scoped lang="stylus">
.swiper-slide
    img
        width 100%
        min-height 1.2rem
        position relative
        z-index 11
</style>