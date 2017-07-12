<template>
  <div class=" detailMargin backAddFont">
    <backbar></backbar>
    <div >
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="login" title="登录"/>
        <mu-tab value="register" title="注册"/>
      </mu-tabs>
      <div v-if="activeTab === 'login'" class="loginMargin">
        <mu-text-field v-model="inputLoginUsername" hintText="请输入用户名" type="text" fullWidth icon="person"/><br/>
        <mu-text-field v-model="inputLoginPassword" hintText="请输入密码" type="password" fullWidth icon="https"/><br/>
        <mu-raised-button class="loginRadius" label="登录" @click="doLogin"  primary  fullWidth/>
        <mu-snackbar v-if="snackbar" :message="message" />
      </div>
      <div v-if="activeTab === 'register'" class="loginMargin">
        <mu-text-field v-model="inputRegUsername" hintText="请输入用户名" type="text" fullWidth icon="person"/><br/>
        <mu-text-field v-model="inputRegPassword" hintText="请输入密码" type="password" fullWidth icon="https"/><br/>
        <mu-raised-button class="loginRadius" label="注册" @click="doRegister"  primary fullWidth/>
        <mu-snackbar v-if="snackbar" :message="message" />
      </div>
    </div>
  </div>

</template>
<style lang="less" >
  @import './../assets/css/public.css';

  .loginMargin {
    text-align: center;
    margin: 30px;
  }
</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
  import spinner from './public/spinner.vue'
  import {mapActions} from 'vuex'
  export default{
    data () {
      return {
        //登录注册切换
        activeTab: 'login',
        //登录用户名密码和注册登录密码
        inputLoginUsername: '',
        inputLoginPassword: '',
        inputRegUsername: '',
        inputRegPassword: '',
        //文本提示框
        snackbar: false,
        message: '登录成功'
      }
    },
    components: {
      backbar,
    },
    created(){
    },
    methods: {
      //使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
      ...mapActions(['loginUsername']),
      ...mapActions(['sessionToken']),
      ...mapActions(['setHeadImg']),
      //提示框
      showSnackbar () {
        this.snackbar = true;
        if (this.snackTimer) clearTimeout(this.snackTimer);
        this.snackTimer = setTimeout(() => {
          this.snackbar = false
        }, 2000)
      },
      //登录注册切换
      handleTabChange (val) {
        this.activeTab = val
      },
      //登录操作
      doLogin(){
          let options = {
            username: this.inputLoginUsername,
            password: this.inputLoginPassword
          }
          // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里我们用到了get方法
          this.$http.post('https://api.leancloud.cn/1.1/login', options).then((success) => {
            // console.log(success.body);
            //分发actions组件中调用
            this.loginUsername(success.body.username);
            this.setHeadImg(success.body.headImg.url);
            this.sessionToken(success.body.sessionToken);
            //提示登录成功
            this.showSnackbar();
            //利用在路由钩子里的地址跳转页面
            let redirect = decodeURIComponent(this.$route.query.redirect);//转化URL编码
            this.$router.push({ //你需要接受路由的参数再跳转
              path: redirect
            });

          }, (error) => {
            //提示登录失败
            this.message = '登录失败，请检查用户名和密码';
            this.showSnackbar();
          })
        },
      //注册操作
      doRegister(){
          let options = {
            username: this.inputRegUsername,
            password: this.inputRegPassword
          }
          this.$http.post('https://api.leancloud.cn/1.1/users', options).then((success) => {
            //提示注册成功
            this.message = '注册成功';
            this.showSnackbar();
            this.$router.push('/login');
          }, (error) => {
            //提示登录失败
            this.message = '注册失败'+error.error;
            console.log(this.username);
            this.showSnackbar();
          })
      }
    }


  }
</script>
