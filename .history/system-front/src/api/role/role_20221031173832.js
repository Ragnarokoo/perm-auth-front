import request from "@/utils/request";

export default {
  // 列表
  getPageList(page, limit, searchObj) {
    return request({
      // 接口路径
      url: "/vue-admin-template/table/list",
      method: "get",
      params,
    });
  },
};
