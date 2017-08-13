<template>
  <div class="cms-embeded-youtube">
    <div class="embed-responsive embed-responsive-16by9">
      <div v-html="data"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CmsEmbededYoutube',
    props: ['data'],
  };
</script>
