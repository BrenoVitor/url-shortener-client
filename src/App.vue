<template>
  <div>
    <UrlShortenerMenu></UrlShortenerMenu>
    <Main id="app">
      <transition name="page">
        <router-view></router-view>
      </transition>
    </Main>
    <UrlShortenerFooter></UrlShortenerFooter>
    <FlashMessage></FlashMessage>
  </div>
</template>

<script>
import UrlOriginal from './models/UrlOriginal.js';
import UrlShortened from './models/UrlShortened.js';
import UrlService from './services/UrlService.js';

import Main from './components/shared/main/Main.vue';
import UrlShortenerMenu from './components/url-shortener-menu/UrlShortenerMenu.vue';
import UrlShortenerFooter from './components/url-shortener-footer/UrlShortenerFooter.vue';



export default {
  name: 'app',
  components: { Main: Main, UrlShortenerMenu: UrlShortenerMenu, UrlShortenerFooter: UrlShortenerFooter },
  data() {
    return {
      urlOriginal: new UrlOriginal(),
      urlShortened: new UrlShortened(),
      urlService: new UrlService(this.$resource),
      domain: "",
      presentationAddress: ""
    }
  },
  methods: {
    shorter() {
      this.urlService.shorter(this.urlOriginal).then(response => {
        console.log(response.url);
        this.urlShortened = response.body;
        console.log(this.urlShortened);
        this.domain = response.url;
        this.presentationAddress=`${this.domain}/${this.urlShortened.shortenedAddress}`;
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");
html, body {
  overflow:  auto;
  font-family: "Roboto Mono", monospace;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  height: 100%; 
  margin: 0px;
  padding: 0px;
  transition: 1s;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}
.btn-shortener{
  font-size: 2em !important;
  color: #fff !important;
  text-transform: uppercase;
}
label {
  font-size: 3em !important;
  color: #17a2b8 !important;
}
.clear {
  clear: both;
}
.page-enter-active, .page-leave-active {
    transition: opacity 1s
}
.page-enter, .page-leave-active {
  opacity: 0;
}
.navbar-toggler{
  border: 1px #fff solid !important;
}
</style>
