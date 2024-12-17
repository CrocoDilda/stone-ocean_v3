import "./assets/main.css";
import "./assets/global-media.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// Скрываю загрузочную анимацию
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("loading");
  const app = document.getElementById("app");

  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease-in-out";

    setTimeout(() => {
      preloader.remove();

      // Показать основной контент после удаления прелоадера
      if (app) {
        app.style.opacity = "1";
        app.style.transition = "opacity 0.5s ease-in-out";
      }
    }, 500); // Ждем завершения анимации скрытия
  }
});
