<template>
  <el-container class="home_container">
    <el-header>这里是home
      <el-button type="primary" @click="logOut">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item class="el-icon-menu" :index="item2.id+''" v-for="item2 in item.children" :key="item2.id">
              {{ item2.authName }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      menuList: []
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    logOut() {
      window.sessionStorage.clear()
      this.$router.push('/Login')
    },
    async getMenuList() {
      const { data: menus } = await this.$http.get('menus')
      if (menus.meta.status !== 200)
        return this.$message.error(menus.meta.msg)
      this.menuList = menus.data
      console.log(menus.data)
    }
  }
}

</script>

<style scoped>
.home_container {
  height: 100%;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 100%;

}

.el-menu {
  border-right: none;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 100%;
}
</style>
