<template>
  <div class="p-p8 font-product-sans">
    <top-nav />

    <div class="mt-8">
      <h1 class="text-2xl font-bold">QR Code</h1>
      <p class="mt-4 text-primary-gray">
        Use this QR code to receive your order
      </p>
    </div>

    <div class="w-full">
      <span
        class="iconify w-full h-auto border-primary-black border"
        data-icon="ic:twotone-qr-code-2"
      ></span>
    </div>

    <button
      @click="goHome"
      class="bg-primary-green w-full font-bold text-white rounded-full py-5"
    >
      Back Home
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
