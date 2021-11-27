<template>
  <header class="c-page-head">
    <app-menu></app-menu>
  </header>
  <main> <router-view></router-view>
  </main>
</template>

<script>

import AppMenu from "./Menu.vue";

export default {
  components: {
    AppMenu,
  },
};
</script>