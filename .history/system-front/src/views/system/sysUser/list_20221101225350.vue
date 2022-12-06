<template>
    <div>
        <el-dialog title="添加/修改" :visible.sync="dialogVisible" width="40%">
            <el-form
                ref="dataForm"
                :model="sysUser"
                label-width="100px"
                size="small"
                style="padding-right: 40px"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="sysUser.username" />
                </el-form-item>
                <el-form-item v-if="!sysUser.id" label="密码" prop="password">
                    <el-input v-model="sysUser.password" type="password" />
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="sysUser.name" />
                </el-form-item>
                <el-form-item label="手机" prop="phone">
                    <el-input v-model="sysUser.phone" />
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button
                    @click="dialogVisible = false"
                    size="small"
                    icon="el-icon-refresh-right"
                    >取 消</el-button
                >
                <el-button
                    type="primary"
                    icon="el-icon-check"
                    @click="saveOrUpdate()"
                    size="small"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped></style>
