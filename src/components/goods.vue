<template>
    <div class="goods publiccss">
      <publicheader :menushow="menushow" :headtitle="headtitle" ></publicheader>
      <swiper></swiper>
      <mu-flexbox :gutter="0">
        <mu-flexbox-item class="flexItem">
          <mu-flat-button label="干货分类" class="typeButton borderBottom1px" icon="dashboard" primary />
          <div class="borderRight1px"></div>
        </mu-flexbox-item>
        <mu-flexbox-item class="flexItem" gutter="0">
          <mu-flat-button label="干货排行" class="flatButton borderBottom1px" icon="list" primary />
        </mu-flexbox-item>
      </mu-flexbox>
      <publictitle :publictitle="publictitle"></publictitle>
      <ul>
        <li><goodslist></goodslist></li>
        <li><goodslist></goodslist></li>
        <li><goodslist></goodslist></li>
        <li><goodslist></goodslist></li>
      </ul>
    </div>
</template>
<style lang="less">
  @import './../assets/css/public.css';
  .flexItem{
    background-color: #ffffff;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .flatButton {
    width: 100%;
    height: 100%;
  }
</style>
<script type="text/ecmascript-6">
  import publicheader from './public/publicHeader'
  import swiper from './public/swiper'
  import publictitle from './public/publicTitle'
  import goodslist from './public/goodsList'

    export default{
      data() {
        return {
          menushow: true,
          headtitle: "干货",
          publictitle: "热门干货"
        }
      },
      components: {
        publicheader,
        swiper,
        publictitle,
        goodslist
      }
    }
</script>
