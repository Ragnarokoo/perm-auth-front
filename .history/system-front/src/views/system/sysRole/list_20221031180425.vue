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
      list:[]
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
