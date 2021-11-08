<template>
  <div class="p-p8 sm:p-8 font-product-sans">
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

      <div class="relative">
        <div
          @click="toggleCategory"
          class="
            bg-primary-green
            text-white
            rounded-full
            flex
            items-center
            justify-between
            px-4
            py-2
            w-28
            cursor-pointer
          "
        >
          <p>{{ selectedCategory }}</p>
          <span
            class="iconify"
            data-icon="clarity:caret-line"
            style="color: white"
            data-width="23"
            data-rotate="180deg"
          ></span>
        </div>
        <div
          v-if="category"
          class="
            absolute
            top-12
            z-10
            bg-white
            w-2/3
            sm:w-1/2
            text-center
            rounded-lg
            overflow-hidden
            shadow-xl
            cursor-pointer
          "
        >
          <div
            @mouseover="hoverCategory(index)"
            @click="selectCategory(index)"
            v-for="(category, index) in categories"
            :key="index"
            :class="`border-b p-2 ${
              index === hoverIndex ? 'text-white bg-primary-green' : ''
            }`"
          >
            {{ category }}
          </div>
        </div>
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
      category: false,
      categories: ["ALL", "RICE", "DRINKS", "SNACKS", "EXTRAS"],
      selectedCategory: "ALL",
      hoverIndex: 0,
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
    hoverCategory(index) {
      this.hoverIndex = index;
    },
    selectCategory(index) {
      this.selectedCategory = this.categories[index];
      this.category = false;
    },
    toggleCategory() {
      this.category = !this.category;
    },
  },
};
</script>
