<template>
  <div class="user-sidebar">
    <div class="user-header">
      <span>个人信息</span>
    </div>
    <div class="user-inner">
      <div>
        <a href="/" class="user-avatar"><img :src="userDetails.avatar_url" :title="userDetails.loginname"/></a>
        <span class="user-name">
          <a href="/">{{userDetails.loginname}}</a>
        </span>
        <div class="board">
          <span>积分：{{userDetails.score}}</span>
        </div>
        <div class="signature">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserDetails } from '@/api'

export default {
  name: 'User',
  data () {
    return {
      user: '',
      userDetails: {}
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('accesstokenReturn'))
    console.log('用户名：', this.user.loginname)
    getUserDetails(this.user.loginname).then(({data}) => {
      this.userDetails = data.data
      console.log('用户详细数据：', data)
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .user-sidebar {
    text-align: left;
    .user-header {
      padding: 10px;
      line-height: 20px;
      font-size: 13px;
      color: #51585c;
      border-radius: 3px 3px 0 0;
      background-color: #f6f6f6;
    }
    .user-inner {
      padding: 10px;
      line-height: 2em;
      border-radius: 0 0 3px 3px;
      background-color: #fff;
      margin-bottom: 20px;
      .user-avatar {
        vertical-align: middle;
        margin-right: 7px;
        &:hover {
          margin-right: 7px;
        }
        img {
          width: 48px;
          height: 48px;
          border-radius: 3px;
          max-width: 100%;
          vertical-align: middle;
        }
      }
      .user-name {
        font-size: 16px;
        max-width: 120px;
        white-space: nowrap;
        display: inline-block;
        vertical-align: middle;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #778087;
        a {
          font-size: 16px;
          color: #778087;
        }
      }
      .board {
        margin-top: 10px;
        width: 80%;
      }
      .signature {
        font-size: italic;
        line-height: 2em;
        font-size: 13px;
        color: #333;
      }
    }
  }
</style>
