<template>
    <div class="topicBanner">
      <div class="writeFilter"></div>
      <img src="https://images.simpletour.com/simpletour/images/wechat_act/52c03fd714671ea3d2a416b33cb1edcf.jpg " class="topicBannerImg">
      <div class="topicBannerRelative">
        <div class="topicBannerDiv">
          <div class="borderTop"></div>
          <p class="topicBannerTitle">#{{ topicBannerTitle }}#</p>
          <p class="topicBannerBefore">快来参与吧!</p>
        </div>
      </div>
      <div class="topicBannerDev">
        <p>{{ topicBannerDev }}</p>
      </div>
    </div>
</template>
<style lang="less" >
  .topicBannerRelative{
    position: relative;
    display: block;
    color: #ffffff;
  }
  .topicBannerDiv{
    position: absolute;
    right: 15%;
    bottom: 65px;
    width: 70%;
    height: 80px;
    text-align: center;
  }
  .topicBannerImg{
    width: 100%;
    height: 200px;
    /*background: #000000;*/
    filter:alpha(Opacity=80);
    /*-moz-opacity:0.5;*/

  }
  .writeFilter{
    position: absolute;
    width: 100%;
    height: 200px;
    background: #000000;
    opacity: 0.5;
  }
  .borderTop{
    border-top: 2px solid #dedede;
  }
  .topicBannerTitle{
    padding: 15px 0 10px 0;
    font-weight: bold;
    font-size: 18px;
  }
  .topicBannerBefore:before{
    content: "";
    border-top: 2px solid #dedede;
    position: absolute;
    width: 30%;
    bottom: 13px;
    left: 0px;
  }
  .topicBannerBefore:after{
    content: "";
    border-top: 2px solid #dedede;
    position: absolute;
    width: 30%;
    bottom: 13px;
    right: 0px;
  }
  .topicBannerDev{
    width: 100%;
    height: 50px;
    background: #ffffff;
    padding-top: 2px;
  }
  .topicBannerDev p{
    margin: 0 20px;
  }
</style>
<script type="text/ecmascript-6">
    export default{
      data(){
        return {

        }
      },
      props:['topicBannerTitle','topicBannerDev']
    }
</script>
