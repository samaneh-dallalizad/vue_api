<template>
  <div id="app">     
    <Header/>
      <router-view  :key="$route.path"></router-view>
    <Footer/>   
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faListAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faWhatsapp);
library.add(faArrowUp);
library.add(faListAlt);

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
/* row */
.row{margin:0;}
/* public backgrounds */
.bkg-blue{background:#1867c0;}
.bkg-green{background:#1ae4b5;}
.bkg-purple{background:#4b187f;}
.bkg-pink{background:#e41aa6;}
/* public colors */
.clr-blue{color:#1867c0;}
.clr-green{color:#1ae4b5;}
.clr-purple{color:#4b187f;}
.clr-pink{color:#e41aa6;}
</style>
