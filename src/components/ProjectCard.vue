<template>
  <div class="project-card w-full cursor-pointer relative">
    <img :src="imagePath" alt="" />
    <h3
      class="absolute top-0 px-6 py-6 text-white text-5xl md:text-4xl md:px-10 md:py-4 lg:text-5xl uppercase"
    >
      {{ cardInfo.title }}
    </h3>
    <span
      class="absolute bottom-0 px-6 py-6 text-white text-xl md:text-sm md:px-10 md:py-4 lg:text-xl font-sans whitespace-no-wrap"
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

<style lang="scss" scoped>
.project-card {
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-10px);
  }
}
</style>
