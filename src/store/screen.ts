import { defineStore } from "pinia";

interface ScreenState {
  screenWidth: number;
}

export const useScreenStore = defineStore("screen", {
  state: (): ScreenState => ({
    screenWidth: <number>window.innerWidth,
  }),
  actions: {
    updateScreenWidth(width: number) {
      this.screenWidth = width;
    },
  },
});
