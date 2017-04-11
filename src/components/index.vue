<template>
  <div class="index publiccss">
    <spinner v-if='tranform'></spinner>
    <publicheader :menushow="menushow" :headtitle="headtitle" ></publicheader>
    <div v-if='!tranform'>
      <swiper></swiper>

      <mu-flexbox :gutter="0">
        <mu-flexbox-item class="flex-demo1">
          1
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo1" gutter="0">
          2
        </mu-flexbox-item>
      </mu-flexbox>
      <mu-flexbox :gutter="0">
        <mu-flexbox-item class="flex-demo1">
          3
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo1">
          4
        </mu-flexbox-item>
      </mu-flexbox>

      <publictitle :publictitle="publictitle"></publictitle>


      <div class="indexContent" v-for="item in xin_body">
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
<style  lang="less" >
    @import './../assets/css/public.css';

    .flex-demo1{
      height: 100px;
      background-color: #565645;
      text-align: center;
      line-height: 100px;
    }
    .indexContent{
      background: #fff;
      border-bottom: 1px solid #dedede;
    }
    .indexContentImg{
      text-align:center;
    }
    .indexContentTitle{
      padding: 0 50px;
    }


    .co-movies-wrap {
      text-decoration: none;
      font-size: 0;
    }
    .co-movies-show {
      background-color: #f8f8f8;
      cursor: pointer;
      font-size: 0;
      padding: 10px 20px;
    }
    .co-movies-show-child {
      display: flex;
      align-items: flex-end;
      padding-bottom: 10px;
      border-bottom: 1px solid #d6d6d6;
    }
    .co-movieMsg {
      flex: 1;
      padding-left: 20px;
      vertical-align: top;
    }
    .co-movieMsg h2 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .co-movies-show p {
      font-size: 14px;
      color: #666;
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
        publictitle: "标题一"
      }
    },
    created() {
      // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里我们用到了get方法
      this.$http.get('http://localhost:9090/lvyou/index.php/Home/index/xinjson').then((success) => {
        // console.log(success.body);
        // JSON.parse(success.body);
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
