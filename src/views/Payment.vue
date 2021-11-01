<template>
  <div
    class="p-p8 min-h-screen font-product-sans flex flex-col justify-between"
  >
    <div>
      <top-nav />

      <h1 class="my-8 text-2xl font-bold">Payment</h1>

      <wallet />
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
        <h1># 20,000</h1>
      </div>

      <button
        @click="confirmOrder"
        class="w-full mt-8 bg-primary-green text-white rounded-full py-5"
      >
        Confirm
      </button>
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
  methods: {
    confirmOrder() {
      this.$router.push("/success");
    },
  },
};
</script>
