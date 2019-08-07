<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Header: () => import('@/components/header/view'),
    Footer: () => import('@/components/footer/view')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
