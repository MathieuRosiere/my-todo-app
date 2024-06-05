<script setup>
import MyButton from "./MyButton.vue";
const submitHandler = () => {
    console.log("signup form submitted");
};
</script>

<template>
    <div class="form-wrapper">
        <h3>Créer un compte</h3>
        <form action="#" @submit.prevent="submitHandler">
            <div class="input-wrapper">
                <label class="input-label" for="username">Pseudo :</label>
                <input id="username" class="input-field" type="text" name="username" required >
            </div>
            <div class="input-wrapper">
                <label class="input-label" for="email">Email :</label>
                <input id="email" class="input-field" type="email" name="email" required >
            </div>
            <div class="input-wrapper">
                <label class="input-label" for="password">Mot de passe :</label>
                <input id="password" class="input-field" type="password" name="password" required >
            </div>
            <MyButton content="Valider" />
        </form>
    </div>
</template>

<style></style>
