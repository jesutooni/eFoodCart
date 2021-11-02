<template>
  <div>
    <div class="p-8 bg-primary-green rounded-xl">
      <div
        class="
          flex
          justify-between
          items-center
          text-sm text-secondary-lightWhite
          mb-10
        "
      >
        <h1>Balance</h1>
        <div @click="toggleWalletModal" class="flex items-center">
          <h1>Fund Wallet</h1>
          <span
            class="iconify ml-1.5"
            data-icon="clarity:caret-line"
            style="color: rgba(253, 254, 253, 0.8)"
            data-rotate="90deg"
          ></span>
        </div>
      </div>
      <h1 class="text-secondary-white text-2xl font-bold">₦ {{ balance }}</h1>
    </div>

    <div
      @click="toggleWalletModal"
      v-if="walletModal"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center z-30"
    >
      <div @click.stop="" class="bg-white mx-8 p-p8 rounded-xl">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-xl">Fund Wallet</h1>
          <img
            @click="toggleWalletModal"
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
            v-model="fundWalletAmount"
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
            Fund Wallet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: "200,000",
      fundWalletAmount: "",
      walletModal: false,
    };
  },
  methods: {
    toggleWalletModal() {
      this.walletModal = !this.walletModal;
    },
  },
};
</script>
