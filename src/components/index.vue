<template>
  <div class="index publiccss"  >
    <spinner v-if='tranform'></spinner>
    <publicheader :menushow="menushow" :headtitle="headtitle" ></publicheader>
    <div v-if='!tranform'>
      <swiper></swiper>

      <mu-flexbox :gutter="0">
        <mu-flexbox-item class="flexItem">
          <img src="../assets/image/indexFour1.png" />
        </mu-flexbox-item>
        <mu-flexbox-item class="flexItem" gutter="0">
          <img src="../assets/image/indexFour2.png" />
        </mu-flexbox-item>
      </mu-flexbox>
      <mu-flexbox :gutter="0">
        <mu-flexbox-item class="flexItem">
          <img src="../assets/image/indexFour3.png" />
        </mu-flexbox-item>
        <mu-flexbox-item class="flexItem">
          <img src="../assets/image/indexFour4.png" />
        </mu-flexbox-item>
      </mu-flexbox>

      <publictitle :publictitle="publictitle"></publictitle>

      <div class="indexContent borderBottom1px" v-for="item in xin_body">
        <div class="indexContentImg">
          <img src="../assets/logo.png" >
        </div>
        <div class="indexContentTitle">
          <div>{{ item.article_id }}</div>
        </div>
      </div>
    </div>
  </div>

</template>
<style  lang="less" scoped>
    @import './../assets/css/public.css';

    .flexItem{
      width: 100%;
      height: 75px;
      background-color: #565645;
      text-align: center;
      line-height: 100px;
    }
    .flexItem img{
      width: 100%;
      height: 100%;
    }
    .indexContent{
      background: #fff;
    }
    .indexContentImg{
      text-align:center;
    }
    .indexContentTitle{
      padding: 0 50px;
    }

</style>
<script type="text/ecmascript-6">
  import spinner from './public/spinner'
  import swiper from './public/swiper'
  import publicheader from './public/publicHeader'
  import publictitle from './public/publicTitle'

  export default{
    data() {
      return {
        xin_body: [],
        tranform: false,
        menushow: true,
        headtitle: "发现",
        publictitle: "发现美好",
      }
    },
    created() {
      // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里我们用到了get方法
      this.$http.get('http://localhost:9090/lvyou/index.php/Home/index/xinjson').then((success) => {
        // console.log(success.body);
        // 请求成功，关闭loading
        this.tranform = false;
        // 由于请求成功返回的是Promise对象，我们要从success.body拿到数组
        this.xin_body = success.body;
      }, (error) => {
        console.log(error)
      })
    },
    components: {
      spinner,
      swiper,
      publicheader,
      publictitle
    }
  }
</script>
