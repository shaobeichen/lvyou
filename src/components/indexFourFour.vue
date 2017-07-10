<template>
  <div >
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin backAddFont">

    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';

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

