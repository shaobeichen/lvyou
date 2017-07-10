<template>
  <div>
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin backAddFont">
      <img class="goodsChartsTopImg" src="http://ac-gdylhkfz.clouddn.com/b28ece5a86f62861a050.jpg" />
      <ul>

        <li v-for="(item,index) in goodsChartsBody">

          <router-link :to="{ name:'goodsDetailPage',params:{ id:item.objectId } }">
            <mu-list>
              <div class="index">{{ index+1 }}</div>
              <img :src="item.goodsImg.url" class="goodsListImg" >
              <div class="goodsListContent">
                <p class="goodsTitle">{{ item.goodsTitle }}</p>
                <p class="goodsListTime">{{ ymd > item.createdAt.substring(0,10) ? item.createdAt.substring(0,10):item.createdAt.substr(11,5) }}</p>
              </div>
            </mu-list>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';
  .index{
    height: 80px;
    line-height: 80px;
    float: left;
    margin: 0 0 0 20px;
    color: #818181;
  }
  .goodsChartsTopImg{
    width: 100%;
    height: 200px;
  }
  .goodsListImg{
    width: 60px;
    height: 60px;
    float: left;
    margin: 10px 20px;
    background: #03a9f4;
  }
  .goodsListContent{
    margin: 10px 20px 0 0;
  }
  .goodsListContent p{
    color: #000;
  }
  .goodsTitle{
    height: 42px;
  }
  .goodsListTime{
    float: right;
  }
</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
  import spinner from './public/spinner.vue'
  export default{
    data(){
      return{
        tranform: this.$store.state.tranform,
        goodsChartsBody:[],
        ymd:'',
      }
    },
    created() {
      let options = {
        params: { 'order': '-createdAt' }
      }
      this.$http.get('https://api.leancloud.cn/1.1/classes/goods' ,options).then((success) => {
        this.tranform = false;
        this.goodsChartsBody = success.body.results;
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
