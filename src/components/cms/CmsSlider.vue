<template>
    <b-carousel controls indicators :interval="data.interval" :background="data.background" :height="data.height">
      <!-- Text slides -->
      <esg-carousel-slide
        v-for="slide in data.slides"
        :key="slide.caption"
        :url="slide.link"
        :background="slide.background ? slide.background : data.background"
        :caption="slide.caption"
        :text="slide.text"
        :img="slide.img"
        :v-link="slide.link"
        :height="slide.height ? slide.height : data.height">
      </esg-carousel-slide>
    </b-carousel>
</template>

<script>
  import EsgCarouselSlide from '../EsgCarouselSlide';

  export default {
    name: 'CmsSlider',
    props: ['data'],
    components: {
      EsgCarouselSlide,
    },
  };
</script>
<style>
  .cms-slider{
    margin-bottom: 20px;
  }

</style>
