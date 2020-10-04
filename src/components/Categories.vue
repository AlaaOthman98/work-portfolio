<template>
  <div class="px-10">
    <div>
      <div class="md:hidden mb-10 cursor-pointer flex items-center">
        <span class="uppercase text-2xl text-gray-600 mr-1">Show:</span>
        <span class="uppercase text-2xl mr-1">All</span>
        <span class="uppercase text-sm mr-1">▼</span>
      </div>
      <ul class="hidden md:flex items-center justify-center my-16">
        <li
          v-for="cat in Categories"
          :key="cat"
          class="uppercase p-2 mx-4 text-xl hover:text-red-600 cursor-pointer"
        >
          {{ cat }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Categories: [
        "all",
        "social",
        "ecommerce",
        "travel",
        "lifestyle",
        "other",
      ],
    };
  },
};
</script>
