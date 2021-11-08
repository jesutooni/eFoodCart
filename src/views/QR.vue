<template>
  <div class="p-p8 sm:p-8 font-product-sans">
    <top-nav />

    <div class="mt-8">
      <h1 class="text-2xl font-bold">QR Code</h1>
      <p class="mt-4 text-primary-gray">
        Use this QR code to receive your order
      </p>
    </div>

    <div class="w-full mt-16 flex justify-center">
      <img src="../assets/qrCode.svg" alt="" />
    </div>

    <button
      @click="goHome"
      class="
        bg-primary-green
        w-full
        font-bold
        text-white
        rounded-full
        py-5
        mt-20
      "
    >
      Back Home
    </button>
    <button
      class="border-2 border-black w-full font-bold rounded-full py-5 mt-7"
    >
      Use Digit Code
    </button>
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
  },
};
</script>
