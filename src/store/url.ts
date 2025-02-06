import { defineStore } from "pinia";

export const useApiUrl = defineStore("API_URL", {
  state: () => ({
    API_URL: "http://localhost:3000",
  }),
});
