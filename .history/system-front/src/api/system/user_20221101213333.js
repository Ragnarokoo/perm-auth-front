import request from "@/utils/request";

const api_name = "/admin/system/sysUser/";
export default {
    // 列表
    getPageList(page, limit, searchObj) {
        return request({
            // 接口路径
            url: `${api_name}/${page}/${limit}`,
            method: "get",
            params: searchObj,
        });
    },
    // 添加
    save(user) {
        return request({
            // 接口路径
            url: `${api_name}/${page}/${limit}`,
            method: "get",
            params: searchObj,
        });
    },
};
