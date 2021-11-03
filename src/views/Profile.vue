<template>
  <div class="p-p8 font-product-sans">
    <top-nav />
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
      <h1 class="font-bold text-center mt-6 text-2xl mb-7">David Adebayo</h1>
    </div>
    <div class="flex items-center justify-center">
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
        <h1 class="text-primary-gray mr-1">Edit Profile</h1>
        <span
          class="iconify"
          data-icon="majesticons:pencil"
          style="color: #828e87"
        ></span>
      </div>
      <div
        @click="toggleWithdrawal"
        class="
          border-2 border-primary-gray
          rounded-full
          w-11
          h-9
          ml-1
          flex
          items-center
          justify-center
        "
      >
        <span
          class="iconify"
          data-icon="akar-icons:arrow-down"
          style="color: #828e87"
          data-width="19"
        ></span>
      </div>
    </div>
    <div class="mt-16">
      <button class="bg-primary-green w-full text-white rounded-full py-5 mb-8">
        Gift a Friend
      </button>
      <div
        @click="goToSettings"
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

    <div
      @click="toggleWithdrawal"
      v-if="withdrawal"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center z-30"
    >
      <div @click.stop="" class="bg-white mx-8 p-p8 rounded-xl">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-xl">Amount Withdraw</h1>
          <img
            @click="toggleWithdrawal"
            src="../assets/icons/close.svg"
            alt=""
          />
        </div>
        <div class="mt-16">
          <input
            type="text"
            class="
              w-full
              h-16
              p-6
              border-2 border-primary-gray
              rounded-full
              focus:outline-none
            "
            v-model="withdrawalAmount"
            placeholder="Enter your amount"
          />

          <button
            class="
              p-4
              w-full
              h-16
              rounded-full
              font-bold
              bg-primary-green
              text-white
              mt-8
            "
          >
            Withdraw
          </button>
        </div>
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
  data() {
    return {
      withdrawal: false,
      withdrawalAmount: "",
    };
  },
  methods: {
    toggleWithdrawal() {
      this.withdrawal = !this.withdrawal;
    },
    goToSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>
