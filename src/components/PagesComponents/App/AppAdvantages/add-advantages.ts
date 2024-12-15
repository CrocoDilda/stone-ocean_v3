import { ref, onMounted, onBeforeUnmount } from "vue";

import kitchen1 from "@/assets/images/kitchen-1.jpg";
import kitchen2 from "@/assets/images/kitchen-2.jpg";
import kitchen3 from "@/assets/images/kitchen-3.jpg";
import kitchen4 from "@/assets/images/kitchen-4.jpg";
const slides = ref<string[]>([kitchen1, kitchen2, kitchen3, kitchen4]);

const activeSlide = ref<number>(0);
const sliderContainer = ref<HTMLDivElement | null>(null);
const AUTO_SCROLL_TIME = 5000;
let autoScrollInterval: ReturnType<typeof setInterval> | null = null;

// Для работы с жестами
const startX = ref<number>(0);
const currentX = ref<number>(0);
const isDragging = ref<boolean>(false);

const onTouchStart = (e: TouchEvent): void => {
  isDragging.value = true;
  startX.value = e.touches[0].clientX;
};

const onTouchMove = (e: TouchEvent): void => {
  if (!isDragging.value) return;
  currentX.value = e.touches[0].clientX;
};

const onTouchEnd = (): void => {
  if (!isDragging.value) return;

  const delta = currentX.value - startX.value;
  if (delta > 50 && activeSlide.value > 0) {
    activeSlide.value--;
  } else if (delta < -50 && activeSlide.value < slides.value.length - 1) {
    activeSlide.value++;
  }

  isDragging.value = false;
  currentX.value = 0;
  startX.value = 0;
  resetAutoScroll();
};

const goToSlide = (index: number): void => {
  activeSlide.value = index;
  resetAutoScroll();
};

// Функции для автоскролла
const startAutoScroll = (): void => {
  autoScrollInterval = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.value.length;
  }, AUTO_SCROLL_TIME);
};

const stopAutoScroll = (): void => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
};

const resetAutoScroll = (): void => {
  stopAutoScroll();
  startAutoScroll();
};

const useSlider = () => {
  onMounted(() => {
    startAutoScroll();
  });

  onBeforeUnmount(() => {
    stopAutoScroll();
  });

  return {
    slides,
    activeSlide,
    sliderContainer,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    goToSlide,
  };
};

export default useSlider;
