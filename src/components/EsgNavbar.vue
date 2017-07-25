<template>
  <div id="esg-navbar">
    <b-navbar toggleable type="inverse" variant="inverse">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <img class="navbar-img" :src="brandsrc"/>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar v-for="navbaritem in navbaritemsleft" :key="navbaritem.title">

          <template v-if="navbaritem.type === 'normal'">
            <b-nav-item :to="navbaritem.link">{{ navbaritem.title }}</b-nav-item>
          </template>
          <template v-if="navbaritem.type === 'dropdown'">
            <b-nav-item-dropdown :text="navbaritem.title">
              <b-nav-item to="#/fifa">Fifa Generell</b-nav-item>
            </b-nav-item-dropdown>
          </template>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto" v-for="navbaritem in navbaritemsright" :key="navbaritem.title">
          <b-nav-item :to="navbaritem.link">{{ navbaritem.title }}</b-nav-item>
        </b-nav>

        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'esg-navbar',
    data() {
      return {
        brandsrc: 'static/img/logos/logo_black.png',
        navbaritemsleft: [
          {
            type: 'normal',
            title: 'Bisherige Events',
            link: '/pastevents',
          },
          {
            type: 'normal',
            title: 'Wer wir sind',
            link: '/whoweare',
          },
          {
            type: 'normal',
            title: 'Hearthstone',
            link: '/hearthstone',
          },
          {
            type: 'normal',
            title: 'Fifa',
            link: '/fifa',
          },
          {
            type: 'normal',
            title: 'Kommende Events',
            link: '/fifatournament',
          },
        ],
        navbaritemsright: [
          {
            type: 'normal',
            title: 'Mitglied werden',
            link: '/join',
          },
        ],
      };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-img {
  height: 50px;
  width: 150px;
}

.dropdown-menu {
  background-color: #292b2c;
}
</style>
