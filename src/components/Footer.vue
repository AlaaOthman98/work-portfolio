<template>
  <footer class="bg-black text-white">
    <NavBar :navList="navItems" class="hidden md:block" />

    <div
      class="flex flex-col md:grid md:grid-cols-3 items-center justify-center py-24 whitespace-no-wrap"
    >
      <div
        v-for="branch in branches"
        :key="branch.address.street"
        class="text-center p-10"
      >
        <h1
          class="text-6xl md:text-8xl cursor-pointer hover:text-primary-red mb-4"
        >
          {{ branch.country }}
        </h1>
        <div>
          <span class="block font-sans text-sm md:text-lg text-gray-500">{{
            branch.address.street
          }}</span>
          <span class="block font-sans text-sm md:text-lg text-gray-500">{{
            branch.address.city
          }}</span>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-3 gap-y-4 md:flex md:justify-center">
          <div
            v-for="icon in socialIcons"
            :key="icon"
            class="text-2xl text-gray-500 mx-2 my-1 px-1 cursor-pointer"
          >
            <font-awesome-icon :icon="['fab', icon]" />
          </div>
        </div>

        <a
          href="#"
          class="block text-primary-red text-sm md:text-xl font-sans text-center mt-4"
          >contact@place.com</a
        >
      </div>
    </div>

    <div
      class="text-gray-500 text-sm md:text-lg flex flex-col-reverse md:flex-row items-center justify-center font-sans pb-5"
    >
      <span class="mx-4 mt-4">Copyrights © {{ year }} STRV</span>
      <a href="#" class="mx-4 mt-4">Security</a>
      <a href="#" class="mx-4 mt-4">Privacy Policy</a>
    </div>
  </footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  data() {
    return {
      navItems: [
        "about us",
        "services",
        "our work",
        "careers",
        "contact us",
        "blog",
        "events",
      ],
      branches: [
        {
          country: "LA",
          address: {
            street: "31 1/2 18th Ave ",
            city: "Venice, CA 90291",
          },
        },
        {
          country: "SF",
          address: {
            street: "548 Market Street, PMB 57558 ",
            city: "San Francisco, CA 94104",
          },
        },
        {
          country: "LDN",
          address: {
            street: "8 Devonshire Square",
            city: "London EC2M 4PL",
          },
        },
        {
          country: "PRG",
          address: {
            street: "Rohanske nabrezi 678/23 ",
            city: "Prague 186 00",
          },
        },
        {
          country: "BRN",
          address: {
            street: "Prizova 284/5 ",
            city: "Brno 602 00",
          },
        },
      ],
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
    NavBar,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
