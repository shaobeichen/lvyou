<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="login" title="登录"/>
      <mu-tab value="register" title="注册"/>
    </mu-tabs>
    <div v-if="activeTab === 'login'">
      <mu-auto-complete hintText="请随便输入点啥" labelFloat label="full width" fullWidth @input="handleInput" :dataSource="dataSource"/>
      <mu-auto-complete hintText="请随便输入点啥" labelFloat label="full width" fullWidth @input="handleInput" :dataSource="dataSource"/>
    </div>
    <div v-if="activeTab === 'register'">
      <h2>Tab Two</h2>
      <p>
        这是第二个 tab
      </p>
    </div>
  </div>
</template>
<style lang="less" >

</style>
<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          activeTab: 'login'
        }
      },
      methods: {
        handleTabChange (val) {
          this.activeTab = val
        }
      }

    }
</script>
