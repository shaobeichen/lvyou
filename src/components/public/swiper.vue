<template>
    <div class="swiper">
      <swiper class="swiperTop">
        <swiper-slide class="slide">
          <div class="slideImg">
            <img src="../../assets/logo.png" />
          </div>
        </swiper-slide>
        <swiper-slide class="slide">Slide 2</swiper-slide>
        <swiper-slide class="slide">Slide 3</swiper-slide>
      </swiper>
    </div>
</template>
<style lang="less" >
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


    }
</script>
