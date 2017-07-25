<template>
  <div id="pastEvents">
    <div class="row justify-content-center">
      <div class="auto">
        <h1>{{ sitetitle }}</h1><hr/>
      </div>
    </div>
    <div class="row">
      <div v-for="cmsblock in cmsblocks" :key="cmsblock.id" :id="cmsblock.id" :class="cmsblock.classes">
        <cms-embeded-text v-if="cmsblock.type === 'text'" :data="cmsblock.content"></cms-embeded-text>
        <cms-embeded-youtube v-if="cmsblock.type === 'video'" :data="cmsblock.content"></cms-embeded-youtube>
        <cms-embeded-image v-if="cmsblock.type === 'image'" :data="cmsblock.content"></cms-embeded-image>
      </div>
    </div>
  </div>
</template>

<script>
  import CmsEmbededYoutube from '../components/cms/CmsEmbededYoutube';
  import CmsEmbededText from '../components/cms/CmsEmbededText';
  import CmsEmbededImage from '../components/cms/CmsEmbededImage';

  export default {
    components: {
      CmsEmbededYoutube,
      CmsEmbededText,
      CmsEmbededImage,
    },
    name: 'pastEvents',
    data() {
      return {
        sitetitle: 'Bisherige Events',
        cmsblocks: [
          {
            id: 'barstone1Text',
            classes: 'col-12 col-md-6 block',
            type: 'text',
            content: {
              title: 'Barstone Masters #1',
              contentTop: 'Das erste Event von eSportsGermany e.V. war das Barstone Masters#1 in Heilbronn. Am 13.01.17 um genau 15 Uhr startete unser Hearthstone-Event an der Hochschule Heilbronn, mit Leinwand, Kinostühlen, Bar, und Popcornmaschine. Nicht zu vergessen mit Moderation und Livestream.',
              contentBottom: 'An die 50 Besucher konnten sich an einem spannenden Turnier und richtig guter Stimmung bis 22 Uhr erfreuen. Ein voller Erfolg in ganzer Linie mit Wiederholungsbedarf!?',
              link: {
                text: 'Schau dir das fantastische Finale des Turniers zwischen Keltosh vs Spawn hier an!',
                href: 'https://www.youtube.com/watch?v=T3dLNbzgh9s',
              },
            },
          },
          {
            id: 'barstone1Trailer',
            classes: 'col-12 col-md-6 block',
            type: 'video',
            content: {
              src: 'https://www.youtube.com/embed/gtXje_raoRs?ecver=1',
            },
          },
          {
            id: 'barstone2Trailer',
            classes: 'col-12 col-md-6 block',
            type: 'video',
            content: {
              src: 'https://www.youtube.com/embed/_zVbZuhHCGk?ecver=1',
            },
          },
          {
            id: 'barstone2Text',
            classes: 'col-12 col-md-6 block',
            type: 'text',
            content: {
              title: 'Barstone Masters #2',
              contentTop: 'Am 22.04.17 fand das Barstone Masters #2 wieder in Heilbronn statt, mit integriertem Tavern Hero Qualifier. Das ganze wurde im 5. OG im Wollhaus ausgeführt und konnte von jedem kostenlos besucht werden. Freunde oder Zuschauer waren auch gern gesehen!',
              contentBottom: 'Das Event war mit 22 Turnier Teilnehmern und einigen Zuschauern gut besucht. Das spannende Turnier, die Aussicht und die Bar mit studentenfreundlichen Preisen, sorgten für gute Stimmung.',
              link: {
                text: 'Wir hatten auch eine Crowdcam. Hier geht’s zum Video',
                href: 'https://www.youtube.com/watch?v=22cZ-FzeKZ4',
              },
            },
          },
        ],
      };
    },
  };
</script>
<style>
  .block{
    padding: 10px;
  }
</style>

