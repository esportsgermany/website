<template>
  <form class="tournament-form" v-on:submit.prevent="joinTournament">
    <div class="tournament-form-panel">
      <b-form-input class="tournament-form-name" v-model="user.username" type="text" placeholder="Spielername"></b-form-input>
      <b-form-input class="tournament-form-aka" v-model="user.alsoKnownAs" type="text" placeholder="Also Known As"></b-form-input>
    </div>
    <b-form-input v-model="user.sentence" type="text" placeholder="Dein Satz - Wieso gewinnst du?"></b-form-input>
    <div class="tournament-form-panel">
      <b-form-input class="tournament-form-logo" v-model="user.logo" type="text" placeholder="Link des Bildes"></b-form-input>
      <cms-embeded-image class="tournament-form-logo-output" :data="{src: user.logo}"></cms-embeded-image>
    </div>
    <cms-embeded-text class="descr" :data="markupDescr"></cms-embeded-text>
    <div class="tournament-form-panel">
      <b-form-input textarea class="editor-text-input" v-model="user.text" placeholder="MarkUp Text"></b-form-input>
      <cms-embeded-text class="editor-text-output" :data="user.text"></cms-embeded-text>
    </div>
    <input type="submit" class="btn btn-success submit-button" value="Speichern"/>
  </form>
</template>


<script>
  import toastr from 'toastr';
  import firebase from '../../utils/firebase';
  import global from '../../utils/globalstate';
  import CmsEmbededText from './CmsEmbededText';
  import CmsEmbededImage from './CmsEmbededImage';

  export default {
    name: 'esgtournamentform',
    props: ['data'],
    components: {
      CmsEmbededText,
      CmsEmbededImage,
    },
    data() {
      return {
        global,
        mytext: 'What the fuxk?',
        user: this.data,
        markupDescr: 'Das folgende Input-Feld unterstützt MarkUp Language. Gute Markdown Tipps gibts [hier](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Rechts siehst du die Vorschau deiner Eingabe.',
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
          global.activeTournamentDetail = user;
          this.user = {};
          toastr.success(`Du hast dich erfolgreich deine Daten als ${this.username} beim Turnier abgegeben`);
        }
      },
    },
  };
</script>
<style scoped>
  .tournament-form {
    padding: 20px 10px;
  }
  .tournament-form-panel {
    display: flex;
  }
  .tournament-form-name {
    width: 50%;
  }
  .tournament-form-aka {
    width: 50%;
  }
  .tournament-form-logo-output {
    max-width: 150px;
    padding: 10px;
  }
  .editor-text-input {
    width: 50%;
    height: 300px;
  }
  .editor-text-output {
    width: 50%;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 6px;
    overflow: scroll;
  }
  .descr {
    padding-top: 10px;
  }
  .submit-button {
    margin: 20px 0;
    cursor: pointer;
  }
</style>
