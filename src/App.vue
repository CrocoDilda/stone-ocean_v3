<script setup lang="ts">
import HeaderIterm from "./components/HeaderItem/HeaderIterm.vue";
import AppHero from "./components/PagesComponents/App/AppHero/AppHero.vue";
import AppAdvantages from "./components/PagesComponents/App/AppAdvantages/AppAdvantages.vue";
import AppCatalog from "./components/PagesComponents/App/AppCatalog/AppCatalog.vue";
</script>

<template>
  <div class="app">
    <HeaderIterm class="app-header" />
    <main>
      <AppHero />
      <AppAdvantages />
      <AppCatalog />
    </main>
  </div>
</template>

<style scoped>
.app {
}

@media (max-width: 660px) {
  .app-header {
    background-color: var(--color-background-4);
  }
}
</style>
