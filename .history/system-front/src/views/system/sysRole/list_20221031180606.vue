<template>
  <div>
    角色列表
  </div>
</template>

<script>
// 引入定义接口的js文件
import api from "@/api/role/role.js";
export default {
  name: 'list',

  data() {
    return {
      list: [], // 角色列表
      total: 0, // 总记录数
      page: 1, // 当前页
      limit:3, // 每页显示记录数
      searchObj: {} // 条件查询封装对象
    };
  },

  created() {
    this.fetchData()
  },

  mounted() {

  },

  methods: {
    fetchData() {

    }
  },
};
</script>

<style lang="scss" scoped>

</style>
