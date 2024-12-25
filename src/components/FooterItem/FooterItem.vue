<script setup lang="ts">
import MainLogo from "../icons/MainLogo.vue";
import IconTg from "../icons/IconTg.vue";
import IconWhatsapp from "../icons/IconWhatsapp.vue";
import IconVk from "../icons/IconVk.vue";
import IcontCall from "../icons/IcontCall.vue";
import IconGithub from "../icons/IconGithub.vue";
</script>

<template>
  <footer class="footer container">
    <div class="footer--header">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="#"
        class="footer--link"
      >
        <MainLogo class="footer--logo" />
      </a>
      <div class="footer--contacts">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="#"
          class="footer--contacts-link"
        >
          <IcontCall class="footer--contacts-icon" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="#"
          class="footer--contacts-link"
        >
          <IconTg class="footer--contacts-icon" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="#"
          class="footer--contacts-link"
        >
          <IconVk class="footer--contacts-icon" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="#"
          class="footer--contacts-link"
        >
          <IconWhatsapp class="footer--contacts-icon" />
        </a>
      </div>
    </div>
    <div class="author">
      <p class="author--text text">
        Разработка и поддержка: <span class="author--acent">CrocoDilda</span>
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/CrocoDilda"
        class="footer--contacts-link author--link"
      >
        <IconGithub class="footer--contacts-icon" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://t.me/Cr0coDilda"
        class="footer--contacts-link author--link"
      >
        <IconTg class="footer--contacts-icon" />
      </a>
    </div>
    <ul class="footer--description">
      <li class="footer--item">
        <h5 class="footer--title">Политика конфиденциальности</h5>
        <p class="footer--text text">
          Мы заботимся о защите ваших данных. Ознакомьтесь с нашей Политикой
          конфиденциальности, чтобы узнать, как мы собираем, используем и
          защищаем личную информацию, предоставленную вами на сайте.
        </p>
      </li>
      <li class="footer--item">
        <h5 class="footer--title">Условия использования</h5>
        <p class="footer--text text">
          Использование нашего сайта регулируется определёнными правилами и
          условиями. Подробнее вы можете узнать на странице Условия
          использования.
        </p>
      </li>
      <li class="footer--item">
        <h5 class="footer--title">Авторское право</h5>
        <p class="footer--text text">
          © 2024 Название компании. Все права защищены. Любое копирование или
          использование материалов сайта без нашего разрешения запрещено.
        </p>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
@import "./footer-item.css";
</style>
