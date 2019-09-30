<template>
  <div class="panel">
    <div class="article-header">
      <span class="topic-title">
        <span class="put-top" v-show="isShow">{{showTag()}}</span>
        {{list.title}}
      </span>
      <div class="info">
        <span>发布于 {{createdTime(list.create_at)}}</span>
        <span>
          作者
          <a v-if="list.author" href="list.author.avatar_url">{{list.author.loginname}}</a>
        </span>
        <span>{{list.visit_count+" 次浏览"}}</span>
        <span>{{"来自 "+tag[list.tab]}}</span>
        <input class="collect-btn"
          :class="{'for-collection': isActive, 'cancel-collection': !isActive}"
          type="submit"
          :value="isCollection"
          @click="collectOrCancel()"/>
      </div>
    </div>
    <div class="article-container">
      <div class="article" v-html="list.content"></div>
    </div>
  </div>
</template>

<script>
import { replaylasttime } from '@/utils'
import { getDatails, topicCollect, deleteCollect } from '@/api'

export default {
  data () {
    return {
      list: {},
      isShow: false,
      isActive: true,
      tag: {
        share: '分享',
        ask: '问答',
        job: '招聘'
      },
      isCollection: '收藏',
      accesstoken: ''
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    }
  },
  created () {
    getDatails(this.id).then((res) => {
      this.list = res.data.data
      console.log('主题详情数据：', this.list)
      this.accesstoken = localStorage.getItem('accesstoken')
    })
  },
  // 路由到详情后，元素挂载后，滚动条回到顶点
  mounted () {
    document.body.querySelector('#mainContainer').scrollTop = 0
  },
  methods: {
    // 判断是否为置顶或精华博文
    showTag () {
      if (this.list.top) {
        this.isShow = true
        return '置顶'
      } else if (this.list.good) {
        this.isShow = true
        return '精华'
      } else {
        this.isShow = false
      }
    },
    // 时间处理
    createdTime (time) {
      return replaylasttime(time)
    },
    // 收藏或取消收藏
    collectOrCancel () {
      if (this.isActive) {
        this.isActive = false
        this.isCollection = '取消收藏'
        topicCollect({accesstoken: this.accesstoken, topic_id: this.list})
      } else {
        this.isActive = true
        this.isCollection = '收藏'
        deleteCollect({accesstoken: this.accesstoken, topic_id: this.listy})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  text-align: left;
  line-height: 20px;
  border-radius: 3px;
  word-break: break-word;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  background-color: #fff;
 .article-header {
   padding: 10px;
   color: #333;
   .topic-title{
     font-size: 22px;
     font-weight: 700;
     margin: 8px 0;
     display: inline-block;
     vertical-align: bottom;
     width: 75%;
     line-height: 130%;
     .put-top {
       background-color: #80bd01;
       padding:2px 4px;
       border-radius: 3px;
       -webkit-border-radius: 3px;
       color: #fff;
       font-size: 12px;
      //  vertical-align: text-bottom;
     }
   }
 }
 .info {
   color: #838383;
   font-size: 12px;
   overflow: hidden;
   span::before {
     content: "• ";
   }
   a {
     color: inherit;
     &:hover {
       text-decoration: underline;
     }
   }
   .collect-btn {
     float: right;
     width: auto;
     cursor: pointer;
     border: none;
     display: inline-block;
     padding: 3px 10px;
     margin: 0;
     font-size: 14px;
     line-height: 2em;
     vertical-align: middle;
     color: #fff;
   }
   .for-collection {
     border-radius: 3px;
     background-color: #80bd01;
     &:hover {
       background-color: #6ba44e;
     }
   }
   .cancel-collection {
     border-radius: 3px;
     background-color: #e5e5e5;
     &:hover {
       background-color: #909090;
     }
   }
 }
 .article-container {
   padding: 10px;
   border-top: 1px solid #e5e5e5;
   .article {
     margin: 0 10px;
   }
 }
}
</style>
<style lang="scss">
  .markdown-text {
      font-size: 20px;
      &>:first-child{
        margin: 0;
      }
      h2 {
        font-size: 26px;
        margin: 30px 0 15px;
        border-bottom: 1px solid #eee;
        line-height: 40px;
        font-weight: 700;
      }
      p {
        font-size: 15px;
        line-height: 1.7em;
        overflow: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        margin: 1em 0;
        word-break: break-word;
      }
      ul,ol {
        padding: 0;
        margin: 0 0 10px 25px;
        list-style-type: disc;
      }
      li {
        line-height: 2em;
        font-size: 14px;
      }
      a {
        font-size: inherit;
        color: #08c;
        &:hover {
          text-decoration: underline;
        }
      }
      img {
        cursor: pointer;
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
      }
      code {
        font-size: 12px;
        color: #000;
        background-color: #fcfafa;
        padding: 4px 6px;
        margin: 0 1px;
      }
      pre.prettyprint {
        font-size: 14px;
        padding: 0 15px;
        margin: 20px -10px;
        background-color: #f7f7f7;
        tab-size: 4;
        line-height: 22px;
        font-family: "Monaco",Menlo,Consolas,"Courier New",monospace;
        code {
          padding: 0;
          border: 0;
          background-color: transparent;
          white-space: pre-wrap;
          font-family: "Monaco",Menlo,Consolas,"Courier New",monospace;
        }
      }
      blockquote {
        &::before {
          content: "";
        }
        padding: 0 0 0 15px;
        margin: 0 0 20px;
        border-left: 5px solid #eee;
        &::after {
          content: "";
        }
      }
      strong {
        font-weight: 700px;
      }
      .kwd {
        color: #008;
      }
      .pln {
        color: #000;
      }
      .typ {
        color: #606;
      }
      .clo, .opn, .pun {
        color: #660;
      }
      .com {
        color: #800;
      }
      .str {
        color: #080;
      }
  }
</style>
