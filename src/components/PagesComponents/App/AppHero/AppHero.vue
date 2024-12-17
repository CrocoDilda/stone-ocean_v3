<script setup lang="ts">
import kitchen1 from "@/assets/images/kitchen-1.webp";
import kitchen2 from "@/assets/images/kitchen-2.webp";
import kitchen3 from "@/assets/images/kitchen-3.webp";
const LIST = [kitchen1, kitchen2, kitchen3];
</script>

<template>
  <section class="container hero">
    <div class="hero--wrapper">
      <div class="hero--head">
        <h1 class="hero--title">
          Изделия из акрилового камня для вашего интерьера
        </h1>
        <p class="text hero--subtitle">
          Изготавливаем изделия, которые не просто украшают, а делают
          пространство удобным и практичным.
        </p>
      </div>
      <ul class="hero--list">
        <li v-for="(item, index) in LIST" :key="index" class="hero--item">
          <a href="#" class="hero--link">
            <div class="hero--link-inner">
              <img rel="preload" :src="item" alt=" " class="hero--image" />
              <div class="title hero--image-button">Посмотреть ещё</div>
              <div class="images-bg-icon"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
@import "./app-hero.css";
</style>
