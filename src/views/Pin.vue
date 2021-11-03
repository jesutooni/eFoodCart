<template>
  <div class="p-p8 font-product-sans">
    <back />
    <div class="mt-8">
      <div>
        <h1 class="text-3xl font-bold">Pin</h1>
        <p class="text-primary-gray font-bold text-xs">
          Set your pin to perform transactions
        </p>
      </div>

      <div class="flex justify-between py-12 my-12">
        <input
          type="number"
          v-model="pin1"
          class="
            w-16
            h-14
            shadow-md
            text-center
            bg-secondary-gray
            rounded-full
            border border-primary-gray
            focus:outline-none
          "
        />
        <input
          type="number"
          v-model="pin2"
          class="
            w-16
            h-14
            shadow-md
            text-center
            bg-secondary-gray
            rounded-full
            border border-primary-gray
            focus:outline-none
          "
        />
        <input
          type="number"
          v-model="pin3"
          class="
            w-16
            h-14
            shadow-md
            text-center
            bg-secondary-gray
            rounded-full
            border border-primary-gray
            focus:outline-none
          "
        />
        <input
          type="number"
          v-model="pin4"
          class="
            w-16
            h-14
            shadow-md
            text-center
            bg-secondary-gray
            rounded-full
            border border-primary-gray
            focus:outline-none
          "
        />
      </div>
      <button
        type="submit"
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
        Sign Up
      </button>
      <p class="text-primary-gray text-center">
        Have an account?
        <router-link to="/signin" class="text-primary-black font-bold"
          >Sign In</router-link
        >
      </p>
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
      pin1: null,
      pin2: null,
      pin3: null,
      pin4: null,
    };
  },
};
</script>
