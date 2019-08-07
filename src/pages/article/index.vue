<template>
  <div>
    <ul>
      <li>我是列表第一个<button @click="onEditClick">编辑</button><button @click="onShowClick">查看</button></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'acticleList',
  data() {
    return {}
  },
  methods: {
    onEditClick: function() {
      this.$router.push({ name: 'articleEdit', params: { id: 123 } })
    },
    onShowClick: function() {
      this.$router.push({ name: 'articleShow', params: { id: 123 } })
    },
  }
}
</script>