<script setup lang="ts">
import SampleItem from "@/components/SampleItem/SampleItem.vue";
import ButtonControl from "@/components/control/ButtonControl.vue";

import { ref, onMounted } from "vue";
import axios from "axios";
import { useManufacturersStore } from "@/store/manufacturers.ts";
import { useApiUrl } from "@/store/url";

const { manufacturers } = useManufacturersStore();
const { API_URL } = useApiUrl();

console.log(API_URL);
const data = ref([]);
const isLoading = ref(false);
const errorMessage = ref("");

async function getData() {
  if (isLoading.value) return; // Предотвращаем повторный вызов
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const response = await axios.get(`${API_URL}/stones/random?q=8`);
    data.value = response.data;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    errorMessage.value =
      error instanceof Error ? error.message : "Неизвестная ошибка";
  } finally {
    isLoading.value = false;
  }
}

onMounted(getData);
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
        v-for="item in data"
        :key="item.id"
        :name="item.name"
        :image="item.main_image"
        :article="item.article"
        :partner="item.manufacturer"
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
