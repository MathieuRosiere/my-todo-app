import { defineNuxtPlugin } from "nuxt/app";
import { VueQueryPlugin } from "@tanstack/vue-query";

export default defineNuxtPlugin((Nuxtapp) => {
    Nuxtapp.vueApp.use(VueQueryPlugin);
});
