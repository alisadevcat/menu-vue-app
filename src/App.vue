<template>
  <div class="wrapper">
    <app-header></app-header>
    <main class="page-main">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import HelloWorld from "./views/HelloWorld.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
// @import "/sass/app.scss";
// @import "./src/assets/sass/app.scss";
</style>
