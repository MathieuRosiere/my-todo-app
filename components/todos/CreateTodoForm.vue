<script setup>
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { api } from "@/utils/api";

const queryClient = useQueryClient();
const newTodo = ref("");

const submitHandler = () => {
    createTodo({ title: newTodo.value, userId: 1 });
    newTodo.value = "";
};
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const { isPending, mutate: createTodo } = useMutation({
    mutationFn: async (newTodo) => {
        await sleep(1000);
        return api.post("todos", JSON.stringify(newTodo));
    },
    onSuccess: (newTodo) => {
        const existingTodos = queryClient.getQueryData(["todos"]);
        queryClient.setQueryData(["todos"], [...existingTodos, newTodo]);
    },
});
</script>

<template>
    <form class="add-form" action="#" @submit.prevent="submitHandler">
        <input
            id="newTodo"
            v-model="newTodo"
            class="input-field"
            type="text"
            name="newTodo"
            placeholder="Ajouter une todo"
            required
        />
        <font-awesome-icon v-if="isPending" class="loader" :icon="['fas', 'spinner']" />
        <button v-else>
            <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
    </form>
</template>

<style scoped>
@keyframes rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

.add-form {
    position: sticky;
    background-color: var(--main-bg);
    top: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 3rem 0 2.5rem 0;
    margin-bottom: 0.5rem;
    box-shadow: 0px 2px 0px 0px var(--card-font-color);
    > input {
        flex: 1;
        margin-right: 1rem;
        font-size: 1.1rem;
    }
    > button {
        height: 2rem;
        aspect-ratio: 1/1;
        color: var(--main-font-color);
        background-color: var(--card-font-color);
        border: none;
        border-radius: 20%;
    }
    > button:hover {
        cursor: pointer;
    }
}

.loader {
    height: 2rem;
    animation: rotate 1s linear infinite;
}
</style>
