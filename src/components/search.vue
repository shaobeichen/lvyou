<template>
  <div>
    <div class="backBar font">
      <mu-appbar>
        <mu-icon-button icon="arrow_back" slot="left" @click="routerBack"/>
        <mu-text-field  v-model="searchField" v-show="$route.meta.isSearch"  class="searchField" slot="right" hintText="请输入搜索内容"/>
        <mu-icon-button  v-show="$route.meta.isSearch" icon="search" slot="right" @click="search"/>
      </mu-appbar>
    </div>
    <div  class="detailMargin backAddFont">
      <div v-if='searchBtn'>
        <h4 class="tag">热门标签：</h4>
          <ul class="tagContent">
            <li>九寨沟</li>
            <li>成都</li>
            <li>方特</li>
            <li>熊猫基地</li>
            <li>澳大利亚</li>
            <li>都江堰</li>
            <li>香港</li>
            <li>武汉</li>
          </ul>
      </div>
      <div v-if="searchEmpty" class="tag">
        提示：搜索结果为空
      </div>



    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './../assets/css/public.css';
  .backBar{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index:998;
  }

  .searchField{
    color: #FFF;
    margin-bottom: 0;
    width: 100%;
    margin-left: -20%;
  }
  .tagContent{
    width: 60%;
    overflow: auto;
    margin: 10px auto;
  }
  .tag{
    width: 80%;
    padding: 20px 0;
    margin: 0 auto;
    overflow: auto;
    font-size: 16px;
  }
  .tagContent li{
    float: left;
    margin: 5px;
    width: 45%;
    height: 30px;
    color: #8e8e8e;
    line-height: 27px;
    border: 1px #b8b8b8 solid;
    border-radius: 18px;
    text-align: center;
  }
</style>
<script type="text/ecmascript-6">
  import spinner from './public/spinner.vue'
  export default{
    data(){
      return{
        searchBtn: this.$store.state.searchBtn,
        searchField: "",
        searchEmpty: false
      }
    },
    created() {

    },
    components:{
      spinner
    },
    methods:{
      routerBack(){
        this.$router.go(-1);
      },
      search(){
        this.$http.post('https://api.leancloud.cn/1.1/search/select?searchField='+this.searchField+'&limit=200').then((success) => {

          this.searchBtn = false;
        }, (error) => {
          this.searchBtn = false;
          this.searchEmpty = true
        })
      }
    }
  }
</script>

