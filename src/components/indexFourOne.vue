<template>
  <div class="oneBg">
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin font">
      <div class="oneImg">
        <img class="img"src='https://images.simpletour.com/simpletour/images/wechat_act/95ca6d6b88937091768ad2a73ca82a5f.jpg' />
      </div>
      <div class="oneImg top">
        <img class="img"  src='https://images.simpletour.com/simpletour/images/wechat_act/564c242bc47feb135e04aa3acc4d4222.jpg' />
      </div>
      <div class="doubleImg">
        <div class="doubleImgGroup right bottom">
          <img  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_tourism/2722afbc80b0d5fbe5083b91e419ed7f.jpg!wechat272216',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
          <div class="imgTitle">
            至尊体验 | 成都-九寨沟3日往返车位（金龙国际度假酒店）
          </div>
          <div class="price">
            <span>799.00</span>
            <span>元起</span>
          </div>
        </div>
        <div class="doubleImgGroup bottom">
          <img  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_tourism/4f5807c1c13005a6d904d7834cca13f1.jpg!wechat272216',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
          <div class="imgTitle">
            周六出发 | 成都-四姑娘山2日生态游（含双桥沟、长坪沟门票+双沟观光车+舒适住宿）
          </div>
          <div class="price">
            <span>529.00</span>
            <span>元起</span>
          </div>
        </div>
        <div class="doubleImgGroup right bottom">
          <img  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_tourism/9aab02a7d31bc6570d6aacfa308e97a2.jpg!wechat272216',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
          <div class="imgTitle">
            避暑休闲 | 乐山大佛、峨眉山2日（含舒适住宿、峨眉山＆乐山大佛门票）
          </div>
          <div class="price">
            <span>469.00</span>
            <span>元起</span>
          </div>
        </div>
        <div class="doubleImgGroup bottom">
          <img  v-lazy="{ src: 'https://images.simpletour.com/simpletour/images/app_tourism/ab2b7b6b50f81876b98baf99f2b7ea1f.jpg!wechat272216',
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" />
          <div class="imgTitle">
            避暑首选 | 都江堰、青城山1日往返畅玩套餐（含都江堰、青城山门票）
          </div>
          <div class="price">
            <span>239.00</span>
            <span>元起</span>
          </div>
        </div>
      </div>
      <div class="oneImg">
        <img class="img" alt src='https://images.simpletour.com/simpletour/images/wechat_act/6c2271120642a8a2c3c525a90760192c.jpg' />
      </div>

    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';

  .oneBg{
    background-color: #52E4E3 ;
  }
  .top{
    margin-top: 30px;
  }
  .oneImg{
    width: 100%;
  }
  .img{
    width: 100%;
    height: auto;
    display:block;
  }
  .doubleImg{
    overflow:auto;
    width: 90%;
    margin: 20px auto;
  }
  .doubleImgGroup{
    float: left;
    width: 47%;
    height: auto;
    background-color: #ffffff;
  }
  .right{
    margin-right: 18px;
  }
  .bottom{
    margin-bottom: 18px;
  }
  .doubleImgGroup img{
    width: 100%;
    display: block;
  }
  .imgTitle{
    color: #4A4A4A;
    width: 90%;
    height: 45px;
    margin: 5px auto;
    text-overflow: ellipsis;
    overflow: hidden;
    /*white-space:nowrap;*/
    //省略号多行文字
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price{
    margin: 10px;
    color: #F5A623;
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
