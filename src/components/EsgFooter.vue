<template>
  <div id="esg-footer">
    <hr />
    <div class="row justify-content-center">
      <div class="col-auto">
        <a class="footerlink" :href="contact.href">{{ contact.text }}</a>
        <img class="footer-img" src="static/img/logos/only_logo.png" />
        <a class="footerlink" :href="impressum.href">{{ impressum.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'esg-footer',
    data() {
      return {
        contact: {
          text: 'Kontakt',
          href: '#/contact',
        },
        impressum: {
          text: 'Impressum',
          href: '#/impressum',
        },
      };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
}
  .footerlink {
    color: black;
  }
  .footerlink:hover,
  .footerlink:active {
    text-decoration: none;
    color: dimgray;
  }
</style>
