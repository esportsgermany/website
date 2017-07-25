<template>
  <div class="cms-embeded-youtube">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" width="100%" height="100%" :src="data.src" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CmsEmbededYoutube',
    props: ['data'],
  };
</script>
