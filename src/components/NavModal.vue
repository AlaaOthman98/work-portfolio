<template>
  <div
    class="bg-primary-black text-white absolute top-0 h-screen w-screen overflow-y-hidden z-50"
    :class="{ closeModal: !modalCurrentState }"
  >
    <div class="flex justify-between items-center p-10">
      <router-link :to="{ name: 'OurWork' }">
        <h1 class="text-primary-red font-semibold text-5xl tracking-wider">
          STRV
        </h1>
      </router-link>
      <MenuIcon />
    </div>

    <div class="md:flex md:justify-end px-10">
      <div class="w-1/2">
        <ul class="flex flex-col">
          <li
            v-for="item in navItems"
            :key="item"
            class="uppercase text-3xl md:text-5xl hover:text-primary-red cursor-pointer"
          >
            {{ item }}
          </li>
        </ul>

        <ul class="my-6">
          <li
            class="text-gray-500 font-sans text-xl hover:text-white cursor-pointer"
          >
            Blog
          </li>
          <li
            class="text-gray-500 font-sans text-xl hover:text-white cursor-pointer"
          >
            Events
          </li>
        </ul>

        <div>
          <div class="flex">
            <div
              v-for="icon in socialIcons"
              :key="icon"
              class="text-2xl text-gray-500 mx-2 my-1 px-1 cursor-pointer"
            >
              <font-awesome-icon :icon="['fab', icon]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "@/components/MenuIcon.vue";
export default {
  data() {
    return {
      navItems: ["about us", "services", "our work", "careers", "contact us"],
      socialIcons: [
        "facebook",
        "twitter",
        "instagram",
        "dribbble",
        "behance",
        "linkedin",
      ],
    };
  },
  components: {
    MenuIcon,
  },
  computed: {
    modalCurrentState() {
      return this.$store.state.modalIsOpen;
    },
    modalItems() {
      return this.$store.state.modalNavItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.closeModal {
  display: none;
}
</style>
