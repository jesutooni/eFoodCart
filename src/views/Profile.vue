<template>
  <div class="p-p8 font-product-sans">
    <top-nav />
    <div class="mt-8">
      <div class="w-28 h-28 rounded-full bg-primary-green mx-auto">
        <img src="" alt="" />
      </div>
      <h1 class="font-bold text-center mt-6 text-2xl mb-7">David Adebayo</h1>
    </div>

    <div
      class="
        w-32
        px-2
        py-0.5
        mx-auto
        rounded-full
        border-2 border-primary-gray
        flex
        justify-center
        items-center
      "
    >
      <h1 class="text-primary-gray mr-1">Edit Profile</h1>
      <span
        class="iconify"
        data-icon="majesticons:pencil"
        style="color: #828e87"
      ></span>
    </div>
    <div class="mt-16">
      <div
        class="
          w-full
          flex
          items-center
          p-4
          mb-8
          border-2 border-primary-black
          rounded-full
        "
      >
        <span
          class="iconify"
          data-icon="ci:settings-filled"
          data-width="26"
        ></span>
        <h1 class="ml-4">Settings</h1>
      </div>
      <div
        class="
          w-full
          flex
          items-center
          p-4
          mb-8
          border-2 border-primary-black
          rounded-full
        "
      >
        <span
          class="iconify"
          data-icon="eva:question-mark-circle-fill"
          data-width="26"
        ></span>
        <h1 class="ml-4">Help</h1>
      </div>
      <div
        class="
          w-full
          flex
          items-center
          p-4
          mb-8
          border-2 border-primary-black
          rounded-full
        "
      >
        <span
          class="iconify"
          data-icon="ion:exit"
          data-width="26"
          data-rotate="180deg"
        ></span>
        <h1 class="ml-4">Sign Out</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  components: {
    "top-nav": Nav,
  },
};
</script>
