<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import HeaderIterm from "./components/HeaderItem/HeaderIterm.vue";
import AppHero from "./components/PagesComponents/App/AppHero/AppHero.vue";
import AppAdvantages from "./components/PagesComponents/App/AppAdvantages/AppAdvantages.vue";
import AppCatalog from "./components/PagesComponents/App/AppPortfolio/AppPortfolio.vue";
import AppWorkflow from "./components/PagesComponents/App/AppWorkflow/AppWorkflow.vue";
import AppContacts from "./components/PagesComponents/App/AppContacts/AppContacts.vue";
import AppSamples from "./components/PagesComponents/App/AppSamples/AppSamples.vue";
import AppReviews from "./components/PagesComponents/App/AppReviews/AppReviews.vue";
import AppCalculator from "./components/PagesComponents/App/AppCalculator.vue";
import QuestionsList from "./components/QuestionsList/QuestionsList.vue";
import FooterItem from "./components/FooterItem/FooterItem.vue";

import { useScreenStore } from "@/store/screen.ts";

const { updateScreenWidth } = useScreenStore();

let resizeObserver: ResizeObserver | null = null;
let intersectionObserver: IntersectionObserver | null = null;

onMounted(() => {
  // Отслеживание изменения ширины экрана
  resizeObserver = new ResizeObserver((entries) => {
    const { width } = entries[0].contentRect;
    updateScreenWidth(width);
  });
  resizeObserver.observe(document.body);

  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Добавляем класс видимости
          intersectionObserver?.unobserve(entry.target); // Останавливаем отслеживание
        }
      });
    },
    {
      threshold: 0.25, // Регулировка видимости элемента
    }
  );

  // Находим все элементы с классом "observable" и начинаем их отслеживать
  const observableElements = document.querySelectorAll(".observable");
  observableElements.forEach((el) => intersectionObserver?.observe(el));
});

onUnmounted(() => {
  // Очистка наблюдателей
  resizeObserver?.unobserve(document.body);
  resizeObserver = null;
  intersectionObserver?.disconnect();
  intersectionObserver = null;
});
</script>

<template>
  <div class="app">
    <keep-alive>
      <HeaderIterm class="app-header" />
    </keep-alive>
    <main>
      <AppHero class="hero" />
      <AppAdvantages class="observable" />
      <!-- <AppCatalog class="observable" /> -->
      <AppContacts class="observable" />
      <AppWorkflow class="observable" />
      <AppSamples class="observable" />
      <!-- <AppReviews class="observable" /> -->
      <!-- <AppCalculator class="observable" /> -->
      <QuestionsList class="observable observable-questions" />
    </main>
    <keep-alive>
      <FooterItem />
    </keep-alive>
  </div>
</template>

<style scoped>
.observable {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.observable-questions {
  opacity: 1;
}

.observable.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 660px) {
  .app-header {
    background-color: var(--color-background-4);
  }
}
</style>
