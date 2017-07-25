<template>
  <div class="cms-embeded-text">
    <div class="row justify-content-center">
      <div class="auto">
        <h2>{{ data.title }}</h2>
      </div>
    </div>
    <p>{{data.contentTop}}</p>
    <p>{{data.contentBottom}}</p>
    <a v-if="data.link.type === 'download'" :href="data.link.href" target="_blank" download>{{data.link.text}}</a>
    <a v-else :href="data.link.href" target="_blank">{{data.link.text}}</a>
  </div>
</template>

<script>
  export default {
    name: 'CmsEmbededText',
    props: ['data'],
  };
</script>
<style>
  h2 {
    padding: 10px;
  }
</style>
