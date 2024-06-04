import globals from "globals";
import pluginJs from "@eslint/js";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({ languageOptions: { globals: globals.browser } }, pluginJs.configs.recommended);
