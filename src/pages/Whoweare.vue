<template>
  <div id="whoweare">
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
    name: 'whoweare',
    data() {
      return {
        sitetitle: 'Wer wir sind?!',
        cmsblocks: [
          {
            id: 'ytWhoweareTrailer',
            classes: 'col-12 col-md-6 block',
            type: 'video',
            content: {
              src: 'https://www.youtube.com/embed/QufnaXOQfC0',
            },
          },
          {
            id: 'whoweareText',
            classes: 'col-12 col-md-6 block',
            type: 'text',
            content: {
              title: 'Wir sind ESports Germany e.V.',
              contentTop: 'Fussballvereine, Handballvereine, Basketballvereine...Für so gut wie jede Sportart gibt es heutzutage Vereine bei denen sich Gleichgesinnte zum gemeinsamen Spielen und Trainieren treffen können. Nur im Esports noch nicht! Das wollen wir ändern und das ist unsere Idee hinter dem Esports Germany e.V.',
              contentBottom: 'Wir sind selbst ein Haufen (semi-professioneller und professioneller) Gamer in den verschiedensten Spiele-Vertiefungen und wir bieten die Plattform um sich mit anderen bei großen Events oder kleinen Trainingseinheiten zu treffen. Mitspieler, Freunde, Feinde und Trainer kennen zu lernen, sich auszutauschen und gemeinsam viel zu lernen und hoffentlich noch mehr zu erleben! Also macht mit!',
              link: {
                text: 'Schaut einfach mal auf unserer Facebook Seite vorbei!',
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
  .block{
    padding: 10px;
  }
</style>

