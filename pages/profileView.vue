<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";
import UserProfile from "../components/UserProfile.vue";
import MyButton from "../components/MyButton.vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const switchForm = ref("");
</script>

<template>
  <UserProfile v-if="user" />
  <div
    v-else
    class="wrapper"
  >
    <div
      v-if="switchForm === ''"
      class="select-form"
    >
      <span>Pas encore de compte ?</span>
      <MyButton
        content="Inscivez-vous"
        @emit-event="switchForm = 'signup'"
      />
      <span>Déjà un compte ?</span>
      <MyButton
        content="Connectez-vous"
        @emit-event="switchForm = 'login'"
      />
    </div>

    <LoginForm v-if="switchForm === 'login'" />
    <SignupForm v-if="switchForm === 'signup'" />
    <button
      v-if="switchForm !== ''"
      class="btn-return"
      @click="switchForm = ''"
    >
      Retour
    </button>
  </div>
</template>

<style>
.wrapper {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
}

.select-form {
    height: inherit;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.btn-return {
    background-color: var(--main-bg);
    color: var(--secondary-font-color);
    border: 1px solid var(--card-font-color);
    border-radius: 8px;
    padding: 5px 10px;
    margin: 20px 1rem 0px 1rem;
    transition:
        transform 350ms ease,
        box-shadow 350ms ease;
}

.btn-return:hover {
    cursor: pointer;
    box-shadow: 0px 5px 0px 0px var(--card-font-color);
    transform: scale(1.1);
}
</style>
