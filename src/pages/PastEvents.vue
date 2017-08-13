<template>
  <div id="past-events">
    <esg-site :data="siteContent"></esg-site>
  </div>
</template>

<script>
  import EsgSite from '../components/cms/EsgSite';

  export default {
    name: 'pastEvents',
    components: {
      EsgSite,
    },
    data() {
      return {
        siteContent: {
          siteRef: 'pastevents',
        },
      };
    },
  };
</script>
<style scoped>
</style>
