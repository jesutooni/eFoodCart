<template>
  <div class="p-p8 sm:p-8 font-product-sans">
    <h1 class="text-3xl text-primary-black font-bold capitalize">Sign up</h1>
    <form @submit.prevent="" class="mt-20">
      <div class="mb-8">
        <input
          type="text"
          class="
            w-full
            h-16
            rounded-full
            text-priamry-gray text-sm
            border-2 border-primary-gray
            py-4
            px-5
            focus:outline-none
          "
          placeholder="Enter your full name"
          v-model="name"
        />
      </div>
      <div class="mb-8">
        <input
          type="email"
          class="
            w-full
            h-16
            rounded-full
            text-priamry-gray text-sm
            border-2 border-primary-gray
            py-4
            px-5
            focus:outline-none
          "
          placeholder="Enter your full email"
          v-model="email"
        />
      </div>
      <div class="mb-8">
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
      <button
        type="submit"
        @click="goToPin"
        class="
          w-full
          h-16
          text-center text-white
          font-bold
          bg-primary-green
          mb-8
          rounded-full
          focus:outline-none
        "
      >
        Continue
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
      Have an account?
      <router-link to="/signin" class="text-primary-black font-bold"
        >Sign In</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    goToPin() {
      this.$router.push("/pin");
    },
  },
};
</script>
