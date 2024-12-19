import { defineStore } from "pinia";

import grandex from "@/assets/icons/partners-logos/grandex.svg";
import staron from "@/assets/icons/partners-logos/staron.svg";
import hi_macs from "@/assets/icons/partners-logos/hi-macs.svg";
import neomarm from "@/assets/icons/partners-logos/neomarm.svg";

interface Manufacturers {
  manufacturers: Record<string, string>;
}

export const useManufacturersStore = defineStore("manufacturers", {
  state: (): Manufacturers => ({
    manufacturers: {
      grandex,
      staron,
      hi_macs,
      neomarm,
    },
  }),
});
