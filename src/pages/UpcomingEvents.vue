<template>
  <div id="upcoming-events">
    <esg-site :data="siteContent"></esg-site>
  </div>
</template>

<script>
  import EsgSite from '../components/cms/EsgSite';

  export default {
    name: 'upcomingEvents',
    components: {
      EsgSite,
    },
    data() {
      return {
        siteContent: {
          siteRef: 'upcomingevents',
        },
      };
    },
  };
</script>
<style scoped>
</style>
