const App = {
  data() {
    return {
      activeIndex: 0,
      steps: [
        {
          number: 1,
          title: "Основы",
          text: "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
        },
        {
          number: 2,
          title: "Компоненты",
          text: "Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.",
        },
        {
          number: 3,
          title: "Роутер",
          text: "В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.",
        },
        {
          number: 4,
          title: "Vuex",
          text: "В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.",
        },
        {
          number: 5,
          title: "Composition",
          text: "Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.",
        },
      ],
      isFinished: false,
    };
  },
  methods: {
    prev() {
      this.activeIndex--;
    },
    reset() {
      this.activeIndex = 0;
      this.isFinished = false;
      // начать заного
    },
    next() {
      this.activeIndex++;
    },
    finish() {
      if (this.activeIndex === this.steps.length - 1) {
        this.isFinished = true;
      }
    },
    setActive(idx) {
      this.activeIndex = idx;
    },
  },
  computed: {
    currentStep() {
      return this.steps[this.activeIndex];
    },
    isPrevDisabled() {
      return this.activeIndex === 0;
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1;
    },
  },
};

Vue.createApp(App).mount("#app");
