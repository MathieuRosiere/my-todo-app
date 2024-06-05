<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores/userStore";
import { ref } from "vue";

const userStore = useUserStore();
const { todos } = storeToRefs(userStore);

const props = defineProps({
    todo: { type: String },
    index: { type: Number },
});
const isActive = ref(false);
const editInput = ref(props.todo);
const editMode = ref(false);
const editModeIsActive = computed(() => {
    return editMode.value;
});

const checkTodo = (todo) => {
    console.log(`Todo '${todo}' checked`);
};

const deleteTodo = (todo) => {
    if (window.confirm("Supprimer la todo ?")) {
        console.log(`Todo '${todo}' deleted`);
    }
};

const editHandler = () => {
    if (editMode.value === false) {
        editMode.value = !editMode.value;
        isActive.value = !isActive.value;
    } else if (editMode.value === true) {
        todos.value[props.index] = editInput.value;
        isActive.value = !isActive.value;
        editMode.value = !editMode.value;
    }
};
</script>

<template>
    <div class="card">
        <div class="input-span-wrapper" @click="test">
            <input v-if="editModeIsActive" v-model="editInput" class="edit-input" type="text" >
            <span v-else>{{ props.todo }}</span>
        </div>
        <div class="card-icons">
            <ClientOnly>
                <font-awesome-icon class="icons" :icon="['fas', 'check']" @click="checkTodo(todo)" />
            </ClientOnly>
            <ClientOnly
                ><font-awesome-icon
                    class="icons"
                    :class="{ active: isActive }"
                    :icon="['fas', 'pen-to-square']"
                    @click="editHandler"
            /></ClientOnly>
            <ClientOnly>
                <font-awesome-icon class="icons" :icon="['far', 'trash-can']" @click="deleteTodo(todo)" />
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
        flex: 0.25;
    }
}

.card-icons {
    display: flex;
    justify-content: space-evenly;
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
</style>
