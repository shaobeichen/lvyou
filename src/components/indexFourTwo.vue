<template>
  <div >
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin backAddFont">
      <div class="oneImg">
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/wechat_act/0724b2cb4a42e0d37568b91e1c0ef985.jpg" />
      </div>
      <div class="doubleImg">
        <div class="doubleImgGroup right bottom">
          <img alt src="https://images.simpletour.com/simpletour/images/app_line/3d62597b20dd45cb92673ab6164c4c9d.jpg!wechat272372" />
        </div>
        <div class="doubleImgGroup bottom">
          <img alt src="https://images.simpletour.com/simpletour/images/app_line/144db641c9b44fccbc4365238afb0817.jpg!wechat272372" />
        </div>
        <div class="doubleImgGroup right bottom">
          <img alt src="https://images.simpletour.com/simpletour/images/app_line/eeab36aa669c7e1e63edf6f574e7fe2c.jpg!wechat272372" />
        </div>
        <div class="doubleImgGroup bottom">
          <img alt src="https://images.simpletour.com/simpletour/images/app_line/42f8089eabc9b35c2e648f8414f85fb8.jpg!wechat272372" />
        </div>
        <div class="doubleImgGroup right bottom">
          <img alt src="https://images.simpletour.com/simpletour/images/app_line/0fdc868474aa1794dfd75728989f29bc.jpg!wechat272372" />
        </div>
        <div class="doubleImgGroup bottom">
          <img alt src="https://images.simpletour.com/simpletour/images/app_line/249051341dad318075319edcc0fd5359.jpg!wechat272372" />
        </div>
      </div>
      <div class="oneImg">
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/wechat_act/63d4338412ebb84c390a17a8c301123b.jpg" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';
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

