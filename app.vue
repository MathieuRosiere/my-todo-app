<template>
  <appHeader class="appHeader grid-center" />
  <main>
    <NuxtPage />
  </main>
  <appFooter class="appFooter grid-center" />
</template>

<style scoped>
.appHeader {
    height: 8%;
}
main {
    width: 600px;
    height: 750px;
    background-color: var(--main-bg);
    color: var(--card-font-color);
    padding: 2rem 4rem;
    border-radius: 1rem;
    overflow-y: auto;
    scrollbar-color: var(--card-font-color) var(--body-bg);
    scrollbar-width: thin;
}

.appFooter {
    height: 8%;
}
</style>
