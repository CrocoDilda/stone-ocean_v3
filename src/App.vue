<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import HeaderIterm from "./components/HeaderItem/HeaderIterm.vue";
import AppHero from "./components/PagesComponents/App/AppHero/AppHero.vue";
import AppAdvantages from "./components/PagesComponents/App/AppAdvantages/AppAdvantages.vue";
import AppCatalog from "./components/PagesComponents/App/AppPortfolio/AppPortfolio.vue";
import AppWorkflow from "./components/PagesComponents/App/AppWorkflow/AppWorkflow.vue";
import AppSamples from "./components/PagesComponents/App/AppSamples/AppSamples.vue";
import AppReviews from "./components/PagesComponents/App/AppReviews/AppReviews.vue";
import AppCalculator from "./components/PagesComponents/App/AppCalculator.vue";
import AppQuestions from "./components/PagesComponents/App/AppQuestions/AppQuestions.vue";
import FooterItem from "./components/FooterItem/FooterItem.vue";

import { useScreenStore } from "@/store/screen.ts";

const { updateScreenWidth } = useScreenStore();

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});
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
      <AppSamples />
      <AppReviews />
      <AppCalculator />
      <AppQuestions />
    </main>
    <keep-alive>
      <FooterItem />
    </keep-alive>
  </div>
</template>

<style scoped>
@media (max-width: 660px) {
  .app-header {
    background-color: var(--color-background-4);
  }
}
</style>
