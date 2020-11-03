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
          prop="create_time"
          label="操作">
        </el-table-column>
      </el-table>
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
        pagesize: 20
      },
      pagenum: 0,
      total: 0,
      users: []
    }
  },
  async created() {
    let { data: users } = await this.$http.get('users', { params: this.queryInfo })
    this.users = users.data.users
    this.pagenum = users.pagenum
    this.total = users.Total
    console.log(this.users)
  }
}
</script>

<style scoped>

</style>
