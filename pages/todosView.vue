<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const { todos } = storeToRefs(userStore);

const newTodo = ref("");

const submitHandler = () => {
    console.log("todo submitted");
    newTodo.value = "";
};

const checkTodo = (todo) => {
    console.log(`Todo '${todo}' checked`);
};

const deleteTodo = (todo) => {
    console.log(`Todo '${todo}' deleted`);
};
</script>

<template>
  <div class="container">
    <form
      class="add-form"
      action="#"
      @submit.prevent="submitHandler"
    >
      <input
        id="newTodo"
        v-model="newTodo"
        class="input-field"
        type="text"
        name="newTodo"
        placeholder="Ajouter une todo"
        required
      >
      <button>
        <ClientOnly><font-awesome-icon :icon="['fas', 'plus']" /></ClientOnly>
      </button>
    </form>
    <span class="count">À faire - {{ todos.length }} </span>
    <div
      v-for="todo in todos"
      :key="todo.id"
    >
      <div class="card">
        <span>{{ todo }}</span>
        <div class="card-icons">
          <ClientOnly>
            <font-awesome-icon
              class="icons"
              :icon="['fas', 'check']"
              @click="checkTodo(todo)"
            />
          </ClientOnly>
          <ClientOnly>
            <font-awesome-icon
              class="icons"
              :icon="['far', 'trash-can']"
              @click="deleteTodo(todo)"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
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
    top: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 3rem;
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
    > span {
        flex: 0.75;
        overflow-x: hidden;
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
    > :last-child:hover {
        color: red;
    }
}
</style>
