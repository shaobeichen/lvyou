<template>
    <div class="backBar">
        <mu-appbar>
          <mu-icon-button icon="arrow_back" slot="left" @click="routerBack"/>
        </mu-appbar>
    </div>
</template>
<style lang="less" scoped>
  .backBar{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index:998;
  }


</style>
<script type="text/ecmascript-6">
  import { mapActions } from 'vuex'
  export default{
    data () {
      return {

      }
    },
    methods: {
      ...mapActions(['setIsFirst']),
      routerBack(){
        if(this.$store.state.sessionToken){
          if(this.$store.state.isFirst){
            this.setIsFirst(false);
            this.$router.go(-1);
            this.$router.go(-1);
          }else{
            this.$router.go(-1)
          }
        }else{
          this.$router.go(-1)
        }
      }
    }
  }
</script>
