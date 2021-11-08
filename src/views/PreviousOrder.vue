<template>
  <div class="p-p8 sm:p-8">
    <back />
    <div class="mt-8 font-product-sans">
      <div>
        <img src="../assets/jollof.png" class="w-full h-full" alt="" />
      </div>
      <div class="mt-8">
        <h1 class="font-bold text-2xl">Jollof Rice</h1>
        <div class="text-primary-gray">
          <p>10/26/21, 5:30 pm</p>
          <p>Quantity - 1</p>
        </div>

        <p class="font-bold mt-4 text-3xl"># 20,000</p>
        <div class="mt-8">
          <button
            @click="orderQR"
            class="
              w-full
              px-6
              h-16
              bg-primary-green
              text-white
              font-bold
              rounded-full
            "
          >
            QR Code
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
  methods: {
    orderQR() {
      this.$router.push("/qr");
    },
  },
};
</script>
