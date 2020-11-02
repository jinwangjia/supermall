<template>
  <div>
    <el-form ref="loginFormRef" :model="form" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="form.username"
                  placeholder="请输入内容" prefix-icon="el-icon-s-custom"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password"
                  placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="resetLoginForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm(){
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      //数据验证，通过在validate方法中传入一个回调函数来实现
      //回调函数只有一个参数，框架会把前端的验证结果通过这个参数传递过来。
      //我们可以通过判断这个参数来界定通过和不通过的业务流程
      this.$refs.loginFormRef.validate(async (valid)=> {
        if(!valid)
          return
        let {data:res} = await this.$http.post("login",this.form);
        if(res.meta.status!==200) {
          this.$message.error("登录失败")
          return
        }
        this.$message.success("登录成功")
        window.sessionStorage.setItem("token",res.data.token)
        // 表单提交成功后的页面挑战
        this.$router.push("/Home")
      })
    }
  }
}
</script>

<style scoped>

</style>
