<template>
    <div class="goods publiccss">
      <publicheader :menushow="menushow" :headtitle="headtitle" ></publicheader>
      <swiper></swiper>
      <mu-flexbox :gutter="0">
        <mu-flexbox-item class="flexitem">
          1
        </mu-flexbox-item>
        <mu-flexbox-item class="flexitem" gutter="0">
          2
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
</template>
<style lang="less">
  @import './../assets/css/public.css';
  .flexitem{
    background-color: #565645;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
</style>
<script type="text/ecmascript-6">
  import publicheader from './public/publicHeader'
  import swiper from './public/swiper'
    export default{
      data() {
        return {
          menushow: true,
          headtitle: "干货",
        }
      },
      components: {
        publicheader,
        swiper
      }
    }
</script>
