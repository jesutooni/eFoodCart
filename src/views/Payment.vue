<template>
  <div
    class="p-p8 min-h-screen font-product-sans flex flex-col justify-between"
  >
    <div>
      <back />

      <h1 class="my-8 text-2xl font-bold">Payment</h1>

      <wallet />

      <div class="flex items-center justify-between mt-8">
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full overflow-hidden mr-3.5">
            <img src="../assets/jollof.png" class="w-full h-full" alt="" />
          </div>
          <div>
            <h1 class="font-bold">Jollof Rice</h1>
            <p class="text-sm text-primary-gray">Quantity - 1</p>
          </div>
        </div>
        <h1 class="font-bold">₦ 20,000</h1>
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
        <h1># 20,000</h1>
      </div>

      <button
        @click="confirmOrder"
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
import wallet from "../components/Wallet.vue";
export default {
  components: {
    back,
    wallet,
  },
  methods: {
    confirmOrder() {
      this.$router.push("/success");
    },
  },
};
</script>
