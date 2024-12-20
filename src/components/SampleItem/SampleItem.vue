<script setup lang="ts">
import { useManufacturersStore } from "@/store/manufacturers.ts";

const { manufacturers } = useManufacturersStore();

type Props = {
  name: string;
  color: string;
  id: string;
  partner: string;
  image: string;
};

const props = defineProps<Props>();

const imageUrl = new URL(
  `../../assets/images/samples/${props.image}`,
  import.meta.url
).href;
</script>

<template>
  <li class="sample">
    <button class="sample--button">
      <img :src="imageUrl" alt="" class="sample--image" />
      <div class="sample--description">
        <h4 class="sample--title">{{ name }}</h4>
        <p class="sample--text text">{{ id }}</p>
        <img
          loading="lazy"
          :src="manufacturers[partner]"
          :alt="partner"
          class="sample--logo"
        />
      </div>
      <div class="images-bg-icon"></div>
    </button>
  </li>
</template>

<style scoped>
@import "./sample-item.css";
</style>
