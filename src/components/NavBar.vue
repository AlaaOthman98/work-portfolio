<template>
  <header class="flex justify-between items-center p-10">
    <router-link :to="{ name: 'Home' }">
      <h1 class="text-red-600 font-semibold text-5xl">STRV</h1>
    </router-link>
    <h3 class="hidden sm:block font-bold text-2xl uppercase">Our Work</h3>
    <div class="group cursor-pointer">
      <span class="block w-8 h-1 group-hover:bg-red-600 bg-black mb-1"></span>
      <span class="block w-8 h-1 group-hover:bg-red-600 bg-black mb-1"></span>
      <span class="block w-8 h-1 group-hover:bg-red-600 bg-black mb-1"></span>
    </div>
  </header>
</template>

<script>
export default {};
</script>
