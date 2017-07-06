<template>
    <div class="publicTitle">
        {{ publictitle }}
    </div>
</template>
<style lang="less" >
  .publicTitle{
    margin-top: 12px;
    background: #fff;
    padding: 10px 10px 10px 20px;
    font-size: 18px;
    border-left:5px solid #03A9F4;
    /*border-top: 1px solid #dbdbdb;*/
    /*border-bottom: 1px solid #dbdbdb;*/
    font-weight: bold;
  }
</style>
<script type="text/ecmascript-6">
    export default{
      data(){
        return {

        }
      },
      props:['publictitle']
    }
</script>
