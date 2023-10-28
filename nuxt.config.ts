// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  routeRules: {
    "/api/**": {
      proxy: { to: "http://46.101.106.134:8080/api/**" },
    },
  },
  pages: true,
  primevue: {
    usePrimeIcons: true,
    theme: "mdc-light-indigo",
    options: {
      unstyled: false,
      ripple: true,
      inputStyle: "filled",
    },
    components: [
      "TabView",
      "TabPanel",
      "InputText",
      "Button",
      "Dialog",
      "Carousel",
      "Card",
      "Image",
      "FloatLabel",
      "Password",
    ],
  },
  css: [
    "primevue/resources/themes/mdc-light-indigo/theme.css",
    "primeicons/primeicons.css",
    "@/assets/css/global.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
