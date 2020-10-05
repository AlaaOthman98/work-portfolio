<template>
  <div class="px-10">
    <div>
      <div class="md:hidden mb-10 cursor-pointer flex items-center">
        <span class="uppercase text-2xl text-gray-600 mr-1">Show:</span>
        <span class="uppercase text-2xl mr-1">{{ navList[0] }}</span>
        <span class="uppercase text-sm mr-1">▼</span>
      </div>
      <ul class="hidden md:flex items-center justify-center py-16">
        <li
          v-for="li in navList"
          :key="li"
          class="uppercase whitespace-no-wrap tracking-wider p-2 mx-4 text-xl hover:text-primary-red cursor-pointer"
        >
          {{ li }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
    },
  },
};
</script>
