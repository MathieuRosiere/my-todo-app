import { defineNuxtPlugin } from "nuxt/app";
import { VueQueryPlugin } from "@tanstack/vue-query";

export default defineNuxtPlugin((Nuxtapp) => {
    const options = {
        queryClientConfig: {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                },
            },
        },
    };

    Nuxtapp.vueApp.use(VueQueryPlugin, options);
});
