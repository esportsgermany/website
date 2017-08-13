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
        <b-nav is-nav-bar>
          <template v-if="global.loggedIn"><b-nav-item id="logout" to="#" v-on:click="logout">Logout</b-nav-item></template>
          <template v-else><b-nav-item id="login" to="#" v-b-modal="'esg-login-modal'">Login</b-nav-item></template>
        </b-nav>
        </b-collapse>
    </b-navbar>
    <esg-login-modal></esg-login-modal>
  </div>
</template>

<script>
  import toastr from 'toastr';
  import firebase from '../utils/firebase';
  import global from '../utils/globalstate';

  import EsgLoginModal from './EsgLoginModal';

  export default {
    name: 'esg-navbar',
    components: {
      EsgLoginModal,
    },
    data() {
      return {
        global,
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
            link: '/upcoming',
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
    methods: {
      logout: function logout(e) {
        firebase.auth().signOut().then(this.logoutSuccess).catch(this.logoutFail);
        e.preventDefault();
      },
      logoutSuccess: function logoutSuccess() {
        global.logout();
        toastr.error(`Your Logout was successful.
          See you soon!`);
      },
      logoutFail: function logoutFail(error) {
        toastr.error(`Sorry! Something went wrong! Errorcode: ${error.code}`);
      },
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
