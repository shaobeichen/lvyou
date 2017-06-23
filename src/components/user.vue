<template>
    <div class="user">
      <mu-appbar>
        <mu-icon-button icon="arrow_back" slot="left" @click="routerBack"/>
      </mu-appbar>
      <div class="userBg">
        <div class="userHead">
          <img src="../assets/logo.png" />
          <div class="userName">
            LeachZhou
          </div>
          <mu-flat-button icon="mode_edit" label="修改资料" class="demo-raised-button detailUserInfo" backgroundColor="rgba(0,0,0,0.2)"/>
        </div>
      </div>

      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="dynamic" title="动态" />
        <mu-tab value="userInfo" title="关于我" />
      </mu-tabs>
      <div v-if="activeTab === 'dynamic'">
        <h2>Tab One</h2>
        <p>
          这是第一个 tab
        </p>
      </div>
      <div v-if="activeTab === 'userInfo'">
        <h2>Tab Two</h2>
        <p>
          这是第二个 tab
        </p>
      </div>




    </div>
</template>
<style lang="less" scoped>
  .user{
    font-family: "Microsoft YaHei UI";
  }
  .userBg{
    position: relative;
    width: 100%;
    height: 240px;
    background: #03a9f4;
  }
  .userHead{
    position: absolute;
    width: 100%;
    height: 80px;
    margin-top: 5%;
    text-align: center;
  }
  .userHead img{
    display:block;
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    border: 2px solid #fff;
  }
  .userName{
    position: relative;
    padding: 10px;
    color: #ffffff;
    font-size: 20px;
  }
  .detailUserInfo{
    width: 120px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    color: #ffffff;
  }
</style>
<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          activeTab: 'dynamic'
        }
      },
      methods: {
        handleTabChange (val) {
          this.activeTab = val
        },
        routerBack(){
          this.$router.go(-1)
        }
      }
    }
</script>
