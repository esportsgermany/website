<template>
  <div id="whoweare">
    <esg-site :data="siteContent"></esg-site>
  </div>
</template>

<script>
  import EsgSite from '../components/cms/EsgSite';

  export default {
    name: 'whoweare',
    components: {
      EsgSite,
    },
    data() {
      return {
        siteContent: {
          siteRef: 'whoweare',
        },
      };
    },
  };
</script>
<style scoped>
</style>
