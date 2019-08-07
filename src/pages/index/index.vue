<template>
  <div><router-link  to="/articles">列表</router-link></div>
  <!-- <el-container>
    <el-header>Header</el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>-->
</template>

<script>

export default {
  name: 'index'
}
</script>

<style>
.el-header {
  background: #000;
}
.el-menu,
.el-container {
  height: 100%;
}
</style>