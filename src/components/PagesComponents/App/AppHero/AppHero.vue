<script setup lang="ts"></script>

<template>
  <section class="container hero">
    <div class="hero--wrapper">
      <div class="hero--head">
        <h1>Изделия из акрилового камня для вашего интерьера</h1>
        <p class="text hero--subtitle">
          Изготавливаем изделия, которые не просто украшают, а делают
          пространство удобным и практичным.
        </p>
      </div>
      <ul class="hero--list">
        <li class="hero--item">
          <a href="#" class="hero--link">
            <div class="hero--link-inner">
              <img
                src="@/assets/images/kitchen-1.jpg"
                alt="Изделие из акрилового камня"
                class="hero--image"
              />
              <div class="title hero--image-button">Посмотреть ещё</div>
            </div>
          </a>
        </li>
        <li class="hero--item">
          <a href="#" class="hero--link">
            <div class="hero--link-inner">
              <img
                src="@/assets/images/kitchen-2.jpg"
                alt="Изделие из акрилового камня"
                class="hero--image"
              />
              <div class="title hero--image-button">Посмотреть ещё</div>
            </div>
          </a>
        </li>
        <li class="hero--item">
          <a href="#" class="hero--link">
            <div class="hero--link-inner">
              <img
                src="@/assets/images/kitchen-3.jpg"
                alt="Изделие из акрилового камня"
                class="hero--image"
              />
              <div class="title hero--image-button">Посмотреть ещё</div>
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
