<template>
  <div ref="editorContainer" class="main-editor" />
</template>
<script>
import { createEditor } from '@textbus/textbus'
import '@textbus/textbus/bundles/textbus.min.css'

export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      this.editor = createEditor(this.$refs.editorContainer, {
        contents: this.text || ''
      })
    },
    setContent(val) {
      if (!this.editor) {
        this.initEditor()
      } else {
        this.editor.setContents(val)
      }
    },
    getContent() {
      return this.editor.getContents().content
    }
  }
}
</script>

<style lang="scss" scoped>
.main-editor{
  height: 100%;
}
</style>
<style>
.textbus-container{
  min-height: 480px;
  height: 100%;
}
</style>
