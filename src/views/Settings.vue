<template>
  <div class="p-p8 font-product-sans">
    <Back />
    <div class="mt-8">
      <div
        class="
          w-28
          h-28
          rounded-full
          bg-primary-green
          mx-auto
          flex
          items-center
          justify-center
        "
      >
        <img src="../assets/avatar.png" alt="" />
      </div>
    </div>
    <div class="flex items-center justify-center mt-6">
      <div
        class="
          w-32
          h-9
          px-2
          py-0.5
          rounded-full
          border-2 border-primary-gray
          flex
          justify-center
          items-center
        "
      >
        <h1 class="text-primary-gray">Change</h1>
      </div>
    </div>
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
            px-5
            focus:outline-none
          "
          placeholder="Edit your name"
          v-model="editName"
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
            px-5
            focus:outline-none
          "
          placeholder="Edit your email"
          v-model="editEmail"
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
          rounded-full
          focus:outline-none
        "
      >
        Save Changes
      </button>
    </form>
  </div>
</template>

<script>
import Back from "../components/Back.vue";
export default {
  components: {
    Back,
  },
  data() {
    return {
      editName: "",
      editEmail: "",
    };
  },
};
</script>
