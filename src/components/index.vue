<template>
  <div class="index indexMargin backAddFont"  >
    <spinner v-if='tranform'></spinner>
    <publicheader :menushow="menushow" :headtitle="headtitle" ></publicheader>
    <div v-if='!tranform'>

      <swiper></swiper>

      <mu-flexbox :gutter="0">
        <router-link to="/indexFourOne">
          <mu-flexbox-item class="flexItem">
            <img src="../assets/image/indexFour1.jpg" />
          </mu-flexbox-item>
        </router-link>
        <router-link to="/indexFourTwo">
          <mu-flexbox-item class="flexItem" gutter="0">
            <img src="../assets/image/indexFour2.png" />
          </mu-flexbox-item>
        </router-link>
      </mu-flexbox>
      <mu-flexbox :gutter="0">
        <router-link to="/indexFourThree">
          <mu-flexbox-item class="flexItem">
            <img src="../assets/image/indexFour3.jpg" />
          </mu-flexbox-item>
        </router-link>
        <router-link to="/indexFourFour">
          <mu-flexbox-item class="flexItem">
            <img src="../assets/image/indexFour4.png" />
          </mu-flexbox-item>
        </router-link>
      </mu-flexbox>

      <publictitle :publictitle="publictitle"></publictitle>

      <div class="indexContent borderBottom1px" v-for="item in exploreBody">
        <router-link :to="{ name:'detailPage',params:{ id:item.objectId } }">
          <mu-card>
            <mu-card-media>
                <!--<img  :src="item.CoverMap.url" class="cardImg" />-->
                  <img class="cardImg" v-lazy="{ src: item.CoverMap.url,
                  error:'https://m.simpletour.com/images/defalut-img@588250.png',
                  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'}"/>
            </mu-card-media>
            <mu-card-title :title="item.title"  :subTitle=" ymd > item.createdAt.substring(0,10) ? item.createdAt.substring(0,10):item.createdAt.substr(11,5)"/>
          </mu-card>
        </router-link>
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
      margin: 20px 0;
      background: #fff;
    }
    .cardImg{
      width: 100%;
      height: auto;
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
        exploreBody: [],
        tranform: this.$store.state.tranform,
        menushow: true,
        headtitle: "发现",
        publictitle: "发现美好",
        ymd: '',
      }
    },
    methods:{
      //时间格式处理
      newDate(){
        let myDate = new Date();
        let year = 1900+myDate.getYear();
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
      // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里我们用到了get方法
        this.$http.get('https://api.leancloud.cn/1.1/classes/explore').then((success) => {
        // 请求成功，关闭loading
        this.tranform = false;
        // 由于请求成功返回的是Promise对象，我们要从success.body拿到数组
        this.exploreBody = success.body.results;
        this.newDate();

      }, (error) => {
        console.log(error)
      })

    },
    components: {
      spinner,
      swiper,
      publicheader,
      publictitle,
    }
  }
</script>
