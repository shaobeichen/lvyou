<template>
    <div class="indexMargin backAddFont">
      <spinner v-if='tranform'></spinner>
      <publicheader :menushow="menushow" :headtitle="headtitle"></publicheader>
      <div v-if='!tranform'>

        <topicbanner class="swiperTop"
                     :topicBannerTitle="topicBannerTitle"
                     :topicBannerDev="topicBannerDev"></topicbanner>
        <publictitle :publictitle="publictitleOne"></publictitle>

        <swiper :options="swiperOption" class="topicMoreSwiper">
          <swiper-slide class="topicMoreSlide" v-for="item in topicMoreBody">
            <img :src="item.coverImg.url" class="topicMoreImg" />
            <p>#{{ item.topicMoreTitle }}#</p>
          </swiper-slide>
        </swiper>

        <publictitle :publictitle="publictitleTwo"></publictitle>
        <ul>
          <li class="borderBottom1px" v-for="item in topicContentBody">
            <div class="topicCardAll">
              <div class="topicCardUser">
                <div class="topicCardUserImg">
                  <mu-avatar slot="left" src="http://ac-gdylhkfz.clouddn.com/aaf215d333dcd54b137b.jpg" />
                </div>
                <div class="topicCardUserRight">
                  <p class="topicCardUserName">leachzhou</p>
                  <p class="topicCardTime">{{ ymd > item.createdAt.substring(0,10) ? item.createdAt.substring(0,10):item.createdAt.substr(11,5) }}</p>
                </div>
              </div>

              <div class="topicCardContent">
                <p>{{ item.topicContent }}</p>
              </div>
            </div>
          </li>
        </ul>
        <router-link to="/editPage">
          <addbutton></addbutton>
        </router-link>
      </div>


    </div>


</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';
  .topicCardAll{
    margin: 3% 5%;
  }
  .topicCardUserImg{
    float: left;
  }
  .topicCardUserRight{
    float: left;
    margin-left: 20px;
  }
  .topicCardTime{
    font-size: 10px;
    color: #818181;
  }
  .topicCardContent{
    clear: both;
    margin-left: 60px;
  }
  .topicMoreSwiper{
    padding: 10px 10px 0 10px;
    /*margin: 10px 0 0 0;*/
  }
  .topicMoreSlide{
    height: 115px;
  }
  .topicMoreSlide p{
     color: #818181;
  }
  .topicMoreImg{
    width: 100%;
    height: 70px;
    border-radius:15px;
  }

</style>
<script type="text/ecmascript-6">
  import publicheader from './public/publicHeader'
  import topicbanner from './public/topicBanner.vue'
  import publictitle from './public/publicTitle'
  import addbutton from './public/addButton'
  import spinner from './public/spinner'

  export default{
    data() {
      return {
        menushow: true,
        headtitle: "话题",
        topicBannerTitle: "那些让人羡慕的爱情",
        topicBannerDev: "那些让人羡慕的爱情,多么美丽，和大家说说吧那些让人羡慕的爱情,多么美丽，和大家说说吧！",
        publictitleOne: "热门话题",
        publictitleTwo: "热门动态",
        topicContentBody: [],
        topicMoreBody: [],
        tranform: this.$store.state.tranform,
        ymd: '',
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 10,
          freeMode: true
        }
      }
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
      },
    },
    created() {
      // let options = {
      //   // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      //   // params: { 'cql': "select * from _User"}
      //   params: { 'cql': "select * , include userId from topic)"}
      // }
      //topic时间内容JSON
      this.$http.get('https://api.leancloud.cn/1.1/classes/topic').then((success) => {
        this.tranform = false;
        this.newDate();
        this.topicContentBody = success.body.results;
      }, (error) => {
        console.log(error)
      })
      //用户头像名称JSON
      // this.$http.get('https://api.leancloud.cn/1.1/cloudQuery',options).then((success) => {
      //   this.two = false;
      //   this.topicUserBody = success.body.results;
      // }, (error) => {
      //   console.log(error)
      // })

      //热门话题
      this.$http.get('https://api.leancloud.cn/1.1/classes/topicMore').then((success) => {
        this.topicMoreBody = success.body.results;
      }, (error) => {
        console.log(error)
      })

    },
    components: {
      publicheader,
      topicbanner,
      publictitle,
      addbutton,
      spinner
    }
  }
</script>
