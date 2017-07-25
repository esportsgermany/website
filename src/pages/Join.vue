<template>
  <div id="join">
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
    name: 'join',
    data() {
      return {
        sitetitle: 'Du willst bei uns mitmachen?',
        cmsblocks: [
          {
            id: 'joinusimage',
            classes: 'col-12 col-sm-4 block',
            type: 'image',
            content: {
              src: 'static/img/logos/only_logo.png',
            },
          },
          {
            id: 'joinustext',
            classes: 'col-12 col-sm-8 block',
            type: 'text',
            content: {
              title: 'So kannst du ESG-Mitglied werden!',
              contentTop: 'Wir sind noch ein sehr junger Verein, deshalb ist uns jedes einzelne unserer Mitglieder besonders wichtig und hat auch besonderen Einfluss darauf, wie sich der Verein in den nächsten Jahren entwickeln wird!',
              contentBottom: 'Willst du also auch aktiv an der Gestaltung der Zukunft des Vereins mitwirken und/oder uns einfach nur unterstützen, dann schreib uns einfach per Mail an kontakt@esportsgermany.de mit dem Betreff Mitgliedsantrag und wir schicken dir direkt einen Mitgliedsantrag zu!',
              link: {
                text: 'Alle weiteren Infos gibt es natürlich auch auf unserer Facebook Seite!',
                href: 'https://www.facebook.com/events/1658990421073286/',
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
    word-wrap: break-word;
  }
</style>
