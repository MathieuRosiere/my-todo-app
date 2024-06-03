<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<template>
  <div v-if="user">
    Bienvenue {{ user }}
  </div>
  <h3 v-else>
    Accueil
  </h3>
</template>

<style scoped></style>
