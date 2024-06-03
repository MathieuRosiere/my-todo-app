<script setup>
const submitHandler = () => {
    console.log("login form submitted");
};
</script>

<template>
  <div class="form-wrapper">
    <h3>Connexion</h3>
    <form
      action="#"
      @submit.prevent="submitHandler"
    >
      <div class="input-wrapper">
        <label
          class="input-label"
          for="username"
        >Pseudo :</label>
        <input
          id="username"
          class="input-field"
          type="text"
          name="username"
          required
        >
      </div>
      <div class="input-wrapper">
        <label
          class="input-label"
          for="password"
        >Mot de passe :</label>
        <input
          id="password"
          class="input-field"
          type="password"
          name="password"
          required
        >
      </div>
      <button class="form-btn">
        Valider
      </button>
    </form>
  </div>
</template>

<style></style>
