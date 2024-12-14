<script setup lang="ts">
import useSlider from "./add-advantages";

const {
  slides,
  activeSlide,
  sliderContainer,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  goToSlide,
} = useSlider();
</script>

<template>
  <section class="container advantages">
    <div class="advantages--description">
      <h2>Акриловый камень в интерьере</h2>
      <p class="text">
        Акриловый камень открывает безграничные возможности для воплощения любых
        идей. В свою очередь мы предлагаем вам решения, где качество,
        функциональность и искусное мастерство соединяются, чтобы ваши замыслы
        стали реальностью. Если вы можете это представить — мы можем это
        создать.
      </p>
      <ButtonControl text="Расчитать стоимость" url="/" />
    </div>
    <div class="slider-container" ref="sliderContainer">
      <div
        class="slider"
        :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          {{ slide }}
          <img
            :src="`../../../../assets/images/${slide}`"
            class="slider--image"
          />
        </div>
      </div>
      <div class="dots">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          :class="['dot', { active: index === activeSlide }]"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "./app-advantages.css";
</style>
