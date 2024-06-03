<template>
  <appHeader class="appHeader grid-center" />
  <main class="grid-center">
    <NuxtPage />
  </main>
  <appFooter class="appFooter grid-center" />
</template>

<style scoped>
.appHeader {
    height: 8%;

    border-bottom: 2px solid grey;
}
main {
    height: 84%;
}

.appFooter {
    height: 8%;
    border-top: 2px solid grey;
}
</style>
