<template>
  <div class="container">
    <div class="container-lf">
      <router-link class="logo" :to="{path:'/'}">
        <img src="@/assets/cnode.svg" alt="cnode">
      </router-link>
      <input class="search" @keyup.enter="search" placeholder="请输入" v-model.trim="searchText" type="text">
    </div>
    <div class="container-rg">
      <router-link :to="{path:'/'}">首页</router-link>
      <router-link v-if="login" :to="{path: '/more'}">未读消息</router-link>
      <router-link :to="{path: '/more'}">新手入门</router-link>
      <router-link :to="{path:'/API'}">API</router-link>
      <router-link :to="{path: '/more'}">关于</router-link>
      <router-link v-if="!login" :to="{path: '/more'}">注册</router-link>
      <router-link :to="{path:'/signin'}" v-if="!login">登录</router-link>
      <router-link v-if="login" :to="{path: '/more'}">设置</router-link>
      <a class="container-rg-api" @click="signOut()" v-if="login">退出</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: '',
      isSignIn: false
    }
  },
  computed: {
    login () {
      return this.$store.state.userAccesstoken.success
    }
  },
  methods: {
    search () {
      // 改变store的值
      this.$store.commit('SET_SEARCHTEXT', this.searchText)
    },
    signOut () {
      // 退出清除localstorage的数据
      localStorage.removeItem('accesstoken')
      localStorage.removeItem('accesstokenReturn')
      // 提交空数据，来改变store的状态，从而改变页面渲染
      this.$store.commit('userInfor', '')
      this.$router.push({path: '/'}) // 跳转至首页
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    width: 90%;
    margin: auto;
    background-color: #444;
    z-index: 99;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    .container-lf, .container-rg {
      display: flex;
      align-items: center;
    }
  }

  .logo {
    display: inline-block;
    width: 120px;
    padding: 3px 20px;
    padding-left: 0;
    height: 34px;
    line-height: 34px;
    color: #ccc;
    font-weight: 700;
  }
  .search {
    width: 210px;
    height: 20px;
    padding: 3px 5px 3px 22px;
    margin-top: 3px;
    border-radius: 15px;
    border: 0;
    background-color: #888;
    transition: all .5s;
    &:hover {
      background-color: #fff;
    }
    &:focus {
      outline: none;
    }
  }
  .container-rg {
    a {
      padding: 10px 15px;
      color: #ccc;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    .container-rg-api {
      padding: 10px 15px;
      font-size: 12px;
      color: #ccc;
    }
    // span {
    //   display: inline-block;
    //   cursor: pointer;
    // }
  }
</style>
