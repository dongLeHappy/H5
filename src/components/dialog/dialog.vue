<template lang="jade">
    transition(name="fade")
        .betingDialog(:class="type", v-show="show")
          .dialogContent
            .closeDialog 
              span 
                svg-icon.close(icon-class="close_loading")
            .dialogInfo
              span 
                svg-icon.loading(icon-class="loading_icon")
                <i :class="type == 'success' ? 'success_icon' : type == 'load' ? 'loading_icon' : type == 'info' ? 'el-icon-info' : type == 'warning' ? 'el-icon-warning' : ''"></i>
              span 投注中
</template>

<script type="text/ecmascript-6">
export default {
    name: 'tips',
    props: {
      type: {
          type: String,
          default: 'info',
          validator: val => ['info', 'success', 'warning', 'error'].includes(val)
      },
      text: {
          type: String,
          default: ''
      },
      show: {
          type: Boolean,
          default: false
      }
    }
}
</script>
<style scoped lang="stylus">
@import "../../assets/stylus/blue";
.fade-enter-active,
.fade-leave-active 
    // transition: opacity 3s
.fade-enter,
.fade-leave-to
    opacity: 0
.tips
  width 100%
  height 100%
  z-index 9999
  position fixed
  background rgba(0,0,0,0.8)
  left 0
  top 0
  filter "Alpha(opacity=60)"
  opacity 1  
    .dialogContent
    width 2.35rem
    height 2.35rem
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    text-align center 
    .closeDialog
      width 100%
      text-align center
      margin-bottom 0.1rem
      .close 
        width 0.25rem
        height 0.25rem
    .dialogInfo
      width 100%
      height 1.5rem
      background-color #31374d
      text-align center 
      line-height 1.2rem
      display flex
      flex-direction column
      .splitLine
        height 0.01rem
      .loading
        width 0.25rem
        height 0.25rem
        animation loading 1.5s linear infinite
      span 
        display inline-block
        height 0.2rem
        color #fff
        font-size 0.15rem
  @keyframes loading {
    0 {
      transform: rotate(0deg)
    }
    100%{
      transform: rotate(360deg)  
    }
  }

</style>
