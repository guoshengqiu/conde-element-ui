<template>
  <div class="tp-container">
    <div class="tp-list" v-for="item in list" :key="item.id">
      <a class="author" href="#1"><img :src="item.author.avatar_url" :title="item.title"></a>
      <span class = "replay-count">{{item.reply_count}}/{{item.visit_count}}</span>
      <a class = "last-time" href="#2">{{dispalyreplytime(item.last_reply_at)}}</a>
      <div>
          <!-- 对象访问方式 -->
          <!-- <span v-if="item.tab">{{tag[item.tab]}}</span> -->
          <span class="tag" :class="{'active-tag': activeTag(item)}" v-if="item.tab">{{displayTag(item)}}</span>
          <router-link class="tp-title" :to="{path:'/datails', query:{id: item.id}}">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { replaylasttime } from '@/utils/index.js'

export default {
  name: 'TopicList',
  props: { list: Array },
  data () {
    return {
      tag: {
        'share': '分享',
        'ask': '问答',
        'good': '精华',
        'job': '招聘',
        'top': '置顶'
      }
    }
  },
  methods: {
    dispalyreplytime (time) {
      return replaylasttime(time)
    },
    activeTag (item) {
      if (item.top || item.good) {
        return true
      }
      return false
    },
    displayTag (item) {
      if (item.top === true) {
        return this.tag.top
      } else if (item.good === true) {
        return this.tag.good
      } else {
        return this.tag[item.tab]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tp-container {
    min-height: 500px;
  }
  .tp-list {
    text-align: left;
    position: relative;
    padding: 10px;
    line-height: 2em;
    border-top: 1px solid #f0f0f0;
    .author {
      display: inline-block;
      float: left;
        img {
          height: 30px;
          width: 30px;
          border-radius: 3px;
        }
     }
    .replay-count {
      display: inline-block;
      float: left;
      width: 70px;
      text-align: center;
      font-size: 14px;
      color: #b4b4b4;
      line-height: 2em;
    }
    .last-time {
      display: inline-block;
      float: right;
      font-size: 11px;
      color: #778087;
    }
    div {
      // max-height: 31px;
      .tag {
        background-color: #e5e5e5;
        color: #999;
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 12px;
      }
      .active-tag {
        background-color: #80bd01;
        color: #fff;
      }
      .tp-title {
        display: inline-block;
        font-size: 16px;
        color: #333;
        // max-width: 70%;
        // min-width: 200px;
        line-height: 30px;
        vertical-align: middle;
        white-space:nowrap; // 单行文本溢出以下三个结合使用，省略号代替
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .tp-title:hover {
        text-decoration: underline;
      }
      .tp-title:visited {
        color: #888;
      }
    }
  }
  .tp-list:hover {
    background-color: #f5f5f5;
  }
  .tp-list:first-child {
    border-top: 0; // 话题首航去掉top边框
  }
  @media screen and (min-width:1100px) {
    .tp-title {
      max-width: 70%;
    }
  }
  @media screen and (min-width:0px) and (max-width:1100px) {
    .tp-title {
      max-width: 40%;
    }
  }
</style>
