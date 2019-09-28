<template>
  <el-container>
    <el-header height="50px"><Header/></el-header>
    <el-container class="content">
      <el-main>
        <router-view class="centent-mian"></router-view>
      </el-main>
      <el-aside width="290px">
        <router-view class="centent-right" name="rightBar"></router-view>
      </el-aside>
    </el-container>
    <el-footer height="auto"><Footer/></el-footer>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header, Footer
  }
}
</script>

<style>
  .el-header {
    padding: 0;
    background-color: #444;
  }
  .el-footer {
    padding: 0;
  }
  .content {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
  }
  .el-main {
    padding: 0;
    margin-right: 15px;
    overflow: hidden;
  }
</style>
