<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import IconArrow2 from "../icons/IconArrow2.vue";

type Props = {
  question: string;
  answer: string;
};

defineProps<Props>();

const isOpen = ref(false); // Управление состоянием раскрытия
const contentRef = ref<HTMLDivElement | null>(null); // Ссылка на обёртку контента

// Динамическое вычисление стиля max-height
const maxHeight = computed(() =>
  isOpen.value ? `${contentRef.value?.scrollHeight}px` : "0px"
);

// Переключение состояния
const toggle = async () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) await nextTick(); // Обновляем DOM для корректной высоты
};
</script>

<template>
  <li class="question">
    <button
      class="question--button"
      :class="{ active: isOpen }"
      @click="toggle"
      :aria-expanded="isOpen"
    >
      <div class="question--header">
        <h5 class="question--title">{{ question }}</h5>
        <IconArrow2
          class="question--icon"
          :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }"
        />
      </div>
      <div
        ref="contentRef"
        class="question--content-wrapper"
        :style="{ maxHeight: maxHeight }"
      >
        <p class="question--text text-2">{{ answer }}</p>
      </div>
    </button>
  </li>
</template>

<style scoped>
@import "./question-item.css";
</style>
