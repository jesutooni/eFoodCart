<template>
  <div
    class="p-p8 sm:p-8 h-screen font-product-sans flex flex-col justify-between"
  >
    <top-nav />
    <div class="w-auto mx-auto">
      <div class="w-28 h-28 mx-auto flex justify-center">
        <img src="../assets/success.png" alt="" />
      </div>
      <h1 class="text-2xl font-bold mt-8">Order Success</h1>
    </div>
    <div class="mt-8 flex justify-between items-center gap-4">
      <button
        @click="orderQR"
        class="
          px-6
          w-full
          h-16
          bg-primary-green
          text-white
          font-bold
          rounded-full
        "
      >
        QR Code
      </button>
      <button
        @click="goHome"
        class="
          px-6
          w-full
          h-16
          border-2 border-primary-black
          text-primary-black
          font-bold
          rounded-full
        "
      >
        Back Home
      </button>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  components: {
    "top-nav": Nav,
  },
  methods: {
    goHome() {
      this.$router.push("/dashboard");
    },
    orderQR() {
      this.$router.push("/qr");
    },
  },
};
</script>
