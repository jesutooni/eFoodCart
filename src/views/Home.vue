<template>
  <div class="p-8 h-screen">
    <button
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
      <router-link to="/signin"> Sign in with Email</router-link>
    </button>
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
