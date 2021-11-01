<template>
  <div class="p-8 min-h-screen font-product-sans">
    <div>
      <top-nav />

      <h1 class="my-8 text-2xl font-bold">Payment</h1>

      <wallet />
    </div>

    <div>
      <div
        class="border-t border-b flex justify-between items-center font-bold"
      >
        <h1>Total</h1>
        <h1># 20,000</h1>
      </div>

      <button class="w-full bg-primary-green text-white rounded-full py-5">
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
};
</script>
