<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<template>
  <div class="index-wrapper">
    <div v-if="user">
      Bienvenue {{ user }}
    </div>
    <h3 v-else>
      Accueil
    </h3>
  </div>
</template>

<style scoped>
.index-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
