<template>
  <h1
    class="text-2xl md:text-4xl flex items-center justify-center p-24 tracking-wide"
  >
    This project
    <span class="mx-3 text-primary-red">
      {{ routePath }}
    </span>
    is not found.
  </h1>
</template>

<script>
export default {
  computed: {
    routePath() {
      return this.$route.path.slice(1);
    },
  },
};
</script>
