<template>
    <div class="publicfooter">
      <mu-paper class="bottomFixed">
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
          <!--<router-link to="/index">-->
          <!--<mu-bottom-nav-item value="index" title="首页" icon="ondemand_video" />-->
          <!--</router-link>-->
          <!--<router-link to="/topic">-->
          <!--<mu-bottom-nav-item value="topic" title="主题" icon="music_note" />-->
          <!--</router-link>-->
          <!--<router-link to="/travels">-->
          <!--<mu-bottom-nav-item value="travels" title="游记" icon="books" />-->
          <!--</router-link>-->
          <!--<router-link to="/user">-->
          <!--<mu-bottom-nav-item value="user" title="用户" icon="photo" />-->
          <!--</router-link>-->
          <mu-bottom-nav-item value="index" title="发现" icon="search" href='#/index'/>
          <mu-bottom-nav-item value="topic" title="话题" icon="chats" href='#/topic'/>
          <mu-bottom-nav-item value="goods" title="干货" icon="extension" href='#/goods'/>
          <mu-bottom-nav-item value="user" title="用户" icon="person" href='#/user'/>

        </mu-bottom-nav>
      </mu-paper>
    </div>
</template>
<style lang="less" >
  .bottomFixed{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index:1000;
  }
</style>
<script type="text/ecmascript-6">
    export default{
      data() {
        return {
          bottomNav: 'index',
          bottomNavColor: 'index'
        }
      },
      methods: {
        //底部切换
        handleChange (val) {
          this.bottomNav = val
        }
      }
    }
</script>
