<template>
  <div class="p-p8 font-product-sans">
    <top-nav />
    <div class="">
      <h1 class="my-8 text-2xl font-bold">Meals</h1>

      <div
        class="
          mb-8
          px-6
          flex
          items-center
          border-2 border-primary-gray
          rounded-full
        "
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

      <div
        class="
          bg-primary-green
          text-white
          rounded-full
          flex
          items-center
          justify-center
          px-4
          py-2
          w-20
        "
      >
        <p class="mr-1.5">All</p>
        <span
          class="iconify"
          data-icon="clarity:caret-line"
          style="color: white"
          data-width="23"
          data-rotate="180deg"
        ></span>
      </div>

      <div class="mt-8 flex flex-wrap gap-6 sm:gap-9">
        <div
          @click="selectMeal(index)"
          v-for="(meal, index) in meals"
          :key="meal.id"
          class="relative w-5/12 rounded-xl overflow-hidden flex-grow"
        >
          <router-link :to="'/meals/' + meal.id">
            <img :src="meal.image" class="w-full h-full" alt="" />
            <div class="absolute bottom-0 p-p8 pr-0 text-white font-bold">
              <h2>{{ meal.name }}</h2>
              <h2>₦ {{ meal.price }}</h2>
            </div>
          </router-link>
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
      categories: ["All"],
    };
  },
  computed: {
    meals() {
      return this.$store.state.meals;
    },
  },
  methods: {
    selectMeal(index) {
      this.$store.commit("selectMeal", index);
    },
  },
};
</script>
