<template>
<div>
  <div class="more-containner">
      <div class="more-menu" :class="{hide:x}">
        <div class="more-content">我是左侧栏</div>
        <div class="more-btn" @click="x = !x" >
            <i :class="x?'el-icon-arrow-right':'el-icon-arrow-left'"></i>
          </div>
      </div>
    <router-link class="home" :to="{path: '/'}">返回首页</router-link>
    <div>
     <h3>暂未开发</h3>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      x: false
    }
  }

}
</script>

<style lang="scss">
  .more-containner {
    height: 500px;
    position: relative;
    .more-menu {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #97F4F4;
      width: 150px;
      height: 500px;
      transition:transform .6s;
    }
    .more-content{
      width: 150px;
      height: 500px;
    }
    .hide{
      transform: translate(-140px,0)
    }
    .more-btn{
      background-color: red;
      width: 20px;
      height: 30px;
      line-height: 30px;
      position: absolute;
      right: -5px;
      top: 50%;
      margin-top: -15px;
      border-radius: 10px 0 0 10px;
    }
  }
  .home{
    display: inline-block;
    color: #110000;
    font-size: 20px;
    margin: 10px;
    padding: 10px;
    &:hover {
      color:grey;
    }
  }
  h3 {
    font-size: 30px;
  }
</style>
