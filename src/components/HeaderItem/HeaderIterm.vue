<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import MainLogo from "../icons/MainLogo.vue";
import ButtonControl from "../control/ButtonControl.vue";
import IconBurger from "../icons/IconBurger.vue";
import IconCross from "../icons/IconCross.vue";

const activeStyle = ref("");
const menuIsOpen = ref(false);
const menuIsDisabled = ref(true);
let timerId = 0;

const toggleMenu = () => {
  clearTimeout(timerId);
  menuIsDisabled.value = false;
  activeStyle.value = menuIsOpen.value
    ? "header--menu-hide"
    : "header--menu-open";
  menuIsOpen.value = !menuIsOpen.value;
  if (activeStyle.value == "header--menu-hide") {
    timerId = setTimeout(() => {
      menuIsDisabled.value = true;
    }, 300);
  }
};

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
  <header class="container header">
    <a href="#" class="header--logo-link"><MainLogo class="header--logo" /></a>
    <div
      v-show="!menuIsDisabled || screenWidth > 660"
      :class="`header--menu ${activeStyle}`"
    >
      <button @click="toggleMenu" class="header--cross">
        <IconCross class="header--cross-icon" />
      </button>
      <nav>
        <ul class="header--list">
          <li><a href="#" class="header--link">Каталог</a></li>
          <li><a href="#" class="header--link">Образцы</a></li>
          <li><a href="#" class="header--link">Вопросы</a></li>
          <li><a href="#" class="header--link">Контакты</a></li>
        </ul>
      </nav>
      <ButtonControl class="header--button" text="Рассчитать стоимость" />
    </div>
    <button v-show="!menuIsOpen" @click="toggleMenu" class="header--burger">
      <IconBurger class="header--burger-icon" />
    </button>
  </header>
</template>

<style scoped>
@import "./header-item.css";
</style>
