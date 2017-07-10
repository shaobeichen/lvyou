<template>
  <div >
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin backAddFont">
      <mu-sub-header class="detailTitle">{{ goodsDetailBody.goodsTitle }}</mu-sub-header>
      <mu-card-title :subTitle="ymd > goodsDetailBody.createdAt.substring(0,10) ? goodsDetailBody.createdAt.substring(0,10):goodsDetailBody.createdAt.substr(11,5)"/>
      <mu-content-block class="detailContent">
        <mu-card-media>
          <img :src="goodsDetailBody.goodsImg.url">
        </mu-card-media>
        <br>
        {{ goodsDetailBody.goodsContent }}
        <br>
        <br>
      </mu-content-block>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';
  .detailTitle{
    font-size: 25px;
    font-weight: bold;
  }
  .detailContent{
    font-size: 16px;
  }

</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
  import spinner from './public/spinner.vue'
  export default{
    data(){
      return{
        tranform: this.$store.state.tranform,
        id: this.$route.params.id,
        goodsDetailBody:[],
        ymd:'',
      }
    },
    created() {
      this.$http.get('https://api.leancloud.cn/1.1/classes/goods/'+this.id ).then((success) => {
        this.tranform = false;
        this.goodsDetailBody = success.body;
        this.newDate();
      }, (error) => {
        console.log(error)
      })
    },
    methods:{
      //时间格式处理
      newDate(){
        let myDate = new Date();
        let year = 1900+myDate.getFullYear();
        let month = myDate.getMonth()+1;
        if(month<10){
          month = "0" + month
        }
        let day = myDate.getDate();
        if(day<10){
          day = "0" + day
        }
        this.ymd = year+"-"+month+"-"+day;
        // console.log(this.ymd);
      }
    },
    components:{
      backbar,
      spinner
    }
  }
</script>
