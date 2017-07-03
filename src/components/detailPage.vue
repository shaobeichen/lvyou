<template>
    <div>
      <spinner v-if='tranform'></spinner>
      <backbar></backbar>
      <div v-if='!tranform'>
        <mu-sub-header>{{ detailBody.title }}</mu-sub-header>
        <mu-content-block>
          {{ detailBody.content }}
        </mu-content-block>
      </div>
    </div>
</template>
<style lang="less" >


</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
    export default{
      data(){
        return{
          tranform: this.$store.state.tranform,
          id: this.$router.query.pageId,
          detailBody:[]
        }
      },
      created() {
        this.$http.get('https://api.leancloud.cn/1.1/classes/explore'+this.id ).then((success) => {
          this.tranform = false;
          this.detailBody = success.body.results;
        }, (error) => {
          console.log(error)
        })
      },
      components:{
        backbar
      }
    }
</script>
