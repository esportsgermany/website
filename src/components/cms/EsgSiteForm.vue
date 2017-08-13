<template>
  <form class="siteform col-12" v-on:submit.prevent="addEntry">
    <b-tabs small ref="tabs" v-model="tabIndex">
      <b-tab title="MarkUp Text">
        <cms-embeded-text class="descr" :data="markupDescr"></cms-embeded-text>
        <div class="editor">
          <b-form-input textarea class="editor-text-input" v-model="markupText" placeholder="MarkUp Text"></b-form-input>
          <cms-embeded-text class="editor-text-output" :data="markupText"></cms-embeded-text>
        </div>
      </b-tab>
      <b-tab title="Image">
        <cms-embeded-text class="descr" :data="imageDescr"></cms-embeded-text>
        <div class="editor">
          <div class="image-input">
            <b-form-input v-model="image.src" type="text" placeholder="Link des Bildes"></b-form-input>
            <b-form-input v-model="image.alt" type="text" placeholder="Text zum Link (alt-text)"></b-form-input>
          </div>
          <cms-embeded-image class="image-output" :data="image"></cms-embeded-image>
        </div>
      </b-tab>
      <b-tab title="Youtube Video">
        <cms-embeded-text class="descr" :data="videoDescr"></cms-embeded-text>
        <b-form-input class="video-input" v-model="video" type="text" placeholder="Einbetten-Tag hier einfügen!"></b-form-input>
        <cms-embeded-youtube :data="video"></cms-embeded-youtube>
      </b-tab>
    </b-tabs>
    <div class="submit-panel">
      <b-form-select v-model="selected" :options="options" class="submit-select"></b-form-select>
      <input type="submit" class="btn btn-secondary submit-button" value="Speichern"/>
    </div>
  </form>
</template>

<script>
  import toastr from 'toastr';
  import marked from 'marked';
  import firebase from '../../utils/firebase';
  import CmsEmbededImage from './CmsEmbededImage';
  import CmsEmbededText from './CmsEmbededText';
  import CmsEmbededYoutube from './CmsEmbededYoutube';
  /**
   * Esg Site Form needs as parameter the very important "contentRef"
   * which is the reference to the site it creates
   * a new content reference for.
   */
  export default {
    components: {
      CmsEmbededYoutube,
      CmsEmbededText,
      CmsEmbededImage,
    },
    name: 'CmsEmbededPortfolioForm',
    props: ['data'],
    data() {
      return {
        newContent: {},
        tabIndex: 0,
        markupDescr: 'Dieses Input-Feld unterstützt MarkUp Language. Gute Markdown Tipps gibts [hier](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Rechts siehst du die Vorschau deiner Eingabe.',
        markupText: '',
        imageDescr: 'Bitte gib hier den Link zum Bild an, das du einfügen möchtest. Rechts siehst du eine Vorschau des Bildes. Bitte beachte: Wird keine Vorschau angezeigt, stimmt etwas mit deiner Eingabe nicht!',
        image: {
          link: '',
          src: '',
          alt: '',
        },
        videoDescr: 'Bitte gib hier den Einbetten-Tag des Youtube Videos an, das du einfügen möchtest - Zu finden wenn du unter dem Video auf Youtube auf "Teilen" und dann auf "Einbetten" klickst. Unten wird die Vorschau des Videos angezeigt. Bitte beachte: Wird keine Vorschau angezeigt, stimmt etwas mit deiner Eingabe nicht!',
        video: '',
        selected: 0,
        options: [
          { value: 0, text: 'Komplette Seitenweite' },
          { value: 1, text: 'Dreiviertel Seitenweite' },
          { value: 2, text: 'Halbe Seitenweite' },
          { value: 3, text: 'Viertel Seitenweite / Mobile Halbe Seite' },
          { value: 4, text: 'Viertel Seitenweite / Mobile Ganze Seite' },
        ],
      };
    },
    computed: {
      compiledMarkdownDescr: function compiledMarkdownDescr() {
        return marked(this.markupDescr, { sanitize: true });
      },
    },
    methods: {
      addEntry: function addEntry() {
        const pushRef = firebase.database().ref(`content/${this.data.contentRef}`);
        if (this.tabIndex === 0) {
          if (this.markupText === '') {
            toastr.error('Du kannst keinen leeren Content erzeugen. Bitte fülle das Input Text Feld aus.');
          } else {
            this.newContent.type = 'text';
            this.newContent.content = this.markupText;
            this.markupText = '';
          }
        } else if (this.tabIndex === 1) {
          if (this.image.src === '') {
            toastr.error('Du kannst keinen leeren Content erzeugen. Bitte fülle zumindest das Feld mit dem Link des Bildes aus.');
          } else {
            this.newContent.type = 'image';
            this.newContent.content = this.image;
            this.image = {};
          }
        } else if (this.tabIndex === 2) {
          if (this.video === '') {
            toastr.error('Du kannst keinen leeren Content erzeugen. Bitte fülle das Input Feld aus.');
          } else {
            this.newContent.type = 'video';
            this.newContent.content = this.video;
            this.video = '';
          }
        }
        switch (this.selected) {
          default: this.newContent.classes = 'col-12'; break;
          case 1: this.newContent.classes = 'col-12 col-md-9'; break;
          case 2: this.newContent.classes = 'col-12 col-md-6'; break;
          case 3: this.newContent.classes = 'col-6 col-md-3'; break;
          case 4: this.newContent.classes = 'col-12 col-md-3'; break;
        }
        this.selected = 0;
        let position = '';
        pushRef.once('value', (snapshot) => {
          position = snapshot.numChildren() + 1;
        });
        this.newContent.position = position;
        pushRef.push(this.newContent);
        toastr.success(`Du hast erfolgreich einen neuen Content für ${this.data.contentRef} gespeichert!`);
      },
    },
  };

</script>
<style scoped>
  .descr {
    margin-top: 10px;
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
  .video-input {
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .submit-panel {
    display: flex;
  }
  .submit-select {
    width: 75%;
  }
  .submit-button {
    width: 25%;
  }
</style>
