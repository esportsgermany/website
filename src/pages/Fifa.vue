<template>
  <div id="fifa">
    <div v-if="sitetitle" class="row justify-content-center">
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
    name: 'fifa',
    data() {
      return {
        sitetitle: null,
        cmsblocks: [
          {
            id: 'fifaimage',
            classes: 'col-12 block img-width-half',
            type: 'image',
            content: {
              src: 'static/img/logos/fifa_logo.png',
            },
          },
          {
            id: 'ytFifaTrailer',
            classes: 'col-12 col-md-6 block',
            type: 'video',
            content: {
              src: 'https://www.youtube.com/embed/VvHxQS0dXew',
            },
          },
          {
            id: 'fifaText',
            classes: 'col-12 col-md-6 block',
            type: 'text',
            content: {
              title: 'Das nächste Spiel in unserer Reihe heißt “FIFA“',
              contentTop: 'Da wir uns im Bereich “Hearthstone“ erfolgreich etabliert haben, suchen eSports-Germany e.V. eine komplett neue Herausforderung um Events und Turniere anzubieten. Next Stop “FIFA“! Nach langer Überlegung, haben wir uns letztendlich doch entschieden, FIFA als nächstes auf Events und Turnieren anzubieten.',
              contentBottom: 'Es ist einfach das perfekte Spiel, um lockere Events zu starten. Sei es im Freibad mit Leinwand oder mitten in der Stadt mit Leinwand, es gibt für dieses Spiel einfach so unbegrenzte Möglichkeiten, den Spielern eine geile Spiel-Atmosphäre zu bieten und genau diese werden wir EUCH in Zukunft bieten!',
              link: {
                text: 'Schau Dir auf jeden Fall mal unser nächstes FIFA Turnier hier an!',
                href: '#/fifatournament',
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

