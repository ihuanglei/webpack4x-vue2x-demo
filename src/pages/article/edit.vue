<template>
  <div class="article-edit">我是编辑,当前id:{{id}}</div>
</template>
<script>
export default {
  name: 'acticle',
  data() {
    return {
      id: 0
    }
  },
  created() {
    this.id = this.$route.params.id
  },
}
</script>
