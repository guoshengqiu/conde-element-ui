<template>
  <div>
    <Tabs/>
    <!-- 主题列表 -->
    <div class="inner">
      <TopicList :list="list"/>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs'
import TopicList from '@/components/TopicList'
import { getTopic } from '@/api'

export default {
  components: { Tabs, TopicList },
  data () {
    return {
      list: [] // 数据列表
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
      getTopic({ page: 1, tab: 'all', limit: 20 }).then((res) => {
        this.list = res.data.data
        console.log('Topic数据：', this.list)
      })
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
