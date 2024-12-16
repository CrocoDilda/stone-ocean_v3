<script setup lang="ts">
import HeaderIterm from "./components/HeaderItem/HeaderIterm.vue";
import AppHero from "./components/PagesComponents/App/AppHero/AppHero.vue";
import AppAdvantages from "./components/PagesComponents/App/AppAdvantages/AppAdvantages.vue";
import AppCatalog from "./components/PagesComponents/App/AppCatalog/AppCatalog.vue";
import AppWorkflow from "./components/PagesComponents/App/AppWorkflow/AppWorkflow.vue";
</script>

<template>
  <div class="app">
    <keep-alive>
      <HeaderIterm class="app-header" />
    </keep-alive>
    <main>
      <AppHero />
      <AppAdvantages />
      <AppCatalog />
      <AppWorkflow />
    </main>
    <keep-alive>
      <FooterItem />
    </keep-alive>
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
