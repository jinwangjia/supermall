<template>
  <div>
    <h3>这里是用户区域</h3>
    <el-card>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table
        border
        :data="users"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="role_name"
          label="权限"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮件">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          label="状态">
          <!--          作用域插槽-->
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              disabled>
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间">
        </el-table-column>
        <el-table-column
          width="200px"
          prop="create_time"
          label="操作">
          <template>
            <el-tooltip effect="dark" content="修改" placement="top">
              <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="详情" placement="top">
              <el-button type="info" icon="el-icon-s-grid" size="mini"></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="top">
              <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[5, 10, 30, 40]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      users: []
    }
  },
  methods: {
    async getUserList() {
      let { data: users } = await this.$http.get('users', { params: this.queryInfo })
      this.users = users.data.users
      this.total = users.data.total
      this.queryInfo.pagenum = users.data.pagenum
      console.log(users.data)
      console.log(this.users)
      console.log(this.total)
    },
    handleSizeChange(val) {
      this.queryInfo.pagesize = val
      this.queryInfo.pagenum = 1
      this.getUserList()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.queryInfo.pagenum = val
      this.getUserList()
      console.log(`当前页: ${val}`)
    }
  },
  created() {
    this.getUserList()
  }
}
</script>

<style scoped>

</style>
