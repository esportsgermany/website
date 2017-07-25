<template>
  <div class="cms-embeded-image row justify-content-center">
      <div class="auto">
        <a :href="data.link">
          <img class="img-fluid esg-img" :src="data.src"  :alt="data.alt"/>
        </a>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'CmsEmbededImage',
    props: ['data'],
  };
</script>
<style scoped>
.img-width-half {
  width: 50%;
  height: 100%;
}

</style>
