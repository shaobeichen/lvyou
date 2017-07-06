<template>
  <div>
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin backAddFont feedBackMarginTop">
      <div class="feedBackMargin">
        <mu-text-field v-model="title" hintText="反馈标题"  icon="title" fullWidth/><br/>
        <mu-text-field v-model="content" hintText="反馈内容" multiLine :rows="6" :rowsMax="6" fullWidth icon="comment"/><br/>
        <mu-text-field v-model="contact" hintText="请输入联系方式" type="number" fullWidth icon="phone"/><br/>
        <mu-raised-button class="loginRadius" label="提交" @click="postFeedBack" primary fullWidth/>
      </div>

    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';
  .feedBackMarginTop{
    margin-top: 80px;
  }
  .feedBackMargin{
    margin: 0 30px 30px 30px ;
  }
</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
  import spinner from './public/spinner.vue'
  export default{
    data(){
      return{
        tranform: this.$store.state.tranform,
        feedBackBody:[],
        title: "",
        content: "",
        contact: ""
      }
    },
    created(){
      //判断网络状态
      this.$http.get('https://api.leancloud.cn/1.1/classes/explore').then((success) => {
        this.tranform = false;
      }, (error) => {
        console.log(error)
      })
    },
    methods: {
      postFeedBack(){
        let body = {
          body:{
            status : "open",
            // title: this.title,
            content : this.content,
            contact : this.contact
          }
      }
        this.$http.post('https://api.leancloud.cn/1.1/classes/feedback', body).then((success) => {
          this.feedBackBody = success.body;
        }, (error) => {
          console.log(error)
        })
      }

    },
    components:{
      backbar,
      spinner
    }
  }
</script>
