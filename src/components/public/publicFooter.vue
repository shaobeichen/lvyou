<template>
    <div class="publicfooter">
      <mu-paper class="bottomFixed">
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
          <mu-bottom-nav-item value="index" title="发现" icon="explore" href='#/index'/>
          <mu-bottom-nav-item value="topic" title="话题" icon="chats" href='#/topic'/>
          <mu-bottom-nav-item value="goods" title="干货" icon="extension" href='#/goods'/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
</template>
<style lang="less" >
  .bottomFixed{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index:1000;
  }
</style>
<script type="text/ecmascript-6">
    export default{
      data() {
        return {
          bottomNav: 'index',
        }
      },
      methods: {
        //底部切换
        handleChange (value) {
          this.bottomNav = value
        }
      }
    }
</script>
