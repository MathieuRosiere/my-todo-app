import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
    modules: ["@pinia/nuxt"],
    devtools: { enabled: true },
    modules: ["@nuxt/eslint"],
});
