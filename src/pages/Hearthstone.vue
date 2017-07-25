<template>
  <div id="hearthstone">
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
    name: 'hearthstone',
    data() {
      return {
        sitetitle: null,
        cmsblocks: [
          {
            id: 'heartstoneimage',
            classes: 'col-12 block',
            type: 'image',
            content: {
              src: 'static/img/logos/hearthstone_logo.png',
            },
          },
          {
            id: 'ytHearthstoneTrailer',
            classes: 'col-12 col-md-6 block',
            type: 'video',
            content: {
              src: 'https://www.youtube.com/embed/_zVbZuhHCGk',
            },
          },
          {
            id: 'hearthstoneText',
            classes: 'col-12 col-md-6 block',
            type: 'text',
            content: {
              title: 'Hearthstone & ESports Germany e.V.',
              contentTop: 'Der Verein begann seine Geschichte mit dem Onlinekartenspiel “Hearthstone“. Bis jetzt hat eSportsGermany e.V. zwei große Turniere zu verzeichnen, die Barstone-Reihe “Barstone Masters“. Zu jedem Event präsentierte sich der Verein von einer recht studentenfreundlichen Seite, mit gesenkten Getränkepreisen und die besten Zeiten, um an so einem Turnier teilzunehmen.',
              contentBottom: 'Teilnehmen konnte jedermann. Auch zahlreiche Zuschauer konnten wir schon begrüßen, welche uns fleißig dabei geholfen haben, diese Turniere unvergesslich werden zu lassen. Wir werden die Reihe wie gewohnt weiterführen und auch das ein oder andere Online-Turnier an den Start bringen, mit verlockenden Preisgeldern.',
              link: {
                text: 'Werde Teil des Hearthstone-Teams von eSportsGermany e.V. und schreib uns noch heute an!',
                href: '#/contact',
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

