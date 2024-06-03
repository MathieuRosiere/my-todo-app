<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const { todos } = storeToRefs(userStore);

const submitHandler = () => {
    console.log("todo submitted");
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
        id="todo"
        type="text"
        name="todo"
        placeholder="Ajouter une todo"
        required
      >
      <button>Ajouter</button>
    </form>

    <div
      v-for="todo in todos"
      :key="todo.id"
    >
      <div class="card">
        <span>{{ todo }}</span>
        <div class="card-icons">
          <ClientOnly> <font-awesome-icon :icon="['fas', 'check']" /></ClientOnly>
          <ClientOnly> <font-awesome-icon :icon="['far', 'trash-can']" /></ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
    width: 600px;
    background-color: var(--main-bg);
    color: var(--card-font-color);
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-flow: column nowrap;
}

.add-form {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 3rem;
    > input {
        width: 80%;
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
}

.card-icons {
}
</style>
