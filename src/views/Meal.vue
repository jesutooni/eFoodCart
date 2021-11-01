<template>
  <div class="p-p8">
    <top-nav />
    <div class="mt-8 font-product-sans">
      <div>
        <img :src="selectedMeal.image" class="w-full h-full" alt="" />
      </div>
      <div class="mt-8">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-2xl">{{ selectedMeal.name }}</h1>
          <div
            class="
              w-24
              py-0.5
              px-3.5
              border-2 border-primary-gray
              rounded-full
              font-bold
              text-lg text-primary-gray
              flex
              justify-between
              items-center
            "
          >
            <p class="pb-1">-</p>
            <h1 class="text-base">{{ count }}</h1>
            <p class="">+</p>
          </div>
        </div>
        <p class="text-primary-gray mt-5">
          {{ selectedMeal.description }}
        </p>

        <p class="font-bold mt-4 text-3xl"># {{ selectedMeal.price }}</p>
        <div class="mt-8 flex justify-between items-center">
          <button
            @click="payMeal"
            class="py-4 px-6 bg-primary-green text-white font-bold rounded-full"
          >
            Place Order
          </button>
          <button
            class="
              py-4
              px-6
              border-2 border-primary-black
              text-primary-black
              font-bold
              rounded-full
            "
          >
            Add to Cart
          </button>
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
      count: 1,
    };
  },
  computed: {
    selectedMeal() {
      return this.$store.state.selectedMeal;
    },
  },
  methods: {
    payMeal() {
      this.$router.push("/meals/" + this.selectedMeal.id + "/payment");
    },
  },
};
</script>
