<template>
  <div class="p-p8 sm:p-8">
    <back />
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
            <p class="">-</p>
            <h1 class="text-base">{{ count }}</h1>
            <p class="">+</p>
          </div>
        </div>
        <p
          class="
            rounded-full
            bg-yellow-200
            text-bit
            py-0.5
            px-1.5
            w-12
            text-center
            font-bold
          "
        >
          Cafeteria
        </p>
        <p class="text-primary-gray mt-5">
          {{ selectedMeal.description }}
        </p>

        <p class="font-bold mt-4 text-3xl">₦ {{ selectedMeal.price }}</p>
        <div class="mt-8 flex justify-between items-center gap-4">
          <button
            @click="payMeal"
            class="
              w-full
              px-6
              h-16
              bg-primary-green
              text-white
              font-bold
              focus:outline-none
              rounded-full
            "
          >
            Place Order
          </button>
          <button
            class="
              px-6
              h-16
              w-full
              border-2 border-primary-black
              text-primary-black
              font-bold
              rounded-full
              focus:outline-none
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
import back from "../components/Back.vue";
export default {
  components: {
    back,
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
      this.$router.push("/checkout");
    },
  },
};
</script>
