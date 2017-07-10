<template>
  <div >
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin backAddFont">
      <div>
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/app_tourism/b5e8a47fe5335e3a0e13c6c7f8fdb89d.jpg!wechatQ3640320" />
      </div>
      <p class="imgP">九寨沟位于四川省阿坝藏族羌族自治州九寨沟县境内，是中国第一个以保护自然风景为主要目的的自然保护区。地处青藏高原向四川盆地过渡地带，距离成都市400多千米，是一条纵深50余千米的山沟谷地，总面积64297公顷，森林覆盖率超过80%。因沟内有树正寨、荷叶寨、则查洼寨等九个藏族村寨坐落在这片高山湖泊群中而得名。 山明水秀，郁郁葱葱，九寨归来不看水的俗语一直流传至今。</p>
      <h5 class="h5">九寨沟必游景点</h5>
      <h5 class="h5">No.1 珍珠滩</h5>
      <p class="imgP">珍珠滩布满了坑洞，沿坡而下的激流在坑洞中撞击，溅起无数朵水花，在阳光照射下，点点水珠似珍珠洒落，“珍珠滩”之名由此而来。</p>
      <div class="imgWp">
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/app_line/a91b902f4a5dcfc372f75dd39cda2ef9.jpg" />
      </div>
      <h5 class="h5">No.2 五彩池</h5>
      <p class="imgP">五彩池深藏于山路下边的深谷中。五彩池海拔2995米，是九寨沟最小的海子，然而它的色彩绚烂，与五花海不相上下。五彩池异常清澈，透过池水，可见到池底岩面的石纹，由于池底沉淀物的色差以及池畔植物色彩的不同，原本湛蓝色的湖面变得五彩斑斓。</p>
      <div class="imgWp">
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/app_line/e032871a665f956df73bd7e019e3a7c9.jpg" />
      </div>
      <h5 class="h5">No.3 芦苇海</h5>
      <p class="imgP">进入九寨沟后的第一个海子就是芦苇海，过了盆景滩就能看到。芦苇海全长2.2公里，是一个半沼泽形态的湖泊，海中芦苇丛生，一股水色翠绿、晶莹透明的清流从成片的苇中蜿蜓流过。春夏时节，清流芦苇同色，满眼碧绿；秋冬之际，芦苇一色金黄，如黄金盘上的一道翡翠，让人惊诧，甚至不敢相信大自然的色彩竟能对比如此强烈。</p>
      <div class="imgWp">
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/app_line/233d5ea91d5ed0c70064b03aa547e9fc.jpg" />
      </div>
      <p class="imgP">最后小编送大家一张景区导览图，九寨沟的美景全在图上啦</p>
      <div class="imgWp">
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/app_line/8a9ad643f0bcb39660fd9b4bee955efd.jpg" />
      </div>

      <div class="oneImg">
        <img class="img" alt src="https://images.simpletour.com/simpletour/images/wechat_act/63d4338412ebb84c390a17a8c301123b.jpg" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';
  .h5{
    margin: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  .img{
    width: 100%;
    height: auto;
    display:block;
  }
  .oneImg{
    width: 100%;
  }
  .imgWp{
    width: 92%;
    margin: 10px auto;
  }
  .imgP{
    width: 92%;
    margin: 10px auto;
    font-size: 16px;
    color: #83858C;
    line-height: 26px;
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

