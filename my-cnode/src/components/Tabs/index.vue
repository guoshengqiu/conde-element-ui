<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane
      v-for="item in tabsArray"
      :key="item.name"
      :label="item.name"
      :name="item.tab"
    ></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabsArray: [
        {name: '全部', tab: ''},
        {name: '精华', tab: 'good'},
        {name: '分享', tab: 'share'},
        {name: '问答', tab: 'ask'},
        {name: '招聘', tab: 'job'},
        {name: '客户端测试', tab: 'test'}
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab.name, event) // tab,event是这个组件自带的
      this.$emit('changeTab', tab) // 向父组件传递点击的页数
    }
  }
}
</script>

<style>
  .el-tabs--card>.el-tabs__header {
    border: none;
    margin: 0;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: none;
    padding: 10px
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    height: auto;
    color: #80bd01;
    border: none;
    margin: 0 10px;
    padding: 0;
    line-height: 20px;
    font-size: 15px;
    /* transition: color 0; */
  }
  .el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2) {
    padding-left: 0;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    padding: 3px 4px !important;
    background-color: #80bd01;
    border-radius: 3px;
    color: #fff;
  }
</style>
