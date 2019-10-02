<template>
<div>
  <el-breadcrumb separator="/" class="breadcrumb-sign">
    <el-breadcrumb-item :to="{path: '/'}" class="breadcrumb-sign-item">主页</el-breadcrumb-item>
    <el-breadcrumb-item>登录</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="form">
    <el-form :model="form">
      <el-form-item label="用户Token">
        <el-input
          v-model="form.token"
          placeholder="请输入Token"
          clearable
          class="from-input"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signIn">Access Token 登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import { postAccessToken } from '@/api'

export default {
  data () {
    return {
      form: {
        token: ''
      },
      user: ''
    }
  },
  methods: {
    signIn () {
      // 验证用户的accesstoken来获取用户详情，然后把该值存储在Local Storage
      postAccessToken({ accesstoken: this.form.token }).then((data) => {
        this.user = data.data
        this.$store.commit('userInfor', data.data) // commit提交state.userAccesstoken
        localStorage.setItem('accesstoken', this.form.token) // 把accesstoken保存在浏览器localStorage
        localStorage.setItem('accesstokenReturn', JSON.stringify(data.data)) // 把验证后的返回值保存在浏览器localStorage
        console.log('验证后返回数据：', this.user)
        console.log('保存在Local Storage数据：', JSON.parse(localStorage.getItem('accesstokenReturn')))
      })
      // 路由跳转至首页
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>
  .el-breadcrumb__inner.is-link {
    color: #80bd01;
  }
  .el-breadcrumb__inner.is-link:hover {
    color: #80bd01;
    text-decoration: underline;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: #999;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #999;
  }
  .el-form {
    margin-top: 65px;
  }
  .el-form-item__label {
    width: 230px;
  }
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .el-form-item {
    margin-bottom: 32px;
  }
</style>

<style lang="scss" scoped>
  .breadcrumb-sign {
    height: 20px;
    line-height: 20px;
    padding: 10px 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .form {
    padding: 10px;
    background-color: #fff;
    .from-input {
      width: 400px;
      left: -130px;
    }
  }
</style>
