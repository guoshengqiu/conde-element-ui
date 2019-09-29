<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="100"
    :current-page.sync="fristPage"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>

<script>
export default {
  props: {
    currentPage: Number
  },
  data () {
    return {
      fristPage: this.currentPage // 使用一个变量来接收currentPage，这样这个变量改变就不会导致currentPage改变
    }
  },
  watch: {
    currentPage (newVal) {
      console.log(newVal, 'page')
      this.fristPage = newVal
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log('当前页:', val)
      console.log('fristPage:', this.fristPage)
      this.$emit('changePage', val) // 向父组件传递点击的页数
    }
  }
}
</script>

<style>

</style>
