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

      <!-- <select
        v-model="category"
        class="w-16 bg-primary-green text-white px-4 py-1 rounded-full"
      >
        <option v-for="category in categories" :key="category">
          {{ category }}
        </option>
      </select> -->

      <div class="mt-8 flex flex-wrap gap-6 sm:gap-9">
        <div
          v-for="meal in meals"
          :key="meal.id"
          class="relative w-5/12 rounded-xl overflow-hidden flex-grow"
        >
          <router-link :to="'/meals/' + meal.id">
            <img :src="meal.image" class="w-full h-full" alt="" />
            <div class="absolute bottom-0 p-p8 pr-0 text-white font-bold">
              <h2>{{ meal.name }}</h2>
              <h2># {{ meal.price }}</h2>
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
};
</script>
