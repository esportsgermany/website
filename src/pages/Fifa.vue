<template>
  <div id="fifa">
    <esg-site :data="siteContent"></esg-site>
  </div>
</template>

<script>
  import EsgSite from '../components/cms/EsgSite';

  export default {
    name: 'fifa',
    components: {
      EsgSite,
    },
    data() {
      return {
        siteContent: {
          siteRef: 'fifa',
        },
      };
    },
  };
</script>
<style scoped>
</style>
