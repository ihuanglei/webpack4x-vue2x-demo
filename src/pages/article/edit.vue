<template>
  <div class="article-edit">
    <!-- <div>
      <el-button type="success">Success</el-button>
    </div>-->
    edit
    <div class="editor" ref="editor"></div>
  </div>
</template>
<script>
// import Quill from 'quill'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.bubble.css'
export default {
  name: 'acticle',
  data() {
    return {
      editor: undefined,
      content: ''
    }
  },
  methods: {
    init() {
      this.initEditor()
    },
    initEditor() {
      // let editor = new Quill(this.$refs.editor, {
      //   modules: { toolbar: true },
      //   placeholder: '请输入教程',
      //   theme: 'bubble'
      // })
    }
  },
  mounted() {
    this.init()
  },
  computed: {}
}
</script>

<style scoped>
.article-edit{
  text-align: center;
}
.editor {
  outline: none;
  /* height: 100%; */
  max-width: 780px;
}
</style>