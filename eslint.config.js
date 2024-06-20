import globals from "globals";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
    languageOptions: {
        globals: globals.browser,
    },
    rules: {
        "vue/html-self-closing": 0,
    },
});
