<template>
    <div class="publicheader">
      <mu-appbar :title="headtitle" class="indexTopFixed">
        <mu-icon-button icon='menu' slot="left" v-if='menushow' @click="toggle(true)"/>
      </mu-appbar>

      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <div class="drawerBg">
          <div class="drawerUserImg">
            <mu-avatar src="../../assets/logo.png" slot="leftAvatar" :size="60"/>
          </div>
          <div class="drawerUsername">
            LeachZhou
          </div>
        </div>
        <mu-list>
          <mu-list-item title="我的消息">
            <mu-icon value="home" slot="left"/>
          </mu-list-item>
          <mu-list-item title="我的消息">
            <mu-icon value="home" slot="left"/>
          </mu-list-item>
          <mu-list-item title="我的消息">
            <mu-icon value="home" slot="left"/>
          </mu-list-item>
          <mu-list-item title="我的消息">
            <mu-icon value="home" slot="left"/>
          </mu-list-item>
          <mu-list-item title="设置">
            <mu-icon value="home" slot="left"/>
          </mu-list-item>
          <mu-list-item title="退出登录">
            <mu-icon value="home" slot="left"/>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
    </div>
</template>
<style lang="less" >
  .indexTopFixed{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index:999;
  }
  .drawerBg{
    position: relative;
    width:100%;
    height: 25%;
    background: #03A9F4;
  }
  .drawerUserImg{
    position: absolute;
    left: 10%;
    bottom: 25%;
  }
  .drawerUsername{
    position: absolute;
    left: 10%;
    bottom: 12%;
    color: #dedede;
  }
</style>
<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          open: false,
          docked: true
        }
      },
      methods: {
        toggle (flag) {
          this.open = !this.open;
          this.docked = !flag;
        }
      },
      props:[ 'menushow', 'headtitle' ]
    }
</script>
