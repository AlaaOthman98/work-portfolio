<template>
  <div class="w-full cursor-pointer relative">
    <img :src="imagePath" alt="" />
    <h3
      class="absolute top-0 px-10 py-6 text-white text-5xl md:text-4xl lg:text-5xl uppercase"
    >
      {{ cardInfo.title }}
    </h3>
    <span
      class="absolute bottom-0 px-10 py-6 text-white text-xl md:text-sm lg:text-xl font-sans"
      >{{ cardInfo.description }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
    },
  },
  computed: {
    imagePath() {
      return require("@/assets/images/" + this.cardInfo.imageURL);
    },
  },
};
</script>
