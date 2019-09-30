<template>
  <div>
    <Tabs  @changeTab="getListDataByTab"/>
    <!-- 主题列表 -->
    <div class="inner"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(246,246,246,0.7)"
    >
      <!-- loading加载 -->
      <!-- topic列表 -->
      <TopicList :list="list"/>
      <!-- 分页 -->
      <Pagination :currentPage="currentPage" @changePage="getListDataByPage"/>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs'
import TopicList from '@/components/TopicList'
import Pagination from '@/components/Pagination'
import { getTopic } from '@/api'

export default {
  components: { Tabs, TopicList, Pagination },
  data () {
    return {
      list: [], // 数据列表
      currentPage: 1, // 当前page数
      currentPageGet: 1, // 要获取的数据的page
      tab: '', // 当前tab
      loading: true
    }
  },
  computed: {
    searchText () {
      return this.$store.state.searchText
    }
  },
  created () {
    // created之后请求数据
    this.getListData()
  },
  methods: {
    // 封装请求Topic数据部分
    getListData () {
      this.$store.dispatch('goTop')
      getTopic({ page: this.currentPage, tab: this.tab, limit: 20 }).then((res) => {
        this.list = res.data.data
        console.log('Topic数据：', this.list)
        this.loading = false
      })
    },
    // page改变后获取Topic数据
    getListDataByPage (val) {
      this.loading = true
      this.currentPage = val
      console.log('父组件获取的当前页数：', this.currentPageGet)
      this.getListData()
    },
    // tab改变后获取Topic数据
    getListDataByTab (tab, event) {
      this.loading = true
      this.currentPage = 1
      this.tab = tab.name
      console.log('父组件获取的当前tab：', this.tab)
      this.getListData()
    }
  }
}
</script>

<style>
  .inner {
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    line-height: 2em;
  }
</style>
