<template>
  <div class="pb-6 bg-primary-green relative min-h-screen font-product-sans">
    <div class="p-8">
      <div
        class="
          w-20
          h-20
          p-3.5
          rounded-full
          bg-white
          flex
          justify-center
          item-center
        "
      >
        <img class="" src="../assets/logo.png" alt="" />
      </div>
      <h1 class="text-white text-6xl font-bold mt-8">Food for Everyone</h1>
    </div>
    <div class="mt-8 relative h-110">
      <img
        class="absolute bottom-0 left-0 z-10"
        src="../assets/toygirl.png"
        alt=""
      />
      <img
        class="absolute right-0 bottom-0"
        src="../assets/toyboy.png"
        alt=""
      />
      <div class="absolute bottom-0 px-8 z-50 w-full">
        <button
          @click="getStarted"
          class="
            w-full
            h-16
            text-center text-white
            font-bold
            bg-primary-green
            rounded-full
            focus:outline-none
          "
        >
          Get Started
        </button>
      </div>
    </div>
    <div
      class="
        absolute
        bottom-0
        h-72
        w-full
        z-40
        bg-gradient-to-t
        from-gradient-1
        to-gradient-2
      "
    ></div>
  </div>
</template>

<script>
export default {
  methods: {
    getStarted() {
      this.$router.push("/signin");
    },
  },
};
</script>
