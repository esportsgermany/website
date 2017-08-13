<template>
  <div id="tournament-detail">
    <esg-tournament-form v-if="global.activeTournamentDetail.isOwn" id="detail-form" :data="global.activeTournamentDetail"></esg-tournament-form>
    <div id="blog-entry">
      <div class="title-segment row">
        <div class="col row justify-content-center">
          <div class="col-auto image">
            <img :src="global.activeTournamentDetail.logo">
          </div>
        </div>
        <div class="title-col align-self-center">
          <p class="title">{{ global.activeTournamentDetail.username }}</p>
          <p :v-if="global.activeTournamentDetail.alsoKnownAs"
             class="alsoKnownAs">Also known as: {{ global.activeTournamentDetail.alsoKnownAs }}</p>
        </div>
      </div>
      <cms-embeded-text class="sentence" :data="'> ' + global.activeTournamentDetail.sentence"></cms-embeded-text>
      <cms-embeded-text v-if="global.activeTournamentDetail.text" class="detailDescr" :data="detailDescr"></cms-embeded-text>
      <cms-embeded-text v-if="global.activeTournamentDetail.text" class="personal-text" :data="global.activeTournamentDetail.text"></cms-embeded-text>
    </div>
    <div class="row justify-content-center">
      <b-btn v-if="global.activeTournamentDetail.isOwn" variant="outline-danger" id="toggle" v-on:click="toggleForm">{{ formbutton }}</b-btn>
      <b-btn variant="outline-danger" href="#/tournament">Zurück</b-btn>
    </div>
  </div>
</template>

<script>
  import global from '../utils/globalstate';
  import firebase from '../utils/firebase';
  import CmsEmbededText from '../components/cms/CmsEmbededText';
  import CmsEmbededImage from '../components/cms/CmsEmbededImage';
  import EsgTournamentForm from '../components/cms/EsgTournamentForm';

  export default {
    components: {
      CmsEmbededText,
      CmsEmbededImage,
      EsgTournamentForm,
    },
    name: 'tournamentdetails',
    data() {
      return {
        global,
        detailDescr: '#### Was man sonst noch über mich wissen muss:\n\n---',
        formbutton: 'Form anzeigen',
      };
    },
    beforeCreate: function beforeCreate() {
      function gup(name, url) {
        // eslint-disable-next-line
        const newName = name.replace(/[\[]/,'\\\[').replace(/[\]]/,'\\\]');
        // eslint-disable-next-line
        const regexS = '[\\?&]' + newName +'=([^&#]*)';
        const regex = new RegExp(regexS);
        const results = regex.exec(url);
        return results === null ? null : results[1];
      }
      const key = gup('user', document.location.href);
      firebase.database().ref('tournament/users')
        .child(key).once('value', (snap) => {
          global.activeTournamentDetail = snap.val();
          global.activeTournamentDetail.isOwn = key === global.makeKey(global.user.email);
        });
    },
    methods: {
      toggleForm: function toggleForm() {
        const contentform = document.getElementById('detail-form');
        const content = document.getElementById('blog-entry');
        if (contentform.style.display === 'none' || contentform.style.display === '') {
          contentform.style.display = 'block';
          content.style.display = 'none';
          this.formbutton = 'Content anzeigen';
        } else {
          contentform.style.display = 'none';
          content.style.display = 'block';
          this.formbutton = 'Form anzeigen';
        }
      },
    },
  };
</script>
<style scoped>
  .tournament-form {
    margin-top: 20px;
  }
  #detail-form {
    display: none;
  }
  #tournament-detail {
    margin-top: -30px;
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
  }
  #blog-entry {
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 20px;
    margin: 30px;
    max-width: 1024px;
  }
  img {
    max-width: 100px;
  }
  .image {
    margin: 0 20px 20px;
  }
  .title-col {
    max-width: 100%;
    padding: 15px;
  }
  .title {
    font-size: 300%;
    margin-bottom: 5px;
    line-height: 90%;
  }
  .alsoKnownAs {
    font-style: italic;
  }
  .sentence {
    border-left: 0.25em solid #dfe2e5;
    padding: 0 1em;
    color: #6a737d;
  }
  .editor {
    display: flex;
    margin-top: 10px;
  }
  .editor-text-input {
    width: 50%;
    height: 500px;
  }
  .editor-text-output {
    width: 50%;
    height: 500px;
    border: 1px solid #ccc;
    border-radius: 6px;
    overflow: scroll;
  }
  .image-input {
    width: 50%;
  }
  .image-output {
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  .descr {
    margin-top: 10px;
  }
</style>
