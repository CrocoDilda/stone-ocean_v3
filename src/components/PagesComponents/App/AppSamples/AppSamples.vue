<script setup lang="ts">
import SampleItem from "@/components/SampleItem/SampleItem.vue";
import ButtonControl from "@/components/control/ButtonControl.vue";

import { SAMPLES } from "./app-samples";

import { useManufacturersStore } from "@/store/manufacturers.ts";

const { manufacturers } = useManufacturersStore();
</script>

<template>
  <section class="samples container">
    <h2 class="samples--title">Великое множество цветов</h2>
    <div class="samples--partners">
      <h3 class="samples--partners-title">Наши партнеры</h3>
      <ul class="samples--list-logos">
        <li
          v-for="(item, index) in manufacturers"
          class="samples--item-logo"
          :key="index"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
            class="samples--item-logo-link"
          >
            <img class="samples--image-logos" :src="item" alt=" " />
          </a>
        </li>
      </ul>
    </div>
    <ul class="samples--list-colors">
      <SampleItem
        v-for="(item, index) in SAMPLES"
        :key="index"
        :name="item.name"
        :image="item.image"
        :color="item.color"
        :id="item.id"
        :partner="item.manufacturers"
        class="samples--item-colors"
      />
    </ul>

    <ButtonControl
      class="samples--button"
      text="Ознакомьтесь со всем каталогом"
      url="/"
      attribute="arrow"
    />
  </section>
</template>

<style scoped>
@import "./app-samples.css";
</style>
