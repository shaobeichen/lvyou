<template>
  <div >
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin backAddFont">
      <div>
        <img class="img"  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_tourism/a9065805a2d5fc2f9b46c1bae0fb2152.jpg!wechatQ3640320',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
      </div>
      <p class="imgP">香格里拉于20世纪30年代出现于英国作家詹姆斯·希尔顿的著名小说《消失的地平线》中而为世人所向往，不久便被拍成同名电影并荣获多项奥斯卡奖，更使其为世人熟知。</p>
      <div class="imgWp">
        <img class="img"  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_line/17977b95d15eacb58841daba3b206224.jpg',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
      </div>
      <div class="imgWp">
        <img class="img"  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_line/acd37bdee3064d6fbd572b2be7ab127c.jpg',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
      </div>
      <div class="imgWp">
        <img class="img"  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_line/8437759921ac38b352b8dc8bfb9dd30d.jpg',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
      </div>
      <div class="imgWp">
        <img class="img"  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_line/4e8bcea1e8241a12a356ef72bcd54357.jpg',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
      </div>
      <div class="imgWp">
        <img class="img"  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_line/8054f4522024d604d65ae21069d0c284.jpg',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
      </div>
      <div class="oneImg">
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/wechat_act/63d4338412ebb84c390a17a8c301123b.jpg" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';
  .img{
    width: 100%;
    height: auto;
    display:block;
  }
  .oneImg{
    width: 100%;
  }
  .imgWp{
    width: 92%;
    margin: 10px auto;
  }
  .imgP{
    width: 92%;
    margin: 10px auto;
    font-size: 16px;
    color: #83858C;
    line-height: 26px;
  }
</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
  import spinner from './public/spinner.vue'
  export default{
    data(){
      return{
        tranform: this.$store.state.tranform,
      }
    },
    created() {
      //判断网络状态
      this.$http.get('https://api.leancloud.cn/1.1/classes/explore').then((success) => {
        this.tranform = false;
      }, (error) => {
        console.log(error)
      })
    },
    components:{
      backbar,
      spinner
    }
  }
</script>

