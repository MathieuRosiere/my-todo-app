<script setup>
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import TodoCard from "@/components/todos/TodoCard.vue";
import { api } from "@/utils/api";
import CreateTodoForm from "../components/todos/CreateTodoForm.vue";

const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
        return api.get("todos");
    },
});

const sortTodosByStatus = computed(() => {
    const todosCompleted = [];
    const todosNotCompleted = [];
    if (data.value === undefined) {
        return { todosCompleted, todosNotCompleted };
    }
    for (const todo of data.value) {
        if (todo.completed === true) {
            todosCompleted.push(todo);
        } else if (todo.completed === false) {
            todosNotCompleted.push(todo);
        }
    }
    return { todosCompleted, todosNotCompleted };
});
</script>

<template>
    <div class="container">
        <CreateTodoForm />
        <span class="count">À faire - {{ sortTodosByStatus.todosNotCompleted.length }} </span>
        <TodoCard v-for="todo in sortTodosByStatus.todosNotCompleted" :key="todo.id" :todo="todo" />
        <span class="count">Terminées - {{ sortTodosByStatus.todosCompleted.length }}</span>
        <TodoCard v-for="todo in sortTodosByStatus.todosCompleted" :key="todo.id" :todo="todo" />
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
</style>
