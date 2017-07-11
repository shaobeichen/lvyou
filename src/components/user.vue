<template>
    <div class="detailMargin backAddFont">
      <backbar></backbar>
      <spinner v-if='tranform'></spinner>
      <div v-if="!tranform">
        <div class="userBg">
          <div class="userHead">
            <img src="./../assets/image/defaultUser.png" v-if="!this.$store.state.sessionToken">
            <img :src="this.$store.state.headImg" v-if="this.$store.state.sessionToken">
            <div class="userName">
              {{this.$store.state.drawerUsername}}
            </div>
            <mu-flat-button icon="mode_edit" label="修改资料" class="demo-raised-button detailUserInfo" backgroundColor="rgba(0,0,0,0.2)"/>
          </div>
        </div>

        <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="dynamic" title="动态" />
          <mu-tab value="userInfo" title="关于我" />
        </mu-tabs>
        <div v-if="activeTab === 'dynamic'">
          <ul>
            <li class="borderBottom1px" v-for="item in userDynamicBody">
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
        </div>
        <div v-if="activeTab === 'userInfo'">
          <div class="userInfoContent">
            <div class="userInfoTitle">个人信息</div>
            <ul>
              <li>等级：LV.7</li>
              <li>年龄：95后</li>
              <li>性别：男</li>
              <li>地区：安徽省 芜湖市</li>
              <li>爱好：旅行 拍照</li>
            </ul>
            <br>
            <div class="userInfoTitle">个人介绍</div>
            <p>不想被任何事情束手束脚，放手去做。</p>
          </div>

        </div>
      </div>





    </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';

  .userInfoContent{
    margin: 20px;
  }
  .userInfoTitle{
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
    margin-bottom: 10px;
    height: 14px;
    line-height: 14px;
    border-left: #03A9F4 2px solid;
  }
  .userInfoContent li{
    color: #7e7e7e;
  }
  .userInfoContent p{
    color: #7e7e7e;
  }
  .userBg{
    position: relative;
    width: 100%;
    height: 240px;
    background: #03a9f4;
  }
  .userHead{
    position: absolute;
    width: 100%;
    height: 80px;
    margin-top: 5%;
    text-align: center;
  }
  .userHead img{
    display:block;
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    border: 2px solid #fff;
  }
  .userName{
    position: relative;
    padding: 10px;
    color: #ffffff;
    font-size: 20px;
  }
  .detailUserInfo{
    width: 120px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    color: #ffffff;
  }

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
</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
  import spinner from './public/spinner.vue'
    export default{
      data () {
        return {
          tranform: this.$store.state.tranform,
          activeTab: 'dynamic',
          userDynamicBody: []
        }
      },
      created(){
        this.$http.get('https://api.leancloud.cn/1.1/classes/topic').then((success) => {
          this.tranform = false;
          this.newDate();
          this.userDynamicBody = success.body.results;
        }, (error) => {
          console.log(error)
        })
      },
      methods: {
        handleTabChange (val) {
          this.activeTab = val
        },
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
      components: {
        backbar,
        spinner
      }
    }
</script>
