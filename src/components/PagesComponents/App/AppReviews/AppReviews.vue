<script setup lang="ts">
import ButtonControl from "@/components/control/ButtonControl.vue";
</script>

<template>
  <section class="reviews container">
    <div class="reviews--header">
      <h2>Отзывы наших клиентов</h2>
      <ButtonControl
        class="reviews--button"
        text="Посмотреть больше работ"
        attribute="arrow"
      />
    </div>
    <ul class="reviews--list">
      <li class="reviews--item">
        <img
          src="@/assets/images/reviews/review1.jpeg"
          alt=" "
          class="reviews--image"
        />
      </li>
      <li class="reviews--item">
        <img
          src="@/assets/images/reviews/review2.jpeg"
          alt=" "
          class="reviews--image"
        />
      </li>
      <li class="reviews--item">
        <img
          src="@/assets/images/reviews/review3.jpeg"
          alt=" "
          class="reviews--image"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.reviews {
  --padding: 80px;
  padding-top: var(--padding);
  padding-bottom: var(--padding);
}

.reviews--header {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.reviews--list {
  display: grid;
  grid-auto-flow: column;
  gap: 16px;
  margin-top: 64px;
}

.reviews--image {
  width: 100%;
  height: auto;
}

@media (max-width: 900px) {
  .reviews--header {
    grid-auto-flow: row;
    gap: 24px;
  }

  .reviews--button {
    justify-self: start;
  }
}

@media (max-width: 660px) {
  .reviews--list {
    display: grid;
    grid-auto-flow: row;
    gap: 16px;
    margin-top: 48px;
  }
}
</style>
