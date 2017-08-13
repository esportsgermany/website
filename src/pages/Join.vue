<template>
  <div id="join">
    <esg-site :data="siteContent"></esg-site>
  </div>
</template>

<script>
  import EsgSite from '../components/cms/EsgSite';

  export default {
    name: 'join',
    components: {
      EsgSite,
    },
    data() {
      return {
        siteContent: {
          siteRef: 'join',
        },
      };
    },
  };
</script>
<style scoped>
</style>
