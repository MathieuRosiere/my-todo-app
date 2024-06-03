<script setup>
import { ref } from "vue";
const switchForm = ref("login");

const toggleForm = () => {
    if (switchForm.value === "login") {
        switchForm.value = "signup";
    } else {
        switchForm.value = "login";
    }
};
</script>

<template>
  <LoginForm v-if="switchForm === 'login'" />
  <SignupForm v-if="switchForm === 'signup'" />
  <button
    class="toggle-btn"
    @click="toggleForm"
  >
    toggle
  </button>
</template>

<style>
.toggle-btn {
    margin-top: 1rem;
}
</style>
