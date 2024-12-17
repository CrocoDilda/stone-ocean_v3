<script setup lang="ts">
import IconArrow from "../icons/IconArrow.vue";

type Props = {
  text: string;
  attribute?: string;
  url?: string;
};

defineProps<Props>();
</script>

<template>
  <button v-if="!url" class="button">
    <p>
      {{ text }}
    </p>
    <IconArrow v-if="attribute && attribute === 'arrow'" />
  </button>
  <a v-else class="button" :href="url">
    <p>
      {{ text }}
    </p>
    <IconArrow v-if="attribute && attribute === 'arrow'" />
  </a>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 14px 24px;
  border-radius: 64px;
  background: var(--color-accent-1);
  color: var(--color-text-1);
  font-family: var(--title-fonts);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.25rem;
  transition: color 0.2s, background-color 0.2s;
}

@media (hover: hover) {
  .button:hover {
    background-color: var(--color-background-5);
    color: var(--color-text-3);
  }
}
@media (hover: none) {
  .button:active {
    background-color: var(--color-background-5);
    color: var(--color-text-3);
  }
}
</style>
