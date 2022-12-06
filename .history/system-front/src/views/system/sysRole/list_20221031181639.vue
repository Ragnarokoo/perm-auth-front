<template>
  <div class="app-container">
    角色列表
  </div>
</template>

<script>
// 引入定义接口的js文件
import api from "@/api/role/role.js";
export default {

  data() {
    return {
      list: [], // 角色列表
      total: 0, // 总记录数
      page: 1, // 当前页
      limit: 3, // 每页显示记录数
      searchObj: {} // 条件查询封装对象
    };
  },

  created() {
    this.fetchData()
  },

  mounted() {

  },

  methods: {
    // 条件分页查询列表
    fetchData(pageNum=1) {
      this.page = pageNum
      // ajax
      api.getPageList(this.page ,this.limit ,this.searchObj)
        .then(response => {
          // 每页数据列表
          this.list = response.data.records
          // 总记录数
          this.total = response.data.total
        })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
