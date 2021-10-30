<template>
  <div class="p-8 font-product-sans">
    <top-nav />
    <div class="">
      <h1 class="my-8 text-2xl font-bold">Meals</h1>

      <div
        class="px-6 flex items-center border-2 border-primary-gray rounded-full"
      >
        <span
          class="iconify"
          data-icon="akar-icons:search"
          style="color: #828e87"
          data-width="26"
        ></span>
        <input
          type="text"
          class="ml-4 w-full h-16 rounded-full focus:outline-none"
          v-model="search"
          placeholder="Search"
        />
      </div>

      <div class="mt-8 flex flex-wrap gap-5">
        <div
          v-for="meal in meals"
          :key="meal.name"
          class="relative h-40 w-36 rounded-xl overflow-hidden"
        >
          <img :src="meal.image" alt="" />
          <div class="absolute bottom-0 p-4 text-white font-bold">
            <h2>{{ meal.name }}</h2>
            <h2># {{ meal.price }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  components: {
    "top-nav": Nav,
  },
  data() {
    return {
      search: "",
      meals: [
        {
          image: require("../assets/jollof.png"),
          name: "Jollof Rice",
          price: "20,000",
        },
        {
          image: require("../assets/kebab.png"),
          name: "Kebab",
          price: "10,000",
        },
        {
          image: require("../assets/chicken-wings.png"),
          name: "Chicken Wings",
          price: "5,000",
        },
        {
          image: require("../assets/noodles.png"),
          name: "Noodles",
          price: "15,000",
        },
        {
          image: require("../assets/fries.png"),
          name: "Fries",
          price: "6,000",
        },
        {
          image: require("../assets/burger.png"),
          name: "Burger",
          price: "8,000",
        },
      ],
    };
  },
};
</script>
