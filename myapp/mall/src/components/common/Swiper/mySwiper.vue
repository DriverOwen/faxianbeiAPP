<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
      <img src="~@/assets/images/duo1.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="~@/assets/images/duo2.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="~@/assets/images/duo3.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="~@/assets/images/duo4.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="~@/assets/images/recommend5.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="~@/assets/images/recommend6.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
  export default {
    name: "mySwiper",
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          // 显示分页
          pagination: {
            el: ".swiper-pagination",
            clickable: true //允许分页点击跳转
          },
          // 设置点击箭头

        }
      }
    }
  }
</script>

<style scoped>
.swiper-container .swiper-slide{
  width: 100%;
  height: 160px;
  font-size: 16px;
  text-align: center;
}
.swiper-slide img {
  width: 100%;
  border-radius: 2px;
}
.swiper-container >>> .swiper-pagination-bullet-active {
  background: #F2385A;
}


</style>