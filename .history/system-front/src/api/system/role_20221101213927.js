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
            params: searchObj
        });
    },

    // 删除
    removeId(id) {
        return request({
            // 接口路径
            url: `${api_name}/remove/${id}`,
            method: "delete"
        });
    },

    // 添加
    saveRole(role) {
        return request({
            // 接口路径
            url: `${api_name}/save`,
            method: "post",
            // 传递json格式
            data: role
        });
    },

    // 根据id查询
    getRoleId(id) {
        return request({
            url: `${api_name}/findRoleById/${id}`,
            method: "post"
        });
    },

    // 修改的方法
    update(role) {
        return request({
            url: `${api_name}/update`,
            method: "post",
            data: role
        });
    },

    // 批量删除
    batchRemove(idList) {
        return request({
            // 接口路径
            url: `${api_name}/batchRemove`,
            method: "delete",
            data: idList
        });
    },
};
