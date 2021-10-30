<template>
  <div class="p-8 pt-32 h-screen font-product-sans">
    <div class="h-1/2 flex items-center justify-center">
      <div
        class="
          w-28
          h-28
          rounded-full
          bg-primary-green
          flex
          justify-center
          items-center
        "
      >
        <img src="../assets/buy.png" alt="" />
      </div>
    </div>
    <router-link to="/signin"
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
        Sign in with Email
      </button></router-link
    >
    <button
      class="
        w-full
        h-16
        text-center text-primary-black
        font-bold
        border-2 border-primary-black
        mb-6
        rounded-full
        focus:outline-none
      "
    >
      Sign in with Google
    </button>
    <p class="text-primary-gray text-center">
      Don't have an account?
      <router-link to="/signup" class="text-primary-black font-bold"
        >Sign Up</router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>
