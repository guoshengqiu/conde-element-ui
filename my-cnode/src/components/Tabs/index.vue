<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
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
        {name: '全部', tab: 'all'},
        {name: '精华', tab: 'good'},
        {name: '分享', tab: 'share'},
        {name: '问答', tab: 'ask'},
        {name: '招聘', tab: 'job'},
        {name: '客户端测试', tab: 'test'}
      ],
      activeName: 'all',
      isTab: 'all'
    }
  },
  methods: {
    handleClick (tab, event) {
      if (!(tab.name === this.isTab)) {
        console.log(tab.name, event, this.activeName) // tab,event是这个组件自带的
        this.$emit('changeTab', tab) // 向父组件传递点击的页数
        this.isTab = tab.name
      }
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
    margin: 10px;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    height: 26px;
    color: #80bd01;
    border: none;
    margin: 0 8px;
    padding: 3px 4px !important;
    line-height: 20px;
    font-size: 15px;
    /* transition: color 0; */
  }
  .el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2) {
    padding-left: 0;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    /* padding: 3px 4px !important; */
    background-color: #80bd01;
    border-radius: 3px;
    color: #fff;
  }
</style>
