<template>
  <div id="tournament">
    <esg-site :data="siteContent"></esg-site>
    <esg-tournament></esg-tournament>
  </div>
</template>

<script>
  import EsgSite from '../components/cms/EsgSite';
  import EsgTournament from '../components/cms/EsgTournament';

  export default {
    name: 'tournament',
    components: {
      EsgSite,
      EsgTournament,
    },
    data() {
      return {
        siteContent: {
          siteRef: 'tournament',
        },
      };
    },
  };
</script>
<style scoped>
</style>
