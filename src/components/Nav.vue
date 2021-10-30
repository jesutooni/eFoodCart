<template>
  <div class="">
    <nav class="flex justify-between">
      <div @click="toggleNav">
        <span
          class="iconify"
          data-icon="heroicons-outline:menu-alt-2"
          data-width="38"
        ></span>
      </div>
      <div class="h-9 w-9">
        <img src="../assets/cart.png" alt="" />
      </div>
    </nav>
    <div v-if="nav" class="fixed inset-0 p-8 bg-white z-30">
      <div @click="toggleNav">
        <span
          class="iconify ml-auto"
          data-icon="ci:close-big"
          data-width="32"
        ></span>
      </div>
      <div class="h-4/5 flex justify-center items-center">
        <div class="text-center text-primary-gray">
          <ul>
            <router-link to="/dashboard"
              ><li class="mb-8">Home</li></router-link
            >
            <router-link to="/meals"><li class="mb-8">Meals</li></router-link>
            <router-link to="/"><li class="mb-8">Profile</li></router-link>
            <router-link to="/"><li class="mb-8">Settings</li></router-link>
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
  },
};
</script>
