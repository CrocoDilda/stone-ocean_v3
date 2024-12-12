<script setup lang="ts">
import IconArrow from "../icons/IconArrow.vue";

type Props = {
  text: string;
  attribute?: string;
};

defineProps<Props>();
</script>

<template>
  <button>
    <p>
      {{ text }}
    </p>
    <IconArrow v-if="attribute && attribute === 'arrow'" />
  </button>
</template>
