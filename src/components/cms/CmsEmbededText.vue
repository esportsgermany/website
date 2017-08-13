<template>
  <div class="cms-embeded-text" v-html="compiledMarkdown">
  </div>
</template>

<script>
  import marked from 'marked';

  export default {
    name: 'CmsEmbededText',
    props: ['data'],
    computed: {
      compiledMarkdown: function compiledMarkdownDescr() {
        if (!this.data) {
          this.data = ' ';
        }
        return marked(this.data, { sanitize: true });
      },
    },
  };
</script>
<style scoped>
</style>
