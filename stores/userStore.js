import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
    const user = ref({
        id: 1,
        username: "John",
        email: "john@test.com",
    });

    return { user };
});
