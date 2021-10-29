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
      <div>
        <span
          class="iconify"
          data-icon="carbon:user-avatar-filled-alt"
          data-width="38"
        ></span>
      </div>
    </nav>
    <div v-if="nav" class="fixed inset-0 p-8 bg-white">
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
            <li>Home</li>
            <li class="my-8">Meals</li>
            <li>Settings</li>
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
