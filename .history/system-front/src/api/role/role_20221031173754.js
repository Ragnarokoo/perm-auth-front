import request from "@/utils/request";

export default {
  // 列表
  return request({
    url: "/vue-admin-template/table/list",
    method: "get",
    params,
  });
};
