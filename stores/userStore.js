import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
    const user = ref({
        id: 1,
        username: "John",
        email: "john@test.com",
    });
    const todos = ref([
        "learn CSS",
        "learn Javascript",
        "learn HTML",
        "destroy Tailwind",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    return { user, todos };
});
