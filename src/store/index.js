import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meals: [
      {
        id: "jollof-rice",
        image: require("../assets/jollof.png"),
        name: "Jollof Rice",
        price: "20,000",
      },
      {
        id: "kebab",
        image: require("../assets/kebab.png"),
        name: "Kebab",
        price: "10,000",
      },
      {
        id: "chicken-wings",
        image: require("../assets/chicken-wings.png"),
        name: "Chicken Wings",
        price: "5,000",
      },
      {
        id: "noodles",
        image: require("../assets/noodles.png"),
        name: "Noodles",
        price: "15,000",
      },
      {
        id: "fries",
        image: require("../assets/fries.png"),
        name: "Fries",
        price: "6,000",
      },
      {
        id: "burger",
        image: require("../assets/burger.png"),
        name: "Burger",
        price: "8,000",
      },
    ],
    selectedMeal: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
