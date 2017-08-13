<template>
  <div id="esg-site">
    <template v-if="global.admin">
      <b-btn variant="outline-danger" id="toggle" v-on:click="toggleForm">{{ formbutton }}</b-btn>
      <esg-site-form id="content-form" :data="contentform"></esg-site-form>
    </template>
    <div class="row" id="content">
      <div class="block" v-for="cmsblock in cmsblocks" :key="cmsblock['.key']" :id="cmsblock['.key']" :class="cmsblock.classes">
        <div class="delete" v-if="global.admin">
          Pos: {{ cmsblock.position }}
          <span class="fa fa-trash" v-on:click="removeContent(cmsblock)"></span>
          <span class="fa fa-arrow-up" v-on:click="moveContentUp(cmsblock)"></span>
          <span class="fa fa-arrow-down" v-on:click="moveContentDown(cmsblock)"></span>
        </div>
        <cms-embeded-text v-if="cmsblock.type === 'text'" :data="cmsblock.content"></cms-embeded-text>
        <cms-embeded-youtube v-if="cmsblock.type === 'video'" :data="cmsblock.content"></cms-embeded-youtube>
        <cms-embeded-image v-if="cmsblock.type === 'image'" :data="cmsblock.content"></cms-embeded-image>
      </div>
    </div>
  </div>
</template>

<script>
  import toastr from 'toastr';
  import global from '../../utils/globalstate';
  import firebase from '../../utils/firebase';

  import EsgSiteForm from './EsgSiteForm';
  import CmsEmbededYoutube from './CmsEmbededYoutube';
  import CmsEmbededText from './CmsEmbededText';
  import CmsEmbededImage from './CmsEmbededImage';

  export default {
    name: 'esg-site',
    props: ['data'],
    components: {
      EsgSiteForm,
      CmsEmbededYoutube,
      CmsEmbededText,
      CmsEmbededImage,
    },
    data() {
      return {
        global,
        formbutton: 'Form anzeigen',
        contentform: {
          contentRef: this.data.siteRef,
        },
      };
    },
    firebase() {
      return {
        cmsblocks: firebase.database().ref(`content/${this.data.siteRef}`).orderByChild('position'),
      };
    },
    methods: {
      toggleForm: function toggleForm() {
        const contentform = document.getElementById('content-form');
        const content = document.getElementById('content');
        if (contentform.style.display === 'none' || contentform.style.display === '') {
          contentform.style.display = 'block';
          content.style.display = 'none';
          this.formbutton = 'Content anzeigen';
        } else {
          contentform.style.display = 'none';
          content.style.display = 'flex';
          this.formbutton = 'Form anzeigen';
        }
      },
      removeContent: function removeContent(content) {
        const siteRef = firebase.database().ref(`content/${this.data.siteRef}`);
        if (confirm('Möchtest du diesen Content wirklich löschen?')) {
          siteRef.child(content['.key']).remove();
          toastr.error('Content removed!');
        }
      },
      moveContentDown: function moveContentDown(content) {
        const siteRef = firebase.database().ref(`content/${this.data.siteRef}`);
        siteRef.child(content['.key']).child('position')
          .set(content.position + 1);
      },
      moveContentUp: function moveContentUp(content) {
        const siteRef = firebase.database().ref(`content/${this.data.siteRef}`);
        siteRef.child(content['.key']).child('position')
          .set(content.position - 1);
      },
    },
  };
</script>
<style scoped>
  #toggle {
    margin: 20px;
    cursor: pointer;
  }
  #content-form {
    display: none;
  }
  .block {
    padding: 10px;
  }
  .delete {
    z-index: 3000;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: -10px;
  }
  .delete > span:hover {
    color: #e67d21;
  }
</style>
