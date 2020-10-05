<template>
  <header class="flex justify-between items-center p-10">
    <router-link :to="{ name: 'Home' }">
      <h1 class="text-primary-red font-semibold text-5xl tracking-wider">
        STRV
      </h1>
    </router-link>
    <h3 class="hidden md:block font-bold text-2xl uppercase tracking-wide">
      Our Work
    </h3>

    <MenuIcon />
  </header>
</template>

<script>
import MenuIcon from "@/components/MenuIcon.vue";

export default {
  components: {
    MenuIcon,
  },
};
</script>
