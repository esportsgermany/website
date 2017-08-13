<template>
  <div id="app">
    <esg-navbar></esg-navbar>
    <div class="main container">
      <router-view></router-view>
    </div>
    <esg-footer></esg-footer>
  </div>
</template>

<script>
  import toastr from 'toastr';
  import global from './utils/globalstate';
  import firebase from './utils/firebase';
  import EsgNavbar from './components/EsgNavbar';
  import EsgFooter from './components/EsgFooter';

export default {
    name: 'app',
    components: {
      EsgNavbar,
      EsgFooter,
    },
    created: function created() {
      function innerAuthChange(user) {
        if (user) {
          global.login(user);
          toastr.success(`${global.getNumber()} Your Login was successful.
            Welcome back!`);
        }
      }
      firebase.auth().onAuthStateChanged(innerAuthChange);
    },
};
</script>

<style>
.main {
  margin-top: 20px;
}
a {
  color: #e67d21;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #b35400;
}
</style>
