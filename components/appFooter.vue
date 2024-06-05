<template>
    <footer>
        <NuxtLink to="/"> Accueil </NuxtLink>
        <NuxtLink to="/profileView"> Profil </NuxtLink>
        <NuxtLink to="/todosView"> Todos </NuxtLink>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
}
</style>
