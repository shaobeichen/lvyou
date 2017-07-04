<template>
  <div>
    <div style="font-size:50px">test</div>
      <div  v-for="item in exploreBody">


      </div>

  </div>
</template>
<style  lang="less" scoped>


</style>
<script type="text/ecmascript-6">

  export default{
    data() {
      return {
        exploreBody: [],
      }
    },
    created() {
      let options = {
        cql: "select * from explore where objectId='595a473bac502e7589c3cb53'"
      }
      this.$http.get('https://api.leancloud.cn/1.1/cloudQuery',options).then((success) => {

        this.exploreBody = success.body;

      }, (error) => {
        console.log(error)
      })
    }
  }
</script>

