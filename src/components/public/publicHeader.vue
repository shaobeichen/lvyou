<template>
    <div class="publicheader">
      <mu-appbar :title="headtitle" class="indexTopFixed">
        <mu-icon-button icon='menu' slot="left" v-if='menushow' @click="toggle(true)"/>
      </mu-appbar>

      <!--<mu-raised-button label="undocked drawer" @click="toggle(true)"/>-->
      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mu-list @itemClick="docked ? '' : toggle()">
          <mu-list-item title="Menu Item 1"/>
          <mu-list-item title="Menu Item 2"/>
          <mu-list-item title="Menu Item 3"/>
          <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
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
      props:[ 'menushow', 'headtitle' ],

    }
</script>
