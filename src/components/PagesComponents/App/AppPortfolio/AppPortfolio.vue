<script setup lang="ts">
import kitchen1 from "@/assets/images/kitchen-1.webp";
import kitchen2 from "@/assets/images/kitchen-2.webp";
import kitchen3 from "@/assets/images/kitchen-3.webp";
import kitchen4 from "@/assets/images/kitchen-4.webp";
const LIST = [
  { image: kitchen1, text: "Столешницы" },
  { image: kitchen2, text: "Подоконники" },
  { image: kitchen3, text: "Барные стойки" },
  { image: kitchen4, text: "Ремон и обслуживание" },
];
</script>

<template>
  <section class="portfolio container">
    <h2>Наши работы</h2>
    <ul class="portfolio--list">
      <li v-for="(item, index) in LIST" :key="index">
        <a href="#" class="portfolio--link">
          <div class="portfolio--link-inner">
            <img loading="lazy" :src="item.image" class="portfolio--image" />
            <div class="title portfolio--image-button">Посмотреть ещё</div>
            <h4 class="portfolio--image-title title">{{ item.text }}</h4>
            <div class="portfolio--filter"></div>
            <div class="images-bg-icon"></div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
@import "./app-portfolio.css";
</style>
