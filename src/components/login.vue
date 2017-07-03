<template>
  <div class="backAddFont">
    <backbar></backbar>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="login" title="登录"/>
      <mu-tab value="register" title="注册"/>
    </mu-tabs>
    <div v-if="activeTab === 'login'" class="loginMargin">
      <mu-text-field v-model="inputLoginUsername" hintText="请输入用户名" type="text" fullWidth icon="person"/><br/>
      <mu-text-field v-model="inputLoginPassWord" hintText="请输入密码" type="password" fullWidth icon="https"/><br/>
      <mu-raised-button class="loginRadius" label="登录" @click.native="doLogin"  primary  fullWidth/>
      <mu-snackbar v-if="snackbar" :message="message" />
    </div>
    <div v-if="activeTab === 'register'" class="loginMargin">
      <mu-text-field v-model="inputRegUsername" hintText="请输入用户名" type="text" fullWidth icon="person"/><br/>
      <mu-text-field v-model="inputRegPassWord" hintText="请输入密码" type="password" fullWidth icon="https"/><br/>
      <mu-raised-button class="loginRadius" label="注册" @click.native=""  primary fullWidth/>
    </div>
  </div>

</template>
<style lang="less" >
  @import './../assets/css/public.css';

  .loginMargin {
    text-align: center;
    margin: 30px;
  }
  .loginRadius {
    border-radius: 20px;
  }
</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
  // 引入vuex /src/helper.js中的辅助函数，
  // 将actions中的方法直接转为组件中的方法
  import { mapActions } from 'vuex'
  export default{
      data () {
        return {
          //登录注册切换
          activeTab: 'login',
          //登录用户名密码和注册登录密码
          inputLoginUsername: '',
          inputLoginPassWord: '',
          inputRegUsername: '',
          inputRegPassWord: '',
          //文本提示框
          snackbar: false,
          message:'登录成功'
        }
      },
      components: {
        backbar
      },
      methods: {
        //提示框
        showSnackbar () {
          this.snackbar = true;
          if (this.snackTimer) clearTimeout(this.snackTimer);
          this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
        },
        //登录注册切换
        handleTabChange (val) {
          this.activeTab = val
        },
        //使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
        ...mapActions(['userLogin']),
        //登录操作
        doLogin(){
          let options = {
            username : this.inputLoginUsername,
            password : this.inputLoginPassWord
          }
          // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里我们用到了get方法
          this.$http.post('https://api.leancloud.cn/1.1/login',options).then((success) => {
            // console.log(success.body);
            //分发actions组件中调用
            this.userLogin(success.body);
            //提示登录成功
            this.showSnackbar();
            //利用在路由钩子里的地址跳转页面
            let redirect = decodeURIComponent(this.$route.query.redirect);//转化URL编码
            this.$router.push({ //你需要接受路由的参数再跳转
              path: redirect
            });
          }, (error) => {
            //提示登录失败
            if(error.code = 400){
              this.message = '登录失败，请检查用户名和密码';
            }
            this.showSnackbar();
          })
        }
      }

  }
</script>
