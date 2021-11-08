<template>
  <div @click="goBack" class="cursor-pointer">
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
