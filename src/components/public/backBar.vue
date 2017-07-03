<template>
    <div>
      <mu-appbar>
        <mu-icon-button icon="arrow_back" slot="left" @click="routerBack"/>
      </mu-appbar>
    </div>
</template>
<style lang="less" >

</style>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {

      }
    },
    methods: {
      routerBack(){
        if(this.$store.state.isLogined){
          this.$router.go(-1)
        }else{
          this.$router.go(-1)
        }
      }
    }
  }
</script>
