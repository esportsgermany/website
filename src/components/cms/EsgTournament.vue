<template>
  <div id="esg-tournament">
    <div  v-if="global.loggedIn && !isInList" class="row justify-content-center">
      <b-btn class="col-12" v-if="" variant="outline-danger" id="toggle" v-on:click="toggleForm">{{ formbutton }}</b-btn>
      <esg-tournament-form id="detail-form" :data="user"></esg-tournament-form>
    </div>
    <div id="user-table">
      <div class="row my-1">
        <div class="col-12">
          <b-form-fieldset horizontal label="Filter" :label-cols="3">
            <b-form-input v-model="filter" placeholder="Type to Search" />
          </b-form-fieldset>
        </div>
      </div>

      <!-- Main table element -->
      <b-table striped hover show-empty
               :items="items"
               :fields="fields"
               :filter="filter"
               :sort-by.sync="sortBy"
               :sort-desc.sync="sortDesc"
      >
        <template slot="name" scope="row">{{row.item.username}}</template>
        <template slot="sentence" scope="row">{{row.item.sentence}}</template>
        <template slot="actions" scope="row">
          <b-btn size="sm" :href="'#/tournament/detail?user=' + global.makeKey(row.item.email)">Details</b-btn>
          <b-btn v-if="row.item.email === global.user.email" size="sm" @click.stop="backdown(row.item)">Zurücktreten</b-btn>
        </template>
      </b-table>
    </div>
  </div>
</template>


<script>
  import toastr from 'toastr';
  import firebase from '../../utils/firebase';
  import global from '../../utils/globalstate';
  import CmsEmbededText from './CmsEmbededText';
  import EsgTournamentForm from './EsgTournamentForm';

  export default {
    name: 'esgtournament',
    props: ['data'],
    components: {
      CmsEmbededText,
      EsgTournamentForm,
    },
    firebase() {
      return {
        items: firebase.database().ref('tournament/users'),
      };
    },
    data() {
      return {
        global,
        formbutton: 'Du möchtest Teilnehmen? Dann füll doch einfach kurz das Formular hier aus!',
        user: {
          username: '',
          sentence: '',
          logo: '',
          text: '',
        },
        fields: {
          name: {
            label: 'Spielername',
            sortable: true,
          },
          sentence: {
            label: 'Spruch',
            sortable: true,
          },
          actions: {
            label: 'Aktionen',
          },
        },
        sortBy: null,
        sortDesc: false,
        filter: null,
      };
    },
    methods: {
      joinTournament: function joinTournament() {
        if (this.username === '') {
          toastr.error('Du kannst dich nicht ohne Spielername anmelden. Bitte geb deinen korrekten Spielernamen an');
        } else {
          const user = this.user;
          user.email = global.user.email;
          const pushRef = firebase.database().ref(`tournament/users/${global.makeKey(user.email)}`);
          pushRef.set(user);
          this.user = {};
          toastr.success(`Du hast dich erfolgreich als ${this.username} beim Turnier angemeldet`);
        }
      },
      backdown: function backdown(user) {
        if (confirm('Möchtest du wirklich zurücktreten? All deine eingegebenen Details gehen dadurch verloren!')) {
          const siteRef = firebase.database().ref('tournament/users');
          siteRef.child(global.makeKey(user.email)).remove();
          toastr.success(`Du bist mit dem Spielernamen ${user.username} aus dem Turnier zurückgetreten.`);
        }
      },
      toggleForm: function toggleForm() {
        const contentform = document.getElementById('detail-form');
        if (contentform.style.display === 'none' || contentform.style.display === '') {
          contentform.style.display = 'block';
          this.formbutton = 'Zurück';
        } else {
          contentform.style.display = 'none';
          this.formbutton = 'Du möchtest Teilnehmen? Dann füll doch einfach kurz das Formular hier aus!';
        }
      },
    },
    computed: {
      isInList: function isInList() {
        const user = global.makeKey(global.user.email);
        const ref = firebase.database().ref(`tournament/users/${user}`);
        let result = false;
        ref.once('value', (snapshot) => {
          result = snapshot.exists();
        });
        return result;
      },
    },
  };
</script>
<style scoped>
  #detail-form {
    display: none;
  }
  #user-table {
    margin: 30px 10px;
  }
  #toggle {
    cursor: pointer;
  }
</style>
