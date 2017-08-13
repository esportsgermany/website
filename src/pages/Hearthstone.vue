<template>
  <div id="hearthstone">
    <esg-site :data="siteContent"></esg-site>
  </div>
</template>

<script>
  import EsgSite from '../components/cms/EsgSite';

  export default {
    name: 'hearthstone',
    components: {
      EsgSite,
    },
    data() {
      return {
        siteContent: {
          siteRef: 'hearthstone',
        },
      };
    },
  };
</script>
<style scoped>
</style>
