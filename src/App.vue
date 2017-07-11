<template>
  <div class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
      <publicfooter v-show="$route.meta.navShow"></publicfooter>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <publicfooter  v-show="$route.meta.navShow"></publicfooter>

  </div>
</template>
<style  lang="less">

</style>
<script type="text/ecmascript-6">
  import publicfooter from "./components/public/publicFooter"
  export default{
    data() {
      return {

      }
    },
    components: {
      publicfooter
    }
  }
</script>

