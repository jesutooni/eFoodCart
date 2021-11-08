<template>
  <div
    class="
      p-p8
      sm:p-8
      min-h-screen
      font-product-sans
      flex flex-col
      justify-between
    "
  >
    <div>
      <back />

      <h1 class="my-8 text-2xl font-bold">Cart</h1>

      <div
        v-for="item in cart"
        :key="item.id"
        class="flex items-center justify-between mt-8"
      >
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full overflow-hidden mr-3.5">
            <img :src="item.image" class="w-full h-full" alt="" />
          </div>
          <div>
            <h1 class="font-bold">{{ item.name }}</h1>
            <p class="text-sm text-primary-gray">₦ {{ item.price }}</p>
          </div>
        </div>
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
          <h1 class="text-base">1</h1>
          <p class="">+</p>
        </div>
      </div>
    </div>

    <div>
      <div
        class="
          py-4
          border-t-2 border-b-2 border-dashed
          flex
          justify-between
          items-center
          font-bold
          text-xl
        "
      >
        <h1>Total</h1>
        <h1>₦ 45,000</h1>
      </div>

      <button
        @click="checkout"
        class="
          w-full
          mt-8
          bg-primary-green
          font-bold
          text-white
          rounded-full
          py-5
        "
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
import back from "../components/Back.vue";

export default {
  components: {
    back,
  },
  methods: {
    checkout() {
      this.$router.push("/checkout");
    },
  },
  data() {
    return {
      cart: [
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
          id: "noodles",
          image: require("../assets/noodles.png"),
          name: "Noodles",
          price: "15,000",
        },
      ],
    };
  },
};
</script>
