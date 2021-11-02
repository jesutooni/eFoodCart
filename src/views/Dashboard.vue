<template>
  <div class="p-p8 font-product-sans">
    <top-nav />
    <h1 class="font-bold my-8 text-2xl">Hey, {{ user }}</h1>

    <wallet />

    <div class="mt-16">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-xl">Previous Orders</h1>
        <div class="flex items-center text-primary-gray">
          <h1>View All</h1>
          <span
            class="iconify ml-1.5"
            data-icon="clarity:caret-line"
            style="color: #828e87"
            data-rotate="90deg"
          ></span>
        </div>
      </div>
      <div class="my-8">
        <div
          v-for="history in histories"
          :key="history.id"
          @click="showPreviousOrder"
          class="flex items-center justify-between mb-6"
        >
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-3.5">
              <img :src="history.image" class="w-full h-full" alt="" />
            </div>
            <div>
              <h1 class="font-bold">{{ history.name }}</h1>
              <p class="text-sm text-primary-gray">{{ history.date }}</p>
            </div>
          </div>
          <h1 class="font-bold">₦ {{ history.price }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import wallet from "../components/Wallet.vue";
export default {
  components: {
    "top-nav": Nav,
    wallet,
  },
  data() {
    return {
      user: "David",
      histories: [
        {
          id: 1,
          image: require("../assets/jollof.png"),
          name: "Jollof Rice",
          date: "10/26/21, 5:30 pm",
          price: "20,000",
        },
        {
          id: 2,
          image: require("../assets/kebab.png"),
          name: "Kebab",
          date: "10/28/21, 2:40 pm",
          price: "10,000",
        },
        {
          id: 3,
          image: require("../assets/jollof.png"),
          name: "Jollof Rice",
          date: "10/26/21, 5:30 pm",
          price: "20,000",
        },
        {
          id: 4,
          image: require("../assets/kebab.png"),
          name: "Kebab",
          date: "10/28/21, 2:40 pm",
          price: "10,000",
        },
      ],
    };
  },
  methods: {
    showPreviousOrder() {
      this.$router.push("/previousorder");
    },
  },
};
</script>
