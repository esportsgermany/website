<template>
  <div class="row">
    <div class="col-12 col-md-8 block">
      <cms-slider :data="slider"></cms-slider>
    </div>
    <div class="col-12 col-md-4 block">
      <esg-facebook-feed></esg-facebook-feed>
    </div>
  </div>
</template>

<script>
  import EsgFacebookFeed from '../components/EsgFacebookFeed';
  import CmsSlider from '../components/cms/CmsSlider';

  export default {
    components: {
      EsgFacebookFeed,
      CmsSlider,
    },
    name: 'home',
    data() {
      return {
        slider: {
          height: '100%',
          interval: 0,
          background: 'black',
          slides: [
            {
              img: 'static/img/slides/home/defaultslide.png',
              caption: 'Unsere bisherigen Events',
              link: '#/pastevents',
            },
            {
              img: 'static/img/slides/home/fifaslide.png',
              caption: 'Unsere Fifa Abteilung!',
              link: '#/fifa',
            },
            {
              img: 'static/img/slides/home/barstonemastersslide.png',
              caption: 'Unsere Hearthstone Abteilung!',
              link: '#/hearthstone',
            },
            {
              img: 'static/img/slides/home/defaultslide.png',
              caption: 'Was ist das für 1 Verein?',
              text: 'Halo i bims ein Geimer!',
              link: '#/whoweare',
            },
            {
              img: 'static/img/slides/home/facebookslide.png',
              caption: 'ESports Germany auf Facebook',
              text: 'Bleibt up to date auf unserer Facebook Fanpage!',
              link: 'https://www.facebook.com/esportsgermany.de/',
            },
            {
              img: 'static/img/slides/home/defaultslide.png',
              caption: 'Jetzt Mitglied werden!',
              text: 'Chance nicht verpassen und gleich Mitglied werden und mitmachen!',
              link: '#/join',
            },
            {
              img: 'static/img/slides/home/contactslide.png',
              caption: 'Noch offene Fragen?',
              text: 'Wendet euch einfach an unser Kontaktformular.',
              link: '#/contact',
            },
          ],
        },
      };
    },
  };
</script>
<style>
  .block {
    padding: 10px;
    word-wrap: break-word;
  }
</style>

