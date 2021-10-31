<template>
  <div class="p-p8 font-product-sans">
    <h1 class="text-3xl text-primary-black font-bold capitalize">Sign in</h1>
    <form @submit.prevent="signIn" class="mt-20">
      <div class="mb-8">
        <input
          type="email"
          class="
            w-full
            h-16
            rounded-full
            text-priamry-gray text-sm
            border-2 border-primary-gray
            px-5
            focus:outline-none
          "
          placeholder="Enter your full email"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <input
          type="password"
          class="
            w-full
            h-16
            rounded-full
            text-priamry-gray text-sm
            border-2 border-primary-gray
            px-5
            focus:outline-none
          "
          placeholder="Enter your full password"
          v-model="password"
        />
      </div>
      <router-link to="" class="text-primary-gray">
        Forgot Password?</router-link
      >
      <button
        type="submit"
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
        Sign In
      </button>
    </form>
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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
