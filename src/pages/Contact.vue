<template>
  <div id="contact">
    <esg-site :data="siteContent"></esg-site>
  </div>
</template>

<script>
  import EsgSite from '../components/cms/EsgSite';

  export default {
    name: 'contact',
    components: {
      EsgSite,
    },
    data() {
      return {
        siteContent: {
          siteRef: 'contact',
        },
      };
    },
  };
</script>
<style scoped>
</style>
