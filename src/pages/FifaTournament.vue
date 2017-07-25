<template>
  <div id="fifatournament">
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
        <cms-slider v-if="cmsblock.type === 'slider'" :data="cmsblock.content"></cms-slider>
      </div>
    </div>
  </div>
</template>

<script>
  import CmsEmbededYoutube from '../components/cms/CmsEmbededYoutube';
  import CmsEmbededText from '../components/cms/CmsEmbededText';
  import CmsEmbededImage from '../components/cms/CmsEmbededImage';
  import CmsSlider from '../components/cms/CmsSlider';

  export default {
    components: {
      CmsEmbededYoutube,
      CmsEmbededText,
      CmsEmbededImage,
      CmsSlider,
    },
    name: 'fifatournament',
    data() {
      return {
        sitetitle: 'FIFA Chill & Grill Turnier',
        cmsblocks: [
          {
            id: 'fifaheader',
            classes: 'col-12 block',
            type: 'image',
            content: {
              src: 'static/img/header/fifaheader.png',
            },
          },
          {
            id: 'fifatext',
            classes: 'col-12 block',
            type: 'text',
            content: {
              title: 'Das große ESports Germany e.V. FIFA Turnier!',
              contentTop: 'Am 16.07 ist es endlich soweit, dass Chill & Grill – Tournament findet an einem der schönsten Orte Heilbronns statt, nämlich direkt zwischen den Weinbergen unter freiem Himmel. Checkt die Bilder im Slider unter diesem Text!',
              contentBottom: 'Doch wir erweitern das ganze mit einer großen Leinwand, an der ohne Ende FIFA gespielt wird, mit einem Pool, der gewissenhaft zur Abkühlung nach harten Matches dient und einem Grill, auf dem du dein Essen grillen lässt oder selber grillst. Wie immer, haben wir eine Bar vor Ort, die jeden mit eiskalten Getränken versorgen wird. Wenn ihr Lust habt teilzunehmen, dann schreibt uns einfach direkt an, per Mail (kontakt@esportsgermany.de) oder einfach per Facebook. Wir sehen uns Freunde!',
              link: {
                type: 'download',
                text: 'Hier kannst du dir gleich das Regelwerk des Turniers herunterladen!',
                href: 'static/data/Regelwerk.pdf',
              },
            },
          },
          {
            id: 'locationslider',
            classes: 'col-12 block',
            type: 'slider',
            content: {
              height: '100%',
              interval: 5000,
              background: 'black',
              slides: [
                {
                  img: 'static/img/slides/fifalocation/slide1.jpg',
                  caption: '',
                  height: '550px',
                },
                {
                  img: 'static/img/slides/fifalocation/slide2.jpg',
                  caption: '',
                  height: '550px',
                },
                {
                  img: 'static/img/slides/fifalocation/slide3.jpg',
                  caption: '',
                  height: '550px',
                },
                {
                  img: 'static/img/slides/fifalocation/slide4.jpg',
                  caption: '',
                  height: '550px',
                },
                {
                  img: 'static/img/slides/fifalocation/slide5.jpg',
                  caption: '',
                  height: '550px',
                },
                {
                  img: 'static/img/slides/fifalocation/slide6.jpg',
                  caption: '',
                  height: '550px',
                },
              ],
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
