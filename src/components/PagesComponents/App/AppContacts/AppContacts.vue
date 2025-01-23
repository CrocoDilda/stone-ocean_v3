<script setup lang="ts">
import IconCall from "@/components/icons/IconCall.vue";
import IconTg from "@/components/icons/IconTg.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";
import MainLogo from "@/components/icons/MainLogo.vue";
</script>

<template>
  <section class="contacts container">
    <h2 class="contacts--title">Наши контакты</h2>
    <ul class="contacts--list">
      <li class="contacts--item">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="tel:+79892619556"
          class="contacts--link"
        >
          <IconCall class="contacts--icon" />
          <span class="contacts--text text">+7 (989) 261-95-56 - Сергей</span>
        </a>
      </li>

      <li class="contacts--item">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/StoneOceanAcryl"
          class="contacts--link"
        >
          <IconTg class="contacts--icon" />
          <span class="contacts--text text text"
            >https://t.me/StoneOceanAcryl</span
          >
        </a>
      </li>

      <li class="contacts--item">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/StoneOceanLive"
          class="contacts--link"
        >
          <IconTg class="contacts--icon" />
          <span class="contacts--text text text"
            >Тг канал: https://t.me/StoneOceanLive</span
          >
        </a>
      </li>

      <li class="contacts--item">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://wa.me/+79892619556"
          class="contacts--link"
        >
          <IconWhatsapp class="contacts--icon" />
          <span class="contacts--text text">https://wa.me/+79892619556</span>
        </a>
      </li>

      <li class="contacts--item">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:stone-ocean-acrylic@yandex.ru"
          class="contacts--link"
        >
          <IconMail class="contacts--icon" />
          <span class="contacts--text text">stone-ocean-acrylic@yandex.ru</span>
        </a>
      </li>
    </ul>
    <MainLogo class="contacts--logo" />
  </section>
</template>

<style scoped>
@import "./app-contacts.css";
</style>
