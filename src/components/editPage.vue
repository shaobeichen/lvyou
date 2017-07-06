<template>
  <div>
    <backbar></backbar>
    <spinner v-if='tranform'></spinner>
    <div v-if='!tranform' class="detailMargin backAddFont" >
      <div style="margin:70px 20px">
        <mu-text-field v-model="inputTopic" hintText="发表评论吧!" multiLine :rows="6" :rowsMax="6" fullWidth/><br/>
        <mu-raised-button class="loginRadius" label="发布" @click.native="topicSend"  primary  fullWidth/>
      </div>
    </div>
  </div>
</template>
<style lang="less" >
  @import './../assets/css/public.css';

</style>
<script type="text/ecmascript-6">
  import backbar from './public/backBar.vue'
  import spinner from './public/spinner.vue'
  export default{
    data(){
      return {
        tranform: this.$store.state.tranform,
        editBody: [],
        inputTopic: ''
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
      topicSend(){
        let options = {
          // headers: {'Content-Type': 'application/json'},
          topicContent: this.inputTopic,
          // params: { fetchWhenSave: true }
        }
        this.$http.post('https://api.leancloud.cn/1.1/classes/topic', options).then((success) => {
           this.$router.push('/topic');
        }, (error) => {
          console.log(error);
          console.log(this.topicContent);
        })
      }
    },
    components:{
      backbar,
        spinner
    }
  }
</script>
