<template>
    <div class="topic publiccss">
      <publicheader :menushow="menushow" :headtitle="headtitle"></publicheader>
      <topicbanner class="swiperTop"
                   :topicBannerImg="topicBannerImg"
                   :topicBannerTitle="topicBannerTitle"
                   :topicBannerDev="topicBannerDev"></topicbanner>

      <publictitle :publictitle="publictitle"></publictitle>
      <topiccard></topiccard>
      <addbutton></addbutton>
    </div>
</template>
<style lang="less">
  @import './../assets/css/public.css';
</style>
<script type="text/ecmascript-6">
  import publicheader from './public/publicHeader'
  import topicbanner from './public/topicBanner.vue'
  import publictitle from './public/publicTitle'
  import topiccard from './public/topicCard'
  import addbutton from './public/addButton'

  export default{
    data() {
      return {
        menushow: true,
        headtitle: "话题",
        topicBannerImg: "./../assets/image/banner1.png",
        topicBannerTitle: "那些让人羡慕的爱情",
        topicBannerDev: "那些让人羡慕的爱情,多么美丽，和大家说说吧那些让人羡慕的爱情,多么美丽，和大家说说吧！",
        publictitle: "热门动态",
      }
    },
    components: {
      publicheader,
      topicbanner,
      publictitle,
      topiccard,
      addbutton
    }
  }
</script>
