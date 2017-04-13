<template>
    <div class="goods publiccss">
      <publicheader :menushow="menushow" :headtitle="headtitle" ></publicheader>
      <swiper></swiper>
      <mu-flexbox :gutter="0">
        <mu-flexbox-item class="flexItem">
          <mu-flat-button label="干货分类" class="typeButton" icon="folder" primary />
          <div class="borderRight"></div>
        </mu-flexbox-item>
        <mu-flexbox-item class="flexItem" gutter="0">
          <mu-flat-button label="干货排行" class="flatButton" icon="folder" primary />
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
  .typeButton{
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;
  }
  .flatButton {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #dedede;
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
