<script setup>
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import TodoCard from "@/components/todos/TodoCard.vue";
import { api } from "@/utils/api";

const newTodo = ref("");

const submitHandler = () => {
    console.log("todo submitted");
    newTodo.value = "";
};

const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
        return api.get("todos");
    },
});
</script>

<template>
    <div class="container">
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
            <button>
                <ClientOnly><font-awesome-icon :icon="['fas', 'plus']" /></ClientOnly>
            </button>
        </form>
        <!-- TODO : Afficher le nombre de todo -->
        <span class="count">À faire - </span>
        <TodoCard v-for="todo in data" :key="todo.id" :todo="todo" />
    </div>
</template>

<style>
.container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    > span.count {
        color: var(--main-font-color);
        margin-bottom: 10px;
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
</style>
