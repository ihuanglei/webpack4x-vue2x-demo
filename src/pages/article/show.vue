<template>
  <article>
    <div class="fd">我是展示,当前id:{{id}}</div>
  </article>
</template>
<script>
export default {
  name: 'article-show',
  data() {
    return {
      id: 0
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>