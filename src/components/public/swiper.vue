<template>
    <div class="swiper">
      <swiper class="swiperTop" :options="swiperOption">
        <swiper-slide class="slide">
          <div class="slideImg">
            <!--<img src="../../assets/image/banner1.png" />-->
            <img src="https://images.simpletour.com/simpletour/images/wechat_banner/45354e74a7dfda4177e081fbb188fc11.jpg!wechatQ3640160" />
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="slideImg">
            <!--<img src="../../assets/image/banner2.png" />-->
            <img src="https://images.simpletour.com/simpletour/images/wechat_banner/2a6a4af6412f37f7e0bcf0aebe834b2c.jpg!wechatQ3640160" />
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="slideImg">
            <!--<img src="../../assets/image/banner3.png" />-->
            <img src="https://images.simpletour.com/simpletour/images/wechat_banner/3d2a83f6692726dc1b87cf975fba6f57.jpg!wechatQ3640160" />
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>
<style lang="less" scoped>
  .swiperTop{
    margin-top: 56px;
  }
  .slide{
    width: 100%;
    height: 100px;
    background: #dedede;
  }
  .slideImg img{
    width:100%;
    height: 100px;
  }
</style>
<script type="text/ecmascript-6">
    export default{
      data() {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            paginationClickable: true
          }
        }
      }

    }
</script>
