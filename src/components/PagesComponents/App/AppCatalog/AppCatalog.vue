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
  <section class="catalog container">
    <h2>Каталог изделий</h2>
    <ul class="catalog--list">
      <li v-for="(item, index) in LIST" :key="index">
        <a href="#" class="catalog--link">
          <div class="catalog--link-inner">
            <img loading="lazy" :src="item.image" class="catalog--image" />
            <div class="title catalog--image-button">Посмотреть ещё</div>
            <div class="title catalog--image-title">{{ item.text }}</div>
            <div class="catalog--filter"></div>
            <div class="catalog--icon images-bg-icon"></div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
@import "./app-catalog.css";
</style>
