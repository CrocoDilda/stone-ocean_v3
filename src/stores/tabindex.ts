import { defineStore } from "pinia";

export const useTabindex = defineStore("tabindexVar", {
  state: () => ({
    focusTabindex: -1,
    generalTabindex: 0,
  }),
  actions: {
    inverTabindex() {},
  },
});
