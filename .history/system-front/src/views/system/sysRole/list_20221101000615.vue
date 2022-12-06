<template>
	<div class="app-container">
		角色列表

		<!--查询表单-->
		<div class="search-div">
			<el-form label-width="70px" size="small">
				<el-row>
					<el-col :span="24">
						<el-form-item label="角色名称">
							<el-input
								style="width: 100%"
								v-model="searchObj.roleName"
								placeholder="角色名称"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row style="display: flex">
					<el-button
						type="primary"
						icon="el-icon-search"
						size="mini"
						@click="fetchData()"
						>搜索</el-button
					>
					<el-button
						icon="el-icon-refresh"
						size="mini"
						@click="resetData"
						>重置</el-button
					>
				</el-row>
			</el-form>
		</div>

		<!-- 工具条 -->
		<div class="tools-div">
			<el-button
				type="success"
				icon="el-icon-plus"
				size="mini"
				@click="add"
				>添 加</el-button
			>
		</div>

		<!-- 表格 -->
		<el-table
			v-loading="listLoading"
			:data="list"
			stripe
			border
			style="width: 100%; margin-top: 10px"
		>
			<el-table-column label="序号" width="70" align="center">
				<template slot-scope="scope">
					{{ (page - 1) * limit + scope.$index + 1 }}
				</template>
			</el-table-column>

			<el-table-column prop="roleName" label="角色名称" />
			<el-table-column prop="roleCode" label="角色编码" />
			<el-table-column prop="createTime" label="创建时间" width="160" />
			<el-table-column label="操作" width="200" align="center">
				<template slot-scope="scope">
					<el-button
						type="primary"
						icon="el-icon-edit"
						size="mini"
						@click="edit(scope.row.id)"
						title="修改"
					/>
					<el-button
						type="danger"
						icon="el-icon-delete"
						size="mini"
						@click="removeDataById(scope.row.id)"
						title="删除"
					/>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog title="添加/修改" :visible.sync="dialogVisible" width="40%">
			<el-form
				ref="dataForm"
				:model="sysRole"
				label-width="150px"
				size="small"
				style="padding-right: 40px"
			>
				<el-form-item label="角色名称">
					<el-input v-model="sysRole.roleName" />
				</el-form-item>
				<el-form-item label="角色编码">
					<el-input v-model="sysRole.roleCode" />
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

		<!-- 分页组件 -->
		<el-pagination
			:current-page="page"
			:total="total"
			:page-size="limit"
			style="padding: 30px 0; text-align: center"
			layout="total, prev, pager, next, jumper"
			@current-change="fetchData"
		/>
	</div>
</template>

<script>
	// 引入定义接口的js文件
	import api from '@/api/role/role.js'
	export default {
		data() {
			return {
				listLoading: false, // 是否显示加载
				list: [], // 角色列表
				total: 0, // 总记录数
				page: 1, // 当前页
				limit: 3, // 每页显示记录数
				searchObj: {}, // 条件查询封装对象
				sysRole: {}, // 封装添加表单数据
				dialogVisible: false // 弹出层
			}
		},

		created() {
			this.fetchData()
		},

		mounted() {},

		methods: {
			// 点击确定
			saveOrUpdate() {},
			// 添加的方法
			saveRole() {
				api.saveRole(this.sysRole).then((response) => {
					// 提示
					this.$message({
						type: 'success',
						message: '添加成功!'
					})
					// 关闭弹窗
					this.dialogVisible = false
					// 刷新页面
					this.fetchData()
				})
			},
			//点击添加，弹出框
			add() {
				this.dialogVisible = true
				this.sysRole = {}
			},
			// 重置
			resetData() {
				// 清空表单
				this.searchObj = {}
				// 查询所有记录数
				this.fetchData()
			},
			// 条件分页查询列表
			fetchData(pageNum = 1) {
				this.page = pageNum
				// ajax
				api.getPageList(this.page, this.limit, this.searchObj).then(
					(response) => {
						this.listLoading = false
						// 每页数据列表
						this.list = response.data.records
						// 总记录数
						this.total = response.data.total
					}
				)
			},
			removeDataById(id) {
				this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					// 调用方法删除
					api.removeId(id).then((response) => {
						// 提示信息
						this.$message({
							type: 'success',
							message: '删除成功!'
						})
						// 刷新
						this.fetchData()
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
