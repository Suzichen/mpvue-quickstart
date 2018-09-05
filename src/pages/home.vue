<template>
  <div class="page">
    <div class="swiper">
      <swiper 
        :indicator-dots="swiper.indicatorDots" 
        :autoplay="swiper.autoplay" 
        :interval="swiper.interval" 
        :duration="swiper.duration" 
        :circular="swiper.circular" 
        @change="swiperChange" 
        @animationfinish="animationfinish"
      >
        <div v-for="(item, index) in swiper.imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="swiper-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>
    <div class="content">
      <!-- 内容 -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      swiper: {
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 900,
        circular: true,
        imgUrls: [
          'https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/02/0E/ChMkJ1kJhs6ITpW_AAC6nqV-C-EAAcHdgO0HCgAALq2755.jpg',
          'https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/00/ChMkJlfJTbWIN51bAAccbYUrddYAAU9JQI8_SwABxyF298.jpg'
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    position: fixed;
    height: 100vh;
    width: 100%;
    .swiper {
      width: 100%;
      height: 100vh;
      ._swiper {
        width: 100%;
        height: 100vh;
      }
      image {
        width: 100%;
        height: 100vh;
        opacity: 0.6;
      }
    }
  }
</style>

