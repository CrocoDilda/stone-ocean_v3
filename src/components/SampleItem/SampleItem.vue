<script setup lang="ts">
import { useManufacturersStore } from "@/store/manufacturers.ts";
import { ref } from "vue";

const { manufacturers } = useManufacturersStore();

type Props = {
  name: string;
  article: string;
  partner: string;
  image: string;
};

const props = defineProps<Props>();

const PARTNER = ref("");
console.log(props.partner);

if (props.partner === "gr") {
  PARTNER.value = "grandex";
}
const imageUrl = new URL(
  `../../assets/images/preview/${props.image}`,
  import.meta.url
).href;
</script>

<template>
  <li class="sample">
    <button class="sample--button">
      <img :src="imageUrl" alt="" class="sample--image" />
      <div class="sample--description">
        <h4 class="sample--title">{{ name }}</h4>
        <p class="sample--text text">{{ article }}</p>
        <img
          loading="lazy"
          :src="manufacturers[PARTNER]"
          :alt="PARTNER"
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
