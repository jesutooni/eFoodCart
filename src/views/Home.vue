<template>
  <div
    class="p-p8 pt-32 h-screen font-product-sans flex flex-col justify-between"
  >
    <div class="w-16 h-16 rounded-full bg-black">
      <img class="w-full h-full" src="../assets/logo.png" alt="" />
    </div>
    <router-link to="/signup"
      ><button
        class="
          w-full
          h-16
          text-center text-white
          font-bold
          bg-primary-green
          mt-6
          mb-8
          rounded-full
          focus:outline-none
        "
      >
        Get Started
      </button></router-link
    >
  </div>
</template>

<script>
export default {};
</script>
