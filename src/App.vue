<script setup lang="ts">
import HeaderIterm from "./components/HeaderItem/HeaderIterm.vue";
import AppHero from "./components/PagesComponents/App/AppHero/AppHero.vue";
import AppAdvantages from "./components/PagesComponents/App/AppAdvantages/AppAdvantages.vue";
</script>

<template>
  <div class="app">
    <HeaderIterm />
    <main>
      <AppHero />
      <AppAdvantages />
    </main>
  </div>
</template>

<style scoped>
.app {
  /* background-color: rgb(175, 240, 240); */
  height: 100vh;
}
</style>
