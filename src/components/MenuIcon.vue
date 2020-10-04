<template>
  <div
    id="menu-icon"
    class="group w-8 h-8 relative transform rotate-0 transition duration-500 ease-in-out cursor-pointer"
    @click="toggleMenu"
    :class="{ open: isOpen }"
  >
    <span
      class="block absolute top-0 left-0 h-1 w-full bg-black group-hover:bg-red-600 opacity-100 transform rotate-0 transition duration-200 ease-in-out"
    ></span>

    <span
      class="block absolute mt-2 left-0 h-1 w-full bg-black group-hover:bg-red-600 opacity-100 transform rotate-0 transition duration-200 ease-in-out"
    ></span>

    <span
      class="block absolute mt-2 h-1 w-full bg-black group-hover:bg-red-600 opacity-100 left-0 transform rotate-0 transition duration-200 ease-in-out"
    ></span>

    <span
      class="block absolute mt-4 h-1 w-full bg-black group-hover:bg-red-600 opacity-100 left-0 transform rotate-0 transition duration-200 ease-in-out"
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped lang="scss">
#menu-icon.open {
  span:nth-child(1) {
    top: 12px;
    width: 0%;
    left: 50%;
  }

  span:nth-child(2) {
    transform: rotate(45deg);
    /* background-color: white; */
  }

  span:nth-child(3) {
    transform: rotate(-45deg);
    /* background-color: white; */
  }

  span:nth-child(4) {
    top: 12px;
    width: 0%;
    left: 50%;
  }
}
</style>
