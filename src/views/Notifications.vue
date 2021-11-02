<template>
  <div class="p-p8 font-product-sans">
    <back />
    <div class="mt-8">
      <h1 class="font-bold text-2xl">Notifications</h1>

      <div class="mt-8">
        <div class="flex mb-6">
          <div
            class="
              w-16
              h-16
              mr-2.5
              rounded-xl
              bg-primary-lightPink
              flex
              items-center
              justify-center
            "
          >
            <span
              class="iconify"
              data-icon="akar-icons:arrow-up-right"
              style="color: #ef4444"
              data-width="26"
            ></span>
          </div>
          <div class="w-3/4">
            <h1>Placed order for 1 Jollof Rice for ₦20,000</h1>
            <p class="text-bit font-bold">Mar 30th, 11:12pm</p>
          </div>
        </div>
        <div class="flex mb-6">
          <div
            class="
              w-16
              h-16
              mr-2.5
              rounded-xl
              bg-primary-paleBlue
              flex
              items-center
              justify-center
            "
          >
            <span
              class="iconify"
              data-icon="akar-icons:arrow-down-left"
              style="color: #10b981"
              data-width="26"
            ></span>
          </div>
          <div class="w-3/4">
            <h1 class="text-primary-gray">Funded your wallet with ₦ 10,000</h1>
            <p class="text-bit font-bold">Mar 30th, 11:12pm</p>
          </div>
        </div>
        <div class="flex mb-6">
          <div
            class="
              w-16
              h-16
              mr-2.5
              rounded-xl
              bg-primary-lightPink
              flex
              items-center
              justify-center
            "
          >
            <span
              class="iconify"
              data-icon="akar-icons:arrow-up-right"
              style="color: #ef4444"
              data-width="26"
            ></span>
          </div>
          <div class="w-3/4">
            <h1>
              Gifted <span class="text-green-500">@lexy</span> ₦ 2000 worth of
              meal.
            </h1>
            <p class="text-bit font-bold">Mar 30th, 11:12pm</p>
          </div>
        </div>
        <div class="flex mb-6">
          <div
            class="
              w-16
              h-16
              mr-2.5
              rounded-xl
              bg-primary-paleBlue
              flex
              items-center
              justify-center
            "
          >
            <span
              class="iconify"
              data-icon="akar-icons:arrow-down-left"
              style="color: #10b981"
              data-width="26"
            ></span>
          </div>
          <div class="w-3/4">
            <h1 class="text-primary-gray">Withdrew ₦ 10,000 from wallet</h1>
            <p class="text-bit font-bold">Mar 30th, 11:12pm</p>
          </div>
        </div>
        <div class="flex mb-6">
          <div
            class="
              w-16
              h-16
              mr-2.5
              rounded-xl
              bg-primary-paleBlue
              flex
              items-center
              justify-center
            "
          >
            <span
              class="iconify"
              data-icon="akar-icons:arrow-down-left"
              style="color: #10b981"
              data-width="26"
            ></span>
          </div>
          <div class="w-3/4">
            <h1 class="text-primary-gray">@cermuel gifted you a meal</h1>
            <p
              class="
                rounded-full
                bg-yellow-200
                text-bit
                py-0.5
                px-1.5
                w-10
                text-center
                font-bold
              "
            >
              View
            </p>
            <p class="text-bit font-bold">Mar 30th, 11:12pm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../components/Back.vue";
export default {
  components: {
    back,
  },
  data() {
    return {};
  },
};
</script>
