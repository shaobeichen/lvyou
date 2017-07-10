<template>
    <div class="goods indexMargin backAddFont">
      <spinner v-if='tranform'></spinner>
      <publicheader :menushow="menushow" :headtitle="headtitle" ></publicheader>
      <div v-if='!tranform'>
        <swiper></swiper>
        <mu-flexbox :gutter="0">
          <mu-flexbox-item class="flexItem">
            <mu-flat-button label="干货分类" class="flatButton " icon="dashboard" primary />
          </mu-flexbox-item>

          <mu-flexbox-item class="flexItem" gutter="0">
            <router-link to="/goodsCharts">
              <mu-flat-button label="干货排行" class="flatButton " icon="list" primary />
            </router-link>
          </mu-flexbox-item>


        </mu-flexbox>
        <publictitle :publictitle="publictitle"></publictitle>
        <ul>

          <li v-for="item in goodsBody">
            <router-link :to="{ name:'goodsDetailPage',params:{ id:item.objectId } }">
              <mu-list>
                <img  v-lazy="{ src: item.goodsImg.url,
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}" class="goodsListImg" >
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
  .goodsListImg{
    width: 60px;
    height: 60px;
    float: left;
    margin: 10px 20px;
    background: #8e8e8e;
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
  import spinner from './public/spinner'
  import publicheader from './public/publicHeader'
  import swiper from './public/swiper'
  import publictitle from './public/publicTitle'

    export default{
      data() {
        return {
          menushow: true,
          headtitle: "干货",
          publictitle: "热门干货",
          goodsBody: [],
          tranform: this.$store.state.tranform,
          ymd: '',
        }
      },
      components: {
        publicheader,
        swiper,
        publictitle,
        spinner
      },
      methods:{
        //时间格式处理
        newDate(){
          let myDate = new Date();
          let year = myDate.getFullYear();
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
      created() {
        this.$http.get('https://api.leancloud.cn/1.1/classes/goods').then((success) => {
          this.tranform = false;
          this.newDate();
          this.goodsBody = success.body.results;
        }, (error) => {
          console.log(error)
        })

      },
    }
</script>
