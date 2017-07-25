<template>
  <div class="carousel-item" :style="{background,height}" @click="slideClick">
    <img class="d-block img-fluid" v-if="img" :src="img" :alt="imgAlt">
    <div class="carousel-caption d-none d-md-block">
      <h3 v-if="caption" v-html="caption"></h3>
      <p v-if="text" v-html="text"></p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      img: {
        type: String,
      },
      imgAlt: {
        type: String,
      },
      caption: {
        type: String,
      },
      text: {
        type: String,
      },
      background: {
        type: String,
      },
      height: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    methods: {
      slideClick() {
        const isExternal = /^(http(s?):)?\/\//.test(this.url);

        if (isExternal) {
          window.open(this.url, '_blank');
        } else {
          location.href = this.url;
        }
      },
    },
  };
</script>

<style scoped>
  .carousel-item {
    cursor: pointer;
  }
</style>
