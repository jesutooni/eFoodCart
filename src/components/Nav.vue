<template>
  <div class="font-product-sans">
    <nav class="flex justify-between">
      <div @click="toggleNav">
        <span
          class="iconify"
          data-icon="heroicons-outline:menu-alt-2"
          data-width="38"
        ></span>
      </div>
      <div class="flex items-center">
        <div class="h-9 w-9">
          <img src="../assets/cart.png" alt="" />
        </div>
        <div @click="showNotifications" class="ml-8">
          <span class="iconify" data-icon="bx:bxs-bell" data-width="35"></span>
        </div>
      </div>
    </nav>
    <div v-if="nav" class="fixed inset-0 p-8 bg-white z-30">
      <div @click="toggleNav" class="w-8 ml-auto">
        <span class="iconify" data-icon="ci:close-big" data-width="32"></span>
      </div>
      <div class="h-4/5 flex items-center">
        <div class="w-full text-center text-primary-gray">
          <ul>
            <router-link to="/dashboard"
              ><li class="mb-4 py-4">Home</li></router-link
            >
            <router-link to="/meals"
              ><li class="mb-4 py-4">Meals</li></router-link
            >
            <router-link to="/profile"
              ><li class="mb-4 py-4">Profile</li></router-link
            >
            <router-link to="/settings"
              ><li class="mb-4 py-4">Settings</li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
    };
  },
  methods: {
    toggleNav() {
      this.nav = !this.nav;
    },
    showNotifications() {
      this.$router.push("/notifications");
    },
  },
};
</script>
