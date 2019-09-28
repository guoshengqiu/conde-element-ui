<template>
  <div id="footer">
    <div id="footer_main" class="footer-main">
      <div class="links">
        <a class="dark" href="/rss">RSS</a>
        |
        <a class="dark" href="https://github.com/cnodejs/nodeclub/">源码地址</a>
      </div>
      <div class="col-fade">
        <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        <p>服务器赞助商为
          <a class="sponsor-outline" href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo">
            <img src="@/assets/ucloudlogo.png" alt="ucloud" width="92px">
          </a>
          ,存储商为
          <a class="sponsor-outline" href="https://www.qiniu.com/?ref=cnode">
            <img src="@/assets/qiniulogo.png" alt="qiniu" width="115px">
          </a>
          ,由
          <a class="sponsor-outline" href="https://www.aliyun.com/product/nodejs?ref=cnode">
            <img src="@/assets/alinodelogo.png" alt="alinode" width="166px">
          </a>
          提供应用性能服务
        </p>
        <p>新手搭建 Node.js 服务器，推荐使用无需备案的
          <a href="https://www.digitalocean.com/"> DigitalOcean(https://www.digitalocean.com/)</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #footer {
    position: relative;
    clear: both;
    background: #fff;
    text-align: left;
  }
  .footer-main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
    padding: 20px 0;
    color: #e2e2e2;
    font-size: 13px;
    line-height: 2em;
    .dark {
      color: #666;
      font-size: 13px;
      text-decoration: none;
    }
    .col-fade {
      color: #ababab;
      p {
        line-height: 20px;
        vertical-align: bottom;
        font-size: 14px;
        a {
          color: #08c;
          font-size: 14px;
          text-decoration: none;
          img {
            height: auto;
            max-width: 100%;
            vertical-align: middle;
            border: 0;
          }
          &:hover {
            color: #005580;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
