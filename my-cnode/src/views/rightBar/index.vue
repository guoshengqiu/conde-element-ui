<template>
  <div>
    <!-- 公共 用户未登陆 -->
    <div class="item  personal-details" v-if="pl()&&!user">
      <p class="cnode">CNode：Node.js专业中文社区</p>
      <router-link class= "github-sign" :to="{path:'/signin'}"><span>登录</span></router-link>
    </div>
    <!-- 公共 用户信息，登录后 -->
    <!-- <User v-if="pl()&&user"/> -->
    <!-- 发布话题 -->
    <div class="item" v-if="publish()">发布话题</div>
    <!-- ad -->
    <div class="item" v-if="adList()">广告栏</div>
    <!-- 登录页显示的关于 -->
    <div class="about" v-if="about()">
      <div class="about-title">关于</div>
      <div class="about-content">
        <p class="cnode">CNode：Node.js专业中文社区</p>
        <ul>
          在这里你可以：
          <li>向别人提出你遇到的问题</li>
          <li>帮助遇到问题的人</li>
          <li>分享自己的知识</li>
          <li>和其它人一起进步</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 右侧栏，根据不同到路由，显示不同到模块
import { oneOf } from '@/utils'
import List from './config'
// import User from '@/components/User'

export default {
  // components: { User },
  data () {
    return {
      isSignIn: false
    }
  },
  computed: {
    routeName () {
      // return当前路由的界面name
      return this.$route.name
    },
    user () {
      return this.$store.state.userAccesstoken.success
    }
  },
  methods: {
    pl () {
      // 判断当前路由name来决定是否显示配置项目
      return oneOf(this.routeName, List.pl)
    },
    publish () {
      return oneOf(this.routeName, List.pubList)
    },
    adList () {
      return oneOf(this.routeName, List.adList)
    },
    about () {
      return oneOf(this.routeName, List.about)
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    margin-bottom: 20px;
    background-color: #fff;
    text-align: left;
    padding: 10px 10px;
    font-size: 14px;
  }
  .personal-details {
    line-height: 20px;
    .cnode {
      font-size: 15px;
      margin-bottom: 10px;
      line-height: 26px;
    }
    .github-sign {
      text-decoration: none;
      font-size: 14px;
      &:hover {
        font-size: 14px;
      }
      span{
        display:inline-block;
        padding: 3px 20px;
        color:#fff;
        background-color: #5bc0de;
        border-radius: 3px;
        line-height: 28px;
        cursor: pointer;
      }
    }
  }
  .about {
    font-size: 14px;
    .about-title {
      padding: 10px;
      text-align: left;
      line-height: 20px;
      word-break: break-word;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
    }
    .about-content {
      padding: 10px;
      text-align: left;
      line-height: 2em;
      background-color: #fff;
      border-radius: 0 0 3px 3px;
      .cnode {
        font-size: 15px;
        margin-bottom: 10px;
        line-height: 26px;
      }
      li {
        margin-left: 20px;
        list-style-type: disc;
      }
    }
  }

</style>
