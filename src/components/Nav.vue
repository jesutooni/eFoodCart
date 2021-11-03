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
        <div @click="showCart" class="h-9 w-9">
          <img src="../assets/cart.png" alt="" />
        </div>
        <div @click="showNotifications" class="ml-8">
          <span class="iconify" data-icon="bx:bxs-bell" data-width="35"></span>
        </div>
      </div>
    </nav>
    <div v-if="nav" class="fixed inset-0 p-8 bg-white z-30">
      <img class="absolute top-0 left-0" src="../assets/greenbg.svg" alt="" />
      <img
        class="absolute bottom-20 right-20"
        src="../assets/bluebgr.svg"
        alt=""
      />
      <img class="absolute top-80 left-16" src="../assets/bluebg.svg" alt="" />
      <img class="absolute top-48 right-10" src="../assets/bluebg.svg" alt="" />
      <div
        class="
          absolute
          bottom-0
          left-0
          w-44
          h-44
          bg-primary-yellow
          rounded-tr-full
        "
      ></div>

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
            <router-link to=""><li class="mb-4 py-4">Settings</li></router-link>
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
    showCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
