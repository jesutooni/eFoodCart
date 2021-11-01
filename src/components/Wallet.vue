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
        <div class="flex items-center">
          <h1>Fund Wallet</h1>
          <span
            class="iconify ml-1.5"
            data-icon="clarity:caret-line"
            style="color: rgba(253, 254, 253, 0.8)"
            data-rotate="90deg"
          ></span>
        </div>
      </div>
      <h1 class="text-secondary-white text-2xl font-bold"># {{ balance }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: "200,000",
    };
  },
};
</script>
