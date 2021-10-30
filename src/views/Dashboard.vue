<template>
  <div class="p-8 font-product-sans">
    <top-nav />
    <h1 class="font-bold my-8 text-2xl">Hey, {{ user }}</h1>
    <div class="p-8 bg-primary-green rounded-xl">
      <div
        class="
          flex
          justify-between
          items-center
          text-sm text-secondary-lightWhite
          mb-10
        "
      >
        <h1>Balance</h1>
        <div class="flex items-center">
          <h1>Fund Wallet</h1>
          <span
            class="iconify ml-1.5"
            data-icon="clarity:caret-line"
            style="color: rgba(253, 254, 253, 0.8)"
            data-rotate="90deg"
          ></span>
        </div>
      </div>
      <h1 class="text-secondary-white font-bold"># {{ balance }}</h1>
    </div>

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
          :key="history.name"
          class="flex items-center justify-between mb-6"
        >
          <div class="flex items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img :src="history.image" class="w-full h-full" alt="" />
            </div>
            <div>
              <h1 class="font-bold">{{ history.name }}</h1>
              <p class="text-primary-gray">{{ history.date }}</p>
            </div>
          </div>
          <h1 class="font-bold"># {{ history.price }}</h1>
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
      user: "David",
      balance: "200,000",
      histories: [
        {
          image: require("../assets/jollof.png"),
          name: "Jollof Rice",
          date: "10/26/21, 5:30 pm",
          price: "20,000",
        },
        {
          image: require("../assets/kebab.png"),
          name: "Kebab",
          date: "10/28/21, 2:40 pm",
          price: "10,000",
        },
        {
          image: require("../assets/jollof.png"),
          name: "Jollof Rice",
          date: "10/26/21, 5:30 pm",
          price: "20,000",
        },
        {
          image: require("../assets/kebab.png"),
          name: "Kebab",
          date: "10/28/21, 2:40 pm",
          price: "10,000",
        },
      ],
    };
  },
};
</script>
