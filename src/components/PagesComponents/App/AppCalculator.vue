<script setup lang="ts">
import ButtonControl from "@/components/control/ButtonControl.vue";
</script>

<template>
  <section class="calculator container">
    <div class="calculator--description">
      <h2>Сделайте расчёт прямо на сайте!</h2>
      <p class="text">
        С помощью нашего калькулятора вы легко сможете узнать примерную
        стоимость изделия, не покидая сайт и без ожидания звонков или писем с
        ответом. Всё просто и быстро: достаточно нескольких кликов, и итоговая
        цена сразу появится на экране. Мы сделали всё, чтобы расчёт был удобным,
        понятным и занимал минимум вашего времени!
      </p>
    </div>
    <ButtonControl
      class="calculator--button"
      text="Расчитать стоимость"
      :is-blue="true"
      attribute="arrow"
      url="/"
    />
    <img
      class="calculator--image"
      src="@/assets/images/calculator.png"
      alt=""
    />
  </section>
</template>

<style scoped>
.calculator {
  --padding: 80px;
  padding-top: var(--padding);
  padding-bottom: var(--padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr;
  align-items: center;
  gap: 32px;
  background-color: var(--color-background-4);
}

.calculator--description {
  display: grid;
  align-items: center;
  gap: 32px;
}

.calculator--image {
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 1/3;
}

.calculator--button {
  justify-self: start;
  align-self: start;
}

@media (max-width: 850px) {
  .calculator {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    align-items: center;
    gap: 32px;
    background-color: var(--color-background-4);
  }
  .calculator--image {
    width: 100%;
    grid-column: 1 / 2;
    grid-row: 2/3;
  }
}
</style>
