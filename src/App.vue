<template>
  <div class="app">


    <publicfooter></publicfooter>
    <router-view></router-view>
  </div>
</template>
<style  lang="less">

</style>
<script type="text/ecmascript-6">
  import publicfooter from "./components/public/publicFooter.vue"
  export default{
    data() {
      return {}
    },
    components: {
      publicfooter
    }
  }
</script>

