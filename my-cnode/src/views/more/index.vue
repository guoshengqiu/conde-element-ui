<template>
<div>
  <router-link class="home" :to="{path: '/'}">返回首页</router-link>
  <div>
    <h3>暂未开发</h3>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
