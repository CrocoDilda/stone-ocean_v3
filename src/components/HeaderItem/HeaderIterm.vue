<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import MainLogo from "../icons/MainLogo.vue";
import ButtonControl from "../control/ButtonControl.vue";
import IconBurger from "../icons/IconBurger.vue";
import IconCross from "../icons/IconCross.vue";

import { useScreenStore } from "@/store/screen.ts";

const activeStyle = ref("");
const menuIsOpen = ref(false);
const menuIsDisabled = ref(true);
const headerVisible = ref(true); // Видимость заголовка
let lastScrollY = 0; // Последняя позиция прокрутки

// Таймер для плавной анимации меню
let timerId: ReturnType<typeof setTimeout> | undefined;

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

// Обработчик прокрутки
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // Прокрутка вниз
    headerVisible.value = false;
  } else {
    // Прокрутка вверх
    headerVisible.value = true;
  }
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="container header"
    :class="{ 'header--hidden': !headerVisible }"
  >
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="#"
      class="header--logo-link"
      ><MainLogo class="header--logo"
    /></a>
    <div
      v-show="useScreenStore().screenWidth > 660 ? true : !menuIsDisabled"
      :class="`header--menu ${activeStyle}`"
    >
      <button @click="toggleMenu" class="header--cross">
        <IconCross class="header--cross-icon" />
      </button>
      <!-- <nav>
        <ul class="header--list">
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="#"
              class="header--link"
              >Портфолио</a
            >
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="#"
              class="header--link"
              >Каталог</a
            >
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="#"
              class="header--link"
              >Вопросы</a
            >
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="#"
              class="header--link"
              >Контакты</a
            >
          </li>
        </ul>
      </nav>
      <ButtonControl
        class="header--button"
        text="Рассчитать стоимость"
        :url="'/page'"
      /> -->
    </div>
    <!-- <button v-show="!menuIsOpen" @click="toggleMenu" class="header--burger">
      <IconBurger class="header--burger-icon" />
    </button> -->
  </header>
</template>

<style scoped>
@import "./header-item.css";
</style>
