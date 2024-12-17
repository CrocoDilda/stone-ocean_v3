<script setup lang="ts">
import { ref, computed } from "vue";
import { cardContent, cardStylesMap } from "./app-workflow.ts";

import IconArrow from "@/components/icons/IconArrow.vue";

// Текущий индекс активной карточки
const activeIndex = ref(0);

// Переключение на предыдущую карточку
const prevCard = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }
};

const nextCard = () => {
  if (activeIndex.value < cardContent.length - 1) {
    activeIndex.value++;
  }
};

// Стиль для карточек: смещение и классы для анимаций
const cardStyles = (index: number) => {
  const offset = index - activeIndex.value;

  // Преобразуем offset в строку для использования в качестве ключа
  const offsetKey = offset.toString();

  // Возвращаем стиль из объекта или стиль по умолчанию
  return (
    cardStylesMap[offsetKey] || {
      transform: `translateX(${offset * 120}%) scale(0.5)`,
      zIndex: 0,
      opacity: 0,
    }
  );
};

// Отключение кнопок на краях
const isPrevDisabled = computed(() => activeIndex.value === 0);
const isNextDisabled = computed(
  () => activeIndex.value === cardContent.length - 1
);
</script>

<template>
  <section class="workflow">
    <div class="workflow--header container">
      <h2>Пошаговое руководство к идеальному результату</h2>
      <p class="text">4 простых шага для получения желаемого результата</p>
    </div>
    <div class="slider-wrapper">
      <div class="slider">
        <ul class="slider--list">
          <li
            v-for="(card, index) in cardContent"
            :key="card.number"
            class="slider--card"
            :style="cardStyles(index)"
          >
            <h3 class="slider--card-title">
              <span class="slider--card-accent">0{{ card.number }}.</span>
              {{ card.title }}
            </h3>
            <p class="slider--card-text text">{{ card.text }}</p>
            <img class="slider--card-image" :src="card.image" alt="" />
          </li>
        </ul>
      </div>

      <button
        class="slider--button button-left"
        @click="prevCard"
        :disabled="isPrevDisabled"
      >
        <IconArrow class="slider--button-icon" />
      </button>
      <button
        class="slider--button button-right"
        @click="nextCard"
        :disabled="isNextDisabled"
      >
        <IconArrow class="slider--button-icon" />
      </button>
    </div>
  </section>
</template>

<style scoped>
@import "./app-workflow.css";
</style>
