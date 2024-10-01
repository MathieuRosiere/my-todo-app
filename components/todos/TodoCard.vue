<script setup>
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { ref } from "vue";
import { api } from "@/utils/api";

const queryClient = useQueryClient();

const props = defineProps({
    todo: { type: Object },
});
const isActive = ref(false);
const isCompleted = ref(props.todo.completed);
const editInput = ref(props.todo.title);
const editMode = ref(false);
const editModeIsActive = computed(() => {
    return editMode.value;
});
0;
const checkTodoHandler = () => {
    updateTodoStatus({ title: props.todo.title, completed: !props.todo.completed, userId: 1 });
};

const deleteTodoHandler = () => {
    if (window.confirm("Supprimer la todo ?")) {
        deleteTodo();
    }
};

const editHandler = () => {
    if (editMode.value === false) {
        editMode.value = !editMode.value;
        isActive.value = !isActive.value;
    } else if (editMode.value === true) {
        updateTodo({ title: editInput.value, completed: props.todo.completed, userId: 1 });
        isActive.value = !isActive.value;
        editMode.value = !editMode.value;
    }
};
const { mutate: updateTodo } = useMutation({
    mutationFn: (updatedTodo) => {
        return api.patch(`todos/${props.todo.id}`, JSON.stringify(updatedTodo));
    },
    onSuccess: (updatedTodo) => {
        const existingTodos = queryClient.getQueryData(["todos"]);
        const modifiedTodos = existingTodos.map((todo) => {
            if (todo.id === updatedTodo.id) {
                return { ...todo, title: updatedTodo.title };
            }
            return todo;
        });
        queryClient.setQueryData(["todos"], modifiedTodos);
    },
});

const { mutate: updateTodoStatus } = useMutation({
    mutationFn: (updatedTodo) => {
        return api.patch(`todos/${props.todo.id}`, JSON.stringify(updatedTodo));
    },
    onSuccess: (updatedTodo) => {
        const existingTodos = queryClient.getQueryData(["todos"]);
        const modifiedTodos = existingTodos.map((todo) => {
            if (todo.id === updatedTodo.id) {
                return { ...todo, completed: updatedTodo.completed };
            }
            return todo;
        });
        queryClient.setQueryData(["todos"], modifiedTodos);
    },
});

const { mutate: deleteTodo } = useMutation({
    mutationFn: () => {
        return api.delete(`todos/${props.todo.id}`);
    },
    onSuccess: () => {
        const existingTodos = queryClient.getQueryData(["todos"]);
        const filteredTodos = existingTodos.filter((todo) => todo.id !== props.todo.id);
        queryClient.setQueryData(["todos"], filteredTodos);
    },
});
</script>

<template>
    <div class="card">
        <div class="input-span-wrapper" @click="test">
            <input v-if="editModeIsActive" v-model="editInput" class="edit-input" type="text" />
            <span v-else :title="props.todo.title" :class="{ status: isCompleted }">{{ props.todo.title }}</span>
        </div>
        <div class="card-icons">
            <ClientOnly>
                <font-awesome-icon
                    v-if="!isCompleted"
                    class="icons"
                    :icon="['fas', 'check']"
                    @click="checkTodoHandler"
                />

                <font-awesome-icon v-else class="icons" :icon="['far', 'circle-xmark']" @click="checkTodoHandler" />
            </ClientOnly>
            <ClientOnly
                ><font-awesome-icon
                    v-if="!isCompleted"
                    class="icons"
                    :class="{ active: isActive }"
                    :icon="['fas', 'pen-to-square']"
                    @click="editHandler"
                />
            </ClientOnly>
            <ClientOnly>
                <font-awesome-icon class="icons" :icon="['far', 'trash-can']" @click="deleteTodoHandler" />
            </ClientOnly>
        </div>
    </div>
</template>

<style>
.card {
    width: 100%;
    background-color: var(--card-bg);
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    > div.input-span-wrapper {
        flex: 0.75;
        overflow-x: hidden;
        text-overflow: ellipsis;
        > input {
            width: 100%;
        }
    }
    > div.card-icons {
        flex: 0.2;
    }
}

.card-icons {
    display: flex;
    justify-content: space-between;
    > .icons {
        height: 1.2rem;
        transition: 350ms ease;
    }
    > .icons:hover {
        cursor: pointer;
        scale: 1.4;
    }
    > :first-child:hover {
        color: var(--secondary-font-color);
    }
    > :nth-child(0n + 2):hover {
        color: var(--secondary-font-color);
    }
    > :last-child:hover {
        color: red;
    }
}

.edit-input {
    background-color: var(--card-bg);
    border: none;
    color: var(--secondary-font-color);
    font-size: 1rem;
}

.edit-input:focus {
    border: none;
    outline-color: var(--card-font-color);
    padding: 4px;
}

.active {
    scale: 1.4;
    color: var(--secondary-font-color);
}

.status {
    color: var(--secondary-font-color);
    text-decoration-line: line-through;
}
</style>
