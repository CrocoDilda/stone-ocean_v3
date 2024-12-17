import icon1 from "@/assets/icons/contact-us.svg";
import icon2 from "@/assets/icons/installation.svg";
import icon3 from "@/assets/icons/manufacturing.svg";
import icon4 from "@/assets/icons/measure.svg";

const cardContent = [
  {
    number: 1,
    title: "Вы связываетесь с нами",
    text: "Вы оставвляете заявку на нашем сайте или связываетесь с нами по телефону для обсуждения интересующих вас вопросов. После согласования всех деталей мы договоримся о удобном времени для визита замерщика.",
    image: icon1,
  },
  {
    number: 2,
    title: "Выезд замерщика",
    text: "В обговоренное время приедет замерщик и снимет размеры вашего будущего изделия. Вы сможете задать ему все интересующие вопросы. Если вам сложно выбрать цвет, замерщик привезёт с собой чемодан образцов, что бы вам было легче определиться.",
    image: icon2,
  },
  {
    number: 3,
    title: "Изготовление",
    text: "Когда все детали будут обговорены мы приступим к производству. В течении обозначенных сроков, зачастую 3 - 5 дней, ваше изделие будет готово. После этого мы вам позвоним и обговорим удобный день монтажа изделия.",
    image: icon3,
  },
  {
    number: 4,
    title: "Установка",
    text: "В назначенное время приедет команда установщиков и поставить ваше изделие. Установка проходит с минимальным количеством пыли. По окончанию работ монтажники уберут весь свой мусор. Они вас проконсультируют и вручат акт приёма работ. После этого вы можете с удовольствием пользоваться своим новым изделием!",
    image: icon4,
  },
];

// Объект для хранения стилей
const cardStylesMap: {
  [key: string]: { transform: string; zIndex: number; opacity: number };
} = {
  "-2": { transform: "translateX(-150%) scale(0.4)", zIndex: 1, opacity: 0.6 },
  "-1": { transform: "translateX(-85%) scale(0.6)", zIndex: 2, opacity: 0.8 },
  "0": { transform: "translateX(0%) scale(1)", zIndex: 3, opacity: 1 },
  "1": { transform: "translateX(85%) scale(0.6)", zIndex: 2, opacity: 0.8 },
  "2": { transform: "translateX(150%) scale(0.4)", zIndex: 1, opacity: 0.6 },
};

export { cardContent, cardStylesMap };
