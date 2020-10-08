<template>
  <div
    id="menu-icon"
    class="group w-8 h-8 relative transform rotate-0 transition duration-500 ease-in-out cursor-pointer"
    @click="toggleMenu"
    :class="{ open: isOpen }"
  >
    <span
      class="block absolute top-0 left-0 h-1 w-full bg-black group-hover:bg-primary-red opacity-100 transform rotate-0 transition duration-200 ease-in-out"
      :class="{ 'bg-white': isOpen }"
    ></span>

    <span
      class="block absolute mt-2 left-0 h-1 w-full bg-black group-hover:bg-primary-red opacity-100 transform rotate-0 transition duration-200 ease-in-out"
      :class="{ 'bg-white': isOpen }"
    ></span>

    <span
      class="block absolute mt-2 h-1 w-full bg-black group-hover:bg-primary-red opacity-100 left-0 transform rotate-0 transition duration-200 ease-in-out"
      :class="{ 'bg-white': isOpen }"
    ></span>

    <span
      class="block absolute mt-4 h-1 w-full bg-black group-hover:bg-primary-red opacity-100 left-0 transform rotate-0 transition duration-200 ease-in-out"
      :class="{ 'bg-white': isOpen }"
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "all",
        "social",
        "ecommerce",
        "travel",
        "lifestyle",
        "other",
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("toggleModal", {
        modalStatus: this.isOpen,
        modalItems: this.categories,
      });
      this.isOpen
        ? (document.querySelector("body").style.overflow = "hidden")
        : (document.querySelector("body").style.overflow = "visible");
    },
  },
  computed: {
    isOpen() {
      return this.$store.state.modalIsOpen;
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
  }

  span:nth-child(3) {
    transform: rotate(-45deg);
  }

  span:nth-child(4) {
    top: 12px;
    width: 0%;
    left: 50%;
  }
}
</style>
