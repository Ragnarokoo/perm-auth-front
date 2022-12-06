import request from "@/utils/request";

const api_name = "/admin/system/sysRole/";
export default {
    // 列表
    getPageList(page, limit, searchObj) {
        return request({
            // 接口路径
            // url: "/admin/system/sysRole/" + page + "/" + limit,
            url: `${api_name}/${page}/${limit}`,
            method: "get",
            params: searchObj,
        });
    },

    // 删除
    removeId(id) {
        return request({
            // 接口路径
            // url: "/admin/system/sysRole/" + page + "/" + limit,
            url: `${api_name}/remove/${id}`,
            method: "get",
            params: searchObj,
        });
    },
};
