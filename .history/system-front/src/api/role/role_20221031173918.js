import request from "@/utils/request";

export default {
  // 列表
  getPageList(page, limit, searchObj) {
    return request({
      // 接口路径
      url: "/admin/system/sysRole/" + page + "/",
      method: "get",
      params,
    });
  },
};
