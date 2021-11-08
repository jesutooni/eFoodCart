<template>
  <div @click="goBack" class="cursor-pointer w-10">
    <img src="../assets/icons/icon-back.svg" alt="" />
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
