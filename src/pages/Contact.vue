<template>
  <div id="contact">
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
    name: 'contact',
    data() {
      return {
        sitetitle: 'Kontakt',
        cmsblocks: [
          {
            id: 'contactimage',
            classes: 'col-12 col-sm-4 block',
            type: 'image',
            content: {
              src: 'static/img/logos/email-logo.png',
            },
          },
          {
            id: 'contacttext',
            classes: 'col-12 col-sm-8 block',
            type: 'text',
            content: {
              title: 'Du kannst uns jederzeit erreichen!',
              contentTop: 'Wir stehen natürlich zu allen Fragen und jeglichem Feedback zur Verfügung! Als sehr junger Verein werfen wir natürlich mit unserem Konzept sicher einige Fragen auf und sind generell auf viel Feedback angewiesen!',
              contentBottom: 'Also trau dich! Schreib uns einfach eine Mail an kontakt@esportsgermany.de und wir werden uns gleich um dein Anliegen kümmern. Fragen, Feedback, Anregungen oder einfach nur eine Mail zum Hallo sagen und kennen lernen, wir freuen uns auf deine Nachricht!',
              link: {
                text: 'Natürlich kannst du uns auch einfach über unsere Facebook Seite erreichen!',
                href: 'https://www.facebook.com/esportsgermany.de',
              },
            },
          },
        ],
      };
    },
  };
</script>
<style>
  .block {
    padding: 10px;
  }
</style>
