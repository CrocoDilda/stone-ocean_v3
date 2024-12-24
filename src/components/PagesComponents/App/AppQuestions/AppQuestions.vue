<script setup lang="ts">
import { ref } from "vue";

import QuestionItem from "@/components/QuestionItem/QuestionItem.vue";
import ButtonControl from "@/components/control/ButtonControl.vue";

import { questions } from "./app-questions";

const isOpen = ref(false);
const buttonText = ref("Посмотреть больше вопросов");

const showMore = () => {
  isOpen.value = !isOpen.value;
  buttonText.value = isOpen.value ? "Скрыть" : "Посмотреть больше вопросов";
};
</script>

<template>
  <section class="questions container" :class="{ show: isOpen }">
    <h2>Часто задаваемые вопросы</h2>
    <ul class="questions--list">
      <QuestionItem
        v-for="question in questions"
        :key="question.id"
        :question="question.question"
        :answer="question.answer"
        class="questions--item"
      />
    </ul>
    <ButtonControl
      @click="showMore"
      class="questions--button"
      :text="buttonText"
    />
  </section>
</template>

<style scoped>
.questions {
  --padding: 80px;
  padding-top: var(--padding);
  padding-bottom: var(--padding);
}

.questions--list {
  margin-top: 48px;
}

.questions--item {
  position: relative;
  margin-top: 16px;
  transition: margin-top 0.5s, height 0.5s;
}

.questions--item:nth-child(n + 6) {
  z-index: -10;
  height: 0px;
  margin-top: 0px;
  opacity: 0;
}

.show .questions--item:nth-child(n + 6) {
  height: auto;
  z-index: 1;
  margin-top: 16px;
  opacity: 1;
}

.questions--button {
  margin-top: 48px;
}
</style>
